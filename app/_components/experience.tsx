import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

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
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="mt-0.5">✅</span>
              <span>Developed advanced features in a <strong>Knowledge Graph</strong>, including <strong>node
              filtering</strong>, <strong>dependency creation</strong>, <strong>visual path tracing</strong> between related
              nodes, and identification of <strong>missing dependencies</strong>, enhancing data
              visualization and analysis</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-2">
              <span className="mt-0.5">✅</span>
              <span>Built a <strong>documentation generation feature</strong> leveraging application
              source code and a <strong>static workflow engine</strong>, enabling automated
              documentation through configurable <strong>prompt and non-prompt
              based steps</strong></span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-2">
              <span className="mt-0.5">✅</span>
              <span>Conducted a <strong>Proof of Concept (POC)</strong> to fine-tune a <strong>Large Language
              Model (LLM)</strong> with domain-specific datasets, demonstrating a <strong>30%
              improvement</strong> in response accuracy and contextual relevance</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-2">
              <span className="mt-0.5">✅</span>
              <span>Collaborated directly with clients to implement <strong>custom add-on
              features</strong> and modify existing functionality to meet specific business
              requirements and use cases</span>
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
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="mt-0.5">✅</span>
              <span>Implemented <strong>Micro Frontend (MFE)</strong> architecture using <strong>React</strong>,
              modularizing a monolithic application into independently
              deployable units, enabling parallel development across teams</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-2">
              <span className="mt-0.5">✅</span>
              <span>Led end-to-end transition from a <strong>monolithic architecture</strong> to <strong>Micro
              Frontend (MFE)</strong> using <strong>React</strong>, deploying modular applications on <strong>AWS
              and Azure</strong> with <strong>Docker, Kubernetes(Helm)</strong>; owned the entire 
              <strong> DevOps lifecycle</strong> including boilerplate setup, Dockerfile creation,
              <strong> CI/CD pipeline</strong> scripting, and Helm chart development</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-2">
              <span className="mt-0.5">✅</span>
              <span>Designed and architected a <strong>distributed worker system</strong> to process
              time-intensive tasks concurrently using <strong>Redis, WebSockets, and
              Kubernetes Jobs</strong>, significantly improving throughput and system
              responsiveness</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-2">
              <span className="mt-0.5">✅</span>
              <span>Built and visualized a <strong>Knowledge Graph</strong> using <strong>D3.js</strong> to represent
              complex relationships within <strong>Generative AI (GenAI)</strong> datasets,
              facilitating deeper insights and data connectivity</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-2">
              <span className="mt-0.5">✅</span>
              <span>Collaborated with the platform administration team to onboard
              <strong> Micro Frontend (MFE)</strong> child applications into the centralized UI
              framework, ensuring seamless integration and alignment with
              organizational standards.</span>
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
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="mt-0.5">✅</span>
              <span>Designed and implemented a <strong>Python-based middleware
              microservice</strong> to manage dynamic application configurations,
              integrating securely with <strong>Vault providers</strong> for secrets management</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-2">
              <span className="mt-0.5">✅</span>
              <span>Developed and enforced <strong>Role-Based Access Control (RBAC)</strong> for a
              multi-tenant architecture using <strong>Keycloak</strong> as the identity and access
              management <strong>(IAM)</strong> solution</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-2">
              <span className="mt-0.5">✅</span>
              <span>Boosted <strong>API performance by 10x</strong> through advanced <strong>MongoDB
              aggregation techniques</strong>, reducing response times and improving
              scalability</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-2">
              <span className="mt-0.5">✅</span>
              <span>Engineered a dynamic <strong>ETL solution</strong> using <strong>JMESPath</strong> and <strong>regex-
              based pattern matching</strong>, enabling on the-fly data extraction and
              transformation tailored to diverse input schemas</span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <motion.div 
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-clip"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Timeline data={data} />
      </motion.div>
    </motion.div>
  );
}

export default Experience;