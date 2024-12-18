import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <span style={{ fontSize: "12px", color: "#D383FF", fontWeight: "bold" }}>
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "MERN Stack Developer",
            "Full Stack Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </span>
    
  );
}

export default Type;

