import { footer } from "motion/react-client";
import { profileData } from "../data/profileData";

export default function Footer(){

    return(
      <footer className="flex flex-col items-center justify-center gap-1 bg-zinc-50 shadow drop-shadow-md mx-auto">
          <div className="flex flex-row gap-1">
             <p className="pt-4 text-xs md:text-sm text-gray-500">
                 © {new Date().getFullYear()}
            </p>
            <a href="mailto:yuva123e@gmail.com"
            className="pt-4 text-xs md:text-sm text-amber-700">{profileData.email}</a>
          </div>
        <p className="pb-4 text-sm md:text-base text-orange-400">Blending creativity with code</p>   
      </footer>
    )
}