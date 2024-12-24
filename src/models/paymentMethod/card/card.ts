import mongoose, { Schema } from 'mongoose'
import { ICardDetails } from '../../../interfaces/paymentMethod/paymentMethod'

const CardDetailsSchema: Schema = new Schema<ICardDetails>(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },

        paymentType: {
            type: mongoose.Types.ObjectId,
            ref: "PaymentType",
            required: true
        },

        nameOnCard: {
            type: String,
            required: true
        },

        cardNumber: {
            type: Number,
            required: true
        },

        cvv: {
            type: Number,
            required: true
        },

        expiryDate: {
            type: Date,
            required: true
        }
    },

    { timestamps: true }

)

export default mongoose.model('CardDetails', CardDetailsSchema)
