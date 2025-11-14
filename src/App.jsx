import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Sparkles, ShieldCheck, Mic, MessageSquare, Zap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 1, 0.21, 1] } },
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-orange-400 shadow-lg shadow-purple-500/20">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-zinc-900">Mentora AI</span>
          </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
            <a href="#how" className="hover:text-zinc-900 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#cta"
              className="inline-flex items-center rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/30"
            >
              Get started
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white"></div>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[84vh] grid-cols-1 items-center gap-10 py-20 md:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-orange-400"></span>
                AI Therapist, reimagined
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Feel heard, understood, and supported with an AI therapist that listens like a human.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-zinc-700">
                Mentora AI provides a safe, always‑available space for reflection. Speak freely, get empathetic responses, and receive science‑backed guidance.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <motion.a whileHover={{ y: -2 }} whileTap={{ y: 0 }} href="#cta" className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-white shadow-lg shadow-zinc-900/20">
                  Start free session
                </motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ y: 0 }} href="#features" className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-900">
                  Explore features
                </motion.a>
              </div>
              <div className="flex items-center gap-6 pt-2 text-sm text-zinc-600">
                <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-600"/> HIPAA‑friendly</div>
                <div className="flex items-center gap-2"><Mic size={16} className="text-purple-600"/> Natural voice</div>
                <div className="flex items-center gap-2"><Zap size={16} className="text-orange-500"/> Instant insights</div>
              </div>
            </motion.div>

            <div className="relative hidden md:block">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-purple-500/20 via-fuchsia-500/10 to-orange-400/20 blur-2xl"></div>
              <div className="relative rounded-3xl border border-white/40 bg-white/60 p-6 shadow-xl backdrop-blur-xl">
                <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-purple-100 via-fuchsia-100 to-orange-100"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: <Mic className="h-5 w-5 text-purple-600" />,
      title: 'Voice-first conversations',
      desc: 'Speak naturally. Mentora listens, reflects, and guides with human-like empathy.'
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-fuchsia-600" />,
      title: 'Cognitive reframing',
      desc: 'Evidence-based techniques help reframe thoughts and reduce anxiety over time.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: 'Private & secure',
      desc: 'Your conversations stay confidential with enterprise-grade security.'
    },
  ]

  return (
    <section id="features" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Designed for calm, built for clarity</h2>
          <p className="mt-4 text-zinc-600">Minimal, modern, and thoughtfully animated — every interaction feels smooth and supportive.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-tr from-purple-500/10 via-fuchsia-500/10 to-orange-400/10 blur-2xl"/>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm border border-zinc-200">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-[1]">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-400/30 via-fuchsia-400/20 to-orange-400/30 blur-3xl"/>
      </div>
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Start feeling better in minutes
        </motion.h3>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto mt-3 max-w-2xl text-zinc-600">
          Begin a guided session now. No credit card required. Your first 10 minutes are on us.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-white shadow-lg shadow-zinc-900/20">Try free session</a>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-900">See pricing</a>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Mentora AI. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <a href="#" className="hover:text-zinc-900">Privacy</a>
          <a href="#" className="hover:text-zinc-900">Terms</a>
          <a href="#" className="hover:text-zinc-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
