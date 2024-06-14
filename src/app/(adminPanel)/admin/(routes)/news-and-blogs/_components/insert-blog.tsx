"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { z as zodvalid } from "zod"
import { cn } from '@/lib/utils'

const FormSchema = zodvalid.object({
  title: zodvalid.string().min(2, { message: "Username must be at least 2 characters." }),
  description: zodvalid.string()
    .min(2, { message: "description must be at least 10 characters." })
    .max(160, { message: "description must not be longer than 30 characters." }),
})

export function InsertBlogForm() {

  const form = useForm<zodvalid.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })



  const { toast } = useToast();

  const { isSubmitting, isValid } = form.formState;

  function onSubmit(data: zodvalid.infer<typeof FormSchema>) {
    toast({
      // className: cn(
      //   'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
      // ),
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!isValid || isSubmitting}>Submit</Button>
      </form>
    </Form>
  )
}
