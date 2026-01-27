"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import logoUni from "../images/logounivers.png";

const Logo = () => {
  const [mounted, setMounted] = useState(false);

  // Prevent iOS / SSR crashes
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Link href="/" aria-label="Go to homepage">
        <Image
          src={logoUni}
          alt="Logo Univers"
          width={120}
          height={80}
          priority
          style={{ height: "auto", maxWidth: "100%" }}
        />
      </Link>
    </header>
  );
};

export default Logo;
