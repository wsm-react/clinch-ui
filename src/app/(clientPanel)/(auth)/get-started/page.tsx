import Image from "next/image";
import GetStartedNavBar from '../../_components/get-started-navbar';
import SectionGetStarted from '../../_components/get-started/page-get-started';
import GetStartedFooter from '../../_components/get-started-footer';

export default function GetStartedPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-661px)] flex-col">
      <GetStartedNavBar />
      <SectionGetStarted />
      <GetStartedFooter />
    </div>
  );
}
