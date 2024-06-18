import Link from 'next/link';
import CardOurServices from './cards/services';

export default function SectionServices() {
    return (
        <div className="bg-white/[.04] pt-20 pb-20">
            <div className="container max-w-screen-xl">
                SectionServices
                <CardOurServices />
            </div>
        </div>
    );
}
