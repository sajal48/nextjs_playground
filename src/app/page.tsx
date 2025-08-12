"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
            Something big is coming
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            We are working hard to bring you something amazing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex w-full max-w-md items-center space-x-2"
        >
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email"
              className="pl-10"
            />
          </div>
          <Button type="submit">
            Get Notified
          </Button>
        </motion.div>
      </main>
    </>
  );
}
