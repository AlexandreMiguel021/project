import { Copy, Users } from "lucide-react";
import { useState } from "react";
import type { Product } from "./ProductList";

interface Person {
  name: string;
  id: number;
}

interface ReceiptProps {
  products: Product[];
  stateTax: number;
  cityTax: number;
  people: Person[];
}

export function Receipt({ products, stateTax, cityTax, people }: ReceiptProps) {
  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const taxes = stateTax + cityTax;
  const total = subtotal + taxes;
  const perPerson = people.length > 0 ? total / people.length : 0;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy =
      "Texto do QR Code aqui00020126330014BR.GOV.BCB.PIX011103295759294520400005303986540566.705802BR5924Alexandre Freitas Miguel6009SAO PAULO6214051021lpIoREl763046C68";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Erro ao copiar:", err));
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-auto font-mono rounded-b-none">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-1">SUPER NATAL</h2>
          <div className="text-gray-500 text-sm">
            {new Date().toLocaleDateString()}
          </div>
        </div>

        <div className="border-t border-b border-dashed border-gray-300 py-4 space-y-2">
          {products.map((product) => (
            <div key={product.id} className="flex justify-between text-sm">
              <span>{product.name}</span>
              <span>R$ {product.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="py-4 border-b border-dashed border-gray-300">
          <div className="flex justify-between font-bold text-lg">
            <span>TOTAL:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
        </div>

        <div className="py-4">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <Users size={18} />
            Divisão ({people.length} pessoas):
          </h3>
          {people.length > 0 ? (
            <div className="space-y-1">
              {people.map((person) => (
                <div key={person.id} className="flex justify-between">
                  <span>{person.name}</span>
                  <span>R$ {perPerson.toFixed(2)}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              Adicione pessoas para dividir a conta
            </p>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-4 justify-center items-center">
          <div className="p-4 rounded-lg w-full">
            <img src="qrcode.png" width={256} className="m-auto" />
            <p className="text-center text-sm text-gray-500 mt-2">
              QR Code PIX
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="bg-emerald-500 rounded-lg p-4 self-center w-full text-white flex gap-4 justify-center active:bg-emerald-600"
          >
            {copied ? "Código Copiado!" : "Copiar Código do QRCode"}
            <Copy />
          </button>
        </div>
      </div>
      <div className="w-full border-b-4 rounded-xl border-dashed border-stone-200"></div>
    </div>
  );
}
