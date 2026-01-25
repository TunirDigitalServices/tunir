'use client';

import { motion } from 'framer-motion';

// hooks
import useScrollProgress from '../hooks/useScrollProgress';
import { useEffect } from 'react';

// variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();


useEffect(() => {
  window.onerror = function (message, source, lineno, colno, error) {
    document.body.innerHTML = `
      <pre style="white-space: pre-wrap; padding: 16px; color: red;">
ERROR:
${message}

SOURCE:
${source}:${lineno}:${colno}

STACK:
${error?.stack}
      </pre>
    `;
  };

  window.addEventListener("unhandledrejection", (event) => {
    document.body.innerHTML = `
      <pre style="white-space: pre-wrap; padding: 16px; color: red;">
PROMISE ERROR:
${event.reason}
      </pre>
    `;
  });
}, []);



  return (
    <>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className='fixed z-50 bg-primary w-1.5 top-0 right-0 bottom-0 transition-all duration-700'
      ></span>
      {/* <div className='h-[4000px]'></div> */}
    </>
  );
};

export default Template;
