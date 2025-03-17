"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  MoreHorizontal,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react";

export default function ItemsPage() {
  const [errorDemo, setErrorDemo] = useState(false);

  // This will trigger the error boundary when clicked
  const triggerError = () => {
    setErrorDemo(true);
    throw new Error("This is a demo error in the Items page");
  };

  // Sample items data
  const items = [
    {
      id: "ITEM-001",
      name: "Premium Widget",
      category: "Electronics",
      status: "In Stock",
      quantity: 42,
      price: "$129.99",
    },
    {
      id: "ITEM-002",
      name: "Deluxe Gadget",
      category: "Electronics",
      status: "Low Stock",
      quantity: 7,
      price: "$199.99",
    },
    {
      id: "ITEM-003",
      name: "Basic Tool",
      category: "Hardware",
      status: "In Stock",
      quantity: 156,
      price: "$29.99",
    },
    {
      id: "ITEM-004",
      name: "Advanced Accessory",
      category: "Accessories",
      status: "Out of Stock",
      quantity: 0,
      price: "$59.99",
    },
    {
      id: "ITEM-005",
      name: "Professional Kit",
      category: "Tools",
      status: "In Stock",
      quantity: 23,
      price: "$349.99",
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Items</h1>
        <p className="text-muted-foreground">Manage your inventory items</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <CardTitle>Inventory Items</CardTitle>
              <CardDescription>
                You have {items.length} items in your inventory
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search items..."
                  className="w-full min-w-[200px] pl-8 md:w-[200px] lg:w-[300px]"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    Columns <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>ID</DropdownMenuItem>
                  <DropdownMenuItem>Name</DropdownMenuItem>
                  <DropdownMenuItem>Category</DropdownMenuItem>
                  <DropdownMenuItem>Status</DropdownMenuItem>
                  <DropdownMenuItem>Quantity</DropdownMenuItem>
                  <DropdownMenuItem>Price</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button onClick={triggerError}>
                <Plus className="mr-2 h-4 w-4" /> Add Item
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>
                  <div className="flex items-center">
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "In Stock"
                          ? "default"
                          : item.status === "Low Stock"
                            ? "outline"
                            : "destructive"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">{item.price}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
