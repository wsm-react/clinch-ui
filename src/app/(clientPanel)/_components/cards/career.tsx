import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/_lib/utils"
import { CareerProps } from '@/app/interface/client-interface';


const CardCareer: React.FC<CareerProps> = (cardProps, ...props) => {
    return (
        <>
            <Card className={cn(cardProps)} {...props}>
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
