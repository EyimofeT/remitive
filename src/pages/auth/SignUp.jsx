import React from 'react'
import AuthTemplate from './AuthTemplate'
import AuthForm from './AuthForm'
import AuthInput from './AuthInput'
import AuthPassword from './AuthPassword'
import PrimaryButton from '../../components/buttons/PrimaryButton'

const SignUp = () => {

  return (
    <AuthTemplate headerText={"Already have an account?"} headerAction={"Login"} headerlink={"../login"} >
        <AuthForm noImg text={"Sign up to get started"} head={"Get Started with Remitive"}  >
            <form className='flex flex-col gap-6'>
                <AuthInput id={"email"} />
                <AuthPassword id={"password"} />
                <AuthPassword label={"Confirm Password"} id={"confirmPassword"} />
                <PrimaryButton text={"Continue"} />
            </form>
        </AuthForm>
    </AuthTemplate>
  )
}

export default SignUp