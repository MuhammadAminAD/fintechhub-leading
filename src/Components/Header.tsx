
import { useState } from 'react'
import { styles } from '../Styles/index.styles'
import TelegramIcon from './Icons/TelegramIcon'
import ConnectModal from './ConnectModal'
export default function Header() {
      const [formModal, setFormModal] = useState(false)

      return (
            <header className='container my-8 xl:my-20 xl:flex items-center justify-between gap-20'>
                  <div data-aos="fade-right">
                        <h1 className={`${styles.title} xl:max-w-[680px] text-2xl md:text-[32px]`}>
                              Fintechhub oddiy IT akademiya emas, bu IT <span className='text-purple text-wrap!'>laboratoriyasi!</span>
                        </h1>
                  </div>

                  <div data-aos="fade-left">
                        <p className='font-nunito text-[20px] leading-[150%] text-white max-xl:mt-5'>Buni quyidagi 10 daqiqalik videoni ko'rsangiz tushunib olasiz.</p>
                        <div className='py-8'>
                              <iframe className='w-full xl:w-[268px] h-[175px] md:h-[300px] xl:h-[171px]' src="https://www.youtube.com/embed/jD6IDd6i86M?si=5eOm2xgdaFkKaUDS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                        </div>
                        <div className='flex gap-3 max-md:flex-col'>
                              <button className={`${styles.redBtn} max-md:w-full`} onClick={() => setFormModal(true)}>
                                    Bog’lanish
                              </button>


                              <a href="https://t.me/Fintech_Sotuv" target='blank'>
                                    <button className={`${styles.redBtn} flex gap-2 justify-center items-center bg-blue-500 border-blue-500 max-md:w-full`}>
                                          <TelegramIcon />
                                          Telegram orqali bog’lanish
                                    </button>
                              </a>
                        </div>
                  </div>
                  <ConnectModal isOpen={formModal} close={setFormModal} />
            </header>
      )
}

