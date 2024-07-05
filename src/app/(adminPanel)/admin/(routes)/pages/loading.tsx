import { Loader2 } from 'lucide-react';

export default async function AddNewPage({ params }: any) {


    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-58px)]">
            <div className=" flex flex-row items-center">
                <Loader2 className="mr-4 h-8 w-8 animate-spin text-blue-700" />
                <div className="text-3xl"> Loading ...</div>
            </div>
        </div>
    )
}
