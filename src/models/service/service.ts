import mongoose, { Schema } from 'mongoose'
import { IService } from '../../interfaces/service/service'

const ServiceSchema: Schema = new Schema<IService>(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String
        },

        price: {
            type: Number,
            required: true
        },

        duration: {
            type: Number
        },

        serviceCategoryId: {
            type: mongoose.Types.ObjectId,
            ref: "ServiceCategory"
        }
    },

    { timestamps: true }

)

export default mongoose.model('Service', ServiceSchema)