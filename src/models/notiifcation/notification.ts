import mongoose, { Schema } from 'mongoose'
import { INotification, NotificationType } from '../../interfaces/notification/notification'
import { VerificationStatus } from '../../interfaces/entities/provider/provider'


const NotificationSchema: Schema = new Schema<INotification>(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },

        notificationType: {
            type: String,
            enum: NotificationType
        },

        message: {
            type: String
        },

        status: {
            type: String,
            enum: VerificationStatus,
            default: VerificationStatus.Pending
        }
    },

    { timestamps: true }
)

export default mongoose.model("Notification", NotificationSchema)
