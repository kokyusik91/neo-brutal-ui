import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Primitives/Checkbox",
  component: Checkbox,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: "Accept terms and conditions" },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { label: "Disabled", disabled: true },
};

export const DefaultChecked: Story = {
  args: { label: "Already checked", defaultChecked: true },
};
