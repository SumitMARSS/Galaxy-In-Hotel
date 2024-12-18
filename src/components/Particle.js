
// import { useCallback, useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim"; 
// import React from "react";


// const Particle = () => {
//     const [init, setInit] = useState(false);

//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             // Load the slim engine
//             await loadSlim(engine);
//         }).then(() => {
//             setInit(true);
//         });
//     }, []);

//     const particlesLoaded = useCallback(async (container) => {
//         await console.log(container);
//     }, []);

//     return (
//         init && (
//             <Particles
//                 id="tsparticles"
//                 particlesLoaded={particlesLoaded}
//                 options={{
//                     background: {
//                         color: {
//                             value: "transparent", // Adjust this as needed
//                         },
//                     },
//                     fpsLimit: 150,
//                     interactivity: {
//                         events: {
//                             onClick: {
//                                 enable: true,
//                                 mode: "push",
//                             },
//                             onHover: {
//                                 enable: true,
//                                 mode: "repulse",
//                             },
//                             resize: true,
//                         },
//                         modes: {
//                             push: {
//                                 quantity: 4,
//                             },
//                             repulse: {
//                                 distance: 100,
//                                 duration: 0.4,
//                             },
//                         },
//                     },
//                     particles: {
//                         color: {
//                             value: "#ffffff",
//                         },
//                         links: {
//                             color: "#ffffff",
//                             distance: 100,
//                             enable: true,
//                             opacity: 0.5,
//                             width: 0.7,
//                         },
//                         move: {
//                             direction: "none",
//                             enable: true,
//                             outModes: {
//                                 default: "bounce",
//                             },
//                             random: true,
//                             speed: 1,
//                             straight: false,
//                         },
//                         number: {
//                             density: {
//                                 enable: true,
//                                 area: 800,
//                             },
//                             value: 100,
//                         },
//                         opacity: {
//                             value: 0.5,
//                         },
//                         shape: {
//                             type: "circle",
//                         },
//                         size: {
//                             value: { min: 0.8, max: 4 },
//                         },
//                     },
//                     detectRetina: true,
//                 }}
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     zIndex: 0,
//                 }}
//             />
//         )
//     );
// };

// export default Particle;

import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999, // Test with a high z-index value
      }}
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
