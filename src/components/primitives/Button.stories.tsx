import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outline", "ghost"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "warning", "danger", "info"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    shadow: { control: "select", options: ["none", "sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Click me" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button variant="filled">Filled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="accent">Accent</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="info">Info</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button shadow="none">None</Button>
      <Button shadow="sm">Small</Button>
      <Button shadow="md">Medium</Button>
      <Button shadow="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};
