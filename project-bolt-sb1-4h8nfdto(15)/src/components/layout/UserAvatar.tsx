import React from 'react';
import { User as UserType } from '@supabase/supabase-js';
import { User } from 'lucide-react';

interface UserAvatarProps {
  user: UserType | null;
  size?: 'sm' | 'md' | 'lg';
}

export default function UserAvatar({ user, size = 'md' }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  if (!user?.user_metadata?.avatar_url) {
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-accent/20 flex items-center justify-center`}>
        <User className="w-5 h-5 text-primary" />
      </div>
    );
  }

  return (
    <img
      src={user.user_metadata.avatar_url}
      alt={user.email || 'User avatar'}
      className={`${sizeClasses[size]} rounded-full object-cover`}
    />
  );
}