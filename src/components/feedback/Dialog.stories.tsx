import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./Dialog";
import { Button } from "../primitives";

const meta: Meta = {
  title: "Feedback/Dialog",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account.
        </DialogDescription>
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button color="danger" size="sm">Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
};
