import { SignedIn, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "./button"
import { FilePlus2 } from "lucide-react"

function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm p-5 border-b">
        <Link 
            href='/dashboard' className="text-3xl font-bold"
        >
            <span className="text-sky-700">chatty.</span>

        </Link>

        <SignedIn>
            <div className="flex items-center space-x-2">
                <Button asChild variant="link" className="hidden md:flex">
                    <Link href='/dashboard/upgrade'>Pricing</Link>
                </Button>

                <Button asChild variant="outline">
                    <Link href="/dashboard">My Documents</Link>
                </Button>

                <Button asChild variant="outline" className="border-sky-700 border-2">
                    <Link href="/dashboard/upload"> <FilePlus2 className="text-sky-700"/>
                    
                    </Link>
                </Button>


                <UserButton>

                </UserButton>
            </div>
        </SignedIn>
    </div>
  )
}

export default Header