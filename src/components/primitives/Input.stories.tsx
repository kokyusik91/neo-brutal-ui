import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Primitives/Input",
  component: Input,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: "Type something..." },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

export const Error: Story = {
  args: { placeholder: "Invalid email", error: true },
};

export const Disabled: Story = {
  args: { placeholder: "Disabled", disabled: true },
};
