import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Icon } from "@iconify-icon/react";
import { KeycloakIcon } from "./assets/svg";

const SkillIcon = ({ icon, name }: { icon: string, name: string }) => {
    return (<TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="relative flex flex-col items-center justify-center gap-y-2">
                    <div
                        style={{ clipPath: "url(#squircleClip)" }}
                        className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <Icon icon={icon} className="text-4xl md:text-4xl lg:text-5xl" />
                    </div>
                    <span className="text-xs text-white dark:text-white font-medium text-center">{name}</span>
                </div>
            </TooltipTrigger>
        </Tooltip>
    </TooltipProvider>)
}

const CustomSkillIcon = ({ children, name }: { children: React.ReactNode, name: string }) => {
    return (<TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="relative flex flex-col items-center justify-center gap-y-2">
                    <div
                        style={{ clipPath: "url(#squircleClip)" }}
                        className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        {children}
                    </div>
                    <span className="text-xs text-white dark:text-white font-medium text-center">{name}</span>
                </div>
            </TooltipTrigger>
        </Tooltip>
    </TooltipProvider>)
}


const Skills = () => {
    const items = [
        {
            title: "Frontend",
            description: "Libraries and tools that simplify building and managing the user interface of websites and web apps.",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-around">
                <SkillIcon icon="skill-icons:react-dark" name="React" />
                <SkillIcon icon="skill-icons:javascript" name="Javascript" />
                <SkillIcon icon="skill-icons:nextjs-light" name="Next.js" />
                <SkillIcon icon="skill-icons:svelte" name="Svelte" />
                <SkillIcon icon="skill-icons:d3-light" name="D3" />
            </div>
        },
        {
            title: "Backend",
            description: "Tools or libraries that help build and manage the server-side logic, database interactions, and APIs of web applications.",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-around">
                <SkillIcon icon="skill-icons:python-dark" name="Python" />
                <SkillIcon icon="skill-icons:flask-light" name="Flask" />
                <SkillIcon icon="skill-icons:expressjs-light" name="Express" />
                <SkillIcon icon="skill-icons:nodejs-light" name="Node.js" />
            </div>
        },
        {
            title: "DevOps",
            description: "Tools that help to manage different stages of the SDLC such as deployment and infrastructure management",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-around">
                <SkillIcon icon="skill-icons:docker" name="Docker" />
                <SkillIcon icon="skill-icons:kubernetes" name="Kubernetes" />
                <SkillIcon icon="skill-icons:jenkins-light" name="Jenkins" />
                <SkillIcon icon="skill-icons:aws-dark" name="AWS" />
                <SkillIcon icon="skill-icons:azure-light" name="Azure" />
            </div>
        },
        {
            title: "Database",
            description: "Systems used to store, organize, and manage data for applications, enabling efficient retrieval, updates, and persistence of information",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-around">
                <SkillIcon icon="skill-icons:mongodb" name="MongoDB" />
                <SkillIcon icon="skill-icons:redis-light" name="Redis" />
                <SkillIcon icon="skill-icons:mysql-light" name="MySQL" />
                <SkillIcon icon="skill-icons:sqlite" name="SQLite" />
            </div>
        },
        {
            title: "Middleware",
            description: "Middleware that lets clients fetch precise data from multiple sources in a single request, streamlining API interactions",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-center">
                <SkillIcon icon="skill-icons:graphql-light" name="GraphQL" />
            </div>
        },
        {
            title: "Other Tools",
            description: "General software utilities that support various stages of development",
            className: "md:col-span-1",
                header: <div className="w-full h-full flex items-center justify-around">
                    <CustomSkillIcon name="Keycloak">
                        <KeycloakIcon />
                    </CustomSkillIcon>
            </div>
        }
    ];
    return (
        <motion.div
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex h-full w-full flex-col items-center gap-y-8 mt-16"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex w-[75%] mt-6 pb-6"
            >
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl pt-6">Skills</h2>
            </motion.div>
            <BentoGrid className="max-w-[75%] mx-auto md:auto-rows-[20rem] pb-16">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        header={item.header}
                    />
                ))}
            </BentoGrid>
        </motion.div>
    );
}

export default Skills;