import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const meta: Meta<typeof IconButton> = {
  title: "Primitives/IconButton",
  component: IconButton,
  argTypes: {
    variant: { control: "select", options: ["filled", "outline", "ghost"] },
    color: { control: "select", options: ["primary", "secondary", "accent", "success", "warning", "danger", "info"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: { children: <HeartIcon />, "aria-label": "Like" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <IconButton variant="filled" aria-label="Like"><HeartIcon /></IconButton>
      <IconButton variant="outline" aria-label="Like"><HeartIcon /></IconButton>
      <IconButton variant="ghost" aria-label="Like"><HeartIcon /></IconButton>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <IconButton color="primary" aria-label="Like"><HeartIcon /></IconButton>
      <IconButton color="secondary" aria-label="Like"><HeartIcon /></IconButton>
      <IconButton color="accent" aria-label="Like"><HeartIcon /></IconButton>
      <IconButton color="danger" aria-label="Like"><HeartIcon /></IconButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <IconButton size="sm" aria-label="Like"><HeartIcon /></IconButton>
      <IconButton size="md" aria-label="Like"><HeartIcon /></IconButton>
      <IconButton size="lg" aria-label="Like"><HeartIcon /></IconButton>
    </div>
  ),
};
