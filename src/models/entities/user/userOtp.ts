import mongoose, { Schema } from 'mongoose'
import { IUserOtp } from '../../../interfaces/entities/user/user'

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

export default mongoose.model<IUserOtp>('UserOtp', UserOtpSchema)