const produtos = [
  {
    id: 1,
    nome: "Bola de Futebol",
    preco: "R$ 89,90",
    categoria: "Futebol",
  },
  {
    id: 2,
    nome: "Tênis de Corrida",
    preco: "R$ 249,90",
    categoria: "Corrida",
  },
  {
    id: 3,
    nome: "Luva de Musculação",
    preco: "R$ 49,90",
    categoria: "Academia",
  },
  {
    id: 4,
    nome: "Corda de Pular",
    preco: "R$ 29,90",
    categoria: "Treino Funcional",
  },
  {
    id: 5,
    nome: "Raquete de Tênis",
    preco: "R$ 199,90",
    categoria: "Tênis",
  },
  {
    id: 6,
    nome: "Bola de Basquete",
    preco: "R$ 119,90",
    categoria: "Basquete",
  },
  {
    id: 7,
    nome: "Kimono Esportivo",
    preco: "R$ 179,90",
    categoria: "Lutas",
  },
  {
    id: 8,
    nome: "Halter 10kg",
    preco: "R$ 99,90",
    categoria: "Musculação",
  },
  {
    id: 9,
    nome: "Tapete de Yoga",
    preco: "R$ 59,90",
    categoria: "Yoga",
  },
  {
    id: 10,
    nome: "Capacete de Ciclismo",
    preco: "R$ 139,90",
    categoria: "Ciclismo",
  },
  {
    id: 11,
    nome: "Mochila Esportiva",
    preco: "R$ 79,90",
    categoria: "Acessórios",
  },
  {
    id: 12,
    nome: "Camisa Dry Fit",
    preco: "R$ 69,90",
    categoria: "Roupas",
  },
  {
    id: 13,
    nome: "Garrafa Térmica",
    preco: "R$ 39,90",
    categoria: "Acessórios",
  },
  {
    id: 14,
    nome: "Meião de Futebol",
    preco: "R$ 24,90",
    categoria: "Futebol",
  },
  {
    id: 15,
    nome: "Bandagem Elástica",
    preco: "R$ 19,90",
    categoria: "Saúde Esportiva",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      <header className="bg-green-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">SportZone</h1>
          <nav className="flex gap-6 mt-3 md:mt-0 text-sm md:text-base">
            <a href="#" className="hover:text-yellow-300 transition">Início</a>
            <a href="#" className="hover:text-yellow-300 transition">Produtos</a>
            <a href="#" className="hover:text-yellow-300 transition">Promoções</a>
            <a href="#" className="hover:text-yellow-300 transition">Contato</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Sua loja de materiais esportivos
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Equipamentos de qualidade para elevar seu desempenho
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition">
            Ver Produtos
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-bold mb-2">Produtos em Destaque</h3>
          <p className="text-gray-600">
            Confira nossos principais materiais esportivos
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {produto.categoria}
              </span>

              <h4 className="text-xl font-bold mb-2">{produto.nome}</h4>

              <p className="text-green-700 text-lg font-semibold mb-4">
                {produto.preco}
              </p>

              <button className="w-full bg-green-700 text-white py-2 rounded-xl font-medium hover:bg-green-800 transition">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <h4 className="text-xl font-bold text-white mb-2">SportZone</h4>
          <p className="text-sm">
            Os melhores materiais esportivos para todas as modalidades.
          </p>
          <p className="text-sm mt-2">
            © 2026 SportZone - Todos os direitos reservados - Pedro vinícius
          </p>
        </div>
      </footer>

    </div>
  );
}