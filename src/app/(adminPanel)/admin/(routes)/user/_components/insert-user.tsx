"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { z as zodvalid } from "zod"
import { createUser } from '@/actions/actions'
import { cn } from '@/_lib/utils'

const FormSchema = zodvalid.object({
  name: zodvalid.string().min(6, { message: "name must be at least 6 characters long" }),
  email: zodvalid.string().email({ message: "Invalid email address" }),
  hashPassword: zodvalid.string().min(6, { message: "Password must be at least 6 characters long" }),
})

export function InsertUserForm() {

  const form = useForm<zodvalid.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      hashPassword: "",
    }
  })

  const { toast } = useToast();
  // const { isSubmitting, isValid } = form.formState;

  function onSubmit(data: zodvalid.infer<typeof FormSchema>) {
    console.log(data);

    // createUser(data as FormData);
    toast({
      className: cn('bg-white'),
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-2">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form action={createUser} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="email id" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hashPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <Button type="submit" disabled={!isValid || isSubmitting}>Submit</Button> */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
