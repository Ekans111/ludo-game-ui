import React from "react";
import { useGameStore } from "../store/gameStore";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const username = useGameStore((state) => state.user);
  const picture = useGameStore((state) => state.picture);
  const balance = useGameStore((state) => state.balance);
  const navigate = useNavigate();

  return (
    <div
      className="sm:w-[400px] sm:h-[115px] w-[90vw] h-[21vw] bg-no-repeat sm:bg-contain bg-cover bg-center fixed top-10 left-1/2 -translate-x-1/2 flex items-center custom-sm:py-5 sm:px-7 py-1 px-5 gap-x-5"
      style={{
        backgroundImage: "url(/image/top_panel_bg.png)",
      }}
    >
      <div
        className="sm:w-14 sm:h-12 w-[12vw] h-[12vw] bg-cover rounded-full bg-no-repeat"
        style={{
          backgroundImage: picture
            ? `url(${picture})`
            : "url(/image/guest_icon.png)",
        }}
      />
      <div className="flex-grow">
        <p className="font-extrabold sm:text-lg sm:pl-3 pl-[2vw] -mb-2 font-nunito text-[#8C9ECF]">
          {username ? username : "New User"}
        </p>
        <div className="flex items-center">
          <div
            className="relative flex items-center rounded-full sm:w-[180px] sm:h-[50px] w-[30vw] h-[8vw] sm:bg-contain bg-cover bg-no-repeat mr-auto max-sm:pt-1"
            style={{
              backgroundImage: "url(/image/bg_wallet_background.png)",
            }}
          >
            <img
              src="/image/ic_wallet2.png"
              alt="icon wallet"
              className="sm:-ml-3 -ml-[2vw] sm:h-10 h-[8vw]"
            />
            <p className="flex-grow sm:pl-3 pr-2 text-white font-nunito">
              ${balance.toLocaleString()}
            </p>
            <img
              src="/image/ic_wallet_plus.png"
              alt="icon wallet plus"
              className="sm:-mr-3 -ml-[2vw] sm:h-12 h-[8vw] cursor-pointer hover:scale-105 active:scale-95"
              onClick={() => navigate("/charge")}
            />
          </div>
          <img
            src="/image/ic_notifications.png"
            alt="notification"
            className="sm:ml-4 sm:w-14 w-[12vw]"
          />
          <img
            src="/image/ic_settings.png"
            alt="settings"
            className="sm:w-14 w-[12vw] hover:scale-[1.03] active:scale-[.97] transition-all cursor-pointer"
            onClick={() => navigate("/settings")}
          />
        </div>
      </div>
    </div>
  );
}
