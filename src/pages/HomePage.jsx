import { headerData } from "@/assets/assets";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <section id="header" className="flex flex-col gap-4">
      <div className="relative px-[5%] rounded-2xl overflow-hidden">
        <div className="flex h-96 items-end">
          <div className="max-w-md flex">
            <h1 className="text-6xl text-center text-text-default md:text-9xl mb-4">
              SUSHI SENSATION
            </h1>
          </div>
          <div className="absolute inset-0 -z-10">
            <video
              className="absolute inset-0 aspect-video size-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src="./header-vid.mp4" />
            </video>
            <div
              className="absolute bottom-0 left-0 right-0 h-48"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        {headerData.map((item, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden">
            <div className="flex h-72">
              <div className="self-end ml-auto">
                <Button
                  variant="secondary"
                  className="text-xs font-sans tracking-widest"
                >
                  {item.title}
                </Button>
              </div>
              <div className="absolute inset-0 -z-10">
                <img src={item.image.src} alt={item.image.alt} className="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
