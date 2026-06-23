import { useState } from "react";
import PropTypes from "prop-types";
import { Briefcase, Menu, X, ChevronRight } from "lucide-react";
import Button from "../Button/Button";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = ({ links = NAV_LINKS, onSignIn, onGetStarted, className = "" }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`w-full bg-white shadow-button ${className}`}>
      <nav className="mx-auto flex items-center justify-between py-sp16 px-sp16 md:px-sp40 xl:px-sp80">
        {/* ── Logo ─────────────────────────────────────────────── */}
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
          <span className="whitespace-nowrap text-body-large font-medium text-neutral-800">
            ApplyMate
          </span>
        </a>

        {/* ── Desktop center links ───────────────────────────── */}
        <ul className="hidden list-none items-center gap-sp24 p-0 m-0 md:flex">
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

        {/* ── Desktop right actions ──────────────────────────── */}
        <div className="hidden items-center gap-sp16 md:flex">
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

        {/* ── Mobile hamburger ───────────────────────────────── */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-sm border-none bg-transparent p-sp4 text-neutral-800 cursor-pointer md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Mobile overlay ─────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[64px] bottom-0 z-50 bg-white md:hidden">
          <div className="flex h-full flex-col px-sp16">
            <p className="py-sp16 text-body-small font-semibold uppercase tracking-wider text-neutral-400">
              Menu
            </p>

            <div className="flex flex-col">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center justify-between py-sp16 text-body-large font-medium text-neutral-800 no-underline transition-colors hover:text-primary-500"
                >
                  {label}
                  <ChevronRight size={20} className="text-neutral-700" />
                </a>
              ))}
            </div>

            <div className="flex-1" />

            <div className="flex flex-col gap-sp12 pb-sp32">
              <button
                type="button"
                onClick={onSignIn}
                className="w-full cursor-pointer border-none bg-transparent py-sp12 text-center text-body-medium font-medium text-neutral-700 transition-colors hover:text-primary-500"
              >
                Sign in
              </button>
              <Button variant="primary" onClick={onGetStarted} className="w-full">
                Get started free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  onSignIn: PropTypes.func,
  onGetStarted: PropTypes.func,
  className: PropTypes.string,
};

export default Navbar;
