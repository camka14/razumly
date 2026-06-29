import Image from "next/image";

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
      </div>
    </main>
  );
}
