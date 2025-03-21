import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";

export const MenuPage = () => {
  const navigate = useNavigate();
  const username = useGameStore((state) => state.user);
  const picture = useGameStore((state) => state.picture);

  const navigateSettings = () => {
    navigate("/settings")
  }

  return (
    <div
      className="min-h-screen flex pt-[5vh] justify-center p-4 bg-cover overflow-hidden items-center"
      style={{
        backgroundImage: "url(/image/main_menu_bg.png)",
      }}
    >
      <div
        className="sm:w-[480px] sm:h-[115px] w-[90vw] h-[21vw] bg-no-repeat sm:bg-contain bg-cover bg-center fixed top-10 left-1/2 -translate-x-1/2 flex items-center sm:py-5 sm:px-7 py-1 px-5 gap-x-5"
        style={{
          backgroundImage: "url(/image/top_panel_bg.png)",
        }}
      >
        <div
          className="sm:w-16 sm:h-16 w-[12vw] h-[12vw] bg-cover rounded-full"
          style={{
            backgroundImage: picture ? picture : "url(/image/guest_icon.png)",
          }}
        />
        <div className="flex-grow">
          <p className="font-extrabold sm:text-lg sm:pl-3 pl-[2vw] -mb-2 font-nunito text-[#8C9ECF]">
            {username ? username : "New User"}
          </p>
          <div className="flex items-center">
            <div
              className="relative flex items-center rounded-full sm:w-[170px] sm:h-[50px] w-[30vw] h-[8vw] sm:bg-contain bg-cover mr-auto max-sm:pt-1"
              style={{
                backgroundImage: "url(/image/bg_wallet_background.png)",
              }}
            >
              <img
                src="/image/ic_wallet2.png"
                alt="icon wallet"
                className="sm:-ml-3 -ml-[2vw] sm:h-10 h-[6vw]"
              />
              <p className="flex-grow text-center text-white font-nunito">0</p>
              <img
                src="/image/ic_wallet_plus.png"
                alt="icon wallet plus"
                className="sm:-mr-3 -ml-[2vw] sm:h-12 h-[8vw]"
              />
            </div>
            <img
              src="/image/ic_notifications.png"
              alt="notification"
              className="ml-auto sm:w-16 w-[12vw]"
            />
            <img src="/image/ic_settings.png" alt="settings" className="sm:w-16 w-[12vw]" onClick={navigateSettings} />
          </div>
        </div>
      </div>

      <div className="space-y-10 flex flex-col items-center sm:px-10 px-8 mt-5">
        <img
          src="/image/game_logo.png"
          alt="game logo"
          className="sm:w-[150px] w-[120px] "
        />
        <img
          src="/image/play_online.png"
          alt="game logo"
          className="hover:scale-[1.03] active:scale-[.97] transition-all cursor-pointer"
          onClick={() => navigate("/game")}
        />
        <img
          src="/image/play_with_friends.png"
          alt="game logo"
          className="hover:scale-[1.03] active:scale-[.97] transition-all cursor-pointer"
          onClick={() => navigate("/game?mode=friends")}
        />
      </div>
    </div>
  );
};
