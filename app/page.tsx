import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="grid min-h-screen place-items-center bg-neutral-950 px-6 text-white">
      <div className="flex max-w-xl flex-col items-center text-center">
        <Image
          alt="Construction crane"
          className="mb-8 h-32 w-auto sm:h-40"
          height={633}
          src="/crane.svg"
          width={538}
          priority
        />
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Sorry, this site is currently under construction.
        </h1>
        <p className="mt-8 text-base text-neutral-300">
          <Link className="rounded underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="/classy">
            Classy for Jira: documentation and support
          </Link>
        </p>
      </div>
    </main>
  );
}
