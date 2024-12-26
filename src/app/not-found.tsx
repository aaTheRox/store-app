"use client";
import Link from "next/link";
import router from "next/router";
import { buttonVariants } from "@/app/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default async function NotFound() {
  return (
    <div className="max-w-7xl mx-auto p-2 text-xl text-center h-screen flex items-center justify-center flex-col space-y-2">
      <h2 className="text-4xl font-bold ">Página no encontrada</h2>
      <p>Vaya... No se ha podido encontrar esta página</p>

      <button onClick={() => router.push("/")} className={buttonVariants({})}>
        <ChevronLeft /> Volver
      </button>
    </div>
  );
}
