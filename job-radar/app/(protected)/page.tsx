
"use client"
import {SearchInput, SearchResults} from "@/widgets";
import {useState} from "react";
export default function Home() {  
  const [searchValue,setSearchValue] = useState("");
  return (
    <main className="flex min-h-screen items-start justify-start flex-col gap-5 p-10">
      <h2 className="text-3xl font-bold">Добро пожаловать!</h2>
      <p>Умный поиск вакансий для разработчиков</p>
      <SearchInput value={searchValue} onChange={(val)=> setSearchValue(val)}/>
      <SearchResults searchValue= {searchValue}/>
    </main>
  );
}
