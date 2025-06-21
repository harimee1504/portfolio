import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <motion.div
            id="skills"
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
                    Skills
                </motion.h2>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-y-4 mt-6 p-4 gap-x-4"
                >
                  Initial Content
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Skills;       