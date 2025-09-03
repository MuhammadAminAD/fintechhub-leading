import { Contact as ContactData } from "../Constants/index.constants.ts";

export default function Contact() {
      return (
            <section className="container text-white my-8 xl:my-[112px] xl:flex gap-20 max-xl:px-8 max-xl:w-full!">
                  <div className="xl:w-110">
                        {ContactData.map(({ id, title, linkTitle, link, Icon, desc }) => {
                              const titleText = title.split(" ");
                              return (
                                    <div data-aos="zoom-out-right" key={id} className="mb-5 xl:mb-10 last:mb-0">
                                          <img src={Icon} alt="" className="w-8 h-8 mb-4" />
                                          <h3 className="font-bold font-unbounded xl:text-[26px] text-[28px] leading-[110%] tracking-[-1%] uppercase mb-2">
                                                {titleText.map((item, index) =>
                                                      index === 0
                                                            ? <span className="text-purple">{item} </span>
                                                            : item)}
                                          </h3>
                                          <p className="text-lg text-white leading-[150%] font-nunito mb-2">{desc}</p>
                                          <a href={link} target="blank" className="md:hover:underline text-lg text-white leading-[150%] font-nunito">{linkTitle}</a>
                                    </div>
                              )
                        })}
                  </div>

                  <div className="w-full max-xl:mt-5">
                        <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.3098507597806!2d69.26797904368067!3d41.302122529659144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84cf0f93df79be43%3A0x7a2e69ecded3ed88!2sFintech%20Innovation%20Hub!5e0!3m2!1sru!2s!4v1756229868310!5m2!1sru!2s"
                              className="w-full h-full"
                              loading="lazy">
                        </iframe>
                  </div>
            </section>
      )
}
