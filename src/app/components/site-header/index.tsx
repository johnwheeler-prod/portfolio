const Nav = ({}) => {
  return (
    <nav className="w-full flex justify-center fixed top-0 py-6 px-4 z-50 bg-white/10 shadow-sm ring-1 ring-black/5 backdrop-blur-md">
      <div className="container flex justify-between">
        <div>
          <a className="text-blue-700" href="#top">
            John
          </a>
        </div>
        <div className="flex gap-4 text-blue-700">
          <a href="#connect">connect</a>
          <a href="#experience">projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
