import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RequestCallServices } from "../Services/RequestCall";
import z from "zod";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { styles } from "../Styles/index.styles";
import { useEffect } from "react";

export default function ConnectModal({ isOpen, close }: { isOpen: boolean, close: (value: boolean) => void }) {
      useEffect(() => {
            if (isOpen) {
                  document.body.style.overflow = "hidden";
            } else {
                  document.body.style.overflow = "auto";
            }

            return () => {
                  document.body.style.overflow = "auto";
            };
      }, [isOpen]);

      const schema = z.object({
            ism: z.string().min(3, "Ism kiritilishi kerak"),
            phone: z
                  .string()
                  .regex(/^\+998\d{9}$/, "Telefon raqami to‘liq kiritilishi kerak"),
      })

      const navigate = useNavigate()
      const {
            register,
            handleSubmit,
            control,
            formState: { errors },
      } = useForm({
            resolver: zodResolver(schema),
            defaultValues: {
                  ism: "",
                  phone: "",
            },
      })

      const onSubmit = async (data: { ism: string; phone: string }) => {
            const newData = {
                  ...data,
                  kurs: "frontend",
                  target: 4,
                  desc: ""
            }
            const response = await RequestCallServices(newData)
            if (response) {
                  navigate("/call")
            }
      }
      return (
            <section className="fixed w-screen h-screen bg-[rgba(0,0,0,0.05)] backdrop-blur-lg left-0 duration-700 flex items-center justify-center" style={{ top: isOpen ? 0 : '-200%' }} onClick={(e) => isOpen && e.currentTarget == e.target && close(false)}>
                  <div className="bg-neutral-800 py-3 md:py-4 px-3 md:px-4 max-w-9/10">
                        <h1 className="text-white text-2xl text-center font-bold mb-4 uppercase">Biz bilan <span className="text-purple ">bog’lanish</span></h1>
                        <div className="grid xl:grid-cols-[1fr_1.5fr] gap-2 items-center">
                              <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="flex flex-col text-start"
                              >
                                    {/* Ism */}
                                    <label className="font-nunito leading-[150%] mb-2 text-white text-[16px] sm:text-[18px]">
                                          Isimingiz
                                    </label>
                                    <input
                                          type="text"
                                          {...register("ism")}
                                          className="mb-1 w-full outline-0 bg-[#FFFFFF1A] h-12 px-4 text-[16px] sm:text-[20px] font-nunito leading-[150%] text-white max-w-full"
                                    />
                                    {errors.ism && (
                                          <span className="text-red-400 text-sm mb-5">
                                                {errors.ism.message}
                                          </span>
                                    )}

                                    {/* Telefon */}
                                    <label className="font-nunito leading-[150%] mb-2 text-white mt-2 text-[16px] sm:text-[20px]">
                                          Telefon raqamingiz
                                    </label>
                                    <Controller
                                          name="phone"
                                          control={control}
                                          render={({ field }) => (
                                                <PhoneInput
                                                      country={'uz'}
                                                      value={field.value}
                                                      onChange={field.onChange}
                                                      inputStyle={{
                                                            background: "#FFFFFF1A",
                                                            height: "48px",
                                                            fontSize: "20px",
                                                            fontFamily: "Nunito, sans-serif",
                                                            lineHeight: "150%",
                                                            width: "100%",
                                                            marginBottom: "4px",
                                                            border: 'none',
                                                            color: "white"
                                                      }}
                                                      buttonStyle={{
                                                            border: 'none',
                                                            background: "transparent"
                                                      }}
                                                      dropdownStyle={{
                                                            color: "black"
                                                      }}

                                                />
                                          )}
                                    />
                                    {errors.phone && (
                                          <span className="text-red-400 text-sm mb-5">
                                                {errors.phone.message}
                                          </span>
                                    )}

                                    <button
                                          type="submit"
                                          className={`${styles.redBtn} mx-auto mt-8 w-full`}
                                    >
                                          Yuborish
                                    </button>
                              </form>

                              <div className="bg-img hidden xl:block">

                              </div>
                        </div>
                  </div>
            </section>
      )
}
