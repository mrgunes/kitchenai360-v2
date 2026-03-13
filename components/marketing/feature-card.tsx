"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-shadow duration-200 hover:shadow-md"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50">
        <Icon size={20} className="text-accent-500" aria-hidden />
      </div>
      <h3 className="text-base font-semibold leading-snug text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
    </motion.div>
  )
}
