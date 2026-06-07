import PropTypes from "prop-types";
import { Briefcase } from "lucide-react";
import Button from "../Button/Button";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

/**
 * Navbar — top-level navigation bar.
 *
 * Layout: Logo | Nav links | Sign in + CTA
 * Background: white with button shadow, 1280 px max width, sp100 horizontal padding.
 */
const Navbar = ({ links = NAV_LINKS, onSignIn, onGetStarted, className = "" }) => {
  return (
    <header
      className={`w-full bg-white shadow-button ${className}`}
    >
      <nav
        className="mx-auto flex max-w-[1280px] items-center justify-between px-sp100 pb-sp24 pt-sp32"
      >
        {/* ── Logo ─────────────────────────────────────────────── */}
        <a href="/" className="flex items-center gap-sp8 no-underline">
          {/* Gradient icon container */}
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

          <span className="whitespace-nowrap text-body-large font-medium text-neutral-800">
            ApplyMate
          </span>
        </a>

        {/* ── Center links ────────────────────────────────────── */}
        <ul className="flex list-none items-center gap-sp24 p-0 m-0">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="whitespace-nowrap text-body-medium font-medium text-neutral-800 no-underline transition-colors hover:text-primary-500"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right actions ────────────────────────────────────── */}
        <div className="flex items-center gap-sp16">
          <button
            type="button"
            onClick={onSignIn}
            className="whitespace-nowrap rounded-sm bg-transparent text-body-medium font-medium text-neutral-700 transition-colors hover:text-primary-500 cursor-pointer border-none p-0"
          >
            Sign in
          </button>

          <Button variant="primary" onClick={onGetStarted}>
            Get started free
          </Button>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  /** Navigation link items */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  /** Callback fired when "Sign in" is clicked */
  onSignIn: PropTypes.func,
  /** Callback fired when "Get started free" is clicked */
  onGetStarted: PropTypes.func,
  /** Additional CSS classes on the outer wrapper */
  className: PropTypes.string,
};

export default Navbar;
