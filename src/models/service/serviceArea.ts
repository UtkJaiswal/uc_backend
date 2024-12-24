import mongoose, { Schema } from 'mongoose'
import { IServiceArea } from '../../interfaces/service/service'

const ServiceAreaSchema: Schema = new Schema<IServiceArea>(
    {
        serviceId: {
            type: mongoose.Types.ObjectId,
            ref: "Service"
        },

        areaId: {
            type: mongoose.Types.ObjectId,
            ref: "Area"
        },

        isActive: {
            type: Boolean,
            default: false
        }
    },

    { timestamps: true }

)

export default mongoose.model('ServiceArea', ServiceAreaSchema)