import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";

export const SettingsPage = () => {
  const navigate = useNavigate();
  const username = useGameStore((state) => state.user);
  const picture = useGameStore((state) => state.picture);

  return (
    <div
      className="min-h-screen flex justify-center p-4 bg-cover bg-[#041147] overflow-hidden items-center"
    >
      <div>

      </div>
      <div
        className="sm:w- sm:h-[515px] w-[90vw] h-[21vw] bg-no-repeat sm:bg-contain bg-cover bg-center fixed top-10 left-1/2 -translate-x-1/2 flex items-center sm:py-5 sm:px-7 py-1 px-5 gap-x-5"
        style={{
          backgroundImage: "url(/image/box_blue_big.png)",
        }}
      >
      </div>
    </div>
  );
};
