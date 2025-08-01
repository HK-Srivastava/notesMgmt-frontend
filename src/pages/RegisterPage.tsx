// src/pages/RegisterPage.tsx
import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Voice Notes</h1>
          <p className="text-gray-600">Create your account to get started</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;