import Link from 'next/link';
interface CardHeadingsProps {
    title: string
    subTitle: string
}

const CardHeadings: React.FC<CardHeadingsProps> = (props) => {
    return (
        <div className="space-y-2">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{props.title}</h1>
            <p className="text-lg text-muted-foreground"><span data-br=":r14c:" data-brr="1" >{props.subTitle}</span></p>
        </div>
    );
}
export default CardHeadings;
