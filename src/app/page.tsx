"use client";
import Image from "next/image";
import { useState } from "react";
import QRCode from "react-qr-code";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex justify-center items-start py-16 px-4 max-w-md mx-auto">
      <main className="font-mono text-[#ededed]">
        <div className="space-y-8">
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/avatar.png"
              alt="Profile picture"
              width={80}
              height={80}
              className="rounded-full "
              priority
            />
            <div className="w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-xl mb-2">hemanthsai k</h1>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-zinc-400 hover:text-[#ededed] transition-colors px-3 py-1 cursor-pointer font-bold"
                >
                  share
                </button>
              </div>
              <p className="text-zinc-400">also known as chinu</p>
            </div>
          </div>

          <div className="space-y-4">
            <p>
              Fullstack developer crafting apps to track AI capabilities and GPU
              procurements
            </p>

            <div>
              <h2 className="text-zinc-400 mb-1">my project</h2>
              <a
                href="https://openmodal.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ededed] hover:text-zinc-400 transition-colors"
              >
                <div>openmodal.ai</div>
                <p className="text-zinc-500">
                  Community platform for tracking AI progress through real-world
                  capabilities
                </p>
              </a>
            </div>

            <div>
              <h2 className="text-zinc-400 mb-1">contact</h2>
              <div className="space-y-1">
                <div>
                  <a
                    href="https://twitter.com/chinudotdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ededed] underline hover:text-zinc-400 transition-colors"
                  >
                    twitter/chinudotdev
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:chinudotdev@gmail.com"
                    className="text-[#ededed] underline hover:text-zinc-400 transition-colors"
                  >
                    email/chinudotdev
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/chinudotdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ededed] underline hover:text-zinc-400 transition-colors"
                  >
                    linkedin/chinudotdev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-zinc-900 p-6 rounded-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg">Share</h3>
              <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-white">
                ✕
              </button>
            </div>
            <div className="flex justify-center bg-white p-4 rounded-lg">
              <QRCode
                value={typeof window !== "undefined" ? window.location.href : ""}
                size={200}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
