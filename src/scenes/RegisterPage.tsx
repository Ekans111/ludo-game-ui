import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import { useState, useEffect } from "react";
import Input from "../components/CustomInput";
import Loader from "../components/CustomLoading";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [btnloading, setBtnLoading] = useState<boolean>(false);
  const setAuthenticated = useGameStore((state) => state.setAuthenticated);
  // setAuthenticated(false);
  const setUser = useGameStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });
  const [code, setCode] = useState('');
  const [serverOtp, setServerOtp] = useState(null);

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
    if (code == serverOtp) {
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
    if (!formData.email || !formData.username || !formData.password || !formData.password2) return;
    if (formData.password !== formData.password2) {
      alert('Password not match');
      return;
    }
    setBtnLoading(true);
    const response = await fetch(import.meta.env.VITE_SERVER_URL + 'register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: formData.username, email: formData.email, password: formData.password })
    });
    if (response.status !== 200) {
      const data = await response.text();
      alert(data);
      setBtnLoading(false);
    }
    else {
      const data = await response.json();
      setServerOtp(data);
      setBtnLoading(false);
    }
  };

  return (
    <div
      className="h-screen flex pt-[5vh] justify-center p-4 bg-cover overflow-hidden items-start
        "
      style={{
        backgroundImage:
          "url(/image/login_bg.png)",
      }}
    >
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
          </> : <>
            <form onSubmit={handleSubmit}>
              <Input ariaLabel="UserName" placeholder="UserName" type="text" name="username" value={formData.username} onChange={handleChange} />
              <Input ariaLabel="Email" placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
              <Input ariaLabel="Password" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
              <Input ariaLabel="ConfimrPassword" placeholder="Confirm Password" type="password" name="password2" value={formData.password2} onChange={handleChange} />
              <button
                type="submit"
                className="sm:w-[410px] sm:h-[80px] w-[250px] h-[50px] bg-cover rounded-lg flex items-center justify-center transition-all hover:scale-105 mt-3 active:scale-[.995]"
                style={{ backgroundImage: "url(/image/button_empty.png)" }}
              >
                {
                  btnloading ? <Loader /> :
                    <span className="font-medium sm:text-3xl text-xl text-center text-white">
                      Sign Up
                    </span>
                }
              </button>
            </form></>
        }
      </div>
    </div>
  );
};
