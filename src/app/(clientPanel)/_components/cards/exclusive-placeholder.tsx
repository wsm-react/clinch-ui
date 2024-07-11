"use client";

import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';

// const CradExclusivePlaceholder: React.FC<SubscribeProps> = (cardProps, props) => {
const CradExclusivePlaceholder = () => {

    const placeholders = [
        "Enter your email.",
        "Enter email for communications from Clinch",
        "Enter email for get Investment idea from Clinch",
        "Enter email subscribe to our newsletter.",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <div className="sm:max-w-2xl mx-auto md:text-center container mt-14 mb-8">
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}

export default CradExclusivePlaceholder; 
