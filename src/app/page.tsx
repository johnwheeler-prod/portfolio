import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-stone-200 overflow-hidden">
      <Hero />
    </main>
  );
}

const Hero = ({}) => {
  return (
    <section className="h-full flex items-center relative">
      <div className="absolute left-[-25%] top-[30%] h-96 w-96 z-10">
        <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full opacity-[50%] rounded-full blur-sm animate-float"></div>
        <div className="absolute top-0 left-0 bg-gradient-conic from-rose-500 via-green-600 to-teal-300 h-[92%] w-[92%] opacity-[50%] rounded-full transform translate-x-12 translate-y-8 blur-sm animate-float-1"></div>
        <div className=" absolute top-0 left-0 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 opacity-[50%] h-[84%] w-[84%] rounded-full transform translate-x-8 translate-y-16 blur-sm animate-float-2"></div>
        <div className=" absolute top-0 left-0 bg-gradient-radial from-amber-500 via-yellow-200 to-lime-400 opacity-[50%] h-2/3 w-2/3 rounded-full transform translate-x-8 translate-y-16 blur-sm animate-float-3"></div>
      </div>
      <div className="container flex flex-col justify-center items-center relative z-50">
        <div className="aspect-video rounded-3xl bg-white/10 shadow-lg ring-1 ring-black/5 px-10 py-12 flex items-center backdrop-blur-xl relative">
          {/* <div className="absolute top-8 left-8 hidden md:block">
            <div className="text-xs max-w-52 font-mono">
              dont mind this, i'm just enjoying some time playing with color,
              texture, and filters
            </div>
            <div className="font-extrabold text-6xl text-pink-500 absolute top-[-1.5rem] right-2 transform rotate-12">
              *
            </div>
          </div> */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-stone-800 z-40">
              John M. Wheeler
            </h1>
            <p className="text-gray-700 font-medium animate-fade-in">
              I'm an experienced software and web engineer with a passion for
              implementing high quality designs.
            </p>
            <div className="flex flex-col md:flex-row gap-3 mt-4 animate-fade-in-2">
              <button className="bg-purple-500 text-stone-900 px-4 py-1 font-semibold rounded-full hover:bg-pink-500 transition ease-in-out">
                My projects
              </button>
              <button className=" border-2 border-stone-700 text-stone-700 px-4 py-1 font-semibold rounded-full hover:border-gray-600 hover:text-gray-600 transition ease-in-out">
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
