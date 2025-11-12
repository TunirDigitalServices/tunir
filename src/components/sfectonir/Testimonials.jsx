"use client";

import React, { useState } from "react";
import Heading from "../Heading";
import Image from "next/image";
import ayaa from "../../../public/reviews/ayaa.jpg";
import siwar from "../../../public/reviews/siwar.jpg";
import rawen from "../../../public/reviews/rawen.jpg";
import ghofrane from "../../../public/reviews/ghofrane.jpg";
import saif from "../../../public/reviews/saif.jpg";
import ghaith from "../../../public/reviews/ghaith.jpg";
import tassnim from "../../../public/reviews/tassnime.jpg";

const testimonials = [
  {
    id: 1,
    name: "آية الشابي",
    role: "طالبة في Esprit Business",
    initials: "AC",
    avatar: ayaa,
    text: `أنا آية الشابي، نقرا BIS في Esprit Business، عدّيت stage PFE وفرد وقت formation fullstack.
الفورماسيون كانت ياسر طيّارة، يوسّعوا بالهم معاك، بالحق يعلموك من لول.
تبارك الله عليهم، في أي وقت نكلّمهم يجاوبوني. ميرسي بوكو!

أنا في فترة من الفترات، جيت كنت خايفة، موش نورمال لا ما نجّمش، ولا ما نكمّلش، ولا نخلطش في الوقت.
جاني خليل قاللي: "هنا كلنا معاك وهزلي المورال"، باش نجّمت نكمّل.`,
  },
  {
    id: 2,
    name: "Siwar ZELFENI",
    role: "طالبة في  Faculte des Sciences de Bizete, Genie Logiciel",
    initials: "SZ",
    avatar: siwar, // mets ici l'image si tu en as
    text: `أنا سوار زلفني، طالبة في Genie Logiciel في Faculte des Sciences de Bizete. تعلمت برشا حاجات، أنا مللول كنت نخدم بحاجات basic، وتعلمت منهم برشا حاجات advanced.

دخلت باش نتعلّم حاجة، لقيت روحي تعلمت برشا حاجات، هذا هو environment اللي لقيت روحي فيه. نشكرهم برشا، يوسّعوا بالهم معاك، وكان نحب نقول فيهم كلمة نلقى روحي ما نجّمش نوفّيهم حقّهم.

كانوا موجودين معايا في وقت الفرحة، ما كنتش نتخيّل إنو نهار soutenance نلقى Khalil و Rania واقفين قدّامي، والحمد لله mention très bien.`,
  },
  {
    id: 3,
    name: "Rawen SOLTANI",
    role: "Student at ISAT, Informatique",
    initials: "RS",
    avatar: rawen, // ajoute ici l'image si tu en as
    text: `أنا روان، نقرا informatique في ISAT وعملت PFE متاعي في Sfectonir. المشروع متاعي اسمه "Conception et développement d'un modèle de Federated Learning".

الرسالة اللي نحب نوصلها لسفكتنير ـ  Merci beaucoup beaucoup على الإحاطة والتشجيع النفسي اللي عطيتوهولي. على خاطرني من غير Sfectonir أنا متأكدة اللي المشروع متاعي مستحيل يتخدم من غير الإشراف متاعكم.`,
  },
  {
    id: 4,
    name: "غفران شارني",
    role: "Étudiant en Faculté des Sciences",
    initials: "GC",
    avatar: ghofrane,
    text: `عسلامة، أنا غفران شارني، étudiant en Faculté des Sciences Monastir عملت مع Sfectonir pack PFE و stage en ligne. المشروع متاعي كان SaaS Solution dev و mobile، خذيت note باهية، تعلمت كيفاش نصلاح les erreurs في خدمتي، كيفاش نبدا projet، كيفاش نقسمو و ننظمو باش نكمل في الوقت.

بالنسبة للequipe، قد ما نشكرهم، ما نجمش نعطيهم حقهم،عباد محلاهم عللخر، يوسعوا بالهم، ما تخرج كان ما تبدا فاهم، تكلمهم وقت اللي تحب، disponible ديما. بالنسبة ليا، أنا تعبو معايا برشا خاطرني online  يتببعوك étape par étape، كنت منعرف شي coté dev،   الحق توا from 0 to hero.`,
  },
  {
    id: 5,
    name: "سيف بوغرارا",
    role: "Étudiant à ISET Kef",
    initials: "SB",
    avatar: saif, // tu peux mettre son avatar si tu en as
    text: ` عسلامة، أنا سيف بوغرارا، étudiant à ISET Kef، عملت formation و stage في Sfectonir. أول ما جيت للstage نسأل في خليل: "ياخي نجم نولي developpeur؟" وقتها ال équipe بداو يحفزوا فيا ويقولولي تنجم، أما أنا ما كنتش مصدق. تعلمت برشا skills.`,
    dir: "rtl",
  },
  {
    id: 6,
    name: "غيث بجاوي",
    role: "Étudiant à ISET Kef",
    initials: "GB",
    avatar: ghaith, // mets ici l'image si disponible
    text: `عسلامة، أنا غيث بجاوي، etudiant في ISET Kef. عملت pack PFE و stage مع Sfectonir، عملنا application de gestion de reclamation و service après-vente لل client، وكانوا satisfied وفرحانين بالخدمة متاعنا. 

بالنسبة لل encadrement و الإحاطة، عباد مجندة ليل و صباح، في أي وقت تطلبهم تلقاهم présentiel أو online. 

ال opportunity الي عطاتهالي Sfectonir باش نpresenti قدام ال client، عطتني ثقة في روحي وسهّلتلي ال presentation قدام ال gery.`,
    dir: "rtl",
  },
  {
    id: 7,
    name: "تسنيم صوفي",
    role: "Étudiante en 1ère année Technologie de l'Informatique à ISET Bajja",
    initials: "TS",
    avatar: tassnim, // ajoute ici l'image si tu en as
    text: `عسلامة، أنا تسنيم صوفي، نقرا 1ère année Technologie de l'Informatique à ISET Bajja 
تجربة مع Sfectonir مزيانة عللخر، تعلمت فيها برشا حاجات. تجربة خللتني نعطي الثقة الي أنا باش نجم نخدم projet كامل وحدي إن شاء الله. Note 5/5.`,
    dir: "rtl",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(1);

  // Prevent undefined errors
  const currentTestimonial =
    testimonials.find((t) => t.id === active) || testimonials[0];

  const prev = () =>
    setActive((prev) => (prev === 1 ? testimonials.length : prev - 1));
  const next = () =>
    setActive((prev) => (prev === testimonials.length ? 1 : prev + 1));

  return (
    <section className="w-full bg-[#FE6E33] dark:bg-[#2A1B0A]">
      <div className="flex flex-col md:flex-row max-w-full mx-auto overflow-hidden">
        {/* Left Side */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center py-16 md:py-24 text-[#FFF8F0]">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight z-20 text-center px-6">
            <span className="block">What Our Students </span>
            <span className="block"> Are Saying About Their</span>
            <span className="block">Journey With Sfectonir!</span>
          </h2>

          {/* Arrows */}
          <div className="absolute bottom-4 right-4 hidden md:flex space-x-2">
            <button
              onClick={prev}
              className="rounded-l-full border-r bg-[#FFF8F0]/50 text-[#FE6E33] font-bold w-12 h-10 hover:bg-[#FFF8F0]"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="rounded-r-full bg-[#FFF8F0]/50 text-[#FE6E33] font-bold w-12 h-10 hover:bg-[#FFF8F0]"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-[#FFF8F0] dark:bg-[#3C2B1F] flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 items-center text-center">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FE6E33] mb-6 shadow-lg">
            <Image
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Testimonial Text */}
          <p
            dir="rtl" // ensures proper right-to-left for Arabic
            className="text-gray-800 dark:text-[#FFEBD3] font-serif italic text-lg md:text-xl mb-8 transition-all duration-500 whitespace-pre-line"
          >
            {currentTestimonial.text}
          </p>

          
          {/* Initial Buttons */}
          <div className="flex justify-center mb-6 flex-wrap gap-2">
            {testimonials.map((t) => (
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

          {/* Name & Role */}
          <div className="text-center" dir="rtl">
            <h2 className="font-bold text-gray-900 dark:text-[#FFEBD3]">
              {currentTestimonial.name}
            </h2>
            <small className="text-gray-700 dark:text-[#FFD2B3]">
              {currentTestimonial.role}
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
