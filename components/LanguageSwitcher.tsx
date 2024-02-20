'use client'
import { languageEnabled, Language } from '@/config';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import { Locale } from '@/i18n/i18n';

const LanguageSwitcher = ({ lang }:{lang:Locale}) => {
  const [language, setLanguage] = useState<Language>(() => {
    return languageEnabled.find((itemLang) => itemLang.abr === lang) ?? languageEnabled[0]
  });
  const router = useRouter()

  const handlerChange = (selectValue:ChangeEvent<HTMLSelectElement>) => {
    const lang = languageEnabled.find((itemLang) => itemLang.abr === selectValue.target.value) ?? languageEnabled[0];
    setLanguage(lang)
    router.push(lang.abr)
  };
  return (
    <div className='mr-5 flex justify-end gap-x-2'>
      <Image
        className='rounded-full shadow'
        src={language.img}
        width={30}
        height={30}
        alt='Screenshots of the dashboard project showing mobile version'
      />
      <select
        id='languageSwitcher'
        name='customerId'
        onChange={handlerChange}
        className='peer block w-10 cursor-pointer rounded-md border border-[#7042f861] bg-slate-900 text-sm  text-white outline-2 placeholder:text-gray-500'
        defaultValue={language.abr}
      >
        {languageEnabled.map((lang) => (
          <option key={lang.abr} value={lang.abr}>
            {lang.abr}
          </option>
        ))}
      </select>
    </div>
  )
};

export default LanguageSwitcher
