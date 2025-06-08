import React from 'react'
import AuthTemplate from './AuthTemplate'
import AuthForm from './AuthForm'
import AuthInput from './AuthInput'
import AuthPassword from './AuthPassword'
import PrimaryButton from '../../components/buttons/PrimaryButton'

const Login = () => {

  return (
    <AuthTemplate>
        <AuthForm >
            <form className='flex flex-col gap-6'>
                <AuthInput id={"email"} />
                <AuthPassword id={"password"} />
                <PrimaryButton text={"Login"} />
            </form>
        </AuthForm>
    </AuthTemplate>
  )
}

export default Login