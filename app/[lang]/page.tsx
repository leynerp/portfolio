import SocialButtons from '@/components/SocialButtons';
import Experience from '@/components/experience';
import Home from '@/components/home';
import Projects from '@/components/Projects';
import { getDictionary } from '@/dictionaries/get-diccionary';
import { Locale } from '@/i18n/i18n';
import Skill from '@/components/Skill';
import AboutmeCmp from '@/components/AboutmeCmp';

async function Page ({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main className=' mt-[66px]  size-full '>
      <Home dictionary={dictionary} lang={params.lang} />
      <section className='mx-auto mb-[200px] w-full md:max-w-[750px]'>
        <SocialButtons dictionary={dictionary} />
      </section>
      <div className='space-y-24'>
        <Experience dictionary={dictionary} />
        <Projects dictionary={dictionary} />
        <Skill dictionary={dictionary} />
        <AboutmeCmp dictionary={dictionary} />
      </div>
    </main>
  );
}

export default Page;
