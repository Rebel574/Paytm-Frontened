import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHEading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){
    const [first_name,setFirstName]=useState("");
    const [last_name,setLastName]=useState("");
    const [username,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    // function handleRequest(){
         
    // }

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center" >
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4" >
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter Your Information to create an account"}/>
                <InputBox onChange={e=>{
                    setFirstName(e.target.value)
                }} placeholder={"Rohit"}  label={"First Name"}  />
                <InputBox onChange={e=>{
                    setLastName(e.target.value)
                }} placeholder={"Nagtilak"} label={"Last Name"} ></InputBox>
                <InputBox onChange={e=>{
                    setEmail(e.target.value)
                }} placeholder={"example@xyz.com"} label={"Email"} />
                <InputBox onChange={e=>{
                    setPassword(e.target.value)
                }} placeholder={"Alphanumeric > 6"} label={"Password"} />
                <div className="pt-4" >
                    <Button onClick={async()=>{
                        const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            first_name,
                            last_name,
                            password
                        });  
                        localStorage.setItem("token",response.data.token);
                        navigate("/dashboard")
                    }} label={"Sign Up"}/>
                </div>
                <BottomWarning label={"Already have an account ?"} buttonText={"Sign In"} to={"/signin"} />
            </div>
        </div>
 
    </div>
}

export default Signup;