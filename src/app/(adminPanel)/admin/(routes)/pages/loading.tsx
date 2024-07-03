import { Loader2 } from 'lucide-react';

export default async function AddNewPage({ params }: any) {


    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-58px)]">
            <div className=" flex flex-row items-center">
                <Loader2 className="mr-2 h-12 w-12 animate-spin" />
                <div className="text-3xl"> Loading ...</div>
            </div>
        </div>
    )
}
