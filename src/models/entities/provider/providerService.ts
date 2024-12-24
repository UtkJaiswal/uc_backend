import mongoose, { Schema } from "mongoose";
import { IProviderService, VerificationStatus } from "../../../interfaces/entities/provider/provider";

const ProviderServiceSchema: Schema = new Schema<IProviderService>(
    {
        providerId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },

        serviceId: {
            type: mongoose.Types.ObjectId,
            ref: "Service",
            required: true
        },

        price: {
            type: Number
        },

        rating: {
            type: Number,
            default: 0
        },

        skillCertificate: {
            type: String
        },

        skillCertificateVerificationStatus: {
            type: String,
            enum: Object.values(VerificationStatus),
            default: VerificationStatus.Rejected
        }
    },

    { timestamps: true }

)

export default mongoose.model('ProviderService', ProviderServiceSchema)