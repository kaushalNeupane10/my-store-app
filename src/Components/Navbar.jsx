import { FaStore } from "react-icons/fa";

const Navbar =() =>{
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-center shadow-sm">
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 cursor-pointer hover:scale-105 transition-transform duration-300">
        <FaStore className="text-indigo-600 text-2xl" />
        <span className="tracking-wide">My Store</span>
      </div>
    </nav>
  );
};
export default Navbar;
