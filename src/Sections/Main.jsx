import { DiReact } from "react-icons/di";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Main() {
  return (
    <div className="grid h-svh w-full bg-[#61dafb1f] md:grid-cols-[60rem_auto]">
      <div className="order-2 flex items-center justify-center md:order-1">
        <img
          className="block mix-blend-multiply"
          src="./developer.jpg"
          alt="Developer-image"
        />
      </div>
      <div className="order-1 flex items-center justify-center space-x-3 text-[#61DAFB] md:order-2 md:text-[5rem]">
        <DiReact size={200} className="text-[100] md:text-[300]" />
        <div>
          <FaQuoteLeft size={20} />
          <span className="text-2xl">I am Surya Kumar</span>
          <FaQuoteRight size={20} />
        </div>
      </div>
    </div>
  );
}

export default Main;
