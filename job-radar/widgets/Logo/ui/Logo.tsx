import { Radar } from "lucide-react";

interface LogoProps {
  isAuth: boolean;
  onClick?: () => void;
}
export function Logo({ isAuth, onClick }: LogoProps) {
  return (
    <div
      className="flex gap-3 justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-lg">
        <Radar className="w-8 h-8 text-white" />
      </div>
      {!isAuth && (
        <h1 className="font-bold text-2xl text-foreground">JobRadar</h1>
      )}
    </div>
  );
}
