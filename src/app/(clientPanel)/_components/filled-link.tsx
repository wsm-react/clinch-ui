import Link from 'next/link';
import { BorderdLinkProps } from './_interface/app-interface';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/_lib/utils';


const FilledLink: React.FC<BorderdLinkProps> = ({ href, label, className, labelClassName, icon: Icon, iconClass, iconRight = false }) => {
    return (label && (
        <Link href={href} className={cn(className, "group transition-all")}>
            {(Icon && iconRight === true) && <Icon className={cn(iconClass, "transition-all group-hover:translate-x-3")} />}
            <span className={labelClassName}>{label}</span>
            {(Icon && iconRight === false) && <Icon className={cn(iconClass, "transition-all group-hover:translate-x-3")} />}
        </Link>
    ));
};

export default FilledLink;
