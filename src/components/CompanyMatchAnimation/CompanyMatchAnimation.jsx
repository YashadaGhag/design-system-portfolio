import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PropTypes from "prop-types";
import Button from "../Button";

import figmaLogo from "../../assets/Figma.svg";
import googleLogo from "../../assets/Google.svg";
import microsoftLogo from "../../assets/Microsoft_Logo.svg";
import spotifyLogo from "../../assets/Spotify.svg";
import redditLogo from "../../assets/Reddit.svg";
import anthropicLogo from "../../assets/Anthropic.svg";
import miroLogo from "../../assets/Miro.svg";
import airbnbLogo from "../../assets/airbnb.svg";

const companyLogos = [
  { name: "Figma", src: figmaLogo },
  { name: "Google", src: googleLogo },
  { name: "Microsoft", src: microsoftLogo },
  { name: "Spotify", src: spotifyLogo },
  { name: "Reddit", src: redditLogo },
  { name: "Anthropic", src: anthropicLogo },
  { name: "Miro", src: miroLogo },
  { name: "Airbnb", src: airbnbLogo },
];

const LOGO_COUNT = companyLogos.length;
const LOGO_ROTATIONS = [-12, 15, -8, 18, -15, 10, -20, 14];
const LOGO_INTERVAL_MS = 200;
const ORBIT_DURATION = 30;
const ORBIT_RADIUS = 240;
const LOGO_SIZE = 45;
const LOGO_HALF = LOGO_SIZE / 2;

export default function CompanyMatchAnimation({ initialPhase, initialVisibleLogos }) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState(initialPhase || "entering");
  const [visibleLogos, setVisibleLogos] = useState(initialVisibleLogos ?? 0);

  useEffect(() => {
    if (phase !== "entering") return;

    const timer = setInterval(() => {
      setVisibleLogos((prev) => {
        if (prev >= LOGO_COUNT) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, LOGO_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (visibleLogos < LOGO_COUNT || phase !== "entering") return;

    const timeout = setTimeout(() => setPhase("entered"), 500);
    return () => clearTimeout(timeout);
  }, [visibleLogos, phase]);

  useEffect(() => {
    if (phase !== "entered") return;

    const timeout = setTimeout(() => setPhase("orbiting"), 600);
    return () => clearTimeout(timeout);
  }, [phase]);

  const isOrbiting = phase === "orbiting";
  const showResult = phase === "entered" || phase === "orbiting";

  const containerSize = 520;
  const center = containerSize / 2;

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: containerSize, height: containerSize }}>
        {companyLogos.map((company, i) => {
          const angle = (i / LOGO_COUNT) * 2 * Math.PI - Math.PI / 2;
          const staticX = center + ORBIT_RADIUS * Math.cos(angle) - LOGO_HALF;
          const staticY = center + ORBIT_RADIUS * Math.sin(angle) - LOGO_HALF;
          const delay = -(i * ORBIT_DURATION) / LOGO_COUNT;
          const visible = i < visibleLogos;

          return (
            <div
              key={company.name}
              className="absolute"
              style={
                isOrbiting
                  ? {
                      width: LOGO_SIZE,
                      height: LOGO_SIZE,
                      left: center - LOGO_HALF,
                      top: center - LOGO_HALF,
                      willChange: "transform",
                      animation: `orbit ${ORBIT_DURATION}s linear infinite`,
                      animationDelay: `${delay}s`,
                    }
                  : {
                      width: LOGO_SIZE,
                      height: LOGO_SIZE,
                      left: staticX,
                      top: staticY,
                    }
              }
            >
              <div
                className="flex size-[45px] items-center justify-center rounded-full bg-primary-50"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? `rotate(${LOGO_ROTATIONS[i]}deg) scale(1)`
                    : `rotate(${LOGO_ROTATIONS[i]}deg) scale(0.3)`,
                  transition: "opacity 0.35s ease-out, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <img
                  src={company.src}
                  alt={company.name}
                  className="size-6 object-contain"
                />
              </div>
            </div>
          );
        })}

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative max-w-[320px] text-center">
            {/* "Finding" text */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
              style={{
                opacity: showResult ? 0 : 1,
                pointerEvents: showResult ? "none" : "auto",
              }}
            >
              <p className="text-h5 font-bold text-neutral-800">
                Finding best jobs for you
                <span className="inline-block w-[24px] animate-pulse text-left">
                  ...
                </span>
              </p>
            </div>

            {/* Result text */}
            <div
              className="flex flex-col items-center gap-sp24 transition-opacity duration-500"
              style={{
                opacity: showResult ? 1 : 0,
                pointerEvents: showResult ? "auto" : "none",
              }}
            >
              <h4 className="text-h5 font-bold text-neutral-800">
                We found 800+ jobs that match your profile!
              </h4>
              <p className="text-body-large text-neutral-500">
                Tell us your preferences so we rank what matters to you.
              </p>
              <Button
                variant="primary"
                iconPosition="right"
                icon={<ChevronRight size={18} />}
                onClick={() => navigate("/onboarding/role")}
              >
                Set preferences
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(${ORBIT_RADIUS}px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(${ORBIT_RADIUS}px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}

CompanyMatchAnimation.propTypes = {
  initialPhase: PropTypes.oneOf(["entering", "entered", "orbiting"]),
  initialVisibleLogos: PropTypes.number,
};
