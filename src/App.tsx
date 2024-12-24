import { Receipt } from "./components/Receipt";

import Pessoas from "./data/pessoas.json";
import Produtos from "./data/produtos.json";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-green-100 p-4">
        <div className="max-w-md mx-auto space-y-6">
          <Receipt
            products={Produtos}
            people={Pessoas}
            stateTax={0}
            cityTax={0}
          />
        </div>
      </div>
    </>
  );
}

export default App;
