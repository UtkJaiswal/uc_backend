import mongoose from "mongoose";
import { IBooking } from "../booking/booking";
import { IPaymentType } from "../paymentType/paymentType";
import { VerificationStatus } from "../entities/provider/provider";

export interface IPayment {
    type:string;
    bookingId: mongoose.Types.ObjectId | IBooking;
    amount: number;
    paymentType: mongoose.Types.ObjectId | IPaymentType;
    transactionId: string;
    status: VerificationStatus;
}