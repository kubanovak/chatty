'use client'

import { PlusCircleIcon } from "lucide-react"
import { Button } from "./button"
import { useRouter } from "next/navigation"

function PlaceholderDocument() {
    const router = useRouter();

    const handleClick = async () => {
        // Check if user is FREE or over the file limit, go to upgrade page
        router.push('/dashboard/upload');
    }
  return (
    <Button onClick={handleClick} className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
        <PlusCircleIcon className="h-16 w-16"></PlusCircleIcon>
        <p>
            Add a PDF
        </p>
    </Button>
  )
}

export default PlaceholderDocument