'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Heading from '@/components/Heading';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const router = useRouter();
  const ADMIN_PASSWORD = 'mypassword123';

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminToken', 'authorized');
      router.push('/admin');
    } else {
      alert('Wrong password');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden">
      
     

      {/* Login Card */}
      <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 w-full max-w-3xl mx-4">
        <div className="mb-8 text-center">
          <Heading tit1="Admin" tit2="Login" />
        </div>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 mb-6 border rounded-lg text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600 
             focus:outline-none focus:ring-2 focus:ring-[#FE6E33] focus:border-[#FE6E33] text-lg"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-[#FE6E33] text-white font-semibold rounded-lg shadow hover:bg-[#e35d21] transition text-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}
