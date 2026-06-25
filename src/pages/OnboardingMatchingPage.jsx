import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyMatchAnimation from "../components/CompanyMatchAnimation";

export default function OnboardingMatchingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar variant="onboarding" />

      <main className="flex flex-1 items-center justify-center px-sp16">
        <CompanyMatchAnimation />
      </main>

      <Footer variant="onboarding" />
    </div>
  );
}
