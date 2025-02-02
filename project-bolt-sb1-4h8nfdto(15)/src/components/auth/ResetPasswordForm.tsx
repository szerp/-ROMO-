import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, RefreshCw } from 'lucide-react';

export default function ResetPasswordForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setMessage('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Check your email for password reset instructions');
    } catch (err) {
      setError('Failed to reset password');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      {message && (
        <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm">
          {message}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 
                 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-5 h-5" />
        {loading ? 'Sending Reset Link...' : 'Reset Password'}
      </button>
    </form>
  );
}