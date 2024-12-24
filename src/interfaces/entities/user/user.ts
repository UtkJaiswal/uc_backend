import mongoose from "mongoose";
import { IUserRole } from "../../userRole/userRole";

export interface IUser {
    name: string;
    phone_number:number;
    email: string;
    user_role: mongoose.Types.ObjectId | IUserRole;
    is_active: Boolean
}

export interface IUserOtp {
    otp_hash: string,
    expired_at: Date
}