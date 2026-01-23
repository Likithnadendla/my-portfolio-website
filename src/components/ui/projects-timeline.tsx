import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { CloudCog, ListChecks, Bot, Mic } from "lucide-react";

export function ProjectsTimeline() {
  const data = [
    {
      title: "Multi-Cloud Monitoring",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <CloudCog className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Personal Cloud & Edge Monitoring Suite
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 mb-4">
              <span className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">Personal resources monitoring</span>
              <span className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">Status: In use</span>
            </div>
          </div>

          <div className="space-y-3 mb-6 text-neutral-700 dark:text-neutral-300 text-sm">
            <p>Unified observability across AWS, Azure, and edge devices (Jetson Nano, Raspberry Pi) powering AI/ML research and robotics experiments.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>AWS stack: Cognito auth success (100%), Lambda/API Gateway latency and errors, OpenSearch cost signals ($207/mo), billing at ~$400-500/mo.</li>
              <li>Azure stack: VM/Network/Logs dashboards with 6.46k+ log entries, cost panel at $128.37/mo highlighting 3-4x savings vs AWS for dev workloads.</li>
              <li>Edge stack: Jetson GPU/memory/thermal telemetry for offline TTS model training; Raspberry Pi Reachy Mini monitoring for real-time assistant interactions.</li>
              <li>Design: executive summary KPIs, trend charts, drill-down tables, and threshold-based alerts for proactive cost/perf insights.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Decision-Intelligence Task System",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <ListChecks className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Cognitive Load-Reducing Task Engine
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 mb-4">
              <span className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">Personal experimental project</span>
              <span className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">Status: In development</span>
            </div>
          </div>

          <div className="space-y-3 mb-6 text-neutral-700 dark:text-neutral-300 text-sm">
            <p>Decision-first task model where parent tasks hold deadlines while subtasks remain unscheduled prep steps—mirroring real-world prep before execution.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Task structuring: only parents have date/time; subtasks are ordered, fully editable preparation steps to avoid artificial micromanagement.</li>
              <li>Suggested prep: deterministic keyword/pattern detection with curated templates; “system suggests structure, user owns the graph.”</li>
              <li>Decision engine: deterministic scoring of urgency, priority, readiness, remaining prep; outputs constrained Top-3/Top-5 actionable list to reduce decision fatigue.</li>
              <li>Dependency handling: blocked parents promote subtasks; conflicts surface warnings without auto-mutation.</li>
              <li>Execution layer: optional deep-focus sessions with timer + server persistence; streaks are derived from completion events (no manual input).</li>
              <li>Stack: Next.js + API routes + Prisma + SQLite; all business logic server-side for explainability with a clear path to layer AI later.</li>
            </ul>
            <p>Outcome: an explainable, stable decision-intelligence system that optimizes for “what to do next,” not just task storage.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Reachy Mini AI Assistant",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Smart AI Assistant with Physical Interaction
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 mb-4">
              <span className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">Personal experimental project</span>
              <span className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">Status: In development</span>
            </div>
          </div>

          <div className="space-y-3 mb-6 text-neutral-700 dark:text-neutral-300 text-sm">
            <p>Reachy Mini humanoid assistant on Raspberry Pi 4 with CV + NLP for natural human-robot interaction.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Voice + NLU pipeline for real-time speech understanding and responses.</li>
              <li>Gesture control algorithms for expressive arm/head movement and context-aware behaviors.</li>
              <li>Computer vision for object recognition/tracking driving interactive routines.</li>
              <li>Modular AI pipeline with customizable personality and response policies.</li>
              <li>Monitoring hooks into the multi-cloud dashboard for performance, thermals, and connectivity.</li>
            </ul>
            <p>Impact: bridges digital intelligence with tangible interaction for practical robotics assistants.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="relative rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700" style={{width: '225px', height: '225px'}}>
              <Image
                src="/images/reachy01.jpeg"
                alt="Reachy Mini Assistant - Front View"
                width={225}
                height={225}
                className="object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700" style={{width: '183px', height: '275px'}}>
              <Image
                src="/images/reachy02.jpeg"
                alt="Reachy Mini Assistant - Side View"
                width={183}
                height={275}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Offline Text-to-Speech AI Model",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Mic className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Privacy-First Offline TTS System
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 mb-4">
              <span className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">Personal experimental project</span>
              <span className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">Status: In testing</span>
            </div>
          </div>

          <div className="space-y-3 mb-6 text-neutral-700 dark:text-neutral-300 text-sm">
            <p>Jetson Nano-based offline TTS pipeline optimized for privacy and sub-second inference.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>End-to-end GPU-accelerated inference with TensorFlow/PyTorch on CUDA.</li>
              <li>Custom-trained neural voices tuned for the target domain and edge constraints.</li>
              <li>Efficient training/evaluation loop plus thermal/resource monitoring.</li>
              <li>100% offline operation—no cloud dependency for privacy-sensitive contexts.</li>
              <li>Integrated into multi-cloud dashboards to track inference latency, accuracy, and device health.</li>
            </ul>
            <p>Impact: proves production-quality voice synthesis on embedded hardware for secure deployments.</p>
          </div>
          
          <div className="relative inline-block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700" style={{width: '225px', height: '225px'}}>
            <Image
              src="/images/jetson01.jpeg"
              alt="Jetson Nano TTS System Setup"
              width={225}
              height={225}
              className="object-cover"
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
        title="Projects"
        description="A timeline of selected projects delivering ML, analytics, and cloud-native systems with measurable impact."
      />
    </div>
  );
}
