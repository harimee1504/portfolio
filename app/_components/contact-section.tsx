"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface FormData {
    firstname: string;
    lastname: string;
    company: string;
    phone: string;
    email: string;
    message: string;
}

const ContactSection = () => {
    const [formData, setFormData] = useState<FormData>({
        firstname: "",
        lastname: "",
        company: "",
        phone: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const validateForm = () => {
        const errors: string[] = [];
        
        if (!formData.firstname.trim()) {
            errors.push("First name is required");
        }
        
        if (!formData.email.trim()) {
            errors.push("Email is required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.push("Invalid email format");
        }
        
        if (!formData.message.trim()) {
            errors.push("Message is required");
        }

        if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            errors.push("Invalid phone number format");
        }

        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const errors = validateForm();
        if (errors.length > 0) {
            errors.forEach(error => 
                toast.error(error, {
                    description: "Please fix the error and try again."
                })
            );
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            toast.success("Message sent successfully!", {
                description: "Thank you for contacting me."
            });
            
            setFormData({
                firstname: "",
                lastname: "",
                company: "",
                phone: "",
                email: "",
                message: ""
            });
        } catch (error) {
            toast.error("Failed to send message", {
                description: "Please try again later."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex h-full w-full flex-col items-center gap-y-8 mt-8"
        >
            <div className="flex h-[100vh] flex-col w-[75%]">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="shadow-input mx-auto w-full max-w rounded-none bg-white p-4 md:rounded-2xl md:p-4 dark:bg-black"
                >
                    <motion.h2 
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl"
                    >
                        Contact Me
                    </motion.h2>
                    <form className="my-8" onSubmit={handleSubmit}>
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
                        >
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name <span className="text-red-500">*</span></Label>
                                <Input 
                                    id="firstname" 
                                    placeholder="First name" 
                                    type="text" 
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required 
                                />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input 
                                    id="lastname" 
                                    placeholder="Last name" 
                                    type="text"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                />
                            </LabelInputContainer>
                        </motion.div>
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
                        >
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="company">Company</Label>
                                <Input 
                                    id="company" 
                                    placeholder="Company" 
                                    type="text"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="phone">Phone</Label>
                                <Input 
                                    id="phone" 
                                    placeholder="Phone" 
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </LabelInputContainer>
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                                <Input 
                                    id="email" 
                                    placeholder="Email" 
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                                <Textarea 
                                    id="message" 
                                    placeholder="Message" 
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required 
                                />
                            </LabelInputContainer>
                        </motion.div>

                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex gap-x-2"
                        >
                            {Object.values(formData).some(value => value.trim() !== "") && (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                    type="button"
                                    onClick={() => setFormData({
                                        firstname: "",
                                        lastname: "",
                                        company: "",
                                        phone: "",
                                        email: "",
                                        message: ""
                                    })}
                                >
                                    Clear
                                    <BottomGradient />
                                </motion.button>
                            )}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send →'}
                                <BottomGradient />
                            </motion.button>
                        </motion.div>
                        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                        <motion.h2 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="text-center text-md font-bold text-neutral-800 dark:text-neutral-200"
                        >
                            Developed by Harikrishnan Prasannam
                        </motion.h2>

                        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                    </form>
                </motion.div>
            </div>
        </motion.div>
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
