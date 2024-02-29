import { Locale } from '@/i18n/i18n';
function Home ({ dictionary, lang }:{dictionary:any, lang:Locale}) {
  return (

    <section id='home' className='z-[10]  mx-auto mt-[180px] flex w-full flex-col items-start gap-3 pb-4  md:max-w-[750px] '>
      <h1 className='text-[35px] font-semibold text-white'>
        {dictionary.homeContent.name}
        <span className='bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent'>
          {' '}
          {dictionary.homeContent.role}
        </span>
      </h1>
      <p className='max-w-[900px] text-2xl text-gray-200  md:block'>
        {dictionary.homeContent.experience}
        <strong className=' text-red-200'> {dictionary.homeContent.location}</strong>
      </p>

    </section>
  )
}

export default Home
