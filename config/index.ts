import {
  HomeIcon,
  ExperienceIcon,
  ProjectIcon,
  AboutMe,
  Skill
} from '@/components/SvgComponent';
import { Language } from '@/types.d.ts/types';
export const skillDataFront = [
  {
    name: 'Html 5',
    Image: '/html.png',
    width: 60,
    height: 60
  },
  {
    name: 'Css',
    Image: '/css.png',
    width: 60,
    height: 60
  },
  {
    name: 'JavaScript',
    Image: '/js.png',
    width: 45,
    height: 45
  },
  {
    name: 'Tailwind Css',
    Image: '/tailwind.png',
    width: 60,
    height: 60
  },
  {
    name: 'React',
    Image: '/react.png',
    width: 60,
    height: 60
  },
  {
    name: 'Redux',
    Image: '/redux.png',
    width: 60,
    height: 60
  },
  {
    name: 'Zustand',
    Image: '/zustand.png',
    width: 75,
    height: 100
  },
  {
    name: 'TypeScript',
    Image: '/ts.png',
    width: 60,
    height: 20
  },
  {
    name: 'angular',
    Image: '/angular.png',
    width: 60,
    height: 60
  },
  {
    name: 'Material',
    Image: '/mui.png',
    width: 60,
    height: 60
  },
  {
    name: 'Bootstrap',
    Image: '/bootstrap.png',
    width: 60,
    height: 60
  }
];

export const skillDataBack = [
  {
    name: 'Next js 14',
    Image: '/next.png',
    width: 60,
    height: 60
  },
  {
    name: 'Mongo db',
    Image: '/mongodb.png',
    width: 60,
    height: 60
  },
  {
    name: 'Postgres',
    Image: '/postgres.png',
    width: 60,
    height: 60
  },
  {
    name: 'MySql',
    Image: '/mysql.png',
    width: 60,
    height: 60
  },
  {
    name: 'Node js',
    Image: '/node-js.png',
    width: 60,
    height: 60
  },
  {
    name: 'Spring Boot',
    Image: '/springboot.png',
    width: 60,
    height: 60
  },
  {
    name: 'Nest',
    Image: '/nestjs.png',
    width: 60,
    height: 60
  },
  {
    name: 'Zend',
    Image: '/zend.png',
    width: 60,
    height: 60
  }
];

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
];

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
    link: '/#projects',
    ref: 'projects',
    size: { width: 20, height: 20 }
  },
  {
    icon: Skill,
    link: '/#skill',
    ref: 'skill',
    size: { width: 25, height: 25 }
  },
  {
    icon: AboutMe,
    link: '/about-me',
    ref: 'about-me',
    size: { width: 20, height: 20 }
  }
];

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
];
