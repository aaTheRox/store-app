"use client"
import { Heart, ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import MenuList from "./menu-list"
import MenuListMobile from "./menu-list-mobile"

const Header = () => {
  const router = useRouter()

    return (
        <div className="flex items-center justify-between p-4 md:max-w-7xl mx-auto">
            <h1 onClick={() => router.push('/')} className="hover:scale-105 text-3xl cursor-pointer transition duration-150">Store<span className="font-bold">App</span></h1>
        

        <div className=" items-center justify-between hidden sm:flex ">
            <MenuList />
        </div>

        <div className="flex sm:hidden">
            <MenuListMobile />
        </div>

        <div className="flex items-center justify-between gap-2 sm:gap-7">
            <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push('/cart')} />
            <Heart strokeWidth="1" className="cursor-pointer" onClick={() => router.push('/liked')} />
            <User strokeWidth="1" className="cursor-pointer" onClick={() => router.push('/cart')} />
        </div>
        
        </div>
    )
}

export default Header