import { Text, Html, Preview } from "@react-email/components";
import * as React from "react";

const OTPEmail: React.FC<Readonly<{ otp: string, type: "sign-in" | "email-verification" | "forget-password" }>> = ({ otp, type }) => {
  return (
    <Html>
      <Preview>
        {type === "sign-in" ? "Sign in OTP" : ""}
        {type === "email-verification" ? "Email verification OTP" : ""}
        {type === "forget-password" ? "Password reset OTP" : ""}
      </Preview>
      <Text>
        {type === "sign-in" && "Your sign-in OTP is"}
        {type === "email-verification" && "Your email verification OTP is"}
        {type === "forget-password" && "Your password reset OTP is"}
      </Text>
      <Text>{otp}</Text>
    </Html>
  )
}

export default OTPEmail;
