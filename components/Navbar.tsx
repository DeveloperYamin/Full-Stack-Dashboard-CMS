import { UserButton, auth } from "@clerk/nextjs";
import MainNav from "@/components/MainNav";
import StoreSwitcher from "@/components/StoreSwitcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    }
  });

  return (
    <header className="border-b">
      <section className="flex items-center h-16 px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="flex items-center ml-auto space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </section>
    </header>
  );
};

export default Navbar;
