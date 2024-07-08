import { SubscribeProps } from '@/app/interface/client-interface';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, MoveRight } from 'lucide-react';

const CradPortfolio: React.FC<SubscribeProps> = (cardProps, props) => {
    return (
        <div className="sm:max-w-2xl mx-auto md:text-center container mt-14 mb-8">
            <div className="relative">
                <Input className='w-full p-7 pl-9 pr-24 text-xl rounded-full focus-visible:ring-[none] dark:bg-white dark:text-black border-0' type="email" placeholder="Email" />
                <Button variant="link" className='p-7 text-3xl rounded-full font-bold bg-white text-black hover:bg-blue hover:text-blue-700 focus-visible:ring-[none] absolute top-0 right-0' type="submit"><MoveRight className="h-8 w-8" /></Button>
            </div>
        </div>
    );
}

export default CradPortfolio; 
