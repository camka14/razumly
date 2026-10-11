import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./classy.css";

export const metadata: Metadata = {
  title: {
    default: "Classy for Jira — Razumly",
    template: "%s — Classy for Jira",
  },
  description:
    "Customer documentation, data-handling information and support for Classy's Jira classification workbench and native Automation actions.",
};

export default function ClassyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="classy-site">
      <a className="classy-skip-link" href="#classy-main">
        Skip to content
      </a>
      <header className="classy-header">
        <div className="classy-header-inner">
          <Link className="classy-brand" href="/classy">
            <Image src="/classy.svg" width={48} height={48} alt="" />
            <span>Classy <span className="classy-brand-detail">for Jira · by Razumly</span></span>
          </Link>
          <nav className="classy-nav" aria-label="Classy">
            <Link href="/classy">Overview</Link>
            <Link href="/classy/docs">Documentation</Link>
            <Link href="/classy/data">Data &amp; deletion</Link>
            <Link href="/classy/support">Support</Link>
          </nav>
        </div>
      </header>
      <main id="classy-main" className="classy-main" tabIndex={-1}>
        {children}
      </main>
      <footer className="classy-footer">
        <p>Classy is a Jira app by Razumly. These pages cover Classy, not the Razumly sports app.</p>
        <nav aria-label="Classy footer">
          <Link href="/">Razumly home</Link>
          <Link href="/classy/privacy">Privacy notice</Link>
          <a href="mailto:support@razumly.com">support@razumly.com</a>
        </nav>
      </footer>
    </div>
  );
}
