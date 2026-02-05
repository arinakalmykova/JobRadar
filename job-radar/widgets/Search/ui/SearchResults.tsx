"use client";
import {useState} from "react";
import {useSearch} from "@/features";
import {JobCard} from "@/entities";
import {Filter} from "@/widgets";

export function SearchResults({searchValue}:{ searchValue: string }){
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");

    const {jobs} = useSearch({search: searchValue, location, type})
    return (
        <div className=" w-full">
      <Filter location={location} setLocation={setLocation} type={type} setType={setType} />
      <ul className="w-full flex flex-col gap-4">
        {jobs.map((job) => (
          <li key={job.id}>
            <JobCard job={job} />
          </li>
        ))}
      </ul>
    </div>
  );
}