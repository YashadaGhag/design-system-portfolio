import Footer from "./Footer";

export default {
  title: "Design System/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Responsive footer.\n\n" +
          "**Desktop (md:768px+):** Single row — copyright left, Privacy Policy + Terms of Service right.\n\n" +
          "**Mobile (<768px):** Stacked layout with:\n" +
          "- Logo + description\n" +
          "- Collapsible accordion sections (only one open at a time)\n" +
          "  - **Product:** Features, How It Works, Pricing\n" +
          "  - **Company:** About, Privacy Policy, Terms of Service\n" +
          "- Links are center-aligned, tertiary style (primary-500 color)\n" +
          "- Facebook + LinkedIn social icons\n" +
          "- Copyright row",
      },
    },
  },
  argTypes: {
    productLinks: {
      control: "object",
      description:
        "Array of { label, href } product link objects. Default order: Features, How It Works, Pricing.",
    },
    companyLinks: {
      control: "object",
      description:
        "Array of { label, href } company link objects. Default order: About, Privacy Policy, Terms of Service.",
    },
  },
};

export const Default = {};

export const Desktop = {
  name: "Desktop",
  parameters: {
    docs: {
      description: {
        story:
          "Desktop variant: single-row footer with copyright left and Privacy Policy + Terms of Service right. Responsive padding: `px-sp40 xl:px-sp80 2xl:px-sp200`.",
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
          "Mobile variant with collapsible accordion sections. Only one section can be open at a time — clicking Product closes Company and vice versa. Expanded links are center-aligned in primary-500 (tertiary style).",
      },
    },
  },
};

export const WithPageContent = {
  name: "With Page Content",
  render: (args) => (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <main className="mx-auto max-w-[1280px] flex-1 px-sp16 py-sp64 md:px-sp40 xl:px-sp80">
        <h1 className="text-h2 font-bold text-neutral-900 mb-sp16">Page Content</h1>
        <p className="text-body-large text-neutral-500 max-w-[600px]">
          Sample content above the footer to show context.
        </p>
      </main>
      <Footer {...args} />
    </div>
  ),
};
