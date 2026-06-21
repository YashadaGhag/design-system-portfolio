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
          "Responsive top-level navigation bar. Mobile: logo + hamburger menu with slide-down overlay. " +
          "Desktop (md:768px+): horizontal layout with centered links and right-side actions.",
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

export const Default = {};

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

export const Mobile = {
  name: "Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story:
          "Mobile variant showing the hamburger icon. Click the menu icon to reveal the slide-down overlay with stacked nav links, Sign in, and CTA button.",
      },
    },
  },
};

export const WithPageContent = {
  name: "With Page Content",
  parameters: {
    docs: {
      description: {
        story: "Navbar shown above sample page content to demonstrate sticky/shadow behavior.",
      },
    },
  },
  render: (args) => (
    <div className="min-h-screen bg-neutral-50">
      <Navbar {...args} />
      <main className="mx-auto max-w-[1280px] px-sp16 py-sp64 md:px-sp100">
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
