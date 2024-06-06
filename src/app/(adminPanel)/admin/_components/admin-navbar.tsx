
import MainNavBar from './main-navbar';
import MobileNavBar from './mobile-navbar';

export default function AdminAppNavBar() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 drop-shadow-xl">
        <div className="container flex h-12 max-w-screen-2xl items-center">
          <div className="flex flex-row justify-around align-middle">
            <div className="aasas">Logo </div>
            <MainNavBar />
            <MobileNavBar />
          </div>
        </div>
      </header>
    </>
  );
}
