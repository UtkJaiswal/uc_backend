import mongoose, { Schema } from 'mongoose'
import { IUserOtp, IUserOtpModel } from '../../../interfaces/entities/user/user'
import crypto from 'crypto';


const UserOtpSchema: Schema = new Schema<IUserOtp>(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },

        otpHash: {
            type: String
        },

        expiredAt: {
            type: Date
        }
    },

    { timestamps: true }
)

UserOtpSchema.statics.hashOtp = function (otp: string): string {
    return crypto.createHash('sha256').update(otp).digest('hex');
};

UserOtpSchema.pre('save', function (next) {
    const otpDocument = this as mongoose.Document & { otpHash?: string };
  
    if (otpDocument.isModified('otpHash')) {
      otpDocument.otpHash = crypto.createHash('sha256').update(otpDocument.otpHash!).digest('hex');
    }
    next();
});
  

export default mongoose.model<IUserOtp, IUserOtpModel>('UserOtp', UserOtpSchema)