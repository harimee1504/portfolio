import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const ProjectSection = () => {
    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
    );
    const items = [
        {
            title: "Auth Wrapper",
            description: "A simple shared authentication wrapper boilerplate created using Clerk",
            header: <img src="/images/authlayout.png" alt="Todo Note App" className="w-full h-[65%] object-fill" />,
            className: "md:col-span-2",
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
            tags: ["Next.js", "Clerk", "Microfrontend"]
        },
        {
            title: "The File Store",
            description: "A file storage system with RBAC enabled and let users to upload files, manage access, and share links easily",
            header: <img src="/images/filestore.png" alt="Todo Note App" className="w-full h-[70%] object-fill" />,
            className: "md:col-span-1",
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
            tags: ["Next.js", "Convex", "Microfrontend"],
            url: "https://file-store-chi.vercel.app"
        },
        {
            title: "Deployment Monitor",
            description:
                "A minimalistic deployment monitor for your Kubernetes(K8s) cluster with logs search and sort functionality",
            header: <img src="/images/cluster.png" alt="Todo Note App" className="w-full h-[70%] object-fill" />,
            className: "md:col-span-1",
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
            tags: ["React(Template)", "SQLite", "Django", "Microfrontend"],
            url: "https://github.com/harimee1504/cluster"
        },
        {
            title: "Canvas",
            description: "A collaborative whiteboard app that lets you create, share, and edit boards in real-time with your team",
            header: <img src="/images/canvas.png" alt="Todo Note App" className="w-full h-[65%] object-fill" />,
            className: "md:col-span-2",
            icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
            tags: ["Next.js", "Convex", "LiveBlocks", "Microfrontend"],
            url: "https://canvas-pi-blush.vercel.app/canvas"
        },
        {
            title: "Sprint Board",
            description:
                "A sprint board app that lets you create, manage, and track your sprints and tasks along with basic planner",
            header: <img src="/images/sprint.png" alt="Todo Note App" className="w-full h-[65%] object-fill" />,
            className: "md:col-span-2",
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
            tags: ["Vue", "Python", "Flask", "MySQL", "GraphQL", "Microfrontend"],
            url: "https://board-beta-indol.vercel.app"
        },
        {
            title: "Todo Note App",
            description: "A simple app to manage your tasks and notes with RBAC enabled",
            header: <img src="/images/todo.png" alt="Todo Note App" className="w-full h-[70%] object-fill" />,
            className: "md:col-span-1",
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
            tags: ["React", "Express", "MySQL", "Microfrontend"],
            url: "https://todo-note-seven.vercel.app"
        },
        {
            title: "Portfolio Website (Old Version)",
            description:
                "A minimalistic portfolio website to showcase my projects and skills",
            header: <img src="/images/old_portfolio.png" alt="Todo Note App" className="w-full h-[70%] object-fill" />,
            className: "md:col-span-1",
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
            tags: ["Flask", "Python"],
            url: "https://harikrishnanp.pythonanywhere.com/"
        },
    ];
    return (
        <motion.div
            id="projects"
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
                className="flex w-[75%] mt-6"
            >
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl pt-6">Projects</h2>
            </motion.div>
            <BentoGrid className="max-w-[75%] mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                        tags={item.tags}
                        url={item.url}
                    />
                ))}
            </BentoGrid>
        </motion.div>
    );
}

export default ProjectSection;