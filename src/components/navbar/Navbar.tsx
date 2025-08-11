import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="p-8">
      <div className="flex items-center">
        <Image src="/images/icon.png" width={60} height={100} alt="icon" />
        <div className="uppercase text-3xl font-extrabold bg-transparent text-transparent bg-clip-text bg-gradient-to-tl from-purple-800 to-purple-400 p-4">
          TaskMate
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
