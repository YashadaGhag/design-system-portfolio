import Navbar from "./Navbar";

export default {
  title: "Design System/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Responsive top-level navigation bar.\n\n" +
          "**Desktop (md:768px+):** Horizontal layout — logo left, centered links, right-side Sign in (text) + Get started free (primary CTA).\n\n" +
          "**Mobile (<768px):** Logo + hamburger icon. Tapping hamburger reveals a full-height overlay with:\n" +
          "- \"MENU\" label\n" +
          "- Navigation links with chevron arrows (no dividers)\n" +
          "- Bottom-anchored tertiary Sign in + primary Get started free CTA\n\n" +
          "Responsive padding: `px-sp16 md:px-sp40 xl:px-sp80`. Vertical padding: `py-sp16`.",
      },
    },
  },
  argTypes: {
    onSignIn: { action: "sign-in clicked" },
    onGetStarted: { action: "get-started clicked" },
    links: {
      control: "object",
      description: "Array of { label, href } navigation link objects",
    },
  },
};

export const Default = {
  name: "Desktop",
  parameters: {
    docs: {
      description: {
        story:
          "Desktop variant: full horizontal nav with logo, centered links (How it works, Features, Pricing), Sign in text button, and Get started free primary CTA.",
      },
    },
  },
};

export const Mobile = {
  name: "Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story:
          "Mobile variant showing the hamburger icon. Click it to reveal the full-height overlay with MENU label, navigation links with chevron arrows, and bottom-anchored tertiary Sign in + primary Get started free CTA.",
      },
    },
  },
};

export const CustomLinks = {
  name: "Custom Links",
  args: {
    links: [
      { label: "Products", href: "#products" },
      { label: "Solutions", href: "#solutions" },
      { label: "Resources", href: "#resources" },
      { label: "Enterprise", href: "#enterprise" },
    ],
  },
};

export const Onboarding = {
  name: "Onboarding",
  args: {
    variant: "onboarding",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Onboarding variant: logo only, no nav links, no Sign In, no Get Started. Bottom border instead of shadow. Used on the onboarding flow pages.",
      },
    },
  },
};

export const WithPageContent = {
  name: "With Page Content",
  parameters: {
    docs: {
      description: {
        story: "Navbar shown above sample page content to demonstrate shadow and spacing behavior.",
      },
    },
  },
  render: (args) => (
    <div className="min-h-screen bg-neutral-50">
      <Navbar {...args} />
      <main className="mx-auto max-w-[1280px] px-sp16 py-sp64 md:px-sp40 xl:px-sp80">
        <h1 className="text-h2 font-bold text-neutral-900 mb-sp16">
          Welcome to ApplyMate
        </h1>
        <p className="text-body-large text-neutral-500 max-w-[600px]">
          The smart way to track your job applications, prepare for interviews,
          and land your dream role faster.
        </p>
      </main>
    </div>
  ),
};
