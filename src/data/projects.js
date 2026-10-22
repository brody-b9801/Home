import countdownBotImg from '../images/countdownBot.webp'
import florrImg from '../images/FlorrThumbnail.webp'
import gardenGuardianImg from '../images/GardenGuardian.webp'
import capsuleClashImg from '../images/capsule-clash.webp'
import ivrImg from '../images/vex_thumbnail.webp'
import knossosImg from '../images/knossosCapitalist.webp'

const placeholder = `${import.meta.env.BASE_URL}thumbnails/placeholder.svg`

export const site = {
  name: "Brody Blask's Portfolio",
  intro: "Hi, I'm a sophomore studying Computer Science at the University of Illinois Urbana-Champaign. I'm interested in game development and design, robotics, and software engineering. Check out some of the projects I've made!",
  github: 'https://github.com/brody-b9801',
  linkedin: 'https://www.linkedin.com/in/brody-blask/',
}

export const sections = [
  {
    title: 'Game Dev',
    projects: [
      {
        title: 'Capsule Clash',
        description: 'My proudest project - a 3D multiplayer Unity FPS, coming soon to Steam!',
        url: 'https://brody-b9801.github.io/Capsule-Clash/',
        embedUrl: 'https://brody-b9801.github.io/Capsule-Clash/',
        thumbnail: capsuleClashImg,
      },
      {
        title: 'Garden Guardian',
        description: 'Defend your garden from hordes of flies! Built in Unity for a 48-hour game jam.',
        url: 'https://brody-b9801.itch.io/garden-guardian',
        embedUrl: 'https://itch.io/embed-upload/19036942',
        thumbnail: gardenGuardianImg,
        alt: 'Garden Guardian title art: a spider in a garden of tulips and grass beside a watering can',
        thumbnailBg: '#3c5b3d',
      },
      {
        title: 'Knossos Capitalist',
        description: 'My CLCV 220 final project, a palatial economy simulator.',
        url: 'https://brody-b9801.itch.io/knossos-capitalist',
        embedUrl: 'https://itch.io/embed-upload/15783378',
        thumbnail: knossosImg,
        alt: 'Knossos Capitalist title art: the Minoan palace of Knossos under a blue banner',
        thumbnailBg: '#6385eb',
      },
    ],
  },
  {
    title: 'Robotics',
    projects: [
      {
        title: 'IVR Localization',
        description: 'Monte Carlo Localization and odometry in C++, with a React telemetry viewer.',
        url: 'https://brody-b9801.github.io/IVR-Localization/',
        embedUrl: 'https://brody-b9801.github.io/IVR-Localization/',
        thumbnail: ivrImg,
        alt: 'Illini VEX Robotics logo',
      },
    ],
  },
  {
    title: 'Fullstack Projects',
    projects: [
      {
        title: 'Countdown Bot',
        description: 'A small discord bot to countdown the days until an event',
        url: 'https://brody-b9801.github.io/CountdownBot/',
        embedUrl: 'https://brody-b9801.github.io/CountdownBot/',
        thumbnail: countdownBotImg,
        alt: 'A pixel-art flamingo in a party hat beside the Discord logo',
      },
      {
        title: 'Legacy Florr.io',
        description: "A wasm patch of legacy florr.io's sp_server.wasm, adding server options.",
        url: 'https://brody-b9801.github.io/Legacy-florr.io/',
        embedUrl: 'https://brody-b9801.github.io/Legacy-florr.io/',
        thumbnail: florrImg,
        alt: 'Two florr.io players surrounded by petals, under the title Multiplayer Legacy Florr',
      },
    ],
  },
  {
    title: 'Analog Games',
    projects: [],
  },
  {
    title: 'Links',
    projects: [],
  },
]
