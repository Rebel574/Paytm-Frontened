
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Appbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate=useNavigate();

    const handleLogout = () => {
        // Clear token from localStorage
        localStorage.removeItem('token');
        // Perform other logout-related actions if necessary
        console.log("Logged out successfully");
        navigate("/");
    };

    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
                PayTM App
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    Hello
                </div>
                <div className="relative">
                    <div
                        className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 cursor-pointer"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <div className="flex flex-col justify-center h-full text-xl">
                            R
                        </div>
                    </div>
                    {showDropdown && (
                        <div className="absolute top-14 right-0 mt-2 bg-white shadow rounded-md">
                            <div className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={handleLogout}>
                                Logout
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
