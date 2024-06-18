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

export interface CardCareerProps {
    id?: number | string
    title: string
    subTitle: string
}

export interface CardBannerProps {
    id?: number | string
    title: string
    subTitle: string
    linkText?: string
    href?: string
    icon?: React.ComponentType<IconProps>;
}

export interface CardHeadingsProps {
    title: string
    subTitle: string
}



export interface DialogLinks {
    id?: number | string
    href: string
    label: string
    icon?: React.ComponentType<IconProps>;
}
