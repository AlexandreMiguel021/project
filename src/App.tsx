import { Receipt } from "./components/Receipt";

import Pessoas from "./data/pessoas.json";
import Produtos from "./data/produtos.json";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Super Natal - Recibo</title>
        <meta property="og:title" content="Super Natal - Recibo e Divisão" />
        <meta
          property="og:description"
          content=" Recibo e Divisão facilita a organização das despesas de fim de ano."
        />
        <meta
          property="og:image"
          content="https://supernatal.netlify.app/ratao.jpg"
        />
        <meta property="og:url" content="https://supernatal.netlify.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
