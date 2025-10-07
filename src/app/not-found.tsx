import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <ol className="list-inside list-decimal text-center font-mono text-lg sm:text-left">
          <li className="mb-2">
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              404 - Page Not Found
            </code>
          </li>
          <li>Sorry, the page you are looking for does not exist.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-lg text-background transition-colors hover:bg-[#383838] sm:h-12 sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
            href="/"
          >
            Return Home
          </Link>
        </div>
      </main>
      <div>
      </div>
    </div>
  );
}
