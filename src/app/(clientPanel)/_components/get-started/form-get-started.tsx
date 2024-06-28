"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signupFormSchema } from '@/utility/form-schema'
import { FormEvent } from 'react'
import { ShieldCheck } from 'lucide-react'

export function FormGetStarted() {
    const router = useRouter();

    const form = useForm<z.infer<typeof signupFormSchema>>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            name: "",
            mobile: "",
            emailId: "",
            terms: true,
        },
        mode: 'onChange',
    })

    const { isSubmitting, isValid, errors } = form.formState;

    function onSubmit(data: z.infer<typeof signupFormSchema>) {


        router.push('/book-experts-call');
        // toast({
        //     title: "You submitted the following values:",
        //     description: (
        //         <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
        //             <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        //         </pre>
        //     ),
        // })
    }

    // const handleInput = (event: FormEvent<HTMLInputElement>) => {
    //     const target = event.target as HTMLInputElement;
    //     target.value = target.value.replace(/\D/g, '');
    // };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/1 md:w-2/3 md:space-y-7 space-y-5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input className='h-14 px-6' type='text' placeholder="Enter your name" {...field}
                                // onInput={handleInput}
                                />
                            </FormControl>
                            {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl>
                                <Input className='h-14 px-6' type='tel' maxLength={10} placeholder="9919XXXXXX" pattern="\d*" {...field}
                                // onInput={handleInput}
                                />
                            </FormControl>
                            {errors.mobile && <FormMessage>{errors.mobile.message}</FormMessage>}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="emailId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email address</FormLabel>
                            <FormControl>
                                <Input className='h-14 px-6' type='email' placeholder="me@example.org" {...field} />
                            </FormControl>
                            {errors.emailId && <FormMessage>{errors.emailId.message}</FormMessage>}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                        <FormItem>
                            <div className="terms">
                                <div className="flex flex-row items-start space-x-5 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-0 leading-none text-base">
                                        <FormLabel className='text-[.85rem]/[1rem] font-normal'>
                                            By subscribing you agree to receive communications from Clinch. You can unsubscribe anytime using the link in the footer of any of our emails. See our
                                            <Link target={'_blank'} href={'/privacy-policy'} className="text-blue-700" > privacy policy</Link>
                                        </FormLabel>
                                    </div>
                                </div>
                                {errors.terms && <FormMessage className='mt-5'>{errors.terms.message}</FormMessage>}
                            </div>
                        </FormItem>
                    )}
                />

                {/* disabled={!isValid || isSubmitting} */}
                <div className="pt-6 w-full">
                    <Button className='h-14 px-16 w-full sm:w-auto font-bold' type="submit" > Continue</Button>
                </div>
            </form >
        </Form >
    )
}
