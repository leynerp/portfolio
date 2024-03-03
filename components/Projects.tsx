import { ProjectIcon } from './SvgComponent';
import ProjectsCard from './ProjectsCard'
import { ProjectsData } from '@/types.d.ts/types'

export default function Projects ({ dictionary }:{dictionary:any}) {
  const projectList = dictionary.projects.data as ProjectsData[];
  return (
    <section id='projects' className='mx-auto w-full items-start md:max-w-[750px]'>
      <h1 className=' flex  gap-x-3 text-3xl text-white opacity-80  '>
        <ProjectIcon size={{ width: 40, height: 40 }} /> {dictionary.projects.name}
      </h1>
      <div className='mt-10 grid max-h-[90%] grid-cols-1 justify-items-center gap-2 md:grid-cols-2'>
        {projectList.map(project => (
          <ProjectsCard
            key={project.title}
            project={project}
            dictionary={dictionary}
          />
        ))}
      </div>
    </section>
  )
}
