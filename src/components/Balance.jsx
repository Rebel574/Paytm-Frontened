import axios from "axios";
import { useEffect, useState } from "react"
export const Balance = () => {
    const [balance,setBalance]=useState("");
    const [first_name,setFirstName]=useState("");
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("Response data:", response.data); // Log response data
                if (response.data && response.data.balance !== undefined) {
                    setBalance(response.data.balance);
                    setFirstName(response.data.first_name);
                } else {
                    console.error("Invalid response format:", response.data);
                }
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };
        fetchBalance();
    })
    return <div className="flex">
        <div className="font-bold text-lg" >
            {first_name}
        </div>
        <div className="font-semibold ml-4 text-lg" >
            Rs {balance}
        </div>
    </div>
}