import Image from "next/image";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist-sans">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
          />

          <ol className="list-decimal list-inside text-sm/6 text-center sm:text-left font-geist-mono">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded font-geist-mono">
                app/page.tsx
              </code>
            </li>
            <li>Save and see your changes instantly</li>
          </ol>

          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <a
                className="btn-primary"
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/vercel.svg"
                  alt="Vercel logo"
                  width={20}
                  height={20}
                  className="dark:invert"
              />
              Deploy now
            </a>
            <a
                className="btn-secondary"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap justify-center">
          {[
            { href: "/learn", text: "Learn", icon: "file.svg" },
            { href: "/examples", text: "Examples", icon: "window.svg" },
            { href: "/nextjs", text: "Go to nextjs.org →", icon: "globe.svg" }
          ].map((link) => (
              <a
                  key={link.href}
                  href={link.href}
                  className="link-hover"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <Image
                    src={`/${link.icon}`}
                    alt={`${link.text} icon`}
                    width={16}
                    height={16}
                    aria-hidden
                />
                {link.text}
              </a>
          ))}
        </footer>
      </div>
  );
}
