import "../globals.css";

import Link from "next/link";
import Provider from "../provider";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function AuthLayout({ children }) {
  return (
    <Provider>
      <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-stone-500 transition-colors hover:text-stone-800"
          >
            <ChevronLeftIcon className="w-5" />
            <span className="font-medium uppercase" style={{ color: "black" }}>
              Home
            </span>
          </Link>
          <div className="relative mt-12 sm:mt-16">
            <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900"></h1>
          </div>
          <div
            className=""
            style={{
              backgroundImage: "url('/transpish_blk.png')",
              backgroundSize: "auto",
              backgroundRepeat: "repeat",
              borderRadius: "25px",
            }}
          >
            {children}
          </div>
        </div>
      </main>
    </Provider>
  );
}
