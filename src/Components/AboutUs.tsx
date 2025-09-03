import { AboutUs as AboutUsData } from "../Constants/index.constants.ts";
import { styles } from "../Styles/index.styles.ts";

export default function AboutUs() {
      return (
            <section className="container xl:flex gap-20 my-8 xl:my-[112px] max-md:px-[52px] max-md:w-full!">
                  <div className="max-w-[380px]">
                        <h3 className="font-semibold font-nunito text-md leading-[150%] text-white">Fintechhub</h3>
                        <h2 className={`${styles.title} xl:w-[380px] mt-4 mb-6 text-[22px] xl:my-6 text-wrao`}>
                              Nima uchun <span className="text-purple">aynan</span> FINTECHHUB IT AKADEMIYASI?
                        </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 xl:gap-12 max-xl:mt-5">
                        {AboutUsData.map(({ id, Icon, title, text, span }) => {
                              const parts = title.split(new RegExp(`(${span})`, "gi"));

                              return (
                                    <div key={id} className="max-w-[386px]" data-aos="zoom-in-up">
                                          <img src={Icon} alt="icon" className="w-12 h-12" />
                                          <h4 className="text-white font-unbounded font-bold leading-[100%] text-[22px] xl:text-[32px] tracking-[-1%] my-6 uppercase">
                                                {parts.map((part, index) =>
                                                      part.toLowerCase() === span.toLowerCase()
                                                            ? <span key={index} className="!text-purple">{part}</span>
                                                            : <span key={index}>{part}</span>

                                                )}
                                          </h4>
                                          <p className="text-lg font-nunito leading-[150%] text-white">{text}</p>
                                    </div>
                              );
                        })}
                  </div>

            </section>
      )
}
