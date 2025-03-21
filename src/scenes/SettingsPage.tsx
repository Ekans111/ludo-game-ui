import { useNavigate } from 'react-router-dom';
import { Volume2, VolumeX, Wallet } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export const SettingsPage = () => {
  const navigate = useNavigate();
  const { isMuted, balance, setMuted, setBalance } = useGameStore();

  const handleDeposit = () => {
    setBalance(balance + 100);
  };

  const handleWithdraw = () => {
    if (balance >= 100) {
      setBalance(balance - 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Settings</h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-700">Sound</span>
            <button
              onClick={() => setMuted(!isMuted)}
              className={`p-3 rounded-lg ${isMuted ? 'bg-gray-200' : 'bg-blue-100'}`}
            >
              {isMuted ? <VolumeX className="w-6 h-6 text-gray-600" /> : <Volume2 className="w-6 h-6 text-blue-600" />}
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-gray-700">Balance</span>
              <span className="text-2xl font-bold text-green-600">${balance}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleDeposit}
                className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-3 flex items-center justify-center space-x-2"
              >
                <Wallet className="w-5 h-5" />
                <span>Deposit</span>
              </button>
              
              <button
                onClick={handleWithdraw}
                className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-3 flex items-center justify-center space-x-2"
              >
                <Wallet className="w-5 h-5" />
                <span>Withdraw</span>
              </button>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => navigate('/menu')}
          className="mt-8 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg px-4 py-3 transition-colors"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};