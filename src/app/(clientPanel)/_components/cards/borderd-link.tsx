import Link from 'next/link';
import { BorderdLinkProps } from '../_interface/app-interface';
import { ChevronRight } from 'lucide-react';


const BorderdLink: React.FC<BorderdLinkProps> = ({ href, label, className, classText, icon: Icon, iconClass }) => {
    return (
        <Link href={href} className={className}>
            <span className={classText ? classText : "border-b-2 border-blue-400 dark:border-cyan-500 pb-2"}>
                {label}
            </span>
            {Icon && <Icon className={iconClass} />}
        </Link>
    );
};

export default BorderdLink;
