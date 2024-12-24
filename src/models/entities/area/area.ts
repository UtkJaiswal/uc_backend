import mongoose, { Schema } from 'mongoose'
import { IArea } from '../../../interfaces/area/area'

const AreaSchema: Schema = new Schema<IArea>(
    {
        city: {
            type: String,
            required: true
        },

        state: {
            type: String,
            required: true
        },

        country: {
            type: String,
            required: true
        },

        pinCode: {
            type: Number,
            required: true
        }
    },
    
    { timestamps: true }

)

export default mongoose.model('Area', AreaSchema)