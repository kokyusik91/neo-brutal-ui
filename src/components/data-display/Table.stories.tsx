import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    striped: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Kyusik</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mina</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jun</TableCell>
          <TableCell>PM</TableCell>
          <TableCell>Away</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table striped>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { id: 1, name: "Widget A", price: "$10", stock: 42 },
          { id: 2, name: "Widget B", price: "$25", stock: 17 },
          { id: 3, name: "Widget C", price: "$8", stock: 99 },
          { id: 4, name: "Widget D", price: "$30", stock: 5 },
          { id: 5, name: "Widget E", price: "$15", stock: 63 },
        ].map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
