import mongoose, { Schema } from 'mongoose'
import { IUserRole } from '../../../interfaces/entities/userRole/userRole'

const UserRoleSchema: Schema = new Schema<IUserRole>(
    {
        roleId: {
            type: Number,
            required: true,
            unique: true
        },
        
        roleName: {
            type: String,
            required: true,
            unique: true
        }
    }
)

export default mongoose.model<IUserRole>('UserRole', UserRoleSchema)