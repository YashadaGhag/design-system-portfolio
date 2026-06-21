import {
  Sparkles,
  ArrowRight,
  Search,
  FileText,
  FolderOpen,
  BarChart3,
  GitCompare,
  ShieldAlert,
  Camera,
  Briefcase,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import heroVideo from "../assets/hero-video.mp4";
import jobRecommendationsImg from "../assets/Job Recommendations.png";
import resumeTailoringImg from "../assets/Resume Tailoring.png";
import applicationKitImg from "../assets/Application Kit.png";

const HOW_IT_WORKS = [
  {
    image: jobRecommendationsImg,
    icon: Search,
    title: "Find the Right Jobs, Fast",
    description:
      "ApplyMate scans job boards and scores every listing against your profile — skills, experience, location, recency. See exactly why a job matches before you read the full description. Ghost postings? Flagged automatically.",
  },
  {
    image: resumeTailoringImg,
    icon: FileText,
    title: "Adapt Without Losing Yourself",
    description:
      "AI suggests keyword insertions as a visual diff — you see what stays, what changes. You can edit the suggestions.",
  },
  {
    image: applicationKitImg,
    icon: FolderOpen,
    title: "Your Complete Kit, Ready",
    description:
      "Downloadable resume (PDF), cover letter (PDF), and pre-drafted responses to common application questions. You edit, approve, and submit manually on the job portal. We remember everything.",
  },
];

const FEATURES = [
  {
    icon: BarChart3,
    title: "Transparent Match Scores",
    description:
      "See exactly why a job fits — skills, experience, location, recency. No mystery algorithms dictating your career path.",
  },
  {
    icon: GitCompare,
    title: "Resume Diff View",
    description:
      "AI shows changes as a side-by-side comparison. Make edits to the suggestions.",
  },
  {
    icon: ShieldAlert,
    title: "Ghost Post Detection",
    description:
      "We flag listings that look fake, recycled, or perpetually open, so you don’t waste time on dead ends.",
  },
  {
    icon: Camera,
    title: "Application Snapshots",
    description:
      "Every submission is saved — resume, cover letter, drafted responses so you’re ready when interviews arrive weeks later.",
  },
];

function HeroSection() {
  return (
    <section className="px-sp80 py-sp100">
      <div className="mx-auto flex max-w-[1280px] items-center gap-sp40">
        <div className="flex flex-1 min-w-0 flex-col items-start gap-sp32">
          <span className="inline-flex items-center gap-[8px] rounded-lg border border-primary-200 bg-white px-sp8 py-sp8">
            <Sparkles size={16} className="text-primary-500" />
            <span className="text-body-small font-regular text-primary-500">
              SMART PREPARATION LAYER
            </span>
          </span>

          <h1 className="text-h1 font-semibold text-neutral-800">
            Job Search Without
            <br />
            the Burnout
          </h1>

          <p className="max-w-[504px] text-body-large font-regular text-neutral-500">
            ApplyMate handles the exhausting work &mdash; finding the right jobs,
            tailoring your resume, preparing your application kit, so you can
            focus on roles you&rsquo;ll actually get.
          </p>

          <Button
            variant="primary"
            iconPosition="right"
            icon={<ArrowRight size={18} />}
          >
            Get started free
          </Button>

          <p className="text-body-medium font-regular text-neutral-500">
            No credit card required. Start matching today.
          </p>
        </div>

        <div className="min-w-0 flex-1">
          <video
            className="w-full rounded-[16px] shadow-card"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="border-y border-primary-200 bg-primary-50 px-sp80 py-sp100"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center gap-sp64">
          <div className="flex flex-col items-center gap-sp16 text-center">
            <h3 className="text-h3 font-semibold text-neutral-800">
              Your Intelligent Preparation Layer
            </h3>
            <p className="text-body-large font-regular text-neutral-500">
              Maintain control while AI handles the cognitive heavy lifting of
              your job search.
            </p>
          </div>

          <div className="grid w-full grid-cols-3 gap-sp24">
            {HOW_IT_WORKS.map(({ image, icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-sp24">
                <img
                  src={image}
                  alt={title}
                  className="h-[201px] w-full rounded-md object-cover object-top shadow-card"
                />
                <div className="flex flex-col gap-sp12">
                  <div className="flex size-[48px] items-center justify-center rounded-md border border-neutral-100 bg-white">
                    <Icon size={24} className="text-neutral-700" />
                  </div>
                  <h5 className="text-h5 font-medium text-neutral-800">
                    {title}
                  </h5>
                  <p className="text-body-large font-regular text-neutral-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="bg-white px-sp80 py-sp100">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center gap-sp64">
          <div className="flex flex-col items-center gap-sp16 text-center">
            <h3 className="text-h3 font-semibold text-neutral-800">
              Built for Quality, Not Volume
            </h3>
            <p className="text-[18px] leading-[28px] font-regular text-neutral-500">
              We don&rsquo;t automate your identity. We provide the intelligence
              you need to make every application count.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-sp40">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-sp16">
                <div className="flex size-[40px] shrink-0 items-center justify-center rounded-sm border border-neutral-100 bg-neutral-50">
                  <Icon size={20} className="text-neutral-700" />
                </div>
                <div className="flex flex-col gap-sp8">
                  <h5 className="text-h5 font-medium text-neutral-800">
                    {title}
                  </h5>
                  <p className="text-body-large font-regular text-neutral-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="bg-primary-900 px-sp80 py-sp100">
      <div className="mx-auto flex max-w-[896px] flex-col items-center gap-sp24 text-center">
        <h2 className="text-h2 font-semibold text-white">
          Ready to Job Search Without the
          <br />
          Burnout?
        </h2>
        <p className="text-h5 font-medium text-white">
          Take back control of your applications. Let ApplyMate handle the
          <br />
          tedious prep work.
        </p>
        <Button
          variant="secondary"
          iconPosition="right"
          icon={<ArrowRight size={18} />}
          className="border-primary-200 bg-primary-50 text-neutral-700"
        >
          Get Started Free
        </Button>
        <p className="text-body-medium font-regular text-neutral-100">
          No credit card required. Start matching with jobs today.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-sp80">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-sp100">
        <a href="/" className="flex items-center gap-sp8 no-underline">
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-sm"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #BCC5F1 0%, #576DDB 100%)",
              filter: "drop-shadow(0px 0px 7.5px rgba(59,130,246,0.5))",
            }}
          >
            <Briefcase size={14} color="white" strokeWidth={2.5} />
          </span>
          <span className="text-body-large font-medium text-neutral-800">
            ApplyMate
          </span>
        </a>

        <p className="text-body-small font-regular text-neutral-500">
          &copy; 2026 ApplyMate. All rights reserved.
        </p>

        <div className="flex gap-sp16">
          <a
            href="#"
            className="text-body-small font-regular text-neutral-500 no-underline hover:text-primary-500"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-body-small font-regular text-neutral-500 no-underline hover:text-primary-500"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
