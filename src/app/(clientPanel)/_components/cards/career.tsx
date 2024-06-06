import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { cn } from "@/lib/utils"

export interface CardCareerProps {
    id: number | string
    title: string
    subTitle: string
}


const CardCareer: React.FC<CardCareerProps> = (CardProps, ...props) => {
    return (
        <>
            <Card className={cn(CardProps)} {...props}>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>You have 3 unread messages.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </>
    );
}

export default CardCareer;
