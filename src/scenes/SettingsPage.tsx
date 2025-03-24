import { useNavigate } from "react-router-dom";
import SettingItem from "../components/SettingItem";
import { useGameStore } from "../store/gameStore";

export const SettingsPage = () => {
  const navigate = useNavigate();
  const setAuthenticated = useGameStore((state) => state.setAuthenticated);
  const [sound, setSound] = useGameStore((state) => [state.sound, state.setSound]);
  const [music, setMusic] = useGameStore((state) => [state.music, state.setMusic]);


  const handleBack = () => {
    navigate('/menu');
  }

  const handleLogOut = () => {
    setAuthenticated(false);
    navigate('/');
  }

  const handleSwitchSound = () => {
    setSound(sound == 'on' ? 'off' : 'on');
  }
  const handleSwitchMusic = () => {
    setMusic(music == 'on' ? 'off' : 'on');
  }

  return (
    <div
      className="min-h-screen flex justify-start p-4 bg-cover bg-[#041147] overflow-hidden items-center flex-col relative"
    >
      <div className="flex flex-row justify-start items-center mb-10">
        <button
          onClick={handleBack}
          className="w-[35px] h-[35px] bg-cover transition-all hover:scale-105 active:scale-[.995] absolute left-5"
          style={{ backgroundImage: "url(/image/game_menu.png)" }}
        >
        </button>
        <p className="text-4xl text-center font-medium text-[#8C9ECF]">Settings</p>
      </div>
      <div
        className="sm:w-[430px] sm:h-[650px] w-[75vw] h-[120vw] bg-no-repeat sm:bg-contain bg-cover bg-center flex items-start flex-col justify-start sm:py-5 sm:px-7 py-1 px-5 gap-x-5 relative"
        style={{
          backgroundImage: "url(/image/box_blue_big.png)",
        }}
      >
        <SettingItem imgUrl="sound" type="Sound" onChangeBtn={handleSwitchSound}/>
        <SettingItem imgUrl="music" type="Music" onChangeBtn={handleSwitchMusic}/>
        <SettingItem imgUrl="profile" type="My Profile" onChange={handleBack}/>
        <SettingItem imgUrl="wallet" type="My Balances" onChange={handleBack}/>
        <SettingItem imgUrl="refer" type="Refer & Earn" onChange={handleBack}/>
        <SettingItem imgUrl="terms" type="Terms & Conditions" onChange={handleBack}/>
        <SettingItem imgUrl="privacy" type="Privacy Policy" onChange={handleBack}/>
        <SettingItem imgUrl="privacy" type="Refund & Cancellation Policy" onChange={handleBack}/>
        <SettingItem imgUrl="about" type="About US" onChange={handleBack} />
        <SettingItem imgUrl="logout" type="Log Out" onChange={handleLogOut} />
      </div>
    </div>
  );
};
