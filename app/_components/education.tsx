import Image from "next/image";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <motion.div 
            id="education"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex h-full w-full flex-col items-center gap-y-8 mt-16 bg-neutral-950"
        >
            <div className="flex h-[40vh] flex-col mt-12 w-[75%]">
                <motion.h2 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl"
                >
                    Education
                </motion.h2>
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-y-4 mt-6 p-4"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-[60px] h-[60px] rounded-lg overflow-hidden bg-neutral-900 shadow-lg"
                    >
                        <Image
                            src="/images/mkce-rounded.jpg"
                            alt="MKCE" 
                            fill 
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 60px, 60px"
                        />
                    </motion.div>
                    <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col gap-y-2 w-full rounded-lg px-4"
                    >
                        <h2 className="text-lg md:text-xl text-black dark:text-white max-w-4xl">M.Kumarasamy College of Engineering</h2>
                        <p className="text-md text-white">Bachelor of Engineering</p>
                        <p className="text-sm text-white">[2017 - 2021]</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Education;       