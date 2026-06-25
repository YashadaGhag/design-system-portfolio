import { MemoryRouter } from "react-router-dom";
import CompanyMatchAnimation from "./CompanyMatchAnimation";

export default {
  title: "Components/CompanyMatchAnimation",
  component: CompanyMatchAnimation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Animated job matching screen. Company logos fade in one by one around an elliptical track, " +
          "then the center text reveals a match count and CTA.\n\n" +
          "- **Entering:** Logos appear one by one clockwise\n" +
          "- **Complete:** All logos visible, result text and CTA shown\n" +
          "- **Orbiting:** Logos slowly rotate around the center",
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/onboarding/matching"]}>
        <div className="bg-white p-8">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Entering = {
  name: "Entering",
  args: {
    initialPhase: "entering",
    initialVisibleLogos: 3,
  },
  parameters: {
    docs: {
      description: {
        story: "First few logos fading in. Center text shows 'Finding best jobs for you...'",
      },
    },
  },
};

export const Complete = {
  name: "Complete",
  args: {
    initialPhase: "entered",
    initialVisibleLogos: 8,
  },
  parameters: {
    docs: {
      description: {
        story: "All 8 logos visible with the final match count text and CTA button.",
      },
    },
  },
};

export const Orbiting = {
  name: "Orbiting",
  args: {
    initialPhase: "orbiting",
    initialVisibleLogos: 8,
  },
  parameters: {
    docs: {
      description: {
        story: "Continuous orbit animation running. Logos rotate around the center while staying upright.",
      },
    },
  },
};
