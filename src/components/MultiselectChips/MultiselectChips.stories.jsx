import { useState } from "react";
import MultiselectChips from "./MultiselectChips";

const ROLE_RECOMMENDATIONS = [
  "Product Designer",
  "UX Designer",
  "UI Designer",
];

const StatefulChips = (args) => {
  const [values, setValues] = useState(args.values || []);
  return <MultiselectChips {...args} values={values} onChange={setValues} />;
};

export default {
  title: "Components/MultiselectChips",
  component: MultiselectChips,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
};

export const Empty = {
  render: () => (
    <StatefulChips values={[]} recommendations={ROLE_RECOMMENDATIONS} />
  ),
};

export const WithSelection = {
  render: () => (
    <StatefulChips
      values={["Senior Product Designer"]}
      recommendations={ROLE_RECOMMENDATIONS}
    />
  ),
};

export const MultipleSelections = {
  render: () => (
    <StatefulChips
      values={["Senior Product Designer", "UX Designer"]}
      recommendations={ROLE_RECOMMENDATIONS}
    />
  ),
};

export const MaxReached = {
  render: () => (
    <StatefulChips
      values={[
        "Senior Product Designer",
        "UX Designer",
        "UI Designer",
        "Visual Designer",
        "Interaction Designer",
      ]}
      maxSelections={5}
      recommendations={ROLE_RECOMMENDATIONS}
    />
  ),
};

export const LocationVariant = {
  render: () => (
    <StatefulChips
      values={["Seattle, Washington"]}
      recommendations={["San Francisco, CA", "New York, NY", "Austin, TX"]}
      placeholder="Type to add more"
    />
  ),
};
