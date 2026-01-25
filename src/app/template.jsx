'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import useScrollProgress from '../hooks/useScrollProgress';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();

  useEffect(() => {
    window.onerror = function (message, source, lineno, colno, error) {
      document.body.innerHTML = `
        <pre style="
          white-space: pre-wrap;
          padding: 16px;
          color: red;
          font-size: 14px;
        ">
❌ JAVASCRIPT ERROR

Message:
${message}

Source:
${source}:${lineno}:${colno}

Stack:
${error?.stack}
        </pre>
      `;
    };

    window.addEventListener('unhandledrejection', (event) => {
      document.body.innerHTML = `
        <pre style="
          white-space: pre-wrap;
          padding: 16px;
          color: red;
          font-size: 14px;
        ">
❌ PROMISE ERROR

${event.reason}
        </pre>
      `;
    });
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
    >
      {children}
    </motion.div>
  );
};

export default Template;
