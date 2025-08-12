"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      console.log("Email submitted:", email);
      setSubmitted(true);
    }
  };

  return (
    <>
      <AnimatedBackground />
      <main className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-black/30 backdrop-blur-sm border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                Something big is coming
              </CardTitle>
              <CardDescription className="text-lg md:text-xl text-muted-foreground pt-2">
                We are working hard to bring you something amazing.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <Card className="bg-black/30 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle>Get Notified</CardTitle>
              <CardDescription>
                Sign up to be the first to know when we launch.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={submitted}
                  />
                </div>
                <Button type="submit" disabled={!isValidEmail(email) || submitted} data-testid="submit-button">
                  {submitted ? "We'll be in touch!" : "Get Notified"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </>
  );
}
