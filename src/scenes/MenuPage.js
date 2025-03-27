import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export const MenuPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen flex pt-[5vh] justify-center p-4 bg-cover overflow-hidden items-center"
      style={{
        backgroundImage: "url(/image/main_menu_bg.png)",
      }}
    >
      <Header />
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
          onClick={() => navigate("/online-option")}
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
