import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "./List";

const meta: Meta<typeof List> = {
  title: "Data Display/List",
  component: List,
  argTypes: {
    variant: { control: "select", options: ["plain", "bordered", "card"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Plain: Story = {
  args: {
    variant: "plain",
    children: (
      <>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
    children: (
      <>
        <ListItem>Dashboard</ListItem>
        <ListItem>Settings</ListItem>
        <ListItem>Profile</ListItem>
        <ListItem>Logout</ListItem>
      </>
    ),
  },
};

export const Card: Story = {
  args: {
    variant: "card",
    children: (
      <>
        <ListItem>Todo: Buy groceries</ListItem>
        <ListItem>Todo: Walk the dog</ListItem>
        <ListItem>Todo: Read a book</ListItem>
      </>
    ),
  },
};

export const WithIcons: Story = {
  render: () => (
    <List variant="bordered">
      <ListItem icon={<span>📁</span>}>Documents</ListItem>
      <ListItem icon={<span>🖼️</span>}>Images</ListItem>
      <ListItem icon={<span>🎵</span>}>Music</ListItem>
    </List>
  ),
};
