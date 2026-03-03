import type { Config } from "tailwindcss";
import { neoBrutalPreset } from "./src/preset";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [neoBrutalPreset],
} satisfies Config;
