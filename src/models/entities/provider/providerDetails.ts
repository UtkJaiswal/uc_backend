import mongoose, { Schema } from 'mongoose'
import { IProviderDetails, VerificationStatus } from '../../../interfaces/entities/provider/provider'

const ProviderDetailsSchema: Schema = new Schema<IProviderDetails>(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },

        profilePicture: {
            type: String
        },

        rating: {
            type: Number,
            default: 0
        },

        address: {
            type: String
        },

        pincode: {
            type: Number
        },

        aadhaarNumber: {
            type: Number,
            unique: true
        },

        aadhaarNumberVerificationStatus: {
            type: String,
            enum: Object.values(VerificationStatus),
            default: VerificationStatus.Rejected
        }
    }
)

export default mongoose.model('ProviderDetails', ProviderDetailsSchema)