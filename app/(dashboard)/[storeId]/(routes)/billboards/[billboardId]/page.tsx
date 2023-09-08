import { BillboardForm } from "@/components/BillboardForm";
import prismadb from "@/lib/prismadb";

type Props = {
  params: { billboardId: string };
};

const BillboardIdPage: React.FC<Props> = async ({ params }) => {
  const billboard =
    params.billboardId.length >= 12
      ? await prismadb.billboard.findUnique({
          where: {
            id: params.billboardId,
          },
        })
      : null;
  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </section>
    </main>
  );
};

export default BillboardIdPage;
