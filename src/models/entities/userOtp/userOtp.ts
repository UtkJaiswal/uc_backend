import mongoose, { Schema } from 'mongoose'
import { IUserOtp } from '../../../interfaces/entities/user/user'

const UserOtpSchema: Schema = new Schema<IUserOtp>(
    {
        otp_hash: {
            type: String
        },
        expired_at: {
            type: Date
        }
    },

    { timestamps: true }
)

export default mongoose.model<IUserOtp>('UserOtp', UserOtpSchema)