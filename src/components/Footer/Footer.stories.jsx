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
          "Responsive footer. Mobile: stacked layout with logo, description, Product/Company link sections, " +
          "social icons, and copyright. Desktop (md:768px+): single row with copyright left and policy links right.",
      },
    },
  },
  argTypes: {
    productLinks: {
      control: "object",
      description: "Array of { label, href } product link objects",
    },
    companyLinks: {
      control: "object",
      description: "Array of { label, href } company link objects",
    },
  },
};

export const Default = {};

export const Mobile = {
  name: "Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story:
          "Mobile variant showing the stacked layout with logo, description, Product/Company sections, social icons, and copyright.",
      },
    },
  },
};

export const Desktop = {
  name: "Desktop",
  parameters: {
    docs: {
      description: {
        story:
          "Desktop variant showing the single-row footer with copyright left and Privacy Policy + Terms of Service right.",
      },
    },
  },
};

export const WithPageContent = {
  name: "With Page Content",
  render: (args) => (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <main className="mx-auto max-w-[1280px] flex-1 px-sp16 py-sp64 md:px-sp100">
        <h1 className="text-h2 font-bold text-neutral-900 mb-sp16">Page Content</h1>
        <p className="text-body-large text-neutral-500 max-w-[600px]">
          Sample content above the footer to show context.
        </p>
      </main>
      <Footer {...args} />
    </div>
  ),
};
