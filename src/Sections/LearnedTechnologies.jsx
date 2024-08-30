import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

function LearnedTechnologies() {
  return (
    <section>
      <h1 className="text-center text-[5rem] text-[#61DAFB]">
        Technologies learned
      </h1>
      <marquee>
        <div className="flex h-screen items-center justify-center text-[#61DAFB]">
          <DiHtml5
            className="transition-all hover:translate-y-1"
            size={500}
            color="#E34F26"
          />
          <DiCss3
            size={500}
            color="#1572B6

"
          />{" "}
          <DiJavascript1
            size={500}
            color="#F7DF1E

"
          />
          <DiReact size={500} color="61DAFB" />{" "}
          <SiNextdotjs
            size={500}
            color="#000000

"
          />
        </div>
      </marquee>
    </section>
  );
}

export default LearnedTechnologies;
