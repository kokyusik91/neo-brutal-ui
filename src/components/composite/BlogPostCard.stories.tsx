import type { Meta, StoryObj } from "@storybook/react";
import { BlogPostCard } from "./BlogPostCard";

const meta: Meta<typeof BlogPostCard> = {
  title: "Composite/BlogPostCard",
  component: BlogPostCard,
};

export default meta;
type Story = StoryObj<typeof BlogPostCard>;

export const Default: Story = {
  args: {
    image: "https://picsum.photos/seed/blog1/600/300",
    title: "Building a Neo-Brutalism Design System",
    excerpt: "Learn how to create bold, eye-catching UI components using thick borders, strong shadows, and vibrant colors.",
    author: { name: "Kyusik Ko" },
    date: "Mar 3, 2026",
    tags: ["Design", "React", "UI"],
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Why Neo-Brutalism is the Future of Web Design",
    excerpt: "The pendulum is swinging back from minimalism. Here's why bold, unapologetic design is making a comeback.",
    author: {
      name: "Design Weekly",
      avatar: "https://i.pravatar.cc/100?u=design",
    },
    date: "Feb 28, 2026",
    tags: ["Opinion"],
  },
};

export const Clickable: Story = {
  args: {
    image: "https://picsum.photos/seed/blog2/600/300",
    title: "Getting Started with Radix UI",
    excerpt: "A comprehensive guide to building accessible components with Radix primitives.",
    author: { name: "Tech Blog" },
    date: "Mar 1, 2026",
    onClick: () => alert("Navigate to post!"),
  },
};
