import mongoose from "mongoose";

export interface IPaymentType {
    _id: mongoose.Types.ObjectId;
    name: string
}