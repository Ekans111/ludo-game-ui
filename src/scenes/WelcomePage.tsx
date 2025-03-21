import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import { useState } from "react";
import { auth, provider, signInWithPopup } from "../firebaseConfig";
import Input from "../components/CustomInput";
import Loader from "../components/CustomLoading";

export const WelcomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [btnloading, setBtnLoading] = useState<boolean>(false);
  const setAuthenticated = useGameStore((state) => state.setAuthenticated);
  const setUser = useGameStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [code, setCode] = useState('');
  const [serverOtp, setServerOtp] = useState(null);
  const serverUrl = 'http://127.0.0.1:2980/send-otp';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  }

  const handleSubmitCode = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(code == serverOtp) {
      setAuthenticated(true);
      setUser(formData.username ?? "", "");
      setTimeout(() => {
        navigate("/menu");
      }, 2000);
    } else {
      alert('Invalid Code');
      setServerOtp(null);
    }
    setCode('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBtnLoading(true);
    const response = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: formData.email })
    });
    const data = await response.json();
    console.log(data);
    setServerOtp(data);
    setBtnLoading(false);
  };

  return (
    <div
      className={`h-screen flex pt-[5vh] justify-center p-4 bg-cover overflow-hidden ${loading ? "items-center" : "items-start"
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
          {
            serverOtp ? <>
              <form onSubmit={handleSubmitCode}>
                <Input ariaLabel="VerifyCode" placeholder="Code" type="text" name="VerifyCode" value={code} onChange={handleCode} />
                <button
                  type="submit"
                  className="sm:w-[410px] sm:h-[80px] w-[250px] h-[50px] bg-cover rounded-lg flex items-center justify-center transition-all hover:scale-105 mt-3 active:scale-[.995]"
                  style={{ backgroundImage: "url(/image/button_empty.png)" }}
                >
                  <span className="font-medium sm:text-3xl text-xl text-center text-white">
                    Confirm Code
                  </span>
                </button>
              </form>
            </> : <><button
              onClick={handleGoogleSignIn}
              className="sm:w-[410px] sm:h-[97px] w-[250px] h-[80px] bg-cover rounded-lg flex items-center justify-center transition-all hover:scale-105 mt-[9vh] active:scale-[.995]"
              style={{ backgroundImage: "url(/image/googlelogin.png)" }}
            >
              <span className="font-medium sm:text-3xl text-xl sm:ml-[70px] ml-[50px] sm:mt-2 -mt-4 text-white">
                Login with Google
              </span>
            </button>
              <form onSubmit={handleSubmit}>
                <Input ariaLabel="UserName" placeholder="UserName" type="text" name="username" value={formData.username} onChange={handleChange} />
                <Input ariaLabel="Email" placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                <button
                  type="submit"
                  className="sm:w-[410px] sm:h-[80px] w-[250px] h-[50px] bg-cover rounded-lg flex items-center justify-center transition-all hover:scale-105 mt-3 active:scale-[.995]"
                  style={{ backgroundImage: "url(/image/button_empty.png)" }}
                >
                  {
                    btnloading ? <Loader /> :
                      <span className="font-medium sm:text-3xl text-xl text-center text-white">
                        Login with Email
                      </span>
                  }
                </button>
              </form></>
          }

        </div>
      )}
    </div>
  );
};
