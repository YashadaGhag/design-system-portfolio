import { useState } from "react";
import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    selected: { control: "boolean" },
    onChange: { action: "changed" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export const Unselected = {
  args: { label: "Yes", selected: false },
};

export const Selected = {
  args: { label: "No", selected: true },
};

export const RadioGroup = {
  render: () => {
    const [value, setValue] = useState("yes");
    return (
      <div className="flex flex-col gap-sp8">
        <Radio
          label="Yes"
          name="example"
          value="yes"
          selected={value === "yes"}
          onChange={() => setValue("yes")}
        />
        <Radio
          label="No"
          name="example"
          value="no"
          selected={value === "no"}
          onChange={() => setValue("no")}
        />
      </div>
    );
  },
};
