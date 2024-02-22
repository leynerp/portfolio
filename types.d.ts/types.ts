import { Locale } from '@/i18n/i18n';

export interface Language{
    name:string,
    abr:Locale,
    img:string
  }

export interface ProjectsData{
    title:string,
    description:string,
    image:string,
    url:string,
    technology: string []
}
