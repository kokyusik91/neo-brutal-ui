import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Primitives/Textarea",
  component: Textarea,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { placeholder: "Write your message..." },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
    </div>
  ),
};

export const Error: Story = {
  args: { placeholder: "Error state", error: true },
};
