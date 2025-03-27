
import React from 'react';

const Input = ({ ariaLabel, placeholder, type, value, name, onChange }) => {
    return (
        <div className="sm:w-[410px] w-[250px] mx-auto px-4 sm:px-0 pt-3">
            <div className="relative">
                <input aria-label={ariaLabel} placeholder={placeholder} className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm" autocomplete={name} name={name} type={type} value={value} onChange={onChange} />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    {
                        type !== "password" ? <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 dark:text-gray-500">
                            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                        </svg> : <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 dark:text-gray-500">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round"></path>
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                    }
                </div>
            </div>
        </div>
    );
}

export default Input;
