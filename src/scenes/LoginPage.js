import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import { useState } from "react";
import Input from "../components/CustomInput";
import Loader from "../components/CustomLoading";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [btnloading, setBtnLoading] = useState(false);
  const setAuthenticated = useGameStore((state) => state.setAuthenticated);
  // setAuthenticated(false);
  const setUser = useGameStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) return;
    setBtnLoading(true);
    const response = await fetch(process.env.REACT_APP_SERVER_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    if (response.status === 200) {
      const data = await response.json();
      if (data["message"] === "User signed in") {
        setBtnLoading(false);
        setUser(data["name"] ?? "", "");
        setAuthenticated(true);
        setTimeout(() => {
          navigate("/menu");
        }, 3000);
      } else {
        alert(data);
        setBtnLoading(false);
      }
    } else {
      alert("Server Error");
      setBtnLoading(false);
    }
  };

  return (
    <div
      className="h-screen flex pt-[5vh] justify-center p-4 bg-cover overflow-hidden items-start
        "
      style={{
        backgroundImage: "url(/image/login_bg.png)",
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
        <form onSubmit={handleSubmit}>
          <Input
            ariaLabel="Email"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            ariaLabel="Password"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="sm:w-[410px] sm:h-[80px] w-[250px] h-[50px] bg-cover rounded-lg flex items-center justify-center transition-all hover:scale-105 mt-3 active:scale-[.995]"
            style={{ backgroundImage: "url(/image/button_empty.png)" }}
          >
            {btnloading ? (
              <Loader />
            ) : (
              <span className="font-medium sm:text-3xl text-xl text-center text-white">
                Login with Email
              </span>
            )}
          </button>
        </form>
        <p className="text-white mt-5 text-xl">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={handleRegister}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};
