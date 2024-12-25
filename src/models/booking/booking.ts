import mongoose, { Schema } from "mongoose";
import { IBooking } from "../../interfaces/booking/booking";
import { VerificationStatus } from "../../interfaces/entities/provider/provider";

const BookingSchema : Schema = new Schema<IBooking>(
    {
        consumerId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },

        providerId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },

        bookingTime: {
            type: Date,
            default: Date.now()
        },

        bookingStatus: {
            type: String,
            enum: Object.values(VerificationStatus),
            default: VerificationStatus.Pending
        },

        totalPrice: {
            type: Number
        },

        totalTip: {
            type: Number
        },

        totalTax: {
            type: Number
        },

        quantity: {
            type: Number
        },

        consumerAddress: {
            type: mongoose.Types.ObjectId,
            ref: "ConsumerAddress"
        },

        servicePreference: {
            type: String
        }
    },

    { timestamps: true }

)

export default mongoose.model('Booking', BookingSchema)