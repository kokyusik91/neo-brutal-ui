import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from "./Toast";
import { Button } from "../primitives";

const meta: Meta = {
  title: "Feedback/Toast",
};

export default meta;
type Story = StoryObj;

export const AllVariants: Story = {
  render: () => (
    <ToastProvider>
      <div className="flex flex-col gap-4 max-w-md">
        {(["default", "success", "error", "warning", "info"] as const).map((v) => (
          <Toast key={v} variant={v} open duration={Infinity}>
            <div className="flex-1">
              <ToastTitle>{v.charAt(0).toUpperCase() + v.slice(1)} Toast</ToastTitle>
              <ToastDescription>This is a {v} notification message.</ToastDescription>
            </div>
            <ToastClose />
          </Toast>
        ))}
      </div>
      <ToastViewport />
    </ToastProvider>
  ),
};

export const WithAction: Story = {
  render: () => (
    <ToastProvider>
      <Toast open variant="error" duration={Infinity}>
        <div className="flex-1">
          <ToastTitle>Error occurred</ToastTitle>
          <ToastDescription>Something went wrong.</ToastDescription>
        </div>
        <ToastAction altText="Retry">Retry</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
};
