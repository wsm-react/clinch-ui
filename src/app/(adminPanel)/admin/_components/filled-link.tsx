import Link from 'next/link';
import { cn } from '@/_lib/utils';
import { BorderdLinkProps } from '../_interface/admin-interface';


const FilledLink: React.FC<BorderdLinkProps> = ({ containerClass, href, label, className, labelClassName, icon: Icon, iconClass, iconRight = false, ...restProps }) => {
    return (label && (
        <div className={cn(containerClass)} >
            <Link href={href} className={cn(className, "focus-visible:ring-[none] flex flex-row items-center", "group transition-all")}>
                {(Icon && iconRight === true) && <Icon className={cn(iconClass, "transition-all")} {...restProps} />}
                <span className={cn(labelClassName, "transition-all")}>{label}</span>
                {(Icon && iconRight === false) && <Icon className={cn(iconClass, "transition-all")} {...restProps} />}
            </Link>
        </div>
    ));
};

export default FilledLink;
