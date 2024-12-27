import mongoose, { Schema } from 'mongoose'
import { IRefer } from '../../interfaces/refer/refer'


const ReferSchema: Schema = new Schema<IRefer>(
    {
        referredBy: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },

        referralCode: {
            type: String
        }
    },

    { timestamps: true }
)

export default mongoose.model("Refer", ReferSchema)