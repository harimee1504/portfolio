"use client";
import React from "react";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const LinkedInComponent = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="relative">
                        <div
                            style={{ clipPath: "url(#squircleClip)" }}
                            className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                            onClick={() => window.open("https://www.linkedin.com/in/harikrishnan-prasannam-295ab926a", "_blank")}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-8 w-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </TooltipTrigger>
                <TooltipContent className="bg-blue-600 text-white border-blue-500 mb-4">
                    <p>Connect on LinkedIn</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

const CvComponent = () => {
    return (
        <button
            className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none hover:scale-101 hover:-translate-y-1 hover:shadow-xl"
            onClick={() => window.open("/cv/harikrishnan_prasannam_resume.pdf", "_blank")}
        >
            <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
            >
            </span>
            <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
            >
                Get CV
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                    ></path>
                </svg>
            </span>
        </button>
    );
}

const GitHubComponent = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="relative">
                        <div
                            style={{ clipPath: "url(#squircleClip)" }}
                            className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                            onClick={() => window.open("https://github.com/harimee1504", "_blank")}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-8 w-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white border-gray-600 mb-4">
                    <p>View GitHub Profile</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

const HeroSection = () => {
    return (
        <div id="home" className="h-screen w-full">
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >
                    <Highlight className="text-white">
                        Hello, I'm Harikrishnan Prasannam
                    </Highlight>
                </motion.h1>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-3 text-md md:text-3xl mb-4 text-black dark:text-white max-w-4xl text-center mx-auto"
                >
                    Fullstack Developer with 4 years of hands-on experience building web applications that perform and impress
                </motion.h2>
                <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-row items-center justify-center mt-6 gap-x-4">
                    <CvComponent />
                    <LinkedInComponent />
                    <GitHubComponent />
                </motion.div>
            </HeroHighlight>
        </div>
    );
}

export default HeroSection;