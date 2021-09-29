import React from 'react';
import AuthLayout from '../../components/auth-layout';
import PrimaryButton from '../../components/primary-btn';
import TextInput from '../../components/text-input';
import useLogin from '../../hooks/useLogin';

const Login = ({ history }) => {
  const { formData, errorMessage, loading, handleInputChange, handleSubmit } =
    useLogin();

  return (
    <AuthLayout>
      <h1 className="font-semibold text-xl mb-7">Sign in to your account</h1>
      <div className="space-y-5">
        {!!errorMessage && (
          <p className="text-xs text-red-400">{errorMessage}</p>
        )}
        <TextInput
          label="Email"
          placeholder="aisha.doe@domain.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextInput
          label="Password"
          placeholder="**********"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-8 space-y-8">
        <PrimaryButton
          placeholder="Continue"
          loading={loading}
          onClick={handleSubmit}
        />
        <p
          onClick={() => history.push('/auth/signup')}
          className="text-lightBlack text-sm text-center cursor-pointer"
        >
          Don't have an account? <span className="text-lightBlue">Sign up</span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
