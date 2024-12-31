import mongoose, { Schema } from 'mongoose'
import { IUser } from '../../../interfaces/entities/user/user'

const UserSchema: Schema = new Schema<IUser>(
    {
        name: {
            type: String
        },

        phoneNumber: {
            type: Number,
            required: true,
            unique: true
        },

        email: {
            type: String
        },

        userRole: {
            type: Schema.Types.ObjectId,
            ref: "UserRole",
            // required: true

        }
    },

    { timestamps: true }

)

export default mongoose.model<IUser>('User', UserSchema);
