import Link from 'next/link';
import { BorderdLinkProps } from '../_interface/app-interface';
import { ChevronRight } from 'lucide-react';


const FilledLink: React.FC<BorderdLinkProps> = ({ href, label, className, labelClassName, icon: Icon, iconClass, iconRight = false }) => {
    return (label && (
        <Link href={href} className={className}>
            {(Icon && iconRight === true) && <Icon className={iconClass} />}
            <span className={labelClassName}>{label}</span>
            {(Icon && iconRight === false) && <Icon className={iconClass} />}
        </Link>
    ));
};

export default FilledLink;
