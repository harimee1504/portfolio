import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { AmazonIcon, AzureIcon, D3Icon, Dockericon, ExpressIcon, FlaskIcon, GraphqlIcon, JavaScriptIcon, JenkinsIcon, KeycloakIcon, KubernetesIcon, MongoDBIcon, MySqlIcon, NextJsIcon, NodeJSIcon, PythonIcon, ReactIcon, RedisIcon, SqLiteIcon, SvelteIcon } from "./assets/svg";

const Skills = () => {
    const items = [
        {
            title: "Frontend",
            description: "Libraries and tools that simplify building and managing the user interface of websites and web apps.",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-center gap-x-2">
                <ReactIcon />
                <JavaScriptIcon />
                <NextJsIcon />
                <SvelteIcon />
                <D3Icon />
            </div>
        },
        {
            title: "Backend",
            description: "Tools or libraries that help build and manage the server-side logic, database interactions, and APIs of web applications.",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-center">
                <PythonIcon />
                <FlaskIcon />
                <ExpressIcon />
                <NodeJSIcon />
            </div>
        },
        {
            title: "DevOps",
            description: "Tools that help to manage different stages of the SDLC such as deployment and infrastructure management",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-center gap-x-2">
                <Dockericon />
                <KubernetesIcon />
                <JenkinsIcon />
                <AmazonIcon />
                <AzureIcon />
            </div>
        },
        {
            title: "Database",
            description: "Systems used to store, organize, and manage data for applications, enabling efficient retrieval, updates, and persistence of information",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-center gap-x-2">
                <MongoDBIcon />
                <RedisIcon />
                <MySqlIcon />
                <SqLiteIcon />
            </div>
        },
        {
            title: "Middleware",
            description: "Middleware that lets clients fetch precise data from multiple sources in a single request, streamlining API interactions",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-center gap-x-2">
                <GraphqlIcon />
            </div>
        },
        {
            title: "Other Tools",
            description: "General software utilities that support various stages of development",
            className: "md:col-span-1",
            header: <div className="w-full h-full flex items-center justify-center gap-x-2">
                <KeycloakIcon />
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