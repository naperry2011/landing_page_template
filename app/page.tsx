'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-foreground">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-neutral-800/50">
        <Link href="/" className="text-lg font-semibold">
          Software Composer LP
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="hero-glow" />
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-3 py-1 text-sm text-neutral-400 mb-8 glimmer-pill fade-in">
              <span>3 Prompts to a Perfect Landing Page</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight fade-in delay-1">
              The Cursor Template<br />For Landing Pages
            </h1>
            <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto fade-in delay-2">
              Create stunning landing pages in minutes, not months. Save $10,000+ on design and development
              with our Cursor-powered template.
            </p>
            <div className="fade-in delay-3">
              <Button size="lg" className="rounded-full">
                Download Template
              </Button>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto scroll-animation">
            <div className="glimmer-card">
              <div className="bg-neutral-900">
                <div className="flex items-center gap-2 p-2 md:p-3 border-b border-neutral-800">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row h-[500px] md:h-[700px]">
                  {/* Sidebar */}
                  <div className="hidden md:block md:w-64 border-r border-neutral-800 p-4 flex-shrink-0">
                    <div className="flex items-center gap-2 p-2 bg-neutral-800 rounded-lg mb-4">
                      <div className="w-8 h-8 rounded-full bg-neutral-700" />
                      <span>Cursor AI</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between p-2 rounded hover:bg-neutral-800 transition-colors">
                        <span>Prompts</span>
                        <span className="text-sm text-neutral-500">3</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded hover:bg-neutral-800 transition-colors">
                        <span>Components</span>
                        <span className="text-sm text-neutral-500">25+</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded hover:bg-neutral-800 transition-colors">
                        <span>Time Saved</span>
                        <span className="text-sm text-neutral-500">100h+</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded hover:bg-neutral-800 transition-colors">
                        <span>Money Saved</span>
                        <span className="text-sm text-green-500">$10k+</span>
                      </div>
                    </div>
                  </div>
                  {/* Mobile Stats Bar */}
                  <div className="md:hidden w-full border-b border-neutral-800 p-3 bg-neutral-800/50">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-neutral-700" />
                        <span className="text-sm font-medium">Cursor AI</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-neutral-400">3 Prompts</span>
                        <span className="text-green-500 font-medium">$10k+ Saved</span>
                      </div>
                    </div>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 flex flex-col p-3 md:p-4 overflow-hidden">
                    <div className="flex items-center justify-between mb-4 sticky top-0">
                      <input
                        type="text"
                        placeholder="Enter your prompt here..."
                        className="w-full max-w-2xl px-3 md:px-4 py-2 bg-neutral-800 rounded-lg border border-neutral-700 text-sm md:text-base placeholder:text-neutral-500"
                      />
                      <div className="flex items-center gap-1 md:gap-2 ml-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9">
                          <span className="sr-only">Generate</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v19"/><path d="M5 12h14"/></svg>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9">
                          <span className="sr-only">Save</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4 overflow-y-auto flex-1 pr-1">
                      <div className="p-4 rounded-lg bg-neutral-800">
                        <div className="flex items-center gap-3 md:gap-4 mb-2">
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-neutral-700 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <h3 className="font-medium text-sm md:text-base">Cursor AI</h3>
                            <p className="text-xs md:text-sm text-neutral-400">Prompt #1: Hero Section</p>
                          </div>
                          <div className="text-xs md:text-sm text-green-400 flex-shrink-0">
                            Generated in 2s
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-neutral-300">
                          I&apos;ll create a modern, attention-grabbing hero section for your landing page. 
                          Just describe your product&apos;s main value proposition, and I&apos;ll generate the perfect
                          layout with compelling copy and visuals.
                        </p>
                      </div>

                      <div className="p-6 md:p-8 rounded-lg bg-neutral-800/50 border border-neutral-700 border-dashed text-center">
                        <div className="mb-4">
                          <svg className="mx-auto w-10 h-10 md:w-12 md:h-12 text-neutral-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">Upload any image and get any fucking landing page you want</h3>
                        <p className="text-sm md:text-base text-neutral-400 mb-4">Drag and drop an image, or click to browse</p>
                        <Button variant="outline" size="lg" className="h-9 md:h-10 text-sm md:text-base">
                          Choose Image
                        </Button>
                      </div>

                      <div className="p-4 rounded-lg bg-neutral-800">
                        <div className="flex items-center gap-3 md:gap-4 mb-2">
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-neutral-700 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <h3 className="font-medium text-sm md:text-base">Cursor AI</h3>
                            <p className="text-xs md:text-sm text-neutral-400">Image Analysis</p>
                          </div>
                          <div className="text-xs md:text-sm text-neutral-400 flex-shrink-0">
                            Waiting for image...
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-neutral-300">
                          yup its really that easy, download the template, open it in cursor, upload an image, and i will create that website... like legit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-24 scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create in Minutes, Not Months</h2>
              <p className="text-neutral-400">Transform your ideas into reality with three simple prompts.</p>
            </div>

            <div className="relative">
              {/* Decorative line connecting the steps */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-800 via-pink-500/20 to-neutral-800 hidden md:block" />
              
              <div className="grid md:grid-cols-3 gap-24 relative">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 scroll-animation scroll-delay-1">
                  <div className="text-2xl mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Download Template</h3>
                  <p className="text-neutral-400">
                    Get started with our production-ready template. It&apos;s packed with everything you need to build a stunning landing page.
                  </p>
                </div>

                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 scroll-animation scroll-delay-2">
                  <div className="text-2xl mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Tell Cursor What You Want</h3>
                  <p className="text-neutral-400">
                    Describe your vision in plain English. Cursor will transform your words into a beautiful, functional design.
                  </p>
                </div>

                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 scroll-animation scroll-delay-3">
                  <div className="text-2xl mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Deploy to the Internet</h3>
                  <p className="text-neutral-400">
                    Push your new landing page live with one click. Share your creation with the world in seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing (Plot Twist: It&apos;s All Free)</h2>
              <p className="text-neutral-400 mb-12">Because great tools shouldn&apos;t cost a fortune. Or anything.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="col-span-1">
                {/* Starter Plan */}
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-2">Starter</h3>
                  <div className="text-3xl font-bold mb-4">$0</div>
                  <p className="text-neutral-400 mb-6">Perfect for getting started</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Basic features
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Community support
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">Get Started</Button>
                </div>
              </div>
              <div className="col-span-1">
                {/* Pro Plan */}
                <div className="bg-neutral-900 p-8 rounded-xl border-2 border-pink-500/20 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500/10 text-pink-500 px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Pro</h3>
                  <div className="text-2xl font-bold mb-1">$0</div>
                  <div className="text-xs text-neutral-400 mb-4">Save $0 when you pay yearly!</div>
                  <p className="text-sm text-neutral-400 mb-6">Everything you need</p>
                  <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Everything in Starter
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Advanced features (free)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Priority support (also free)
                    </li>
                  </ul>
                  <Button className="w-full text-sm">Upgrade for $0</Button>
                </div>
              </div>
              <div className="col-span-1">
                {/* Enterprise Plan */}
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold mb-4">$0</div>
                  <p className="text-neutral-400 mb-6">For larger teams</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Everything in Pro
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Custom features (free)
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">Contact Sales</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-neutral-800/50 scroll-animation">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="text-sm text-neutral-400">
            © 2024 Software Composer LP. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">Discord</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6h0a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v0"/>
                <path d="M6 18v-7a3 3 0 0 1 3-3h7"/>
                <circle cx="8" cy="12" r="1"/>
                <circle cx="16" cy="12" r="1"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}