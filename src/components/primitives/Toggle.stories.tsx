import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Primitives/Toggle",
  component: Toggle,
  argTypes: {
    variant: { control: "select", options: ["filled", "outline", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { children: "Bold", "aria-label": "Toggle bold" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Toggle variant="filled" aria-label="Bold">B</Toggle>
      <Toggle variant="outline" aria-label="Italic">I</Toggle>
      <Toggle variant="ghost" aria-label="Underline">U</Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Toggle size="sm" aria-label="Small">sm</Toggle>
      <Toggle size="md" aria-label="Medium">md</Toggle>
      <Toggle size="lg" aria-label="Large">lg</Toggle>
    </div>
  ),
};
