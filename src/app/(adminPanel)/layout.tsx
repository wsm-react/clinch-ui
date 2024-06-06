import AdminAppNavBar from './admin/_components/admin-navbar';

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AdminAppNavBar />
      {children}
    </>
  );
}
