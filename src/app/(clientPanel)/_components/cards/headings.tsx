import Link from 'next/link';
import { HeadingsClassProps, HeadingsProps } from '@/app/interface/client-interface';
import { cn } from '@/_lib/utils';
import { Fragment } from 'react';


const CardHeadings: React.FC<HeadingsClassProps> = (props) => {
    const TitleTag = props.titleTag || 'h1';

    const TitleContent = (
        <Fragment>
            {props.title && <TitleTag className={cn("scroll-m-20 text-4xl font-bold tracking-tight", props.titleClass)}>{props.title}</TitleTag>}
            {props.subTitle && <p className={cn("text-lg text-muted-foreground", props.subTitleClass)}>{props.subTitle}</p>}
        </Fragment>
    )

    return props.spaceY ? (
        (props.title || props.subTitle) &&
        <div className={cn("space-y-2", props.spaceY)}>{TitleContent} </div>
    ) : (TitleContent);
}
export default CardHeadings;
