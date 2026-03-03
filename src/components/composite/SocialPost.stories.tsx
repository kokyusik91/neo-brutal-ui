import type { Meta, StoryObj } from "@storybook/react";
import { SocialPost } from "./SocialPost";

const meta: Meta<typeof SocialPost> = {
  title: "Composite/SocialPost",
  component: SocialPost,
};

export default meta;
type Story = StoryObj<typeof SocialPost>;

export const Default: Story = {
  args: {
    author: {
      name: "Kyusik Ko",
      avatar: "https://i.pravatar.cc/100?u=kyusik",
      handle: "@kyusik91",
    },
    content: "Just shipped the neo-brutal UI library! Check it out if you want some bold, fun components for your next project.",
    timestamp: "2h ago",
    likes: 42,
    comments: 7,
    shares: 3,
  },
};

export const LongPost: Story = {
  args: {
    author: {
      name: "Anime Fan",
      avatar: "https://i.pravatar.cc/100?u=anime",
      handle: "@animefan",
    },
    content: "Just finished watching Chainsaw Man season 2 and I have SO many thoughts. The animation quality is insane, the story keeps getting darker, and the new characters are all so well-written. Definitely one of the best anime of the year!",
    timestamp: "5h ago",
    likes: 128,
    comments: 34,
    shares: 15,
  },
};
