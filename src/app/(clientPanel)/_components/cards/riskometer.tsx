import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BannerProps } from '../_interface/app-interface';
import Link from 'next/link';
import { highlightKeyword } from '@/utility/function';
import { ArrowRight, ChevronRight } from 'lucide-react';
import BorderdLink from './borderd-link';


const CardRiskometer: React.FC<BannerProps> = (cardProps) => {
    const keyword = "Clinch";
    return (
        <div className="">
            {/* <div className="text-[4.2rem]/[6rem] font-semibold mb-10">{CardProps.title}</div> */}
            <div className="xl:text-[3.2rem]/[4rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-semibold mb-10">{CardProps.title}</div>
            <div className="sm:text-[1.4rem] text-[1rem">{CardProps.subTitle}</div>

            <div className="flex justify-start align-middle mt-20">
                <BorderdLink
                    label={CardProps.linkText}
                    href={`${CardProps.href}`}
                    className={'sm:text-[1.5rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-400 dark:hover:text-cyan-300'}
                    icon={ChevronRight}
                    iconClass={'inline-block w-14 h-10 ml-2 mt-1'}
                />
            </div>
        </div>
    );
}

export default CardRiskometer;