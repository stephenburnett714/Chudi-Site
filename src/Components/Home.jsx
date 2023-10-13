import React from "react";
import About from "./About";
import GameDesign from "./GameDesign";
import Animation from "./Animation";
import ComputerScience from "./ComputerScience";


export default function Home() {
  return (
    <div className="pt-16 pb-8">
      <About/>
      <GameDesign/>
      <Animation/>
      <ComputerScience/>
    </div>
  );
}
