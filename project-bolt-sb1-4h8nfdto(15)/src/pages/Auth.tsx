import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SignInForm from '../components/auth/SignInForm';
import SignUpForm from '../components/auth/SignUpForm';
import ResetPasswordForm from '../components/auth/ResetPasswordForm';

export default function Auth() {
  const { user } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup' | 'reset'>('signin');

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] to-[#F0FFFF] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {mode === 'signin' ? 'Welcome Back' : 
             mode === 'signup' ? 'Create Account' : 
             'Reset Password'}
          </h1>
          <p className="text-gray-600">
            {mode === 'signin' ? 'Sign in to continue to your account' :
             mode === 'signup' ? 'Sign up to start your journey' :
             'Enter your email to reset your password'}
          </p>
        </div>

        {mode === 'signin' && <SignInForm />}
        {mode === 'signup' && <SignUpForm />}
        {mode === 'reset' && <ResetPasswordForm />}

        <div className="mt-6 text-center text-sm">
          {mode === 'signin' ? (
            <>
              <button
                onClick={() => setMode('reset')}
                className="text-purple-600 hover:text-purple-700"
              >
                Forgot password?
              </button>
              <div className="mt-2">
                Don't have an account?{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Sign up
                </button>
              </div>
            </>
          ) : mode === 'signup' ? (
            <div>
              Already have an account?{' '}
              <button
                onClick={() => setMode('signin')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Sign in
              </button>
            </div>
          ) : (
            <button
              onClick={() => setMode('signin')}
              className="text-purple-600 hover:text-purple-700"
            >
              Back to sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}