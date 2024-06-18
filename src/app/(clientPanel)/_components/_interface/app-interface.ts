import { Url } from 'next/dist/shared/lib/router/router';

export interface MenuLinks {
    id?: number | string
    href: string
    label: string
    icon?: React.ComponentType<IconProps>;
}

export interface IconProps {
    className?: string;
}

export interface BottomLinks {
    id?: number | string
    href: string
    label: string
    icon?: React.ComponentType<IconProps>;
}


export interface FooterLink {
    id?: number | string
    href: string
    label: string
    // className: string
}

export interface CareerProps {
    id?: number | string
    title: string
    subTitle: string
}

export interface BannerProps {
    id?: number | string
    title: string
    subTitle: string
    linkText?: string
    href?: string
    icon?: React.ComponentType<IconProps>;
}

export interface OurServicesProps {
    id?: number | string
    title: string
    subTitle: string
    linkText?: string
    href?: string
    icon?: React.ComponentType<IconProps>;
    tags?: OurServicesTagsProps[]
}

export interface OurServicesTagsProps {
    id?: number | string
    title: string
    subTitle: string
}



export interface BorderdLinkProps {
    label: string | undefined
    href: string
    className: string
    classText?: string
    icon?: React.ComponentType<IconProps>;
    iconClass: string
}

export interface HeadingsProps {
    title: string
    subTitle: string
}

export interface DialogLinks {
    id?: number | string
    href: string
    label: string
    icon?: React.ComponentType<IconProps>;
}
