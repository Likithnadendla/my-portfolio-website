"use client"

import Image from "next/image";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import { ExperienceTimeline } from "@/components/ui/experience-timeline";
import { EducationTimeline } from "@/components/ui/education-timeline";
import { FluidShaderBackground } from "@/components/ui/fluid-shader-background";
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Download, Github, Linkedin, Code, Cloud, Database } from 'lucide-react'

export default function Home() {
  const handleDownload = () => {
    console.log('Download button clicked'); // Debug log
    
    try {
      const link = document.createElement('a');
      link.href = '/Likith-Nadendla-Resume.docx';
      link.download = 'Likith-Nadendla-Resume.docx';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download initiated'); // Success log
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to ${sectionId}`); // Debug log
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error(`Element with id '${sectionId}' not found`);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Fluid Shader Background */}
      <FluidShaderBackground />
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <NavBarDemo />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 sm:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
              <Image
                src="/images/likith-profile.jpg"
                alt="Likith Nadendla"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100">
              Likith Nadendla
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Dynamic Cloud Technology Engineer with 4+ years of experience in software development, 
              data analytics, and cloud solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>United States, GA 30067</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} />
                <span>770-687-1382</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <span>likith@likith.net</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <button
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                onMouseEnter={() => console.log('Get In Touch button hovered')}
                style={{ zIndex: 100, position: 'relative', pointerEvents: 'auto' }}
              >
                <Mail size={18} />
                Get In Touch
              </button>

              <button
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer"
                onClick={handleDownload}
                onMouseEnter={() => console.log('Download button hovered')}
                style={{ zIndex: 100, position: 'relative', pointerEvents: 'auto' }}
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
            
            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Dynamic Cloud Technology Engineer with over four years of diverse experience in software development, 
              data analytics, and cloud solutions. Expertise in deploying scalable applications and automating processes 
              using CI/CD pipelines and Kubernetes, significantly enhancing operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg"
            >
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Proficient in Python, JavaScript, C#, and modern frameworks like React.js, Next.js, and Node.js
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/20"
            >
              <Cloud className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Expert in AWS, GCP, Azure with extensive experience in Docker, Kubernetes, and CI/CD automation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/20"
            >
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Skilled in BigQuery, MySQL, machine learning with TensorFlow, and data pipeline optimization
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Cloud", 
                skills: [
                  { name: "AWS", logo: "/logos/aws_light.svg" },
                  { name: "GCP", logo: "/logos/google-cloud.svg" },
                  { name: "Azure", logo: "/logos/azure.svg" },
                  { name: "DigitalOcean", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
                  { name: "IBM Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg" }
                ]
              },
              { 
                title: "Programming", 
                skills: [
                  { name: "Python", logo: "/logos/python.svg" },
                  { name: "JavaScript", logo: "/logos/javascript.svg" },
                  { name: "Node.js", logo: "/logos/nodejs.svg" },
                  { name: "Golang", logo: "/logos/golang.svg" },
                  { name: "Kotlin", logo: "/logos/kotlin.svg" },
                  { name: "Bash", logo: "/logos/bash.svg" },
                  { name: "R", logo: "/logos/r.svg" },
                  { name: "MATLAB", logo: "/logos/matlab.svg" }
                ]
              },
              { 
                title: "Frameworks & APIs", 
                skills: [
                  { name: "Next.js", logo: "/logos/nextjs_icon_dark.svg" },
                  { name: "FastAPI", logo: "/logos/fastapi.svg" },
                  { name: "Flask", logo: "/logos/flask-wordmark-light.svg" },
                  { name: "GraphQL", logo: "/logos/graphql.svg" },
                  { name: "OpenAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg" },
                  { name: "REST API", logo: "https://img.icons8.com/color/48/api-settings.png" },
                  { name: "Android", logo: "/logos/android-icon.svg" }
                ]
              },
              { 
                title: "Development Tools & Testing", 
                skills: [
                  { name: "Git", logo: "/logos/git.svg" },
                  { name: "GitLab", logo: "/logos/gitlab.svg" },
                  { name: "Vitest", logo: "/logos/vitest.svg" },
                  { name: "ESLint", logo: "/logos/eslint-wordmark-light.svg" },
                  { name: "Postman", logo: "/logos/postman.svg" },
                  { name: "n8n", logo: "/logos/n8n.svg" },
                  { name: "Atlassian", logo: "/logos/atlassian.svg" }
                ]
              },
              { 
                title: "Databases & Storage", 
                skills: [
                  { name: "MySQL", logo: "/logos/mysql-wordmark-light.svg" },
                  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
                  { name: "MongoDB", logo: "/logos/mongodb-wordmark-light.svg" },
                  { name: "Redis", logo: "/logos/redis.svg" },
                  { name: "MariaDB", logo: "/logos/mariadb.svg" }
                ]
              },
              { 
                title: "DevOps & Monitoring", 
                skills: [
                  { name: "Docker", logo: "/logos/docker.svg" },
                  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
                  { name: "Terraform", logo: "/logos/terraform.svg" },
                  { name: "Cloudflare", logo: "/logos/cloudflare.svg" },
                  { name: "Grafana", logo: "/logos/grafana.svg" },
                  { name: "DataDog", logo: "/logos/datadog.svg" }
                ]
              },
              { 
                title: "Infrastructure & Systems", 
                skills: [
                  { name: "Linux", logo: "/logos/linux.svg" },
                  { name: "Nginx", logo: "/logos/nginx.svg" },
                  { name: "Apache Kafka", logo: "/logos/apache-kafka-wordmark-light.svg" },
                  { name: "Raspberry Pi", logo: "/logos/raspberry_pi.svg" },
                  { name: "Firebase", logo: "/logos/firebase-wordmark.svg" },
                  { name: "Supabase", logo: "/logos/supabase.svg" }
                ]
              },
              { 
                title: "AI & ML Platform", 
                skills: [
                  { name: "Hugging Face", logo: "/logos/hugging_face.svg" },
                  { name: "MCP", logo: "/logos/model-context-protocol-light.svg" },
                  { name: "TensorFlow", logo: "/logos/tensorflow-wordmark-light.svg" },
                  { name: "Amazon SageMaker", logo: "/logos/aws_light.svg" },
                  { name: "Azure ML", logo: "/logos/azure.svg" },
                  { name: "Vertex AI", logo: "/logos/google-cloud.svg" }
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-lg border border-white/20 dark:border-slate-700/20"
              >
                <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-lg border border-white/30 dark:border-slate-600/30 hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-5 h-5 object-contain flex-shrink-0"
                        loading="lazy"
                        onError={(event) => {
                          const target = event.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4">
        <ExperienceTimeline />
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-4">
        <EducationTimeline />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new opportunities and exciting projects. 
              Whether you want to discuss cloud solutions, data analytics, or software development, 
              feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/20"
              >
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:likith@likith.net" className="text-blue-600 hover:underline">
                  likith@likith.net
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/20"
              >
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:7706871382" className="text-blue-600 hover:underline">
                  (770) 687-1382
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/20"
              >
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Georgia, United States
                </p>
              </motion.div>
            </div>

            <div className="flex justify-center gap-4">
              <a
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200 cursor-pointer"
                href="mailto:likith@likith.net"
                style={{ zIndex: 100, position: 'relative', pointerEvents: 'auto' }}
              >
                <Mail size={18} />
                Send Email
              </a>

              <button
                className="flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer"
                onClick={handleDownload}
                onMouseEnter={() => console.log('Contact section download button hovered')}
                style={{ zIndex: 100, position: 'relative', pointerEvents: 'auto' }}
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-sm text-slate-300 border-t border-white/10 dark:border-slate-700/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2025 Likith Nadendla. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:likith@likith.net" className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
