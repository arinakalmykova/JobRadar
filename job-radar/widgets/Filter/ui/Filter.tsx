import {Input} from "@/shared";

export function Filter({location, setLocation, type, setType}:{location: string, setLocation: React.Dispatch<React.SetStateAction<string>>, type: string, setType: React.Dispatch<React.SetStateAction<string>>}){ {
    return (
         <div className="flex gap-4 mb-10">
                <Input
                  type="text"
                  isAuth={false}
                  placeholder="Локация"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border p-3 rounded-full w-full border-[var(--color-border)] text-[var(--color-border-focus)] placeholder:text-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:outline-none"
                />
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="border appearance-none p-3 rounded-full w-full border-[var(--color-border)] text-[var(--color-border-focus)]  placeholder:text-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:outline-none"
                >
                  <option value="" className="bg-[var(--background)] rounded-full  ">Все типы</option>
                  <option value="Full-time" className="bg-[var(--background)]">Full-time</option>
                  <option value="Part-time" className="bg-[var(--background)]">Part-time</option>
                </select>
                <span className="pointer-events-none absolute right-15 my-4  text-violet-500">
                    ▼
                  </span>
             
              </div>
    );
}
}