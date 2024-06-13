import AppFooter from './_components/app-footer';
import AppNavBar from './_components/app-navbar';


export default function ClientLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AppNavBar />
      {children}
      <AppFooter />
    </>
  );
}
