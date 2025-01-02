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

export const sendOtpMessage = async (phoneNumber: string): Promise<void> => {
    try {

        const verification = await client.verify.v2.services(serviceSid)
            .verifications
            .create({ to: phoneNumber, channel: 'sms' });
    }
    catch(error) {
        console.error(error)
        throw new Error('Failed to send OTP. Please try again later.');
    }
};

export const verifyCode = async (phoneNumber: string, code: string): Promise<boolean | undefined> => {
    try {
        const verification = await client.verify.v2.services(serviceSid)
        .verificationChecks
        .create({ to: phoneNumber, code });

        return verification.valid || false;
    } catch (err) {
        console.error("Error verifying code", err);
        throw new Error('Failed to verify OTP. Please try again later.');
    }
}


