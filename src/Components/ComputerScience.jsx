import React from "react";
import gameu from "../assets/Images/gameu.png";

export default function ComputerScience() {
  return (
    <div className="py-4 px-8 bg-chudi-blue">
      {/* Computer Science */}
      <div>
        <div className="text-2xl">Computer Science</div>
        <div>
          My Computer Science skills have allowed me to build websites,
          applications, and software for businesses and the Federal Government.
          My programming career has allowed me to teach students and peers, in
          addition to working on professional development teams. Through the use
          of Touchdesigner, I have also leveraged my skills to include GLSL to
          create realtime shaders and visuals for my digital production.
        </div>
      </div>

      {/* Game-U */}
      <div >
        <div>Game-U 2023-Current</div>
        <div>
          As an instructor for Game-U i facilitate the education of students
          from ages 6-18 in Game Design, 2d/3d Art, Animation, and Computer
          Science. I instruct students through curriculum for Unity, Construct,
          Godot, Blender, and independent coding projects within Replit. In
          addition, I create the curriculum for these classes, designing
          material for students with quantifiable goals within lesson modules.
        </div>
        <div>
          Being an educator not only in Game-U but also to teach Computer
          Science at Picatinny Arsenal, I have years of experience designing
          strategies to ensure knowledge retention and proficiency.
        </div>
        <div>
          <img src={gameu} alt="game-u" />
        </div>
      </div>

      {/* Picatinny Arsenal */}
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>Picatinny Arsenal 2017-2022</div>
        <div>
          <div>
            Picatinny Arsenal has allowed me to work on multiple development
            teams that provide software for the warfighter and groups that
            support them. Under seperate apperentice ships I worked under the
            Common Remotely Operated Weapon Station(CROWS) and the Gaming
            Interactive Technologies and Multimedia(GITM) teams. There, I
            developed the Commonly Remote Operated Weapon Station on a Scrum
            development team that tested and improved features in C++ and C to
            update previous iterations. While part of GITM, I built project
            management plugins for the management program, Redmine, employing
            Ruby on Rails to implement new features.
          </div>
          <div>
            This apprenticeship also allowed me to work as an educator. I was
            able to teach classes and provide curriculum for students in the
            6-8th grade, in addition to working as beta tester on a modular
            video game for students to virtually build their own robots.
          </div>
        </div>
      </div>

      <div>
        <div>The Coder School 2022-2023</div>
        <div>
          As a Coach at The Coder School, I coached K-12 students utilizing
          Scratch, Java, C++, React, HTML/CSS, Python, Flask and JavaScript to
          teach variables, loops, methods/functions, sorting algorithms, API
          calls and Object-Oriented Coding.
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
