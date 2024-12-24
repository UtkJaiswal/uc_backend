import mongoose, { Schema } from 'mongoose'
import { IUserRole } from '../../../interfaces/entities/userRole/userRole'

const UserRoleSchema: Schema = new Schema<IUserRole>(
    {
        role_id: {
            type: Number,
            required: true,
            unique: true
        },
        
        role_name: {
            type: String,
            required: true,
            unique: true
        }
    }
)

export default mongoose.model<IUserRole>('UserRole', UserRoleSchema)

