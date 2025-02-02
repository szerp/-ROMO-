import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signIn(email, password);
    } catch (err: any) {
      setError('Invalid email or password');
      console.error('Signin error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                       placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-gray-400" />
            <div className="relative flex-1">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                         placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 
                   disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2
                   transition-colors duration-200"
        >
          <LogIn className="w-5 h-5" />
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </div>
    </form>
  );
}