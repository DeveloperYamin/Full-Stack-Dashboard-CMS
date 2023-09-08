import ColorForm from "@/components/ColorForm";
import prismadb from "@/lib/prismadb";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const color =
    params.colorId.length >= 12
      ? await prismadb.color.findUnique({
          where: {
            id: params.colorId,
          },
        })
      : null;

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default ColorPage;
