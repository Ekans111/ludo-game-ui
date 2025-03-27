import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleCheck, Circle } from "lucide-react";
import SettingItem from "../components/SettingItem";
import { useGameStore } from "../store/gameStore";
import Input from "../components/CustomInput";

export const WithdrawPage = () => {
  const navigate = useNavigate();
  const setAuthenticated = useGameStore((state) => state.setAuthenticated);
  const sound = useGameStore((state) => state.sound);
  const setSound = useGameStore((state) => state.setSound);
  const setMusic = useGameStore((state) => state.setMusic);
  const music = useGameStore((state) => state.music);
  const balance = useGameStore((state) => state.balance);

  const [addBalance, setAddBalance] = useState();
  const [bank, setBank] = useState("bank");

  const handleBack = () => {
    navigate("/menu");
  };

  const handleLogOut = () => {
    setAuthenticated(false);
    navigate("/");
  };

  const handleSwitchSound = () => {
    setSound(sound === "on" ? "off" : "on");
  };
  const handleSwitchMusic = () => {
    setMusic(music === "on" ? "off" : "on");
  };

  return (
    <div className="min-h-screen flex justify-start p-4 bg-cover bg-[#041147] overflow-hidden items-center flex-col relative">
      <div className="flex flex-row justify-start items-center mb-10">
        <button
          onClick={() => handleBack()}
          className="w-[35px] h-[35px] bg-cover transition-all hover:scale-105 active:scale-[.995] absolute left-5"
          style={{ backgroundImage: "url(/image/game_menu.png)" }}
        ></button>
        <p className="text-4xl text-center font-medium text-[#8C9ECF]">
          Charge
        </p>
      </div>
      <div
        className="sm:w-[430px] sm:h-[180px] w-[80vw] h-[32vw] bg-no-repeat bg-contain bg-center flex items-center flex-col justify-end sm:py-5 sm:px-7 py-1 px-5 gap-x-5 relative"
        style={{
          backgroundImage: "url(/image/box_ticket_green.png)",
        }}
      >
        <img
          src="/image/Main_Menu_Points.png"
          alt="coin"
          className="absolute left-1/2 -translate-x-1/2 -top-7 max-sm:w-16"
        />
        <h3 className="mt-20px text-white w-full">
          Charge Balance{" "}
          <b className="text-3xl font-bold pl-5">${balance.toLocaleString()}</b>
        </h3>
        <input
          aria-label="balance"
          placeholder="Enther the balance to charge"
          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm mb-4"
          name="balance"
          type="number"
          value={addBalance}
          onChange={(e) => e.target.value}
        />
        {/* <SettingItem imgUrl="sound" type="Sound" onChangeBtn={handleSwitchSound}/>
        <SettingItem imgUrl="music" type="Music" onChangeBtn={handleSwitchMusic}/>
        <SettingItem imgUrl="profile" type="My Profile" onChange={handleBack}/>
        <SettingItem imgUrl="wallet" type="My Balances" onChange={handleBack}/>
        <SettingItem imgUrl="refer" type="Refer & Earn" onChange={handleBack}/>
        <SettingItem imgUrl="terms" type="Terms & Conditions" onChange={handleBack}/>
        <SettingItem imgUrl="privacy" type="Privacy Policy" onChange={handleBack}/>
        <SettingItem imgUrl="privacy" type="Refund & Cancellation Policy" onChange={handleBack}/>
        <SettingItem imgUrl="about" type="About US" onChange={handleBack} />
        <SettingItem imgUrl="logout" type="Log Out" onChange={handleLogOut} /> */}
      </div>
      <div
        className="sm:w-[430px] sm:h-[480px] w-[80vw] h-[90vw] bg-no-repeat bg-contain bg-center flex items-center flex-col justify-center sm:py-5 sm:px-7 py-1 px-5 gap-x-5 relative gap-5"
        style={{
          backgroundImage: "url(/image/dialog_box.png)",
        }}
      >
        <h3 className="text-white text-2xl font-bold">Charge Mode</h3>
        <div
          className="w-full flex justify-between cursor-pointer items-center text-3xl text-white p-3 backdrop-blur-sm rounded-md bg-[#0411477C] shadow-sm"
          onClick={() => setBank("bank")}
        >
          <img src="/image/ic_wallet2.png" alt="bank" />
          Bank
          {bank === "bank" ? <CircleCheck size={40} /> : <Circle size={40} />}
        </div>
        <div
          className="w-full flex justify-between cursor-pointer items-center text-3xl text-white p-3 backdrop-blur-sm rounded-md bg-[#0411477C] shadow-sm"
          onClick={() => setBank("paypal")}
        >
          <img src="/image/ic_wallet2.png" alt="paypal" />
          PayPal
          {bank === "paypal" ? <CircleCheck size={40} /> : <Circle size={40} />}
        </div>
        <button>
          <img
            src="/image/button_wallet_add.png"
            alt="add"
            className="transition-all hover:scale-105 active:scale-95 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};
