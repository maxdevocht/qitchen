import { headerData } from "@/assets/assets";
import { Facebook, Instagram, Twitter } from "lucide-react";

const HomePage = () => {
  return (
    <section className="relative h-screen w-full border border-border-default rounded-2xl overflow-hidden">
      <video
        src="./header-vid.mp4"
        autoPlay
        muted
        className="absolute -z-10 object-cover w-full h-full"
      />
      <div className="px-8">
        <h1 className="text-5xl text-center">SUSHI SENSATION</h1>
      </div>
    </section>
  );
};

export default HomePage;
