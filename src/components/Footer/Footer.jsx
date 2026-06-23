import { useState } from "react";
import PropTypes from "prop-types";
import { Briefcase, ChevronDown } from "lucide-react";

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PRODUCT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const COMPANY_LINKS = [
  { label: "About", href: "#about" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
];

const AccordionSection = ({ title, links, active, onToggle }) => (
  <div className="border-b border-neutral-100 pb-sp12">
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-0 text-body-large font-medium text-neutral-700"
    >
      {title}
      <ChevronDown
        size={24}
        className={`text-neutral-500 transition-transform duration-200 ${active ? "rotate-180" : ""}`}
      />
    </button>
    {active && (
      <ul className="m-0 mt-sp16 flex list-none flex-col gap-sp8 p-0">
        {links.map(({ label, href }) => (
          <li key={label} className="text-center">
            <a
              href={href}
              className="text-body-medium text-primary-500 no-underline transition-colors hover:text-primary-600"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

AccordionSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Footer = ({
  productLinks = PRODUCT_LINKS,
  companyLinks = COMPANY_LINKS,
  className = "",
}) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggle = (section) =>
    setActiveSection((prev) => (prev === section ? null : section));

  return (
    <footer className={`w-full bg-white ${className}`}>
      {/* ── Mobile layout ──────────────────────────────────── */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-sp24 border-t border-neutral-100 px-sp16 py-sp40">
          <div className="flex flex-col gap-sp32">
            <div className="flex flex-col gap-sp16">
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
              <p className="text-body-medium text-neutral-500">
                The AI agent that handles the cognitive work of job searching.
              </p>
            </div>

            <AccordionSection
              title="Product"
              links={productLinks}
              active={activeSection === "product"}
              onToggle={() => toggle("product")}
            />
            <AccordionSection
              title="Company"
              links={companyLinks}
              active={activeSection === "company"}
              onToggle={() => toggle("company")}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-body-small text-neutral-500">
              &copy; 2026 ApplyMate. All rights reserved.
            </span>
            <div className="flex items-center gap-sp16">
              <a
                href="#facebook"
                className="text-neutral-700 transition-colors hover:text-primary-500"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#linkedin"
                className="text-neutral-700 transition-colors hover:text-primary-500"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Desktop layout ─────────────────────────────────── */}
      <div className="hidden md:block">
        <div className="mx-auto flex items-center justify-between border-t border-neutral-100 px-sp40 py-sp16 xl:px-sp80 2xl:px-sp200">
          <span className="text-body-small text-neutral-400">
            &copy; 2026 ApplyMate. All rights reserved.
          </span>
          <div className="flex items-center gap-sp24">
            <a
              href="#privacy"
              className="text-body-small text-neutral-500 no-underline transition-colors hover:text-primary-500"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-body-small text-neutral-500 no-underline transition-colors hover:text-primary-500"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  productLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  companyLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

export default Footer;
