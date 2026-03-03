import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "./PricingCard";

const meta: Meta<typeof PricingCard> = {
  title: "Composite/PricingCard",
  component: PricingCard,
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

const features = ["10 projects", "5GB storage", "Email support", "API access"];

export const Default: Story = {
  args: {
    title: "Starter",
    price: "$9",
    features,
    ctaText: "Get Started",
  },
};

export const Highlighted: Story = {
  args: {
    title: "Pro",
    price: "$29",
    features: [...features, "Priority support", "Custom domain"],
    ctaText: "Upgrade to Pro",
    highlighted: true,
    color: "primary",
  },
};

export const PricingTiers: Story = {
  render: () => (
    <div className="flex gap-6 items-start">
      <PricingCard
        title="Free"
        price="$0"
        features={["1 project", "100MB storage"]}
        ctaText="Start Free"
        color="secondary"
      />
      <PricingCard
        title="Pro"
        price="$29"
        features={["Unlimited projects", "10GB storage", "Priority support"]}
        ctaText="Get Pro"
        highlighted
        color="primary"
      />
      <PricingCard
        title="Enterprise"
        price="$99"
        features={["Everything in Pro", "SSO", "Dedicated support", "SLA"]}
        ctaText="Contact Sales"
        color="accent"
      />
    </div>
  ),
};
