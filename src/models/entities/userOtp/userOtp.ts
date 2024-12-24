import mongoose, { Schema } from 'mongoose'
import { IUserOtp } from '../../../interfaces/entities/user/user'

const UserOtpSchema: Schema = new Schema<IUserOtp>(
    {
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