import React from 'react';
import { useGameStore } from "../store/gameStore";

const SettingItem = ({ imgUrl, type, onChange, onChangeBtn }) => {
    const sound = useGameStore((state) => state.sound);
    const music = useGameStore((state) => state.music);

    return (
        <div className="flex flex-row justify-start items-center">
            <div
                className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px] bg-cover "
                style={{ backgroundImage: `url(/image/ic_settings_${imgUrl}.png)` }}
            >
            </div>
            <p className="ml-3 text-[20px] text-center font-medium text-white cursor-pointer" onClick={() => onChange()}>{type}</p>
            {
                type === "Sound" || type === "Music" ? <div
                    className="sm:w-[200px] sm:h-[45px] w-[30vw] h-[7vw] bg-cover absolute right-[10px] cursor-pointer" 
                    style={{ backgroundImage: `url(/image/bg_${type === "Sound" ? sound : music}.png)` }}
                    onClick={() => onChangeBtn()}
                >
                </div> : <></>
            }
        </div>
    );
};

export default SettingItem;
