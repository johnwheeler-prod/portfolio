import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Hero />
    </main>
  );
}

const Hero = ({}) => {
  return (
    <section className="h-full flex items-center">
      <div className="container flex flex-col justify-center items-center relative peer-has-[]:25%]">
        <h1 className="text-2xl md:text-5xl lg:text-8xl font-bold text-stone-50 z-40">
          j. michael wheeler
        </h1>
        <h1 className="text-2xl md:text-5xl lg:text-8xl font-bold absolute top-0 left-0 text-amber-300 animate-wipe-text z-30">
          j. michael wheeler
        </h1>
        <h1 className="text-2xl md:text-5xl lg:text-8xl font-bold absolute top-0 left-0 text-amber-400 animate-wipe-text-2 z-20">
          j. michael wheeler
        </h1>
        <h1 className="text-2xl md:text-5xl lg:text-8xl font-bold absolute top-0 left-0 text-amber-500 animate-wipe-text-3 z-10">
          j. michael wheeler
        </h1>
        <div>
          <p className="text-stone-300 animate-fade-in">
            I'm an experienced software and web engineer with a passion for
            implementing high quality designs.
          </p>
          <div className="flex gap-4 mt-2 animate-fade-in-2">
            <button className="bg-amber-500 text-stone-800 px-4 py-1 font-semibold rounded-full hover:bg-amber-400 transition ease-in-out">
              reach out
            </button>
            <button className=" border-2 border-stone-50 text-stone-50 px-4 py-1 font-semibold rounded-full hover:border-stone-300 hover:text-stone-300 transition ease-in-out">
              hire me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
