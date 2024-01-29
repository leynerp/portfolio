import { HomeIcon, ExperienceIcon, ProjectIcon, AboutMe, Skill } from '@/components/SvgComponent';
import { Language } from '@/types';
export const SkillData = [
  {
    name: 'Html 5',
    Image: '/html.png',
    width: 80,
    height: 80
  },
  {
    name: 'Css',
    Image: '/css.png',
    width: 80,
    height: 80
  },
  {
    name: 'JavaScript',
    Image: '/js.png',
    width: 65,
    height: 65
  },
  {
    name: 'Tailwind Css',
    Image: '/tailwind.png',
    width: 80,
    height: 80
  },
  {
    name: 'React',
    Image: '/react.png',
    width: 80,
    height: 80
  },
  {
    name: 'Redux',
    Image: '/redux.png',
    width: 80,
    height: 80
  },

  {
    name: 'TypeScript',
    Image: '/ts.png',
    width: 80,
    height: 80
  },
  {
    name: 'Next js 13',
    Image: '/next.png',
    width: 80,
    height: 80
  },
  {
    name: 'Framer Motion',
    Image: '/framer.png',
    width: 80,
    height: 80
  },
  {
    name: 'Stripe Payment',
    Image: '/stripe.webp',
    width: 80,
    height: 80
  },
  {
    name: 'Node js',
    Image: '/node-js.png',
    width: 80,
    height: 80
  },
  {
    name: 'Mongo db',
    Image: '/mongodb.png',
    width: 40,
    height: 40
  }
]

export const Socials = [
  {
    name: 'Discord',
    src: '/instagram.svg'
  },
  {
    name: 'Facebook',
    src: '/facebook.svg'
  },
  {
    name: 'Instagram',
    src: '/discord.svg'
  }
]
export const Projects = [
  {
    title: 'Modern Nextjs Website',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    src: '/NextWebsite.png'
  },
  {
    title: 'Space Themed Website',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    src: '/SpaceWebsite.png'
  },
  {
    title: 'Modern Nextjs Portfolio',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    src: '/WebPortfolio.png'
  },
  {
    title: 'Matrix themed Website',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    src: '/Matrix.png'
  }
]

export const NavLinks = [
  {
    icon: HomeIcon,
    link: '/'
  },
  {
    icon: ExperienceIcon,
    link: '/experience'
  },
  {
    icon: ProjectIcon,
    link: '/my-projects'
  },
  {
    icon: AboutMe,
    link: '/about-me'
  }, {
    icon: Skill,
    link: '/skill'
  }
]

export const languageEnabled: Language[] = [
  {
    name: 'Español',
    abr: 'es',
    img: '/flag-es.svg'
  },
  {
    name: 'English',
    abr: 'en',
    img: '/flag-en.svg'
  }
]
