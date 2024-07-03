import { Fragment } from 'react';
import AdminAppNavBar from './admin/_components/admin-navbar';
import MobNavDialogBody from './admin/_components/main-navbar';
import SideDialogLinks from './admin/_components/mobile-navbar/dialog-links';
import SideBarBottomLinks from './admin/_components/mobile-navbar/bottom-link';


export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      <div className="md:hidden">
        <AdminAppNavBar />
      </div>
      <div className="fixed z-30 w-full top-0 bg-white border-b  border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-4 max-sm:hidden">
        <MobNavDialogBody />
      </div>
      <div className="flex pt-14 overflow-hidden bg-gray-50 dark:bg-gray-900 max-sm:pt-0">
        <div className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-80 h-full pt-14 font-normal duration-75 lg:flex transition-width max-sm:hidden">
          <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-14 overflow-y-auto">
              <SideDialogLinks />
            </div>
            <div className="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <SideBarBottomLinks />
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-y-auto bg-gray-50 lg:ml-80 dark:bg-gray-900 min-h-[calc(100vh-56px)]">
          <div className="flex flex-col min-h-[calc(100vh-58px)]">
            <div className="p-8 pt-6 max-sm:px-4">
              {children}
            </div>
            <div className="mt-auto justify-center hidden w-full p-4 bg-white lg:flex dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="aasas">&copy; 2019-2023 sitename.com. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
