import mongoose, { Schema } from 'mongoose'
import { IPayment } from '../../interfaces/payment/payment'
import { VerificationStatus } from '../../interfaces/entities/provider/provider'

const PaymentSchema: Schema = new Schema<IPayment>(
    {
        type: {
            type:String,
            required: true
        },

        bookingId: {
            type: mongoose.Types.ObjectId,
            ref: "Booking",
            required: true
        },

        amount: {
            type: Number,
            required: true
        },

        paymentType: {
            type: mongoose.Types.ObjectId,
            ref: "PaymentType",
            required: true
        },

        transactionId: {
            type: String,

        },

        status: {
            type: String,
            enum: VerificationStatus,
            default: VerificationStatus.Pending
        }
    },

    { timestamps: true }

)

export default mongoose.model("Payment", PaymentSchema)