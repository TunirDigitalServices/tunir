"use client";

import React, { useState } from "react";
import Image from "next/image";
import Heading from "../Heading";
import dummyAvatar from "../../../public/reviews/domiciliation.tn-logo.webp";
import sm from "../../../public/reviews/sm.png";
import teach from "../../../public/reviews/teach.png";
import je from "../../../public/reviews/je.png";
import amira from "../../../public/reviews/amira.jpg";
import tunir from "../../../public/reviews/tunir.png";
import smart_soft_pro_logo from "../../../public/reviews/smart_soft_pro_logo.jpg";

const professionalTestimonials = [
  {
    id: 1,
    name: "Domiciliation.tn",
    role: "CEO at Domiciliation.tn",
    initials: "DT",
    avatar: dummyAvatar,
    text: `نحن في Domiciliation.tn سعداء جدًا بالتعاون مع فريق Sfectonir في عدة مشاريع رقمية. الفريق أظهر احترافية عالية، خبرة تقنية كبيرة، وفهم عميق لاحتياجات أعمالنا.

المشاريع تم تسليمها بجودة عالية وفي الوقت المحدد، بالإضافة إلى الدعم المستمر الذي فاق توقعاتنا. 

نوصي بشدة بـ Sfectonir كشريك موثوق ومبتكر في مجال التكنولوجيا.`,
  },
  {
  id: 4,
  name: "Smartfarm – Bechir Ben Brika",
  role: "CEO at Smartfarm",
  initials: "SB",
  avatar: sm, // replace with actual image if available
  text: `نحن في Smartfarm، سعداء جدًا بالتعاون مع فريق Sfectonir في تطوير منصتنا الزراعية. 
الفريق ساعدنا على الانتقال من الحلول والتقنيات القديمة إلى حلول جديدة متقدمة وفعّالة.

خلال المشروع، قدموا حلول مبتكرة لتسهيل عملياتنا الزراعية الرقمية، مع متابعة دقيقة ودعم مستمر. 
نوصي بشدة بـ Sfectonir كشريك موثوق ومبدع في المجال التقني.`,
}
,
 {
  id: 5,
  name: "TeachCode",
  role: "Education Partner",
  initials: "TC",
  avatar: teach, // replace with actual logo/image if available
  text: `نحن في TeachCode، سعداء بالتعاون مع فريق Sfectonir في تنظيم ورشات عمل (workshops) وبرمجة الخطط التعليمية. 
لقد ساعد الفريق في تصميم جلسات عملية مفيدة وموجهة للطلاب، مع دعم كامل في التخطيط والتنفيذ.

هذا التعاون منحنا ثقة كبيرة في تقديم تجربة تعليمية ممتازة، ونثمن التزام Sfectonir واحترافيتهم في كل خطوة.`,
},
{
  id: 8,
  name: "Tunir",
  role: "Corporate Partner",
  initials: "T",
  avatar: tunir, // replace with actual logo/image if available
  text: `نحن في Tunir سعداء جداً بالشراكة مع فريق Sfectonir.  
قام الفريق بتحليل احتياجاتنا بدقة وقدم حلول تقنية متكاملة، مما ساهم في تحسين جودة خدماتنا الرقمية وتسريع عملياتنا.  

بالإضافة إلى ذلك، وفّر Sfectonir لنا موظفين مؤهلين، مما سهل عملية التوظيف وساهم في بناء فريق قوي وفعّال داخل شركتنا.  
الاحترافية والتواصل الفعّال مع Sfectonir جعل التجربة ممتازة وسهّلت علينا الانتقال إلى الحلول الجديدة.`,
},
{
  id: 6,
  name: "Junior Entreprise Tunisie",
  role: "Partner Organization",
  initials: "JET",
  avatar: je, // replace with actual logo/image if available
  text: `نحن في Junior Entreprise Tunisie، سعداء بالشراكة مع فريق Sfectonir. 
لقد قدم الفريق حلول مبتكرة لدعم مشاريعنا وتحسين عملياتنا، مع متابعة دقيقة وتواصل مستمر.

التعاون مع Sfectonir ساعدنا على رفع مستوى كفاءتنا وتحقيق أهدافنا بكفاءة وسلاسة، ونقدر خبرتهم والتزامهم العالي.`,
},
{
  id: 9,
  name: "Issam Inouiri",
  role: "SSPro",
  initials: "II",
  avatar: smart_soft_pro_logo, // replace with actual logo/photo if available
  text: `تعاملنا مع السيد عصام إنويّري من SSPro على تطوير Chatbot ذكاء اصطناعي خاص بالزراعة.  
الفريق من Sfectonir قدم حلول مبتكرة وسهّل عملية التواصل مع المستخدمين، مما ساهم في تحسين تجربة الزبائن وتسهيل إدارة استفساراتهم بشكل سريع وفعّال.  

الاحترافية والدعم المستمر من فريق Sfectonir جعل المشروع ناجحاً وتم تنفيذه وفق أعلى المعايير التقنية.`,
}
,
{
  id: 7,
  name: "Cabinet Zoueda Amira",
  role: "Professional Partner",
  initials: "CZA",
  avatar: amira, // replace with actual logo/image if available
  text: `نحن في Cabinet Zoueda Amira سعداء بالتعاون مع فريق Sfectonir. 
الفريق قدم لنا حلولاً مبتكرة وفعّالة لتطوير أنظمتنا وتحسين عملياتنا اليومية.

التواصل مع Sfectonir كان سلساً ومرناً، والدعم الفني متواصل، مما عزز ثقتنا في قدراتهم وكفاءتهم العالية.`,
},





];


