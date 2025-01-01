"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/app/components/ui/input"; // Asegúrate de tener tu componente Input
import { Button } from "@/app/components/ui/button"; // Asegúrate de tener tu componente Button
import { Plus, PlusCircle, User, User2 } from "lucide-react";
import { useRouter } from "next/navigation";

// Definir el esquema de validación con Zod
const loginSchema = z.object({
  email: z.string().email({ message: "El correo no es válido" }),
  password: z.string().min(3, { message: "Rellena la contraseña por favor" }),
});

// Tipo de los datos del formulario
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    // Aquí iría la lógica para autenticar al usuario (e.g., llamar a una API)
    console.log(data);
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Iniciar sesión
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Campo de Correo Electrónico */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Correo Electrónico
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Ingresa tu correo"
            {...register("email")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}
        </div>

        {/* Campo de Contraseña */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            {...register("password")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Botón de Enviar */}
        <Button
          type="submit"
          className="w-full mt-4 bg-primary text-white hover:bg-blue-600 duration-300 transition-all"
        >
          <User />
          Iniciar Sesión
        </Button>

        <Button
          onClick={() => router.push("/signup")}
          className="flex gap-2 p-2 rounded-md text-center items-center justify-center w-full mt-4 text-blue-600 border-blue-600 border-2 bg-transparent hover:bg-blue-600 hover:text-white duration-300 transition-all"
        >
          <Plus />
          Crear una cuenta
        </Button>
      </form>
    </div>
  );
}
