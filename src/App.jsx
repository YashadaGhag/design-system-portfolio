import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OnboardingResumePage from "./pages/OnboardingResumePage";
import OnboardingMatchingPage from "./pages/OnboardingMatchingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/onboarding" element={<OnboardingResumePage />} />
      <Route path="/onboarding/matching" element={<OnboardingMatchingPage />} />
    </Routes>
  );
}

export default App;
