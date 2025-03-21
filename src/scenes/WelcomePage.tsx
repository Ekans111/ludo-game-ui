import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import { useState } from "react";
import { auth, provider, signInWithPopup } from "../firebaseConfig";

export const WelcomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const setAuthenticated = useGameStore((state) => state.setAuthenticated);
  const setUser = useGameStore((state) => state.setUser);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user.photoURL);
      setUser(result.user.displayName ?? "", result.user.photoURL ?? "");
      setAuthenticated(true);
      setLoading(true);
      setTimeout(() => {
        navigate("/menu");
      }, 3000);
    } catch {
      console.error("Error signing in with Google");
    }
  };

  return (
    <div
      className={`min-h-screen flex pt-[5vh] justify-center p-4 bg-cover overflow-hidden ${loading ? "items-center" : "items-start"
        }`}
      style={{
        backgroundImage: loading
          ? "url(/image/new_loading_bg.png)"
          : "url(/image/login_bg.png)",
      }}
    >
      {loading ? (
        <img src="/image/t_loader47.png" alt="loading" className="w-[200px] animate-spin" />
      ) : (
        <div className="flex flex-col items-center">
          <img
            src="/image/game_logo.png"
            alt="game logo"
            className="sm:w-[150px] w-[120px] "
          />
          <img
            src="/image/login_object.png"
            alt="login object"
            className="scale-x-110"
          />

          <button
            onClick={handleGoogleSignIn}
            className="sm:w-[410px] sm:h-[97px] w-[250px] h-[80px] bg-cover rounded-lg flex items-center justify-center transition-all hover:scale-105 mt-[9vh] active:scale-[.995]"
            style={{ backgroundImage: "url(/image/googlelogin.png)" }}
          >
            <span className="font-medium sm:text-3xl text-xl sm:ml-[70px] ml-[50px] sm:mt-2 -mt-4 text-white">
              Login with Google
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
