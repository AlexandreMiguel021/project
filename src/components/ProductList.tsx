import { Trash2 } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
  onRemove: (id: string) => void;
}

export function ProductList({ products, onRemove }: ProductListProps) {
  return (
    <div className="space-y-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between bg-gray-50 p-2 rounded"
        >
          <div className="flex-1">
            <span className="font-medium">{product.name}</span>
            <span className="text-gray-600 ml-2">
              R$ {product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => onRemove(product.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}
