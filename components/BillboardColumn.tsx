"use client";

import { ColumnDef } from "@tanstack/react-table";
import BIllboardCellAction from "@/components/BillboardCellAction";

export type BillboardColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
    {
      id: "actions",
      cell: ({ row }) => <BIllboardCellAction data={row.original} />,
    },
];
