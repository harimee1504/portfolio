"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="flex h-full w-full flex-col items-center gap-y-8 mt-8">
            <div className="flex h-[100vh] flex-col w-[75%]">
                <div className="shadow-input mx-auto w-full max-w rounded-none bg-white p-4 md:rounded-2xl md:p-4 dark:bg-black">
                    <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">Contact Me</h2>
                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name <span className="text-red-500">*</span></Label>
                                <Input id="firstname" placeholder="First name" type="text" required />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Last name" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" placeholder="Company" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="Phone" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                            <Input id="email" placeholder="Email" type="email" required />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                            <Textarea id="message" placeholder="Message" required />
                        </LabelInputContainer>

                        <div className="flex gap-x-2">
                            <button
                                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                type="submit"
                            >
                                Cancel
                                <BottomGradient />
                            </button>
                            <button
                                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                type="submit"
                            >
                                Send &rarr;
                                <BottomGradient />
                            </button>

                        </div>
                        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                        <h2 className="text-center text-md font-bold text-neutral-800 dark:text-neutral-200">
                            Developed by Harikrishnan Prasannam
                        </h2>

                        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
