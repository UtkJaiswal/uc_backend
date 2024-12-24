import mongoose, { Schema } from 'mongoose'
import { IConsumerPaymentMethod } from '../../../interfaces/entities/consumer/consumer'

const ConsumerPaymentMethodSchema: Schema = new Schema<IConsumerPaymentMethod>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        paymentType: {
            type: Schema.Types.ObjectId,
            ref: "PaymentType",
            required: true
        }

    },

    { timestamps: true }
)

export default mongoose.model('ConsumerPaymentMethod', ConsumerPaymentMethodSchema)