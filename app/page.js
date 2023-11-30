"use client";

import Image from "next/image";
import { product } from "./libs/product";
import Checkout from "./components/Checkout";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  useEffect(() => {
    // render midtrans snap token
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js"
    const clientKey = process.env.NEXT_PUBLIC_CLIENT

    const script = document.createElement('script')
    script.src = snapScript
    script.setAttribute('data-client-key', clientKey)
    script.async = true

    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, []);

  return (
    <>
    <Navbar />
      <main className="max-w-xl mx-auto sm:p-16">
        <div className="flex flex-col">
          <Image
            src={product.image}
            alt="..."
            width={200}
            height={200}
            className="w-full object-cover"
          />
          <div className="border border-cyan-400 bg-black p-6">
            <h3 className="mt-4 text-lg font-medium text-white">
              {product.name}
            </h3>
            <p className="mt-1.5 text-sm text-cyan-500">Rp {product.price}</p>
            <p className="py-4 text-sm text-cyan-500 text-justify">
              {product.description}
            </p>
            <Checkout />
          </div>
        </div>
      </main>
    </>
  );
}
