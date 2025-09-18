import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Computer Science Engineer & Problem Solver
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Hi, I'm Subharjun Bose — a final-year Computer Science Engineering
            student driven by a passion for solving real-world problems through
            innovative technology. I specialize in full-stack development and
            machine learning, with expertise in JavaScript, React.js, Node.js,
            Python, FastAPI, and modern tools like Next.js, Three.js, and
            Streamlit. Through consistent DSA practice and hands-on project
            building, I create applications that make meaningful impact — from
            AI-powered rural development tools to immersive 3D web experiences
            and intelligent automation systems. I'm constantly exploring how to
            merge technical excellence with creative functionality,
            strengthening my skills in system design, clean code practices, and
            deployment. My goal is to build user-focused solutions that are not
            only technically sound but create positive change in the real world.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">years of learning</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=html,css,js,react,nodejs,nextjs,threejs,python,java,flutter,git,github,docker,mongodb,mysql,linux,vscode"
            alt="Subharjun"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            JavaScript{" "}
            <sub className="font-semibold text-base">primary language</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Full-Stack{" "}
            <sub className="font-semibold text-base">development focus</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            AI/ML{" "}
            <sub className="font-semibold text-base">
              integration specialist
            </sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://leetcard.jacoblin.cool/Subharjun28?theme=dark&font=Nunito&ext=heatmap"
            alt="LeetCode Stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;

