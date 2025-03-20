import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export const WelcomePage = () => {
  const navigate = useNavigate();
  const setAuthenticated = useGameStore((state) => state.setAuthenticated);

  const handleGoogleSignIn = async () => {
    // Simulate Google sign in
    await new Promise(resolve => setTimeout(resolve, 1500));
    setAuthenticated(true);
    navigate('/menu');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <Gamepad2 className="w-16 h-16 text-blue-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Ludo</h1>
          <p className="text-gray-600 mb-8 text-center">Sign in to start playing with friends!</p>
          
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-white border-2 border-gray-200 rounded-lg px-4 py-3 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            <span className="font-medium text-gray-700">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};