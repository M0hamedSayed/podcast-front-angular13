import { Component, OnInit } from '@angular/core';
import { Container, Engine, Main, ISourceOptions } from 'tsparticles';

@Component({
  selector: 'app-particles-js',
  templateUrl: './particles-js.component.html',
  styleUrls: ['./particles-js.component.css']
})
export class ParticlesJSComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }
  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "none"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "grab"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.4
          }
        }
      }
    },
    particles: {
      color: {
        value: "#0d47a1"
      },
      links: {
        color: "#0d47a1",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 2,
        straight: false,
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      },
      number: {
        density: {
          enable: true,
          area: 600
        },
        value: 30
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      }
    },

    detectRetina: true
  };

  particlesLoaded(container: Container): void {
    // console.log(container);
  }

  particlesInit(main: Engine): any {
    // console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }

}
