import { useState } from "react";
import { useRouter } from "next/navigation";

function SuccessModal({ name, onClose }) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-sm text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          🎉 Merci {name} !
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Votre message a été envoyé avec succès.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            onClick={() => router.push("/")}
          >
            En savoir plus
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
export default SuccessModal;
