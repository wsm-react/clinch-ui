import Link from 'next/link';
import { BorderdLinkProps } from '../_interface/app-interface';
import { ChevronRight } from 'lucide-react';


const BorderdLink: React.FC<BorderdLinkProps> = ({ href, label, className, labelClassName, icon: Icon, iconClass }) => {
    return (label && (
        <Link href={href} className={className}>
            <span className={labelClassName ? labelClassName : "border-b-2 border-blue-400 dark:border-cyan-500 pb-2"}>{label}</span>
            {Icon && <Icon className={iconClass} />}
        </Link>
    ));
};

export default BorderdLink;
