import type { Meta, StoryObj } from "@storybook/react";
import { AlarmCard } from "./AlarmCard";

const meta: Meta<typeof AlarmCard> = {
  title: "Composite/AlarmCard",
  component: AlarmCard,
};

export default meta;
type Story = StoryObj<typeof AlarmCard>;

export const Enabled: Story = {
  args: {
    time: "07:30",
    label: "Morning Workout",
    days: ["Mon", "Wed", "Fri"],
    enabled: true,
    onToggle: () => {},
  },
};

export const Disabled: Story = {
  args: {
    time: "09:00",
    label: "Team Standup",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    enabled: false,
    onToggle: () => {},
  },
};

export const WithDelete: Story = {
  args: {
    time: "22:00",
    label: "Read before bed",
    days: ["Every day"],
    enabled: true,
    onToggle: () => {},
    onDelete: () => alert("Deleted!"),
  },
};
