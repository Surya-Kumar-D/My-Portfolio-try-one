import { DiReact } from "react-icons/di";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Main() {
  return (
    <div className="grid h-dvh grid-cols-[60rem_auto] bg-[#61dafb1f]">
      <div className="flex items-center justify-center">
        <img
          className="mix-blend-multiply"
          src="./developer.jpg"
          alt="Developer-image"
        />
      </div>
      <div className="flex items-center justify-center space-x-3 text-[5rem] text-[#61DAFB]">
        <DiReact size={300} />
        <div>
          <FaQuoteLeft size={20} />
          <span>I am a React Developer</span>
          <FaQuoteRight size={20} />
        </div>
      </div>
    </div>
  );
}

export default Main;
