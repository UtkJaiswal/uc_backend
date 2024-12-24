import mongoose, { Schema } from 'mongoose'
import { IUser } from '../../../interfaces/entities/user/user'

const UserSchema: Schema = new Schema<IUser>(
    {
        name: {
            type: String
        },

        phone_number: {
            type: Number,
            required: true,
            unique: true
        },

        email: {
            type: String
        },

        user_role: {
            type: Schema.Types.ObjectId,
            ref: "UserRole",
            required: true

        }
    },

    { timestamps: true }

)

export default mongoose.model<IUser>('User', UserSchema);
