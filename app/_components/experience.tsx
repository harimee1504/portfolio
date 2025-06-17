import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "Present - June 2024",
      content: (
        <div>
          <p className="mb-4 text-lg font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
            Senior Software Engineer
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅  Developed advanced features in a Knowledge Graph, including node
              filtering, dependency creation, visual path tracing between related
              nodes, and identification of missing dependencies, enhancing data
              visualization and analysis
            </div>
            <div className="flex mt-2 items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅  Built a documentation generation feature leveraging application
              source code and a static workflow engine, enabling automated
              documentation through configurable prompt and non-prompt
              based steps
            </div>
            <div className="flex mt-2 items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅   Conducted a Proof of Concept (POC) to fine-tune a Large Language
              Model (LLM) with domain-specific datasets, demonstrating a 30%
              improvement in response accuracy and contextual relevance
            </div>
            <div className="flex mt-2 items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅   Collaborated directly with clients to implement custom add-on
              features and modify existing functionality to meet specific business
              requirements and use cases
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2024 - June 2022",
      content: (
        <div>
          <p className="mb-4 text-lg font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
            Software Engineer
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅   Implemented Micro Frontend (MFE) architecture using React,
              modularizing a monolithic application into independently
              deployable units, enabling parallel development across teams
            </div>
            <div className="flex mt-2 items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅  Led end-to-end transition from a monolithic architecture to Micro
              Frontend (MFE) using React, deploying modular applications on AWS
              and Azure with Docker, Kubernetes(Helm); owned the entire
              DevOps lifecycle including boilerplate setup, Dockerfile creation,
              CI/CD pipeline scripting, and Helm chart development
            </div>
            <div className="flex mt-2 items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅    Designed and architected a distributed worker system to process
              time-intensive tasks concurrently using Redis, WebSockets, and
              Kubernetes Jobs, significantly improving throughput and system
              responsiveness
            </div>
            <div className="flex mt-2 items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅   Built and visualized a Knowledge Graph using D3.js to represent
              complex relationships within Generative AI (GenAI) datasets,
              facilitating deeper insights and data connectivity
            </div>
            <div className="flex mt-2 items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅    Collaborated with the platform administration team to onboard
              Micro Frontend (MFE) child applications into the centralized UI
              framework, ensuring seamless integration and alignment with
              organizational standards.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2022 - May 2021",
      content: (
        <div>
          <p className="mb-4 text-lg font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
            Associate Software Engineer
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅  Developed advanced features in a Knowledge Graph, including node
              filtering, dependency creation, visual path tracing between related
              nodes, and identification of missing dependencies, enhancing data
              visualization and analysis
            </div>
            <div className="flex mt-2 items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅  Built a documentation generation feature leveraging application
              source code and a static workflow engine, enabling automated
              documentation through configurable prompt and non-prompt
              based steps
            </div>
            <div className="flex mt-2 items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅   Conducted a Proof of Concept (POC) to fine-tune a Large Language
              Model (LLM) with domain-specific datasets, demonstrating a 30%
              improvement in response accuracy and contextual relevance
            </div>
            <div className="flex mt-2 items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅   Collaborated directly with clients to implement custom add-on
              features and modify existing functionality to meet specific business
              requirements and use cases
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default Experience;