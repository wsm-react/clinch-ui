import Link from 'next/link';
import { cn } from '@/_lib/utils';
import { BorderdLinkProps } from '../_interface/admin-interface';


const BorderdLink: React.FC<BorderdLinkProps> = ({ href, label, className, labelClassName, icon: Icon, iconClass, iconRight = false, ...restProps }) => {
    return (label && (
        <Link href={href} className={cn(className, "group transition-all")}>
            {(Icon && iconRight === true) && <Icon className={cn(iconClass, "transition-all group-hover:translate-x-3")} {...restProps} />}
            <span className={labelClassName ? labelClassName : "border-b-2 border-blue-400 dark:border-cyan-500 pb-2"}>{label}</span>
            {(Icon && iconRight === false) && <Icon className={cn(iconClass, "transition-all group-hover:translate-x-3")} {...restProps} />}
        </Link>
    ));
};

export default BorderdLink;
