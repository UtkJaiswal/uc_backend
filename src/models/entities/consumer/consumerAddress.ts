import mongoose, { Schema } from 'mongoose'
import { IConsumerAddress } from '../../../interfaces/entities/consumer/consumer'

const ConsumerAddressSchema: Schema = new Schema<IConsumerAddress>(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true
        },

        address: {
            type: String,
            required: true
        },

        pincode: {
            type: Number,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        phoneNumber: {
            type: Number,
            required: true
        }
    },

    { timestamps: true }

)

export default mongoose.model('ConsumerAddress', ConsumerAddressSchema)