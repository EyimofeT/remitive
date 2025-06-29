import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import AuthForm from "./AuthForm";
import AuthTemplate from "./AuthTemplate";
import { PinInput } from '@mantine/core';
import { useState } from "react";

const EmailVerification = () => {

    const [otp, setOtp] = useState("")

  return (
    <AuthTemplate
      headerText={"Already have an account?"}
      headerAction={"Login"}
      headerLink={"../login"}
    >
      <div className="pb-40 pt-8">
        <AuthForm noImg head={"Email Verification"} text={"Enter OTP sent to phone number"}></AuthForm>
        <div className="flex items-center justify-center pt-24">
        <PinInput inputMode="numeric" onComplete={(value)=>setOtp(value)} oneTimeCode aria-label="One time code" placeholder="" size="xl" styles={{input:{border:"#6A7A914D 1px solid", fontWeight:"unset"}}} className="email-code font-nunito font-medium" />
        </div>
      </div>
      {/* {otp || ""} */}
      <PrimaryButton text={"Continue"} />
    </AuthTemplate>
  );
};

export default EmailVerification;
