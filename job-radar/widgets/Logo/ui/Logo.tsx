import {Radar} from "lucide-react";

interface LogoProps {
    isAuth:boolean
}
export function Logo({isAuth} :LogoProps ) {
    return (
        <div className="flex gap-3 justify-center items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-lg">
            <Radar className="w-8 h-8 text-white" />
        </div>
        { !isAuth && (<h1 className="font-bold text-2xl text-foreground">JobRadar</h1>)}
        </div>
    )
}