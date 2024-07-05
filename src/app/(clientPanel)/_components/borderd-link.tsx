import Link from 'next/link';
import { BorderdLinkProps } from './_interface/app-interface';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/_lib/utils';


const BorderdLink: React.FC<BorderdLinkProps> = ({ containerClass, href, label, className, labelClassName, icon: Icon, iconClass, iconRight = false, ...restProps }) => {
    return (label && (
        <div className={containerClass}>
            <Link href={href} className={cn("group transition-all", className)}>
                {(Icon && iconRight === true) && <Icon className={cn("transition-all group-hover:translate-x-3", iconClass)} {...restProps} />}
                <span className={labelClassName ? labelClassName : "border-b-2 border-blue-400 dark:border-cyan-500 pb-2"}>{label}</span>
                {(Icon && iconRight === false) && <Icon className={cn("transition-all group-hover:translate-x-3", iconClass,)} {...restProps} />}
            </Link>
        </div>
    ));
};

export default BorderdLink;
