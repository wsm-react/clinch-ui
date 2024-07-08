import Link from 'next/link';
import { BorderdLinkProps } from '@/app/interface/client-interface';
import { cn } from '@/_lib/utils';
// const MotionLink = motion(Link);

const FilledLink: React.FC<BorderdLinkProps> = ({ containerClass, href, label, className, labelClassName, icon: Icon, iconClass, iconRight = false, ...restProps }) => {
    return (label && (
        <div className={containerClass}>
            <Link href={href} className={cn("focus-visible:ring-[none] flex flex-row items-center", "group transition", className)}>
                {(Icon && iconRight === true) && <Icon className={cn("transition group-hover:translate-x-3", iconClass)} {...restProps} />}
                <span className={cn("transition-all", labelClassName)}>{label}</span>
                {(Icon && iconRight === false) && <Icon className={cn("transition group-hover:translate-x-3", iconClass)}  {...restProps} />}
            </Link>
        </div>
    ));
};

export default FilledLink;
