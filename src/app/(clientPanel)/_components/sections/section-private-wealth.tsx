"use client"

import { CareerProps } from '@/app/interface/client-interface';
import { MoveRight } from 'lucide-react';

import AppSectionWrapper from '../animation/app-wrapper';
import CardPrivateWealth2 from '../cards/private-wealth2';
import { Meteors } from '@/components/ui/meteors';
import { Spotlight } from '@/components/ui/spotlight';



export default function SectionPrivateWealth({ searchParams }: { searchParams?: { query?: string; page?: string } }) {

    const sectionData: CareerProps = {
        id: 1,
        title: "Private wealth for all",
        subTitle: "As you embark on the journey of wealth creation, Clinch helps you achieve desired wealth with lasting legacy, Enable you to make choices that matter the most, courage to live widest dreams. Clinch a trustworthy partner who wouldn't leave your money on the brink of a cliff to fall. Let's build a legacy that stands the test of time.",
        label: "Let's begin the journey",
        href: "/get-started",
        icon: MoveRight
    }

    return (
        <AppSectionWrapper>
            <div className="dark:bg-gray-900/30 md:pt-32 md:pb-32 pt-24 pb-24 relative overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="rgba(255,255,255,.4)"
                />
                <CardPrivateWealth2
                    title={sectionData.title}
                    subTitle={sectionData.subTitle}
                    href={sectionData.href}
                    label={sectionData.label}
                />
                {/* <Meteors number={20} /> */}
            </div>
        </AppSectionWrapper>
    );
}
