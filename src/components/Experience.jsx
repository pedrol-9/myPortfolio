import React from 'react'
import { useTranslation } from 'react-i18next';

const Experience = () => {

  const { t } = useTranslation();

  return (
    <div>

      <div className='px-4 py-2 mt-4 hover:bg-[#E8DFCA] hover:bg-opacity-10 rounded-lg transition duration-300' id='current-experience'>

        <div className='flex justify-end mt-2'>
          <h4 className='font-lastnames text-[#002147] text-end font-bold bg-[#E8DFCA] bg-opacity-30 rounded-md inline-flex px-2 '>{t('first_date')}</h4>
        </div>

        <h3 className='font-lastnames italic'>{t('current_project')}</h3>

        <div className='flex flex-wrap justify-center'>
          <picture className='w-10/12 relative block overflow-hidden rounded-lg my-4 shadow-[0px_0px_10px_2px_#2d3748] hover:shadow-[0px_0px_10px_6px_#2d3748]'>

            <img src="/homebankingApp.PNG" alt="Homebanking App thumbnail" className='rounded-lg' />

            <a href="https://homebanking-app-jjps.onrender.com/" className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </a>
          </picture>
          <p className='w-full'>{t('current_exp_description')}</p>
        </div>
      </div>

      <div  className='px-4 py-2 mt-4 hover:bg-[#E8DFCA] hover:bg-opacity-10 rounded-lg transition duration-300' id='past-experience'>

        <div className='flex justify-end mt-2'>
          <h4 className='font-lastnames text-[#002147] text-end font-bold bg-[#E8DFCA] bg-opacity-30 rounded-md inline-flex px-2 '>{t('first_date')}</h4>
        </div>

        <h3 className='font-lastnames italic'>{t('previous_project')}</h3>

        <div className='flex flex-wrap justify-center'>
          <picture className='w-10/12 relative block overflow-hidden rounded-lg my-4 shadow-[0px_0px_10px_2px_#2d3748] hover:shadow-[0px_0px_10px_6px_#2d3748]'>

            <img src="/moviestackApp.PNG" alt="Moviestack App thumbnail" className='rounded-lg' />

            <a href="https://moviestack-app.netlify.app" className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </a>
          </picture>
          <p className='w-full'>{t('current_exp_description')}</p>
        </div>

      </div>
    </div>
  )
}

//shadow-[0px_0px_4px_1px_#002147] https://moviestack-app.netlify.app

export default Experience