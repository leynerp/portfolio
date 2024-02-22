import { HomeIcon, ExperienceIcon, ProjectIcon, AboutMe, Skill } from '@/components/SvgComponent';
import { Language } from '@/types.d.ts/types';
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

export const NavLinks = [
  {
    icon: HomeIcon,
    link: '/',
    ref: 'home',
    size: { width: 20, height: 20 }
  },
  {
    icon: ExperienceIcon,
    link: '/#experience',
    ref: 'experience',
    size: { width: 25, height: 25 }
  },
  {
    icon: ProjectIcon,
    link: '/#my-projects',
    ref: 'projects',
    size: { width: 20, height: 20 }
  },
  {
    icon: AboutMe,
    link: '/about-me',
    ref: 'about-me',
    size: { width: 20, height: 20 }
  }, {
    icon: Skill,
    link: '/skill',
    ref: 'skill',
    size: { width: 25, height: 25 }
  }
]

export const ListProjects = [
  {
    title: 'Reporte de Operaciones Sospechosas (ROS)',
    text: '',
    src: '/Ros.png'
  },
  {
    title: 'Sistema de Gestión de la Urgencia Médica',
    text: 'bbbb.',
    src: '/SIGUM.png'
  },
  {
    title: 'Sistema de Reclamaciones de la Plataforma ENZONA',
    text: 'cccc',
    src: '/Enzona.png'
  },
  {
    title: 'Sistema de Información al Visitante',
    text: 'ddd',
    src: '/Infotur.png'
  }
];


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
