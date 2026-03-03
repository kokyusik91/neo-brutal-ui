import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "Composite/ProfileCard",
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    name: "Kyusik Ko",
    bio: "Frontend developer who loves anime and building cool things",
    stats: [
      { label: "Posts", value: 142 },
      { label: "Followers", value: "1.2K" },
      { label: "Following", value: 89 },
    ],
    onFollow: () => alert("Followed!"),
  },
};

export const Following: Story = {
  args: {
    name: "Mina Kim",
    bio: "UI/UX Designer",
    stats: [
      { label: "Posts", value: 56 },
      { label: "Followers", value: 890 },
      { label: "Following", value: 234 },
    ],
    onFollow: () => {},
    isFollowing: true,
  },
};

export const Minimal: Story = {
  args: {
    name: "Anonymous",
  },
};
