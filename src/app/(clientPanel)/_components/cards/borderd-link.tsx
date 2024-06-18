import Link from 'next/link';
import { BorderdLinkProps } from '../_interface/app-interface';
import { ChevronRight } from 'lucide-react';


const BorderdLink: React.FC<BorderdLinkProps> = (props: BorderdLinkProps) => {

    const Icon = props.icon;
    const pathName = props.href;
    // 
    return (
        <Link className={props.className} href={`${props.href}`}>
            <span className={props.classText === null ? props.classText : "border-b-2 border-blue-400 dark:border-cyan-500 pb-2"}>{props.label}</span>
            {Icon && <Icon className={props.iconClass} />}
        </Link>
    );
}
export default BorderdLink;
