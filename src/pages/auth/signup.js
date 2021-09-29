import React from 'react';
import AuthLayout from '../../components/auth-layout';
import PrimaryButton from '../../components/primary-btn';
import TextInput from '../../components/text-input';
import useSignup from '../../hooks/useSignup';

const Signup = ({ history }) => {
  const { formData, errorMessage, loading, handleInputChange, handleSubmit } =
    useSignup();

  return (
    <AuthLayout>
      <h1 className="font-semibold text-xl mb-7">Create an account</h1>
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
          label="Name"
          placeholder="Aisha Doe"
          type="text"
          name="name"
          value={formData.name}
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
          placeholder="Create Account"
          loading={loading}
          onClick={handleSubmit}
        />
        <p
          onClick={() => history.push('/auth/login')}
          className="text-lightBlack text-sm text-center cursor-pointer"
        >
          Have an account? <span className="text-lightBlue">Sign in</span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
