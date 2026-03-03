import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <p className="font-nb mb-3">Content above</p>
      <Divider />
      <p className="font-nb mt-3">Content below</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <p className="font-nb mb-3">Section A</p>
      <Divider label="OR" />
      <p className="font-nb mt-3">Section B</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-20">
      <span className="font-nb">Left</span>
      <Divider orientation="vertical" />
      <span className="font-nb">Right</span>
    </div>
  ),
};
