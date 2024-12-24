import mongoose, { Schema } from 'mongoose'
import { IBankDetails } from '../../../interfaces/paymentMethod/paymentMethod'

const BankDetailsSchema: Schema = new Schema<IBankDetails>(
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

        name: {
            type: String,
            required: true
        },

        bankName: {
            type: String,
            required: true
        },

        accountNumber: {
            type: Number,
            required: true
        },

        ifscCode: {
            type: String,
            required: true
        }
    },

    { timestamps: true }

)

export default mongoose.model('BankDetails', BankDetailsSchema)