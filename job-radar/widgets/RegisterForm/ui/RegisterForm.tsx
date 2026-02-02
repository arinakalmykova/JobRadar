"use client"
import {useState} from "react";
import {useAuth} from "@/features";

export function RegisterForm() {
    const [name,setName]= useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { handleRegister,loading,error} = useAuth();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleRegister(name,email,password);
    }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)}/>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">{loading? "Регистрируем..." : "Зарегистрироваться"}</button>
        {error && <p>{error}</p>};
    </form>
  );
}
