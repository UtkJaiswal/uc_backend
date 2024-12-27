import mongoose, { Schema } from 'mongoose'
import { IReview } from '../../interfaces/review/review'

const ReviewSchema: Schema = new Schema<IReview>(
    {
        bookingId: {
            type: mongoose.Types.ObjectId,
            ref: "Booking",
            required: true
        },

        rating: {
            type: Number
        },

        comment: {
            type: String
        }
    },
    { timestamps: true }
)

export default mongoose.model("Review", ReviewSchema)