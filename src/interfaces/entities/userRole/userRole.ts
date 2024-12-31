import mongoose from "mongoose";

export interface IUserRole {
    _id: mongoose.Types.ObjectId;
    roleId: number;
    roleName: string;
}