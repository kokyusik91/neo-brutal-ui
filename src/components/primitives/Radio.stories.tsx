import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Primitives/Radio",
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <RadioGroupItem value="option-1" label="Option 1" />
      <RadioGroupItem value="option-2" label="Option 2" />
      <RadioGroupItem value="option-3" label="Option 3" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="a" orientation="horizontal">
      <RadioGroupItem value="a" label="React" />
      <RadioGroupItem value="b" label="Vue" />
      <RadioGroupItem value="c" label="Svelte" />
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <RadioGroup defaultValue="sm">
        <RadioGroupItem value="sm" label="Small" size="sm" />
      </RadioGroup>
      <RadioGroup defaultValue="md">
        <RadioGroupItem value="md" label="Medium" size="md" />
      </RadioGroup>
      <RadioGroup defaultValue="lg">
        <RadioGroupItem value="lg" label="Large" size="lg" />
      </RadioGroup>
    </div>
  ),
};
