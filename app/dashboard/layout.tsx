import SideNav from '@/app/ui/dashboard/sidenav';
import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from 'react';

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

function renderPage(children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined) {
    return <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>;
}




