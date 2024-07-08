import { ParsedUrlQueryInput } from 'node:querystring';
import { ComponentType } from 'react';


export interface highlightKeywordProps {
    text: string
    keyword: string | undefined
    className?: string
}

export interface ListId {
    id?: number | string
}


export interface MenuLinks extends ListId, linkProps {
    label: string,
    button?: boolean
    icon?: ComponentType<IconProps>;
}


export interface GetStartedLinks extends ListId, linkProps {
    title: string,
    label?: string,
    button?: boolean
    background?: string,
    textColor?: string,
}

interface Href {
    pathname: string;
    query?: ParsedUrlQueryInput;
}

export interface IconProps {
    className?: string;
}

export interface HeadingsProps {
    title: string
    subTitle: string
}

export interface linkProps {
    href: string | Href;
}


export interface BorderdLinkProps extends linkProps {
    label: string | undefined
    className: string
    labelClassName?: string
    containerClass?: string
    iconRight?: boolean
    icon?: ComponentType<IconProps>;
    iconClass?: string
}

export interface CareerProps extends HeadingsProps, ListId, linkProps, MenuLinks { }
export interface SubscribeProps extends HeadingsProps, ListId {
    note?: string
}

export interface CardsProps extends ListId, HeadingsProps, linkProps {
    linkText?: string
    keyword?: string
    icon?: ComponentType<IconProps>;
}

export interface WealthManagerProps extends CardsProps {
    imgSrc: string
    imgAlt?: string
}

export interface ExclusiveProductsProps extends CardsProps {
    keyword?: string
    imgSrc: string
    shadow?: string
    imgAlt?: string
    type?: string
    reversed?: boolean
}

export interface ExclusiveOfferingProps extends CardsProps {
    keyword?: string
    imgSrc: string
    imgAlt?: string
    reversed?: boolean
}

export interface OurServicesProps extends CardsProps, linkProps {
    tags?: OurServicesTagsProps[],
    bgLight?: string
    bgDark?: string
}

export interface OurServicesTagsProps extends CardsProps { }

export interface WeServeProps extends HeadingsProps, ListId {
    reversed?: boolean
}


export interface TestimonialSectionProps {
    data: TestimonialProps[];
}

export interface TestimonialProps extends ListId {
    name: string
    imgSrc?: string
    position: string
    message: string
    industry: string
    imgAlt?: string
    reversed?: boolean
}

export interface HelpYouProps extends ListId {
    title: string
    content: string
}

export interface HelpYouSectionProps extends BorderdLinkProps {
    data: HelpYouProps[];
}


export interface MotionSlideProps {
    delay?: number;
    yAxis?: number;
    xAxis?: number;
}
