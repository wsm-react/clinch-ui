import Link from 'next/link';
import { CardHeadingsProps } from '../_interface/app-interface';


const CardHeadings: React.FC<CardHeadingsProps> = (props: CardHeadingsProps) => {
    return (
        <div className="space-y-2">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{props.title}</h1>
            <p className="text-lg text-muted-foreground"><span>{props.subTitle}</span></p>
        </div>
    );
}
export default CardHeadings;
