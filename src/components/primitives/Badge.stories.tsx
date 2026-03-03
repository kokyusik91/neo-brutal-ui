import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Primitives/Badge",
  component: Badge,
  argTypes: {
    variant: { control: "select", options: ["filled", "outline"] },
    color: { control: "select", options: ["primary", "secondary", "accent", "success", "warning", "danger", "info"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Badge" },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="accent">Accent</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="info">Info</Badge>
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="outline" color="primary">Primary</Badge>
      <Badge variant="outline" color="secondary">Secondary</Badge>
      <Badge variant="outline" color="danger">Danger</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};
