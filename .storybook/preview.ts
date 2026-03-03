import type { Preview } from "@storybook/react";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "neo-brutal",
      values: [
        { name: "neo-brutal", value: "#FFF8E7" },
        { name: "white", value: "#FFFFFF" },
        { name: "dark", value: "#1A1A2E" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
