"use client";

import Contact from "@/components/Contact";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import successRocket from "../../../../public/success-rocket.json";
function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [countdown, setCountdown] = useState(60);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
useEffect(() => {
  let timer;

  if (showModal) {
    // Reset countdown when modal opens
    setCountdown(60);

    timer = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timer);
          router.push("/"); // redirect when countdown ends
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  }

  // Clear interval when modal closes or component unmounts
  return () => clearInterval(timer);
}, [showModal, router]);

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus(null);

  setLoading(true);
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  

    const data = await res.json();

    if (data.success) {
      setStatus({ message: "Merci ! Votre message a été envoyé.", type: "success" });
      setSubmittedName(formData.firstName);
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      setConfetti(true);
      setShowModal(true);
    } else {
      setStatus({ message: data.error || "Erreur lors de l'envoi", type: "error" });
    }
  } catch (err) {
    console.error(err);
    setStatus({ message: "Erreur serveur. Réessayez plus tard.", type: "error" });
  } finally {
    setLoading(false);
  }
};


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
   
  //   setStatus(null);

  //   // Optional phone validation
  //   if (formData.phone) {
  //     const phoneNumber = parsePhoneNumberFromString("+" + formData.phone);
  //     if (!phoneNumber || !phoneNumber.isValid()) {
  //       setStatus({ message: "Numéro de téléphone invalide", type: "error" });
  //       return;
  //     }
  //   }

  //   setLoading(true);

  //   try {
  //     await emailjs.send(
  //       "service_j7j635n",
  //       "template_pnep27d",
  //       {
  //         first_name: formData.firstName,
  //         last_name: formData.lastName,
  //         company: formData.company,
  //         email: formData.email,
  //         phone: formData.phone,
  //         message: formData.message,
  //       },
  //       "F2kUjPKkZVikgZw4-"
  //     );

  //     setStatus({
  //       message: "Merci ! Votre message a été envoyé.",
  //       type: "success",
  //     });
  //     setSubmittedName(formData.firstName);
  //     setFormData({
  //       firstName: "",
  //       lastName: "",
  //       company: "",
  //       email: "",
  //       phone: "",
  //       message: "",
  //     });
  //     setConfetti(true);
  //     setShowModal(true);
  //   } catch (error) {
  //     console.error(error);
  //     setStatus({
  //       message: "Une erreur est survenue. Vérifiez vos données et réessayez.",
  //       type: "error",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const closeModal = () => {
    setShowModal(false);
    setConfetti(false);
    setStatus(null);    
  setCountdown(60); 
  };
  return (
    <div className="relative overflow-x-hidden ">
      {/* <Contact/> */}
      {confetti && <Confetti recycle={false} numberOfPieces={150} />}
      <div className="overflow-x-hidden">
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
          {/* Gradients */}
          <div className="flex absolute -top-96 start-3/4 transform -translate-x-1/2 -z-20">
            <div className="bg-gradient-to-r from-[#50e2d4]/70 to-purple-100 blur-3xl w-[55rem] h-[38rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
            <div className="bg-gradient-to-tl from-orange-100 via-orange-200 to-orange-100 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-orange-900/70 dark:via-orange-900/70 dark:to-orange-900/70"></div>
          </div>

          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <h2
            style={{ fontFamily: "AgainstRegular", lineHeight: "70px" }}
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white"
          >
             Contactez notre équipe commerciale
          </h2>

      
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Remplissez le formulaire ci-dessous et nous vous répondrons
              rapidement.
            </p>
          </div>

          {/* Form */}
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit}
            className="mx-auto mt-16 max-w-xl sm:max-w-2xl lg:max-w-3xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Prénom
                </label>
                <div className="mt-2.5">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Entrez votre prénom"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 
             placeholder:text-gray-400 
             focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500
             dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 
             dark:focus:border-orange-500 dark:focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Nom
                </label>
                <div className="mt-2.5">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Entrez votre nom"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 
             placeholder:text-gray-400 
             focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500
             dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 
             dark:focus:border-orange-500 dark:focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              {/* Company */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Société
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nom de votre société"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 
             placeholder:text-gray-400 
             focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500
             dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 
             dark:focus:border-orange-500 dark:focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="exemple@domaine.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 
             placeholder:text-gray-400 
             focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500
             dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 
             dark:focus:border-orange-500 dark:focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="sm:col-span-2 mt-2.5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Numéro de téléphone
                </label>
                <div className="mt-2.5">
                  <PhoneInput
                    country={"tn"}
                    value={formData.phone}
                    onChange={(value) =>
                      setFormData({ ...formData, phone: value })
                    }
                    inputClass="!w-full !rounded-md !border !border-gray-300 !pl-12 !pr-3 !py-2 !text-base !text-gray-900 placeholder:text-gray-400 focus:!border-orange-500 focus:!ring-1 focus:!ring-orange-500 dark:!border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
                    buttonClass="!absolute !left-0 !top-0 !h-full !bg-transparent !border !border-gray-300 !rounded-l-md !shadow-none focus:!border-orange-500 focus:!ring-1 focus:!ring-orange-500 dark:!border-white/10"
                    containerClass="!w-full !relative"
                    specialLabel=""
                    dropdownClass="!bg-white dark:!bg-gray-800"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Écrivez votre message ici..."
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 
             placeholder:text-gray-400 
             focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500
             dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 
             dark:focus:border-orange-500 dark:focus:ring-orange-500"
                    required
                  />
                </div>
              </div>
            </div>
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.type === "success"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}

            {/* Submit Button */}
            <div className="mt-10">
              <button
                type="submit"
                disabled={loading}
                className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs ${
                  loading ? "bg-gray-400" : "bg-primary hover:bg-orange-600"
                }`}
              >
                {loading ? "Envoi..." : "Envoyer"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center relative">
            {/* Animated Rocket */}
            <Lottie
              animationData={successRocket}
              loop={true}
              className="h-40 mx-auto"
            />

            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-4">
              Merci {submittedName || ""} !
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Votre message a été envoyé avec succès.
            </p>

            {/* Social Proof */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => router.push("/propos")}
                className="w-full px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-orange-600 transition"
              >
                En savoir plus sur nous
              </button>
              <button
                onClick={() => router.push("/")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
              >
                Voir nos services
              </button>
              <button
                onClick={closeModal}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 transition dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Fermer
              </button>
            </div>

            {/* Countdown */}
            <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
              Redirection automatique dans{" "}
              <span className="font-semibold">{countdown}</span> secondes…
            </p>

            {/* Buttons */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
