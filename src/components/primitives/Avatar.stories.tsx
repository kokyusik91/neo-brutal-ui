import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Primitives/Avatar",
  component: Avatar,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    shadow: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://i.pravatar.cc/100" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar size="sm"><AvatarFallback color="primary">A</AvatarFallback></Avatar>
      <Avatar size="md"><AvatarFallback color="secondary">B</AvatarFallback></Avatar>
      <Avatar size="lg"><AvatarFallback color="accent">C</AvatarFallback></Avatar>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar size="sm"><AvatarFallback color="danger">S</AvatarFallback></Avatar>
      <Avatar size="md"><AvatarFallback color="success">M</AvatarFallback></Avatar>
      <Avatar size="lg"><AvatarFallback color="info">L</AvatarFallback></Avatar>
    </div>
  ),
};

export const FallbackColors: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Avatar><AvatarFallback color="primary">P</AvatarFallback></Avatar>
      <Avatar><AvatarFallback color="secondary">S</AvatarFallback></Avatar>
      <Avatar><AvatarFallback color="accent">A</AvatarFallback></Avatar>
      <Avatar><AvatarFallback color="success">G</AvatarFallback></Avatar>
      <Avatar><AvatarFallback color="warning">W</AvatarFallback></Avatar>
      <Avatar><AvatarFallback color="danger">D</AvatarFallback></Avatar>
      <Avatar><AvatarFallback color="info">I</AvatarFallback></Avatar>
    </div>
  ),
};
