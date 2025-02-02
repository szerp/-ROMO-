import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, Lock, UserPlus, Eye, EyeOff, User } from 'lucide-react';

interface FormData {
  username: string;
  email: string;
  confirmEmail: string;
  password: string;
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    confirmEmail: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const validateForm = () => {
    if (!formData.username.trim()) {
      return 'Username is required';
    }
    if (formData.username.length < 3) {
      return 'Username must be at least 3 characters long';
    }
    if (formData.email !== formData.confirmEmail) {
      return 'Emails do not match';
    }
    if (formData.password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signUp(formData.email, formData.password, formData.username);
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
      console.error('Signup error:', err);
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
            Username
          </label>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="flex-1 px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                       placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              placeholder="Choose a username"
              required
              minLength={3}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1 px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                       placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Email
          </label>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={formData.confirmEmail}
              onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
              className="flex-1 px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                       placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              placeholder="Confirm your email"
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
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                         placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                placeholder="Create a password"
                required
                minLength={6}
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
          <p className="mt-1 text-sm text-gray-500">Must be at least 6 characters</p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 
                   disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2
                   transition-colors duration-200"
        >
          <UserPlus className="w-5 h-5" />
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
}