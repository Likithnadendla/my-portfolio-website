"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import { ExperienceTimeline } from "@/components/ui/experience-timeline";
import { EducationTimeline } from "@/components/ui/education-timeline";
import { ProjectsTimeline } from "@/components/ui/projects-timeline";
import { FluidShaderBackground } from "@/components/ui/fluid-shader-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Download, Linkedin, Code, Cloud, Database, Sun, Moon } from 'lucide-react'

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored as 'light' | 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };


  const handleDownload = () => {
    console.log('Download button clicked'); // Debug log
    
    try {
      const link = document.createElement('a');
      link.href = '/docs/Likith_MLOps_engineer.pdf';
      link.download = 'Likith_MLOps_engineer.pdf';
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
      <div className="relative z-20 pointer-events-auto">
        {/* Theme Toggle */}
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="fixed top-4 right-4 flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-3 py-2 shadow-md transition hover:shadow-lg"
          style={{ pointerEvents: 'auto' }}
        >
          {theme === 'dark' ? (
            <Sun size={18} className="text-amber-400" />
          ) : (
            <Moon size={18} className="text-slate-600" />
          )}
          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
            {theme === 'dark' ? 'Light' : 'Dark'} mode
          </span>
        </button>
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
            <div className="relative mx-auto w-50 h-50 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
              <Image
                src="/images/likith-profile.jpg"
                alt="Likith Nadendla"
                width={200}
                height={200}
                sizes="200px"
                className="object-cover"
                priority
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100">
              Likith Nadendla
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              ML/DevOps Engineer who architects, deploys, and operationalizes secure, 
              cloud-native machine learning systems at scale
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span> United States </span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} />
                <span>503-454-6925</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <span>likith@likith.net</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <AnimatedButton
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                icon={<Mail size={18} />}
              >
                Get In Touch
              </AnimatedButton>

              <AnimatedButton
                onClick={handleDownload}
                icon={<Download size={18} />}
              >
                Download Resume
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-6 mb-4">
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                About Me
              </h2>
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              ML/DevOps Engineer who architects, deploys, and operationalizes secure, cloud-native machine learning 
              systems at scale. Experienced in automating pipelines, orchestrating data workflows, and hardening 
              infrastructure across AWS and Kubernetes environments. Proven ability to optimize inference performance, 
              instrument observability, and enforce compliance for regulated industries, especially healthcare and 
              enterprise retail.
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
              <h3 className="text-xl font-semibold mb-2">ML Systems Architecture</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Architecting and deploying secure, cloud-native ML systems with automated pipelines and data workflows
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
              <h3 className="text-xl font-semibold mb-2">Infrastructure & DevOps</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Hardening infrastructure across AWS and Kubernetes with CI/CD guardrails and infrastructure-as-code
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
              <h3 className="text-xl font-semibold mb-2">Compliance & Monitoring</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Enforcing compliance for healthcare and retail with comprehensive observability and monitoring systems
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-6">
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Technical Skills
              </h2>
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
            </div>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              <p>
                ML/DevOps Engineer who builds and runs secure, cloud-native ML platforms end-to-end—covering data pipelines,
                training, model serving, and observability. I specialize in AWS, SageMaker, containerized services, and
                GitLab CI/CD to deliver reproducible, compliant ML systems.
              </p>
              <p>
                Recent work: at Nike I built a production personalization platform with embedding pipelines, OpenSearch kNN
                retrieval, SageMaker real-time endpoints (p95 &lt; 150 ms), feature stores, and staged promotions with canary/
                shadow deploys plus Datadog and CloudWatch observability. At Core Defender AI I operated a HIPAA-grade ML and
                analytics platform ingesting HL7, with Airflow and Step Functions pipelines, drift-aware retraining on ECS,
                MLflow tracking, dataset versioning, and strict PHI isolation with IAM, KMS, private networking, and
                secrets management.
              </p>
              <p>
                Strengths: CI/CD guardrails, IaC, SLI/SLO design, model and data drift detection, feature stores, monitoring
                (Datadog/CloudWatch), and incident-ready runbooks. Comfortable partnering with Data Science, SRE, and
                Security to ship reliable ML features for regulated domains.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Cloud & DevOps",
                  skills: [
                    { name: "AWS SageMaker", logo: "/logos/aws_light.svg" },
                    { name: "AWS Step Functions", logo: "/logos/aws_light.svg" },
                    { name: "AWS Lambda", logo: "/logos/aws_light.svg" },
                    { name: "MLflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                    { name: "Kubeflow", logo: "/logos/kubernetes.svg" },
                    { name: "DVC", logo: "https://img.icons8.com/color/48/git.png" }
                  ]
                },
                {
                  title: "Programming Languages",
                  skills: [
                    { name: "Python", logo: "/logos/python.svg" },
                    { name: "Bash", logo: "/logos/bash.svg" },
                    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                    { name: "YAML", logo: "https://img.icons8.com/color/48/source-code.png" },
                    { name: "JSON", logo: "https://img.icons8.com/color/48/json.png" },
                    { name: "HCL", logo: "/logos/terraform.svg" }
                  ]
                },
                {
                  title: "Data Pipelines & Orchestration",
                  skills: [
                    { name: "Apache Airflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
                    { name: "Great Expectations", logo: "https://img.icons8.com/color/48/checkmark.png" },
                    { name: "Apache Kafka", logo: "/logos/apache-kafka-wordmark-light.svg" },
                    { name: "AWS Glue", logo: "/logos/aws_light.svg" },
                    { name: "dbt", logo: "https://img.icons8.com/color/48/source-code.png" },
                    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }
                  ]
                },
                {
                  title: "CI/CD & Observability",
                  skills: [
                    { name: "GitLab CI/CD", logo: "/logos/gitlab.svg" },
                    { name: "Datadog", logo: "/logos/datadog.svg" },
                    { name: "CloudWatch", logo: "/logos/aws_light.svg" },
                    { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
                    { name: "Grafana", logo: "/logos/grafana.svg" },
                    { name: "PagerDuty", logo: "https://img.icons8.com/color/48/bell-notification.png" }
                  ]
                },
                {
                  title: "Databases & Storage",
                  skills: [
                    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
                    { name: "MySQL", logo: "/logos/mysql-wordmark-light.svg" },
                    { name: "DynamoDB", logo: "/logos/aws_light.svg" },
                    { name: "OpenSearch", logo: "https://img.icons8.com/color/48/elasticsearch.png" },
                    { name: "S3", logo: "/logos/aws_light.svg" },
                    { name: "Redis", logo: "/logos/redis.svg" }
                  ]
                },
                {
                  title: "Containerization & Orchestration",
                  skills: [
                    { name: "Docker", logo: "/logos/docker.svg" },
                    { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
                    { name: "ECS/Fargate", logo: "/logos/aws_light.svg" },
                    { name: "Terraform", logo: "/logos/terraform.svg" },
                    { name: "CloudFormation", logo: "/logos/aws_light.svg" },
                    { name: "Helm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" }
                  ]
                },
                {
                  title: "Infrastructure & Linux",
                  skills: [
                    { name: "Linux Administration", logo: "/logos/linux.svg" },
                    { name: "NFS/Networking", logo: "https://img.icons8.com/color/48/server.png" },
                    { name: "SSH/RBAC", logo: "/logos/linux.svg" },
                    { name: "Nginx", logo: "/logos/nginx.svg" },
                    { name: "AWS IAM", logo: "/logos/aws_light.svg" },
                    { name: "AWS Secrets Manager", logo: "/logos/aws_light.svg" }
                  ]
                },
                {
                  title: "ML Frameworks & Serving",
                  skills: [
                    { name: "XGBoost", logo: "https://img.icons8.com/color/48/machine-learning.png" },
                    { name: "TensorFlow", logo: "/logos/tensorflow-wordmark-light.svg" },
                    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                    { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
                    { name: "TensorFlow Serving", logo: "/logos/tensorflow-wordmark-light.svg" },
                    { name: "Seldon Core", logo: "/logos/kubernetes.svg" }
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.button
                        key={skill.name}
                        type="button"
                        whileHover={{
                          scale: 1.1,
                          y: -4
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        className="flex items-center gap-2 px-3 py-2 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-lg border-2 border-slate-200 dark:border-slate-600 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 whitespace-nowrap cursor-pointer transition-shadow"
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
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section (Timeline) */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-6">
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Projects
              </h2>
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
            </div>
          </motion.div>
        </div>
        <ProjectsTimeline />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-6">
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Experience
              </h2>
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
            </div>
          </motion.div>
        </div>
        <ExperienceTimeline />
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-6">
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Education
              </h2>
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
            </div>
          </motion.div>
        </div>
        <EducationTimeline />
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-6 mb-4">
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Blog
              </h2>
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center min-h-80"
          >
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400 mb-4">
                Coming Soon
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-500 max-w-md mx-auto">
                Insightful articles about ML, DevOps, cloud architecture, and engineering best practices coming soon.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Get In Touch
              </h2>
              <span className="hidden sm:block h-px w-40 bg-slate-200 dark:bg-slate-700" />
            </div>
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
                <a href="tel:5034546925" className="text-blue-600 hover:underline">
                  (503) 454-6925
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
                  United States
                </p>
              </motion.div>
            </div>

            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/20 w-full md:w-1/3"
              >
                <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/nadendla-likith" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  nadendla-likith
                </a>
              </motion.div>
            </div>

            <div className="flex justify-center gap-4">
              <AnimatedButton
                href="mailto:likith@likith.net"
                icon={<Mail size={18} />}
              >
                Send Email
              </AnimatedButton>

              <AnimatedButton
                onClick={handleDownload}
                icon={<Download size={18} />}
              >
                Download Resume
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-sm text-slate-300 border-t border-white/10 dark:border-slate-700/20 relative z-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2025 Likith Nadendla. All rights reserved.</p>
          <div className="flex justify-center gap-6" style={{ position: 'relative', zIndex: 50, pointerEvents: 'auto' }}>
            <a href="https://linkedin.com/in/nadendla-likith" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer" style={{ zIndex: 50, position: 'relative', pointerEvents: 'auto' }}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:likith@likith.net" className="hover:text-white transition-colors cursor-pointer" style={{ zIndex: 50, position: 'relative', pointerEvents: 'auto' }}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
