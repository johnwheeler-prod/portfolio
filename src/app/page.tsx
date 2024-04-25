import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-stone-200">
      <Hero />
    </main>
  );
}

const Hero = ({}) => {
  return (
    <section className="h-full flex items-center relative">
      <div className="absolute left-[-25%] top-[30%] h-96 w-96 z-10">
        <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full opacity-[33%] rounded-full blur-sm animate-float"></div>
        <div className="absolute top-0 left-0 bg-gradient-conic from-purple-500 to-pink-500 h-[92%] w-[92%] opacity-[33%] rounded-full transform translate-x-12 translate-y-8 blur-sm animate-float-1"></div>
        <div className=" absolute top-0 left-0 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 opacity-[33%] h-[84%] w-[84%] rounded-full transform translate-x-8 translate-y-16 blur-sm animate-float-2"></div>
        <div className=" absolute top-0 left-0 bg-gradient-radial from-amber-500 via-yellow-200 to-lime-400 opacity-[33%] h-2/3 w-2/3 rounded-full transform translate-x-8 translate-y-16 blur-sm animate-float-3"></div>
      </div>
      <div className="container flex flex-col justify-center items-center relative z-50">
        <div className="aspect-video rounded-3xl bg-white/10 shadow-lg ring-1 ring-black/5 px-10 py-12 flex items-center backdrop-blur-xl">
          <div>
            <h1 className="text-2xl md:text-5xl lg:text-8xl font-bold text-stone-800 z-40">
              John M. Wheeler
            </h1>
            <p className="text-stone-600 animate-fade-in">
              I'm an experienced software and web engineer with a passion for
              implementing high quality designs.
            </p>
            <div className="flex gap-4 mt-2 animate-fade-in-2">
              <button className="bg-amber-500 text-stone-800 px-4 py-1 font-semibold rounded-full hover:bg-amber-400 transition ease-in-out">
                My projects
              </button>
              <button className=" border-2 border-stone-700 text-stone-700 px-4 py-1 font-semibold rounded-full hover:border-stone-500 hover:text-stone-500 transition ease-in-out">
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
