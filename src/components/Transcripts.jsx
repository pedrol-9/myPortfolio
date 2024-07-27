import React from 'react'
import { useTranslation } from 'react-i18next';

const Transcripts = () => {

  const { t } = useTranslation();

  return (
    <div className='px-4 py-2 mt-4 hover:bg-[#E8DFCA] hover:bg-opacity-10 rounded-lg transition duration-300' id='transcripts'>
      <h3 className='font-lastnames italic'>{t('transcript_1')}</h3>

      <div className='flex flex-wrap md:flex-nowrap md:gap-2 justify-center md:items-center'>
        <picture className='w-10/12 relative block overflow-hidden rounded-lg my-4 shadow-[0px_0px_10px_2px_#2d3748] hover:shadow-[0px_0px_10px_6px_#2d3748] md:w-6/12 lg:w-3/12 xl:w-1/12'>

          <img src="/mindhub-transcript.png" alt="Homebanking App thumbnail" className='rounded-lg w-full' />

          <a href="https://www.acreditta.com/credential/021cff4c-f4a9-45df-aa58-74453b681a0f" className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </a>
        </picture>
        <p className='w-full md:px-2 md:line-clamp-6'>{t('transcript_1_description')}</p>
      </div>
    </div>
  )
}

export default Transcripts