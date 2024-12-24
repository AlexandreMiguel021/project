import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import { SecurityInput } from "./SecurityInput";
import type { Product } from "./ProductList";

interface ProductFormProps {
  onAdd: (product: Omit<Product, "id">) => void;
}

export function ProductForm({ onAdd }: ProductFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isSecurityValid, setIsSecurityValid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSecurityValid && name && price) {
      onAdd({
        name: name.trim(),
        price: Number(price),
      });
      setName("");
      setPrice("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome do Produto
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Ex: Panetone"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preço
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="R$ 0.00"
            step="0.01"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <SecurityInput onValidate={setIsSecurityValid} />
        <button
          type="submit"
          disabled={!isSecurityValid}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <PlusCircle size={20} />
          Adicionar
        </button>
      </div>
    </form>
  );
}
