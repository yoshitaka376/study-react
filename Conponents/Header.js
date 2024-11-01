import Link from "next/link";
import stayles from "./Header.module.css"

export function Header() {
  return (
    <header className={stayles.header}>
      <Link href="/" className={stayles.anchor}>Index</Link>
      <Link href="/about" className={stayles.anchor}>About</Link>
    </header>
  );
}
