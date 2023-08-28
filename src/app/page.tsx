import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

const playList = ["rocks", "favorite", "programming", "dance", "love"]

export default function homePage() {
  return (
    <section className="container mx-auto flex">
      <aside className="w-80 space-y-2 p-6">
        <div className="relative mb-6 h-10 w-32">
          <Image src={"/logo.svg"} alt="hello" fill />
        </div>
        <div className="flex cursor-pointer items-center rounded-xl p-3 font-medium duration-150 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-50">
          <Icons.home className="mr-4 h-6 w-6" />
          Home
        </div>
        <div className="flex cursor-pointer items-center rounded-xl p-3 font-medium duration-150 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-50">
          <Icons.search className="mr-4 h-6 w-6" />
          Search
        </div>
        <div className="flex cursor-pointer items-center rounded-xl p-3 font-medium duration-150 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-50">
          <Icons.music className="mr-4 h-6 w-6" />
          New Music
        </div>
        <Separator className="my-4" />
        <div className="flex cursor-pointer items-center rounded-xl p-3 font-medium duration-150 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-50">
          <Icons.list className="mr-4 h-6 w-6" />
          PlayList
        </div>
        <div className="space-y-2 pl-2">
          {playList.map((l) => (
            <p key={l} className="p-2">
              {l}
            </p>
          ))}
        </div>
        <div className="flex cursor-pointer items-center rounded-xl p-3 font-medium duration-150 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-50">
          <Icons.add_feature className="mr-4 h-6 w-6" />
          New PlayList
        </div>
      </aside>
      <main className="flex-1 p-4">
        <section className="mb-4 flex items-center justify-between">
          <div className="relative flex items-center">
            <Icons.search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="browse music"
              className="w-64 rounded-full p-4 pl-10"
            />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </section>
        <section className="flex items-end gap-4">
          <div className="relative aspect-square w-64 rounded-2xl">
            <Image
              fill
              src={"/cover.png"}
              alt="cover"
              className="rounded-[inherit]"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100">
              Bale Ghoorban Ft Reza Pishroo 🔥
            </h1>
            <p className="font-medium">
              Create by{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Soheil Ghanbary
              </span>
            </p>
          </div>
        </section>
        <Table className="mt-8">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Artist</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Published</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Song 1</TableCell>
              <TableCell>Artist 1</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>3:45</TableCell>
              <TableCell>2023-08-28</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Song 2</TableCell>
              <TableCell>Artist 2</TableCell>
              <TableCell>1500</TableCell>
              <TableCell>4:20</TableCell>
              <TableCell>2023-08-29</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Song 3</TableCell>
              <TableCell>Artist 3</TableCell>
              <TableCell>800</TableCell>
              <TableCell>3:10</TableCell>
              <TableCell>2023-08-30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Song 4</TableCell>
              <TableCell>Artist 4</TableCell>
              <TableCell>2000</TableCell>
              <TableCell>5:00</TableCell>
              <TableCell>2023-08-31</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </section>
  )
}
