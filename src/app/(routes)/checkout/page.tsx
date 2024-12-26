"use client";
import Cart from "@/app/components/cart";
import Container from "@/app/components/Container";
import PendingCart from "@/app/components/pending-cart";
import { Checkbox } from "@/app/components/ui/checkbox";
import { useCart } from "../../../../hooks/use-cart";
import { getSubtotal } from "@/lib/utils";

export default function Page() {
  const { items, subtotal } = useCart();

  function renderCheckboxWithText() {
    return (
      <div className="items-top flex space-x-2 mb-5 p-2 bg-slate-800 text-white rounded-md">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Email me with news and offers
          </label>
          <p className="text-sm text-gray-200">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    );
  }

  function renderInput(type: string, title: string, placeholder: string) {
    return (
      <div className="mb-5 w-full">
        <input
          type={type}
          className="p-2 w-full bg-white border-2 border-gray-300 focus:placeholder-gray-500 focus:border-blue-800 focus:outline-none transition duration-300"
          placeholder={placeholder}
        />
      </div>
    );
  }

  function renderCurrentItemsInCheckout() {
    return <PendingCart />;
  }

  return (
    <Container>
      <div className="flex gap-10 mt-10">
        <div className="w-full">
          <h3 className="uppercase text-xl mb-5">Datos de contacto</h3>

          {renderInput("text", "Email", "Email...")}
          {renderCheckboxWithText()}

          <div className="flex gap-2">
            {renderInput("text", "Nombre", "Nombre...")}
            {renderInput("text", "Apellidos", "Apellidos...")}
          </div>

          <h3 className="uppercase text-xl mb-5">Dirección</h3>

          {renderInput("text", "Dirección", "Dirección...")}
          {renderInput(
            "text",
            "Piso, escalera, portal... (opcional)",
            "Piso, escalera, portal... (opcional)..."
          )}

          <div className="flex gap-2">
            {renderInput("text", "Provincia", "Provinicia...")}
            {renderInput("text", "Ciudad", "Ciudad...")}
            {renderInput("number", "Código postal", "Código postal...")}
          </div>
          {renderInput("text", "Número de teléfono", "Número de teléfono...")}

          <h3 className="uppercase text-xl mb-5">Método de pago</h3>
        </div>
        <div>
          {renderCurrentItemsInCheckout()}
          Subtotal • {getSubtotal(items)} producto(s)
        </div>
      </div>
    </Container>
  );
}
