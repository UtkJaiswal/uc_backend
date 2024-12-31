import mongoose from "mongoose";
import { IUser } from "../entities/user/user";
import { VerificationStatus } from "../entities/provider/provider";

export enum NotificationType {
    Push = "Push",
    Email = "Email",
    Phone = "Phone"
}

export interface INotification {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId | IUser;
    notificationType: NotificationType;
    message: string;
    status: VerificationStatus;
}