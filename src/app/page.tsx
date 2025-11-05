import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex justify-center items-start py-16 px-4 ">
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
            <div>
              <h1 className="text-xl mb-2">hemanthsai k</h1>
              <p className="text-zinc-400">also known as chinu</p>
              <p className="text-zinc-500 text-sm mt-1">chinu.dev</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-zinc-400 mb-1">currently working</h2>
              <p>
                backend engineer at{" "}
                <a
                  href="https://gpu.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ededed] underline hover:text-zinc-400 transition-colors"
                >
                  gpu.net
                </a>
              </p>
              <p className="text-zinc-500">+ handling devops</p>
            </div>

            <div>
              <h2 className="text-zinc-400 mb-1">side project</h2>
              <a
                href="https://openmodal.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ededed] underline hover:text-zinc-400 transition-colors"
              >
                openmodal.ai
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
                    chinudotdev@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
