import SettingsForm from "@/components/SettingsForm";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type Props = {
  params: {
    storeId: string;
  };
};

const SettingsPage: React.FC<Props> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    return redirect("/");
  }

  return (
    <main className="flex-col">
      <section className="flex-1 p-8 pt-6 space-y-4">
        <SettingsForm initialData={store} />
      </section>
    </main>
  );
};

export default SettingsPage;
