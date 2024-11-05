import { Facebook, Instagram, Twitter } from "lucide-react";

const HomePage = () => {
  return (
    <section className="p-6 h-screen w-full">
      <div className="w-3/4 rounded-lg border border-border-default">
        <div className="flex items-end justify-between">
          <h1 className="text-9xl">SUSHI SENSATION</h1>
          <div className="flex gap-2">
            <button className="border border-border-default bg-background-muted rounded-full p-3 hover:bg-background-muted-hover hover:border-border-default-hover transition-all duration-100">
              <Instagram strokeWidth={1} />
            </button>
            <button className="border border-border-default bg-background-muted rounded-full p-3 hover:bg-background-muted-hover hover:border-border-default-hover transition-all duration-100">
              <Facebook strokeWidth={1} />
            </button>
            <button className="border border-border-default bg-background-muted rounded-full p-3 hover:bg-background-muted-hover hover:border-border-default-hover transition-all duration-100">
              <Twitter strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
