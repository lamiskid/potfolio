
// app/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  // Github,
  // Linkedin,
  Mail,
  Download,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const skills = {
    Backend: [
      "Java",
      "Kotlin",
      "Spring Boot",
      "Hibernate",
      "REST APIs",
    ],
    Cloud: ["AWS", "Azure", "Docker", "Terraform", "CI/CD"],
    Messaging: ["Kafka", "RabbitMQ", "WebSocket", "gRPC"],
    Mobile: ["Android", "Jetpack Compose", "Flutter"],
    Frontend: ["React", "Angular", "TypeScript"],
  };

  const projects = [
    {
      title: "AI Goal Tracking Platform",
      description:
          "Built scalable workflow orchestration using Kotlin, Spring Boot, Temporal, and Azure AI Search.",
      stack: ["Kotlin", "Spring Boot", "Temporal", "Azure"],
    },
    {
      title: "VPN Android Platform",
      description:
          "Developed secure Android & Android TV VPN client with split tunneling, encrypted storage, and resilient networking.",
      stack: ["Kotlin", "Jetpack Compose", "Ktor", "Android"],
    },
    {
      title: "Church Engagement Platform",
      description:
          "Built a scalable church platform with real-time chat, media streaming, and cloud deployment.",
      stack: ["Kotlin", "AWS", "WebSocket", "PostgreSQL"],
    },
  ];

  return (
      <main className="bg-white text-slate-900 dark:bg-[#0B1220] dark:text-white transition-colors duration-300">
        {/* NAVBAR */}
        <nav className="fixed top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0B1220]/70 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="font-bold text-xl tracking-tight">
              Abolade<span className="text-green-600">.</span>
            </h1>

            <button
                onClick={() => setDark(!dark)}
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:scale-105 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="min-h-screen flex items-center pt-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              <p className="text-green-600 font-semibold mb-4">
                Senior Java & Kotlin Engineer
              </p>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Building scalable backend & mobile systems.
              </h1>

              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                6+ years of experience delivering cloud-native applications,
                Android platforms, scalable APIs, event-driven systems, and
                DevOps solutions using Java, Kotlin, Spring Boot, AWS, and Azure.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition">
                  View Projects
                </button>
                <a
                    href="Abolade akindeji .pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>

              <div className="flex gap-4 mt-10">
                <a
                    href="https://linkedin.com"
                    className="w-11 h-11 rounded-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-green-600 hover:text-white transition"
                >
                  {/*<Linkedin size={18} />*/}
                </a>

                <a
                    href="mailto:example@gmail.com"
                    className="w-11 h-11 rounded-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-green-600 hover:text-white transition"
                >
                  <Mail size={18} />
                </a>

                <a
                    href="#"
                    className="w-11 h-11 rounded-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-green-600 hover:text-white transition"
                >
                  {/*<Github size={18} />*/}
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
              <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full" />
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative flex justify-center"
              >
                <div className="absolute w-[400px] h-[400px] bg-green-500/10 blur-3xl rounded-full" />

                <Image
                    src="/images/p2.svg"
                    alt="Developer Illustration"
                    width={700}
                    height={700}
                    priority
                    className="relative w-full max-w-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-green-600 font-semibold mb-3">About</p>

              <h2 className="text-4xl font-bold mb-6">
                Engineering reliable systems for scale.
              </h2>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Senior software engineer specializing in backend systems,
                Android applications, microservices, workflow orchestration,
                cloud-native infrastructure, and scalable APIs.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-14">
              {[
                "6+ Years Experience",
                "Kotlin Expert",
                "AWS & Azure",
                "Android Engineer",
              ].map((item) => (
                  <div
                      key={item}
                      className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
                  >
                    <h3 className="font-semibold text-lg">{item}</h3>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-green-600 font-semibold mb-3">Tech Stack</p>

            <h2 className="text-4xl font-bold mb-14">
              Technologies I work with.
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                  <div
                      key={category}
                      className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
                  >
                    <h3 className="text-2xl font-semibold mb-6">{category}</h3>

                    <div className="flex flex-wrap gap-3">
                      {items.map((skill) => (
                          <span
                              key={skill}
                              className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
                          >
                      {skill}
                    </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-green-600 font-semibold mb-3">Experience</p>

            <h2 className="text-4xl font-bold mb-14">
              Professional Journey.
            </h2>

            <div className="space-y-10">
              {[
                {
                  role: "Senior Java/Kotlin Engineer",
                  company: "GoalSpaces Technologies",
                  date: "2023 - Present",
                },
                {
                  role: "Senior Android Engineer",
                  company: "VPN Application Platform",
                  date: "2024 - Present",
                },
                {
                  role: "Full-Stack Kotlin Engineer",
                  company: "Church Engagement Platform",
                  date: "2024 - Present",
                },
              ].map((exp) => (
                  <div
                      key={exp.company}
                      className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold">{exp.role}</h3>

                        <p className="text-green-600 mt-2">{exp.company}</p>
                      </div>

                      <span className="text-slate-500 dark:text-slate-400">
                    {exp.date}
                  </span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-green-600 font-semibold mb-3">Projects</p>

            <h2 className="text-4xl font-bold mb-14">
              Featured Work.
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                  <motion.div
                      whileHover={{ y: -6 }}
                      key={project.title}
                      className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
                  >
                    <div className="h-52 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-slate-900 flex items-center justify-center">
                      <img
                          src="https://undraw.co/api/illustrations/undraw_server_cluster_jwwq.svg"
                          className="w-44"
                          alt=""
                      />
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>

                      <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            >
                        {tech}
                      </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-green-600 font-semibold mb-3">Contact</p>

            <h2 className="text-5xl font-bold leading-tight">
              Let’s build something impactful.
            </h2>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              Available for senior backend, Android, and cloud engineering roles.
            </p>

            <div className="flex justify-center gap-4 mt-10">
              <a
                  href="mailto:youremail@gmail.com"
                  className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white transition"
              >
                Send Email
              </a>

              <a
                  href="https://linkedin.com"
                  className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
  );
}