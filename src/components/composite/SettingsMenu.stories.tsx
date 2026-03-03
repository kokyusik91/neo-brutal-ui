import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SettingsMenu } from "./SettingsMenu";

const meta: Meta<typeof SettingsMenu> = {
  title: "Composite/SettingsMenu",
  component: SettingsMenu,
};

export default meta;
type Story = StoryObj<typeof SettingsMenu>;

export const Default: Story = {
  render: () => {
    const [items, setItems] = React.useState([
      { label: "Dark Mode", description: "Use dark color theme", type: "toggle" as const, checked: false, onChange: () => {} },
      { label: "Notifications", description: "Receive push notifications", type: "toggle" as const, checked: true, onChange: () => {} },
      { label: "Auto-save", description: "Automatically save drafts", type: "checkbox" as const, checked: true, onChange: () => {} },
      { label: "Analytics", description: "Share anonymous usage data", type: "checkbox" as const, checked: false, onChange: () => {} },
    ]);

    const toggleItem = (index: number, value: boolean) => {
      setItems((prev) => prev.map((item, i) => (i === index ? { ...item, checked: value } : item)));
    };

    return (
      <SettingsMenu
        title="Settings"
        items={items.map((item, i) => ({ ...item, onChange: (v: boolean) => toggleItem(i, v) }))}
        className="max-w-md"
      />
    );
  },
};
