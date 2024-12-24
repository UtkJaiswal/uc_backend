import mongoose, { Schema } from "mongoose";
import { IConsumerDetails } from "../../../interfaces/entities/consumer/consumer";

const ConsumerDetailsSchema = new Schema<IConsumerDetails>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        rating: {
            type: Number,
            default: 0
        },

        isPremiumMember: {
            type: Boolean,
            default: false
        },

    },

    { timestamps: true }
)

export default mongoose.model<IConsumerDetails>('ConsumerDetails', ConsumerDetailsSchema)