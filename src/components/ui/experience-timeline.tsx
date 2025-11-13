import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Building2, MapPin, Calendar, Trophy, Code, Cloud, Database } from "lucide-react";

export function ExperienceTimeline() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Business Analyst - IQlogg, INC.
              </h4>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Ashburn, Virginia</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>May 2025 — Present</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Spearheaded Agile development initiatives, enhancing project delivery efficiency by 30%</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Coordinated cross-functional teams, aligning technical solutions with business strategy</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Implemented CI/CD pipelines and DevOps practices to streamline deployment processes</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop"
              alt="Business Analysis and Strategy"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop"
              alt="Team Collaboration"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Data Analyst - HorizonIT INC
              </h4>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>North Carolina, United States</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Aug 2024 — May 2025</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Enhanced data processing systems, improving operational efficiency significantly</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Developed automated ETL processes for 10TB+ datasets, increasing efficiency by 40%</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Deployed cloud solutions using Terraform and Python, reducing deployment time by 45%</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
              alt="Data Analytics Dashboard"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop"
              alt="Cloud Infrastructure"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021-2022",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Software Developer - Hexagon R&D India
              </h4>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Oct 2021 — May 2022</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Engineered geospatial mapping applications using React.js and Node.js for 100+ users</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Created RESTful APIs for seamless MySQL database integration</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Collaborated in Agile teams across three product releases</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop"
              alt="Software Development"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
              alt="Geospatial Technology"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Cloud Technology Engineer Trainee - Google
              </h4>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Jan 2021 — Aug 2021</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Developed Kubernetes applications handling 1000+ concurrent requests on GCP</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Designed BigQuery pipeline processing 50GB+ datasets, reducing time by 60%</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Implemented CI/CD pipeline with Cloud Build for multiple microservices</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop"
              alt="Google Cloud Platform"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop"
              alt="Kubernetes and Cloud Technology"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}