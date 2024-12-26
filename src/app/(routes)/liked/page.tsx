"use client"
import Container from "@/app/components/Container";
import { buttonVariants } from "@/app/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    return (
        <Container>
            <div className="text-center h-screen items-center justify-center flex flex-col space-y-5 ">
                <p className="text-2xl">No has añadido ningún articulo a favoritos</p>

                <button onClick={() => router.push('/')} className={buttonVariants({})}><ChevronLeft /> Volver</button>

            </div>

        </Container>
    )
}
