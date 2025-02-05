import TellerNav from "@/app/ui/nav/teller-nav";

export default function Layout({ children }: { children: React.ReactNode; }) {

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-none md:w-1/4">
        <TellerNav />
      </div>
      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
}