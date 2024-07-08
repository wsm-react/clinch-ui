import Link from 'next/link';
import { cn } from '@/_lib/utils';
import { BorderdLinkProps } from '@/app/interface/admin-interface';


const FilledLink: React.FC<BorderdLinkProps> = ({ containerClass, href, label, className, labelClassName, icon: Icon, iconClass, iconRight = false, ...restProps }) => {
    return (label && (
        <div className={cn(containerClass)} >
            <Link href={href} className={cn("focus-visible:ring-[none] flex flex-row items-center", "group transition-all", className)} {...restProps}>
                {(Icon && iconRight === true) && <Icon className={cn("transition-all", "mr-6 inline-block", iconClass)} {...restProps} />}
                <span className={cn("transition-all", labelClassName)}>{label}</span>
                {(Icon && iconRight === false) && <Icon className={cn("transition-all", "ml-6 inline-block", iconClass)} {...restProps} />}
            </Link>
        </div>
    ));
};

export default FilledLink;
