import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "Composite/ProductCard",
  component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    image: "https://picsum.photos/seed/product1/400/300",
    title: "Neo Brutal Sneakers",
    price: "$129.99",
    onAddToCart: () => alert("Added!"),
  },
};

export const WithSale: Story = {
  args: {
    image: "https://picsum.photos/seed/product2/400/300",
    title: "Limited Edition Hoodie",
    price: "$59.99",
    originalPrice: "$89.99",
    badge: "SALE",
    rating: 4.5,
    onAddToCart: () => alert("Added!"),
  },
};

export const WithRating: Story = {
  args: {
    image: "https://picsum.photos/seed/product3/400/300",
    title: "Retro Keyboard",
    price: "$149.00",
    rating: 4.8,
    onAddToCart: () => alert("Added!"),
  },
};
