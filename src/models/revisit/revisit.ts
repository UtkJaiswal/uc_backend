import mongoose, { Schema } from 'mongoose'
import { IRevisit } from '../../interfaces/revisit/revisit'
import { VerificationStatus } from '../../interfaces/entities/provider/provider'

const RevisitSchema: Schema = new Schema<IRevisit>(
    {
        bookingId: {
            type: mongoose.Types.ObjectId,
            ref: "Booking",
            required: true
        },

        reason: {
            type: String
        },

        proof: {
            type: String
        },

        status: {
            type: String,
            enum: VerificationStatus,
            default: VerificationStatus.Pending
        }
    },

    { timestamps: true}
)

export default mongoose.model("Revisit", RevisitSchema)