"use client"
import {useState} from "react";
import {useAuth} from "@/features";

export function LoginForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { handleLogin,loading,error} = useAuth();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(email,password);
    }

    return (
    <form onSubmit ={onSubmit}>
        <input placeholder="Email"  value={email} onChange = {(e) => setEmail(e.target.value)}/>
        <input placeholder="Пароль" value={password} onChange ={(e)=> setPassword (e.target.value)}/>
        <button type="submit">{loading? "Входим..." : "Вход"}</button>
        {error && <p>{error}</p>};
        
    </form>
    );
}
