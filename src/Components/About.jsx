import React from "react";
import crystal from "../assets/Images/crystalnexus.png";

export default function About() {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        <div className="text-3xl pb-4 z-30 relative z-10 bg-white bg-opacity-60 pt-8 px-4 chudi-darkblue">ABOUT ME</div>
          <div className="relative z-10 ">
            <div className="bg-white bg-opacity-60 px-4 chudi-darkblue">
              My name is Chudi Onwuasoanya, and I design experiences between
              reality and the digital to connect the boundary.
            </div>
            <div className="bg-white bg-opacity-60 pb-8 px-4 chudi-darkblue">
              Passionate about multimedia art, creating experiential media- I
              spend my free time creating audiovisual installations, working on
              games, and the many art projects around the site. I focus on the
              intersection of technology, art, and reality, leveraging my
              Computer Science skills to create more complex productions that
              feature a pipeline of multiple technologies. Leveraging
              Touchdesigner, Blender and Houdini, I can design, perform, and
              fulfill all aspects of digital production and design.
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={crystal}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>
      </div>
    </div>
  );
}