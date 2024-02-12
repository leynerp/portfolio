import SocialButtons from '@/components/SocialButtons';
import { ExperienceIcon } from '@/components/SvgComponent';
import Experience from '@/components/experience';
import Home from '@/components/home';
import { getDictionary } from '@/dictionaries/get-diccionary';
import { Locale } from '@/i18n/i18n';

async function Page ({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main className=' mt-[66px]  size-full '>
      <Home dictionary={dictionary} lang={params.lang} />
      <section className='mx-auto w-full pb-[150px] md:max-w-[750px]'>
        <SocialButtons />
      </section>
      <div className='space-y-24'>
        <Experience />

      </div>
    </main>
  );
}

export default Page;
