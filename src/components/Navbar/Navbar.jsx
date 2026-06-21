import { useState } from "react";
import PropTypes from "prop-types";
import { Briefcase, Menu, X } from "lucide-react";
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
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-sp16 pb-sp24 pt-sp32 md:px-sp100">
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
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-sp8 border-t border-neutral-100 px-sp16 pb-sp24 pt-sp16">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block rounded-sm px-sp8 py-sp12 text-body-medium font-medium text-neutral-800 no-underline transition-colors hover:bg-primary-50 hover:text-primary-500"
            >
              {label}
            </a>
          ))}
          <hr className="my-sp8 border-neutral-100" />
          <button
            type="button"
            onClick={onSignIn}
            className="rounded-sm bg-transparent px-sp8 py-sp12 text-left text-body-medium font-medium text-neutral-700 transition-colors hover:text-primary-500 cursor-pointer border-none"
          >
            Sign in
          </button>
          <Button variant="primary" onClick={onGetStarted} className="w-full">
            Get started free
          </Button>
        </div>
      </div>
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