export default function ProfessionalTestimonials() {
  const [active, setActive] = useState(1);
  const currentTestimonial =
    professionalTestimonials.find((t) => t.id === active) || professionalTestimonials[0];

  const prev = () =>
    setActive((prev) => (prev === 1 ? professionalTestimonials.length : prev - 1));
  const next = () =>
    setActive((prev) => (prev === professionalTestimonials.length ? 1 : prev + 1));

  return (
    <section className="w-full bg-[#FE6E33] dark:bg-[#2A1B0A]">
      <div className="flex flex-col md:flex-row max-w-full mx-auto overflow-hidden">
         <div className="w-full md:w-1/2 bg-[#FFF8F0] dark:bg-[#3C2B1F] flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FE6E33] mb-6 shadow-lg">
            <Image src={currentTestimonial.avatar} alt={currentTestimonial.name} width={128} height={128} className="object-cover w-full h-full" />
          </div>

          <p
            dir="rtl" // ensures proper right-to-left for Arabic
            className="text-gray-800 dark:text-[#FFEBD3] font-serif italic text-lg md:text-xl mb-8 transition-all duration-500 whitespace-pre-line"
          >
            {currentTestimonial.text}
          </p>

          
          {/* Initial Buttons */}
          <div className="flex justify-center mb-6 flex-wrap gap-2">
            {professionalTestimonials.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`font-bold rounded-full transition-all duration-300 
        ${
          active === t.id
            ? "bg-[#FE6E33] text-white"
            : "bg-[#FFD2B3] text-[#FE6E33] opacity-70"
        } 
        w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16`}
              >
                {t.initials}
              </button>
            ))}
          </div>

          <div className="text-center">
            <h2 className="font-bold text-gray-900 dark:text-[#FFEBD3]">{currentTestimonial.name}</h2>
            <small className="text-gray-700 dark:text-[#FFD2B3]">{currentTestimonial.role}</small>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center py-16 md:py-24 text-[#FFF8F0]">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight z-20 text-center px-6">
            <span className="block">What Our Professionals</span>
            <span className="block"> Say About Working With</span>
            <span className="block">Sfectonir!</span>
          </h2>

          <div className="absolute bottom-4 right-4 hidden md:flex space-x-2">
            <button onClick={prev} className="rounded-l-full border-r bg-[#FFF8F0]/50 text-[#FE6E33] font-bold w-12 h-10 hover:bg-[#FFF8F0]">&#8592;</button>
            <button onClick={next} className="rounded-r-full bg-[#FFF8F0]/50 text-[#FE6E33] font-bold w-12 h-10 hover:bg-[#FFF8F0]">&#8594;</button>
          </div>
        </div>

       
      </div>
    </section>
  );
}
