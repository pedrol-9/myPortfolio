import React from 'react'
import { useTranslation } from 'react-i18next';
import Experience from '../components/Experience';

const Home = () => {

  const { t } = useTranslation();

  return (
    <div className='flex flex-col text-white p-6 border m-1 mt-24'>
      {/* <h1 className='text-3xl'>{t('my_portfolio')}</h1> */}
      <div>
        <h1 className='font-names text-5xl'>Pedro Sanabria {/* <span className='font-names text-3xl'>Sanabria Quintero</span> */}</h1>
        <h3 className='font-lastnames text-xl '>{t('profession')}</h3>
      </div>
      <div className='text-justify bg-gray-100 bg-opacity-10 px-4 py-2 rounded-xl mt-8'>
        <div className='flex items-baseline'>
          <h1 className='text-2xl font-semibold italic'>{t('about')}</h1>
          <hr className='flex-1 ml-2 border-dotted' />
        </div>
        <p className='mt-2'>{t('about_me')}</p>
        <p className='my-3'>{t('about_me_2')}</p>
        <p className=''>{t('about_me_3')}</p>
      </div>
      <div className='text-justify px-4 py-2 rounded-xl mt-8 '>
        <div className='flex items-baseline'>
          <h1 className='text-2xl font-semibold italic'>{t('experience')}</h1>
          <hr className='flex-1 ml-2 border-dotted' />
        </div>
        <Experience />

      </div>
    </div>
  )
}

export default Home