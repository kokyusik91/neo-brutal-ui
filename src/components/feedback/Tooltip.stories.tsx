import type { Meta, StoryObj } from "@storybook/react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./Tooltip";
import { Button } from "../primitives";

const meta: Meta = {
  title: "Feedback/Tooltip",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        This is a tooltip!
      </TooltipContent>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex gap-8 p-16">
      <Tooltip>
        <TooltipTrigger asChild><Button size="sm">Top</Button></TooltipTrigger>
        <TooltipContent side="top">Top tooltip</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild><Button size="sm">Bottom</Button></TooltipTrigger>
        <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild><Button size="sm">Left</Button></TooltipTrigger>
        <TooltipContent side="left">Left tooltip</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild><Button size="sm">Right</Button></TooltipTrigger>
        <TooltipContent side="right">Right tooltip</TooltipContent>
      </Tooltip>
    </div>
  ),
};
