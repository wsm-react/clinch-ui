"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type NewsAndBlogs = {
    id: string
    // email: string
    label: string
    href?: string
    status: "pending" | "processing" | "success" | "failed"
}

export const NewsAndBlogsTableColumns: ColumnDef<NewsAndBlogs>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "label",
        header: "Label",
    },
    {
        accessorKey: "href",
        header: "Permalink",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
]



export const NewsAndBlogsData: NewsAndBlogs[] = [
    {
        id: "m5gr84i9",
        label: '316',
        status: "success",
        href: "asajshas"
    },
]
