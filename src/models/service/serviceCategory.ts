import mongoose, { Schema } from 'mongoose'
import { IServiceCategory } from '../../interfaces/service/service'

const ServiceCategory: Schema = new Schema<IServiceCategory>(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String
        }
    },

    { timestamps: true }

)

export default mongoose.model('ServiceCategory', ServiceCategory)