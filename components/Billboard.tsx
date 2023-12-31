"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { BillboardColumn, columns } from "@/components/BillboardColumn";
import DataTable from '@/components/DataTable';
import ApiList from "@/components/ApiList";

type Props = { data: BillboardColumn[] };

const Billboard: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data?.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Billboards" />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
};

export default Billboard;
