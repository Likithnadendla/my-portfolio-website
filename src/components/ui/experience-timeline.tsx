import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { MapPin, Calendar, Trophy, Code, Cloud, Database } from "lucide-react";

export function ExperienceTimeline() {
  const data = [
    {
      title: "2024-Present",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                ML Ops Engineer — Nike
              </h4>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Portland, Oregon</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 2024 — Present</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm font-semibold mb-3">
              Architecting production-grade personalization platform on AWS powering product recommendations and homepage personalization
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Designed hybrid personalization system combining offline embedding generation and real-time ranking with SageMaker</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Implemented vector-based candidate generation using OpenSearch kNN integrated with keyword search results</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Developed real-time XGBoost ranking services on SageMaker endpoints meeting p95 &lt; 150ms latency SLOs</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Built feature store patterns with SageMaker Feature Store for consistent training/inference definitions</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Established Dev → Staging → Prod promotion pipelines with GitLab CI/CD and canary/shadow deployments</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Integrated end-to-end observability using Datadog and CloudWatch with drift detection and SLI/SLO monitoring</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/Nike-Ops.png"
              alt="Nike ML Pipeline Architecture"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023-2024",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                DevOps/ML Ops Engineer — Core Defender AI
              </h4>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Portland, Oregon</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 2023 — February 2024</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm font-semibold mb-3">
              Built HIPAA-compliant laboratory data and MLOps platform ingesting HL7 records with reproducible ML analytics and secure reporting
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Architected HIPAA-compliant platform ingesting HL7 from LIS systems with external partner support and PHI isolation</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Designed multi-stage data pipelines using Apache Airflow and AWS Step Functions with mixed SLA management</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Implemented schema validation and data quality gates using Great Expectations for compliance assurance</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Built reproducible ML pipelines with MLflow experiment tracking and drift-triggered retraining on ECS</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Established dataset versioning via S3 snapshots and offline feature store patterns for regulatory audit readiness</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Enforced PHI separation with encryption, RBAC, and comprehensive logging; built Datadog/PagerDuty observability</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/coredefender-Ops.png"
              alt="Core Defender Healthcare Data Architecture"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019-2022",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Linux System Administrator — Hexagon R&D India
              </h4>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>May 2019 — August 2022</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm font-semibold mb-3">
              Administered Linux infrastructure supporting GIS research environments and geospatial compute workloads
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Administrated Linux servers for geospatial compute, optimizing system parameters for GIS data processing</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Implemented user/group policies and RBAC for research teams, improving accountability and system stability</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Migrated legacy desktop nodes to centralized Linux servers, improving maintainability and resource utilization</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Provided tier-2 support for GIS modeling tools, build tooling, and CI pipelines; created troubleshooting documentation</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Automated health checks, log analysis, and maintenance using Bash scripting, reducing manual intervention</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              <Trophy className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>Configured NFS mounts, repositories, and package mirrors; collaborated on OS hardening and security practices</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop"
              alt="Linux Infrastructure"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-32 lg:h-40 w-full shadow-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
              alt="System Administration"
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
      <Timeline
        data={data}
        title="Professional Journey"
        description="A timeline of my professional experience and career milestones in cloud technology and software development."
      />
    </div>
  );
}