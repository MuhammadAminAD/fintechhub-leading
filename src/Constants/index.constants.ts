import AU6 from "../Assets/Icons/Icons (1).svg";
import AU1 from "../Assets/Icons/Icons (2).svg";
import AU2 from "../Assets/Icons/Icons (3).svg";
import AU3 from "../Assets/Icons/Icons (4).svg";
import AU4 from "../Assets/Icons/Icons (5).svg";
import AU5 from "../Assets/Icons/Icons (6).svg";

import CT4 from "../Assets/Icons/call.svg";
import CT1 from "../Assets/Icons/location_on.svg";
import CT2 from "../Assets/Icons/mingcute_youtube-line.svg";
import CT3 from "../Assets/Icons/ri_instagram-line.svg";


export const AboutUs = [
      { id: 0, Icon: AU6, title: "Senior darajadagi ustozlar", text: "Kasbni haqiqiy mutaxassislardan o’rganasiz", span: "Senior" },
      { id: 1, Icon: AU1, title: "Qo'shimcha support ustozlar", text: "Agar biror narsani tushunmagan bo’lsangiz, support ustozlarimiz sizga doim yordam berishga tayyor!", span: "support" },
      { id: 2, Icon: AU2, title: "Guruhda o'quvchilar soni 12 tadan oshmaydi", text: "O'quvchi kamligi hisobiga, har bir o’quvchiga alohida e’tibor beriladi", span: "12" },
      { id: 3, Icon: AU3, title: "Real loyihalarda amaliyot qilish imkoniyati", text: "O’rgangan bilimlaringizni real lohihalarda ishlatib, mustahkam qilib olasiz", span: "Real loyihalarda" },
      { id: 4, Icon: AU4, title: "Har bir o'quvchi eng kamida 10 ta demo loyiha yaratadi", text: "Demo loyihalar sizga ishga kirishda yordam beradi", span: "10 ta" },
      { id: 5, Icon: AU5, title: "Har bir o'quvchi eng kamida 2 ta kitob o'qib, taqdimot qilib beradi", text: "Kitob - ongimizni, mantiqiy fikrlashimizni oshirishga yordam beradi", span: "2 ta kitob" },
]

export const FAQ = [
      {
            id: 0,
            question: "Manzilingiz qayerda?",
            answer: "Bizning manzilimiz — Toshkent shahri, Mirobod tumani, Afrosiyob 4-ko‘chasi."
      },
      {
            id: 1,
            question: "Kurslaringiz kimlar uchun?",
            answer: "Kurslarimiz 8 yoshdan boshlab IT va dasturlashga qiziqqan barcha uchun mo‘ljallangan. Boshlang‘ich bilimga ega bo‘lmagan bolalar ham, kasbini IT sohasi bilan bog‘lamoqchi bo‘lgan o‘smirlar va kattalar ham qatnashishlari mumkin."
      },
      {
            id: 2,
            question: "Kurslar qancha davom etadi?",
            answer: "Kurslarimizning davomiyligi yo‘nalishga qarab turlicha bo‘ladi. O‘quv dasturlarimiz 3 oydan 10 oygacha davom etadi."
      },
]

export const Contact = [
      { id: 0, title: "Telefon raqam", linkTitle: "+998 71 203-88-00", link: "tel:+998712038800", Icon: CT4, desc: "09:00 dan 19:00 gacha telefon qilsangiz bo’ladi" },
      { id: 1, title: "Youtube sahifamiz", linkTitle: "fintechhubuz", link: "https://www.youtube.com/@fintechhubuz", Icon: CT2 },
      { id: 2, title: "Instagram sahifamiz", linkTitle: "fintechhubuz", link: "https://www.instagram.com/fintechhubuz/", Icon: CT3 },
      { id: 3, title: "Manzilimiz", linkTitle: "Toshkent shahri Mirobod tumani Afrosiyob 4 ko'chasi", link: "https://maps.app.goo.gl/sQFYVBrB7CB7Mked7", Icon: CT1 },
]