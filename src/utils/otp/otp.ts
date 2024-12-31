import crypto from 'crypto';
import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid: string = process.env.TWILIO_VERIFICATION_SERVICE_SID!;

const client = twilio(accountSid, authToken);

export const generateOtp = (): string => {
    return crypto.randomInt(1000, 9999).toString();
};

export const sendOtpMessage = async (phoneNumber: string, otp: string, otpExpiryMin: number): Promise<void> => {
    try {

        const verification = await client.verify.services(serviceSid)
            .verifications
            .create({ to: phoneNumber, channel: 'sms' });
    }
    catch(error) {
        console.error(error)
        throw new Error('Failed to send OTP. Please try again later.');
    }
};




