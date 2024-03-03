import { ExperienceIcon } from './SvgComponent'
const Experience = ({ dictionary }:{dictionary:any}) => {
  return (
    <section id='experience' className='mx-auto w-full items-start md:max-w-[750px]'>
      <h1 className=' flex  gap-x-3 text-3xl text-white opacity-80  '>
        <ExperienceIcon size={{ width: 40, height: 40 }} /> {dictionary.experience.name}
      </h1>
      <article className='mx-auto mt-16 flex max-w-[750px] flex-col pl-[16px]'>
        <ol className='relative mx-auto w-full border-s border-orange-300 '>
          {dictionary.experience.data.map((value:any, index:any) => {
            return (
              <li key={value.time} className='mb-10 ms-6'>
                <span className='absolute -start-3 flex size-6 items-center justify-center rounded-full bg-orange-300 ring-8 ring-orange-300'>
                  <svg className='size-2.5 text-blue-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </span>
                <div className='flex flex-col pl-3'>
                  <h3 className='mb-1 flex items-center text-lg font-semibold text-orange-300'>{value.role} <span className={`me-2 ms-3 ${index === 0 ? '' : 'hidden'}  rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800`}>Latest</span></h3>
                  <p className='mb-2 block text-sm font-normal leading-none text-gray-400'>{value.time}</p>
                  <p className='mb-3 block text-pretty text-[18px] font-normal   text-gray-400'>{value.description}</p>
                  <p className='mb-2 text-base font-normal text-red-200 '>{value.company}</p>
                </div>
              </li>
            )
          })}

        </ol>

      </article>
    </section>
  )
}
export default Experience
