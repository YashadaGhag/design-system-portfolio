import PropTypes from "prop-types";
import { Briefcase, Globe, Circle } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

const COMPANY_LINKS = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
];

const Footer = ({
  productLinks = PRODUCT_LINKS,
  companyLinks = COMPANY_LINKS,
  className = "",
}) => {
  return (
    <footer className={`w-full bg-white ${className}`}>
      {/* ── Mobile layout ──────────────────────────────────── */}
      <div className="block md:hidden">
        <div className="mx-auto max-w-[1280px] px-sp16 py-sp40">
          {/* Logo + description */}
          <div className="mb-sp32">
            <a href="/" className="mb-sp12 flex items-center gap-sp8 no-underline">
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
            <p className="text-body-medium text-neutral-500 mt-sp8">
              The AI agent that handles the cognitive work of job searching.
            </p>
          </div>

          {/* Product section */}
          <div className="mb-sp24 border-t border-neutral-100 pt-sp16">
            <h3 className="text-body-medium font-semibold text-neutral-800 mb-sp12">
              Product
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-sp8">
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-body-medium text-neutral-500 no-underline transition-colors hover:text-primary-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company section */}
          <div className="mb-sp24 border-t border-neutral-100 pt-sp16">
            <h3 className="text-body-medium font-semibold text-neutral-800 mb-sp12">
              Company
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-sp8">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-body-medium text-neutral-500 no-underline transition-colors hover:text-primary-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright + social */}
          <div className="flex items-center justify-between border-t border-neutral-100 pt-sp16">
            <span className="text-body-small text-neutral-400">
              &copy; 2026 ApplyMate. All rights reserved.
            </span>
            <div className="flex items-center gap-sp16">
              <a
                href="#facebook"
                className="text-neutral-500 transition-colors hover:text-primary-500"
                aria-label="Facebook"
              >
                <Circle size={20} />
              </a>
              <a
                href="#linkedin"
                className="text-neutral-500 transition-colors hover:text-primary-500"
                aria-label="LinkedIn"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Desktop layout ─────────────────────────────────── */}
      <div className="hidden md:block">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-neutral-100 px-sp100 py-sp16">
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
