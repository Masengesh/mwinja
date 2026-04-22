import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href = "#", variant = "primary", className = "", onClick }: ButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 font-semibold uppercase tracking-wider px-8 py-3 rounded-full transition-all transform hover:scale-105";

  const variants = {
    primary: "bg-accent-gold text-white hover:bg-accent-gold-dark",
    secondary: "bg-primary-blue text-white hover:bg-primary-blue-dark",
    outline: "bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href && href !== "#") {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowRight size={16} />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      <ArrowRight size={16} />
    </button>
  );
}
