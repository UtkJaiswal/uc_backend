import mongoose, { Schema } from 'mongoose'
import { IPaymentType } from '../../interfaces/paymentType/paymentType'

const PaymentTypeSchema: Schema = new Schema<IPaymentType>(
    {
        name: {
            type: String,
            required: true
        }
    }
)

export default mongoose.model<IPaymentType>('PaymentType', PaymentTypeSchema)