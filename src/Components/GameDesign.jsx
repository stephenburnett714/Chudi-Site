import React, { useState } from "react";
import circles from "../assets/Images/0001-0480.gif";
import folliage from "../assets/Images/folliagework.png";
import sunken from "../assets/Images/sunkenoasis2.png";
import gameu from "../assets/Images/gameu.png";
import iguanamoth from "../assets/Images/iguanamoth.png";
import aethersphere from "../assets/Images/aetherspherephoto2.png";

export default function GameDesign() {

  return (
    <div className="pt-16 pb-8 bg-chudi-blue ">

      {/* Game Design Info */}
      <div className="py-4 px-8">
        <div>Game Design</div>
        <div>
          I primarily utilize Unity, Unreal Engine, and Blender to make games,
          in addition to having created curriculum to teach these programs to
          students. With experience in modeling, scripting, audio production and
          asset creation, I have experience with all aspects of game production.
          As a generalist, I have worked as a manager, modeler, and designer on
          the various indie projects and jobs described below.
        </div>
        <div>
          My different skillsets have allowed me to design more efficiently and
          communicate on teams of all different skillsets. I care about
          designing effective solutions toward all levels of the production
          pipeline.
        </div>
      </div>

      {/* Game-U */}
      <div className="py-4 px-8">
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

      {/* Iguanamoth */}
      <div className="py-4 px-8">
        <div>Iguanamoth 2022-2023</div>
        <div>
          A high paced motion driven game featuring the protaginist atop a
          hoverbaord within an everchanging environment.
        </div>
        <div>
          Iguanamoth was my capstone project at NJIT in which I was able to
          manage a team of fellow student developers for three months during the
          course. In addition to detailing all of the financial information of a
          potential business, I ensured the different members of the team
          completed their tasks. To complete the project within the deadline I
          assigned everyone to features through a Scrum Board. I handled weekly
          reports about progress, in as well as some of the modeling in game.
        </div>
        <div>
          <img src={iguanamoth} alt="" />
        </div>
      </div>

      {/* Aethersphere */}
      <div className="py-4 px-8">
        <div>
          <img src={aethersphere} alt="" />
        </div>
        <div>Aethersphere 2022</div>
        <div>
          Aethersphere 2022 Roll and weave through difficult obstacles and
          balancing acts.
        </div>
        <div>
          A project for NJIT's 2022 Game Jam. Aethersphere was an action puzzle
          game featuring the player balancing a ball across difficult terrain.
          We quickly built out a series of levels and a sandbox for players to
          explore in. I designed a large section of the art assets within the
          game, in addition to the level design.
        </div>
      </div>
    </div>
  );
}
