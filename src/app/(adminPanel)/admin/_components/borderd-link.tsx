import Link from 'next/link';
import { cn } from '@/_lib/utils';
import { BorderdLinkProps } from '@/app/interface/admin-interface';



const BorderdLink: React.FC<BorderdLinkProps> = ({ href, label, className, labelClassName, icon: Icon, iconClass, iconRight = false, ...restProps }) => {
    return (label && (
        <Link href={href} className={cn("group transition-all", className)}>
            {(Icon && iconRight === true) && <Icon className={cn("transition-all group-hover:translate-x-3", iconClass)} {...restProps} />}
            <span className={labelClassName ? labelClassName : "border-b-2 border-blue-400 dark:border-cyan-500 pb-2"}>{label}</span>
            {(Icon && iconRight === false) && <Icon className={cn("transition-all group-hover:translate-x-3", iconClass)} {...restProps} />}
        </Link>
    ));
};

export default BorderdLink;
