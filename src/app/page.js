import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-40">
        <div className="text-center">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent/20 select-none">
            Subharjun Bose
          </h1>
          <p className="font-light text-lg sm:text-xl md:text-2xl text-foreground/30 mt-2 select-none">
            Full Stack Developer & ML Enthusiast
          </p>
        </div>
      </div>

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
