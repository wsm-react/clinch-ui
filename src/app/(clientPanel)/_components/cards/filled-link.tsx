import Link from 'next/link';
import { BorderdLinkProps } from '../_interface/app-interface';
import { ChevronRight } from 'lucide-react';


const FilledLink: React.FC<BorderdLinkProps> = ({ href, label, className, labelClassName, icon: Icon, iconClass }) => {
    return (label && (
        <Link href={href} className={className}>
            <span className={labelClassName}>{label}</span>
            {Icon && <Icon className={iconClass} />}
        </Link>
    ));
};

export default FilledLink;
