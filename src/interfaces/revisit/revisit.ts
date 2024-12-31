import mongoose from "mongoose"
import { IBooking } from "../booking/booking";
import { VerificationStatus } from "../entities/provider/provider";

export interface IRevisit {
    _id: mongoose.Types.ObjectId;
    bookingId: mongoose.Types.ObjectId | IBooking;
    reason: string;
    proof: string;
    status: VerificationStatus;
}