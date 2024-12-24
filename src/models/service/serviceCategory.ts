import mongoose, { Schema } from 'mongoose'
import { IServiceCategory } from '../../interfaces/service/service'

const ServiceCategorySchema: Schema = new Schema<IServiceCategory>(
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

export default mongoose.model('ServiceCategory', ServiceCategorySchema)