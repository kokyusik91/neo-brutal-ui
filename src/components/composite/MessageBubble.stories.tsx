import type { Meta, StoryObj } from "@storybook/react";
import { MessageBubble } from "./MessageBubble";

const meta: Meta<typeof MessageBubble> = {
  title: "Composite/MessageBubble",
  component: MessageBubble,
};

export default meta;
type Story = StoryObj<typeof MessageBubble>;

export const Sent: Story = {
  args: {
    content: "Hey! How are you?",
    timestamp: "10:30 AM",
    variant: "sent",
  },
};

export const Received: Story = {
  args: {
    content: "I'm doing great, thanks!",
    timestamp: "10:31 AM",
    variant: "received",
    senderName: "Mina",
    avatar: "https://i.pravatar.cc/100?u=mina",
  },
};

export const Conversation: Story = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-lg p-4">
      <MessageBubble
        content="Hey, did you see the new anime release?"
        timestamp="10:30 AM"
        variant="received"
        senderName="Kyusik"
        avatar="https://i.pravatar.cc/100?u=kyusik"
      />
      <MessageBubble
        content="Yes! It's amazing 🔥"
        timestamp="10:31 AM"
        variant="sent"
      />
      <MessageBubble
        content="The animation quality is insane, especially episode 3"
        timestamp="10:32 AM"
        variant="received"
        senderName="Kyusik"
        avatar="https://i.pravatar.cc/100?u=kyusik"
      />
      <MessageBubble
        content="Totally agree, I've already rewatched it twice haha"
        timestamp="10:33 AM"
        variant="sent"
      />
    </div>
  ),
};
