import Link from 'next/link';
import { BorderdLinkProps } from './_interface/app-interface';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/_lib/utils';



const FilledLink: React.FC<BorderdLinkProps> = ({ containerClass, href, label, className, labelClassName, icon: Icon, iconClass, iconRight = false, ...restProps }) => {
    return (label && (
        <div className={containerClass}>
            <Link href={href} className={cn(className, "focus-visible:ring-[none] flex flex-row items-center", "group transition")}>
                {(Icon && iconRight === true) && <Icon className={cn(iconClass, "transition group-hover:translate-x-3")} {...restProps} />}
                <span className={cn(labelClassName, "transition-all")}>{label}</span>
                {(Icon && iconRight === false) && <Icon className={cn(iconClass, "transition group-hover:translate-x-3")}  {...restProps} />}
            </Link>
        </div>
    ));
};

export default FilledLink;
