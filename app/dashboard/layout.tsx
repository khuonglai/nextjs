import SideNav from '@/app/ui/dashboard/sidenav';

// Root page contains nav page and working page
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex h-screen flex-col md:flex-row md:overflow-hidden">
      {renderNavPage()}
      {renderPage(children)}
    </div>
  );
}

function renderNavPage() {
    return <div className="w-full flex-none md:w-64"><SideNav /></div>
}

function renderPage(children) {
    return <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>;
}




