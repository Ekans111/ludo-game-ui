import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Wifi } from 'lucide-react';

export const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Choose Game Mode</h1>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate('/game')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-4 flex items-center justify-center space-x-3 transition-colors"
          >
            <Wifi className="w-6 h-6" />
            <span className="text-lg font-medium">Play Online</span>
          </button>
          
          <button
            onClick={() => navigate('/game?mode=friends')}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-4 flex items-center justify-center space-x-3 transition-colors"
          >
            <Users className="w-6 h-6" />
            <span className="text-lg font-medium">Play with Friends</span>
          </button>
        </div>
        
        <button
          onClick={() => navigate('/settings')}
          className="mt-6 w-full text-gray-600 hover:text-gray-800 transition-colors"
        >
          Settings
        </button>
      </div>
    </div>
  );
};