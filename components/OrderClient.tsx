"use client";

import DataTable  from "@/components/DataTable";
import  Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";

import { columns, OrderColumn } from "@/components/OrderColumn";

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};

export default OrderClient
