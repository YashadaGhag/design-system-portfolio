import { useNavigate } from "react-router-dom";
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
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
      "We flag listings that look fake, recycled, or perpetually open, so you don't waste time on dead ends.",
  },
  {
    icon: Camera,
    title: "Application Snapshots",
    description:
      "Every submission is saved — resume, cover letter, drafted responses so you're ready when interviews arrive weeks later.",
  },
];

function HeroSection({ onGetStarted }) {
  return (
    <section className="px-sp16 py-sp40 md:px-sp40 md:py-sp64 lg:py-sp100 xl:px-sp80 2xl:px-sp200">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-sp32 lg:flex-row lg:items-center lg:gap-sp40">
        <div className="flex flex-col items-start gap-sp16 lg:flex-1 lg:min-w-0 lg:gap-sp32">
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
            onClick={onGetStarted}
          >
            Get started free
          </Button>

          <p className="text-body-medium font-regular text-neutral-500">
            No credit card required. Start matching today.
          </p>
        </div>

        <div className="lg:flex-1 lg:min-w-0">
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
      className="border-y border-primary-200 bg-primary-50 px-sp16 py-sp40 md:px-sp40 md:py-sp64 lg:py-sp100 xl:px-sp80 2xl:px-sp200"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center gap-sp40 md:gap-sp64">
          <div className="flex flex-col items-center gap-sp16 text-center">
            <h3 className="text-h3 font-semibold text-neutral-800">
              Your Intelligent Preparation Layer
            </h3>
            <p className="text-body-large font-regular text-neutral-500">
              Maintain control while AI handles the cognitive heavy lifting of
              your job search.
            </p>
          </div>

          <div className="flex w-full flex-col gap-sp40 lg:grid lg:grid-cols-3 lg:gap-sp32">
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
    <section
      id="features"
      className="bg-white px-sp16 py-sp40 md:px-sp40 md:py-sp64 lg:py-sp100 xl:px-sp80 2xl:px-sp200"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center gap-sp40 md:gap-sp64">
          <div className="flex flex-col items-center gap-sp16 text-center">
            <h3 className="text-h3 font-semibold text-neutral-800">
              Built for Quality, Not Volume
            </h3>
            <p className="text-body-large font-regular text-neutral-500">
              We don&rsquo;t automate your identity. We provide the intelligence
              you need to make every application count.
            </p>
          </div>

          <div className="flex w-full flex-col gap-sp40 lg:grid lg:grid-cols-2 lg:gap-sp40">
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

function FinalCTASection({ onGetStarted }) {
  return (
    <section className="bg-primary-900 px-sp16 py-sp40 md:px-sp40 md:py-sp64 lg:py-sp100 xl:px-sp80 2xl:px-sp200">
      <div className="mx-auto flex max-w-[896px] flex-col items-center gap-sp16 text-center lg:gap-sp24">
        <h2 className="text-h2 font-semibold text-white">
          Ready to Job Search Without the Burnout?
        </h2>
        <p className="text-body-large font-medium text-white lg:text-h5">
          Take back control of your applications. Let ApplyMate handle the
          tedious prep work.
        </p>
        <Button
          variant="secondary"
          iconPosition="right"
          icon={<ArrowRight size={18} />}
          className="border-primary-200 bg-primary-50 text-neutral-700"
          onClick={onGetStarted}
        >
          Get started free
        </Button>
        <p className="text-body-medium font-regular text-neutral-100">
          No credit card required. Start matching with jobs today.
        </p>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/onboarding");

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetStarted={handleGetStarted} />
      <HeroSection onGetStarted={handleGetStarted} />
      <HowItWorksSection />
      <FeaturesSection />
      <FinalCTASection onGetStarted={handleGetStarted} />
      <Footer />
    </div>
  );
}
