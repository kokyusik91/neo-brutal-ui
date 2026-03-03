import type { Meta, StoryObj } from "@storybook/react";
import { LoginCard } from "./LoginCard";

const meta: Meta<typeof LoginCard> = {
  title: "Composite/LoginCard",
  component: LoginCard,
};

export default meta;
type Story = StoryObj<typeof LoginCard>;

export const Default: Story = {
  args: {
    onSubmit: (data) => alert(JSON.stringify(data)),
  },
};

export const WithSocialLogin: Story = {
  args: {
    showSocial: true,
    onSubmit: (data) => alert(JSON.stringify(data)),
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Welcome Back",
    showSocial: true,
  },
};
