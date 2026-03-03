import type { Meta, StoryObj } from "@storybook/react";
import { WeatherCard } from "./WeatherCard";

const meta: Meta<typeof WeatherCard> = {
  title: "Composite/WeatherCard",
  component: WeatherCard,
};

export default meta;
type Story = StoryObj<typeof WeatherCard>;

export const Sunny: Story = {
  args: {
    city: "Seoul",
    temperature: 24,
    condition: "Sunny",
    icon: <span style={{ fontSize: 48 }}>☀️</span>,
    high: 27,
    low: 18,
    humidity: 45,
  },
};

export const Rainy: Story = {
  args: {
    city: "Tokyo",
    temperature: 16,
    condition: "Rainy",
    icon: <span style={{ fontSize: 48 }}>🌧️</span>,
    high: 18,
    low: 13,
    humidity: 82,
  },
};

export const Snowy: Story = {
  args: {
    city: "Hokkaido",
    temperature: -3,
    condition: "Snowy",
    icon: <span style={{ fontSize: 48 }}>❄️</span>,
    high: 0,
    low: -7,
  },
};
