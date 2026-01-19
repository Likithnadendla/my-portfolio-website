import Image from "next/image";
import React from "react";
import { EducationTimelineComponent } from "@/components/ui/education-timeline-component";
import { GraduationCap, MapPin, Calendar, BookOpen, Award, Shield, Brain, Database } from "lucide-react";

export function EducationTimeline() {
  const data = [
    {
      title: "2022-2024",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Master of Science in Computer Science
              </h4>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Pace University - Seidenberg School, New York City</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Sep 2022 — May 2024</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
              Specialized in cutting-edge technologies and advanced computer science concepts with focus on practical applications.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <Database className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Data Engineering & Analytics</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <Shield className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Cloud Computing & Infrastructure</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <Brain className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Machine Learning & AI</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <BookOpen className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Software Development & Systems Design</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/pace-university-logo.png"
              alt="Pace University Logo"
              width={400}
              height={200}
              className="rounded-lg object-contain h-24 md:h-36 lg:h-48 w-auto shadow-lg bg-white p-6"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Cyber Security Certification
              </h4>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Indian Dutch Cybersecurity School IDCSS</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Feb 2020 — Oct 2020</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
              Specialized certification program focusing on international cybersecurity frameworks and strategic security analysis.
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <Award className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Cyber Diplomacy & International Relations</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <Award className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Threat Intelligence & Risk Assessment</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <Award className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Security Policy & Strategic Analysis</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <Award className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Cross-Border Security Coordination</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex justify-center">
              <Image
                src="/images/hague-centre-logo.png"
                alt="The Hague Centre for Strategic Studies - IDCSS Partner"
                width={300}
                height={150}
                className="rounded-lg object-contain h-20 md:h-28 lg:h-36 w-auto shadow-lg bg-white p-4"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/telangana-govt-logo.png"
                alt="Government of Telangana - IDCSS Partner"
                width={300}
                height={150}
                className="rounded-lg object-contain h-20 md:h-28 lg:h-36 w-auto shadow-lg bg-white p-4"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2017-2021",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Bachelor of Technology in Computer Science
              </h4>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Vardhaman College of Engineering (VCEH), Hyderabad</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>May 2017 — Apr 2021</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
              Comprehensive undergraduate program establishing strong foundation in computer science fundamentals and practical applications.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <BookOpen className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Software Development</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <Database className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Database Management</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <Shield className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Security & Risk Management</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
                <Brain className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Business Intelligence & Process Optimization</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/vardhaman-college-logo.png"
              alt="Vardhaman College of Engineering Logo"
              width={400}
              height={200}
              className="rounded-lg object-contain h-24 md:h-36 lg:h-48 w-auto shadow-lg bg-white p-6"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <EducationTimelineComponent data={data} />
    </div>
  );
}