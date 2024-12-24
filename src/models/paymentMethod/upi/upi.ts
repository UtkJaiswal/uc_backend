import mongoose, { Schema } from 'mongoose'
import { IUPIDetails } from '../../../interfaces/paymentMethod/paymentMethod'

const UPIDetailsSchema: Schema = new Schema<IUPIDetails>(
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
        
        upiId: {
            type: String,
            required: true
        }
    },

    { timestamps: true }

)

export default mongoose.model('UPIDetails', UPIDetailsSchema)