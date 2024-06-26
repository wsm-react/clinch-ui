import { LinkProps } from 'next/dist/client/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { ParsedUrlQueryInput } from 'node:querystring';
import type { UrlObject } from 'url';


export interface highlightKeywordProps {
    text: string
    keyword: string | undefined
    className?: string
}

export interface ListId {
    id?: number | string
}


export interface MenuLinks extends ListId {
    href: string
    label: string,
    button?: boolean
    icon?: React.ComponentType<IconProps>;
}


export interface GetStartedLinks extends ListId {
    title: string,
    label?: string,
    button?: boolean
    background?: string,
    textColor?: string,
    href: string | Href;
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


export interface BorderdLinkProps {
    label: string | undefined
    href: string
    className: string
    labelClassName?: string
    iconRight?: boolean
    icon?: React.ComponentType<IconProps>;
    iconClass?: string
}

export interface CareerProps extends HeadingsProps, ListId { }
export interface SubscribeProps extends HeadingsProps, ListId {
    note?: string
}

export interface CardsProps extends ListId, HeadingsProps {
    linkText?: string
    href?: string
    icon?: React.ComponentType<IconProps>;
}

export interface WealthManagerProps extends CardsProps {
    imgSrc: string
    imgAlt?: string
}

export interface ExclusiveProductsProps extends CardsProps {
    keyword?: string
    imgSrc: string
    imgAlt?: string
    reversed?: boolean
}

export interface OurServicesProps extends CardsProps {
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
