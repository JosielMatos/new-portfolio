export default function Project2() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Redgtech Automação</h1>
      <img
        src="/images/redgtech-banner.png"
        alt="Redgtech Banner"
        className="w-full h-64 object-cover mb-6 rounded-lg shadow-md"
      />
      <p className="text-lg text-gray-700 mb-6">
        Desenvolvi funcionalidades e melhorei a experiência do usuário na
        plataforma da redgtech, criando componentes reutilizáveis e adicionando
        responsividade para boa visualização tanto mobile quanto desktop. Dentre
        as tecnologias utilizadas estavam TypeScript, React.js,
        Styled-components e Storybook. O sistema é projetado para gerenciar
        dispositivos como lâmpadas, portões, níveis de água e outros
        dispositivos em prédios residenciais e comerciais.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <img
          src="/images/redgtech-1.png"
          alt="Redgtech Screenshot 1"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
        <img
          src="/images/redgtech-2.png"
          alt="Redgtech Screenshot 2"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
        <img
          src="/images/redgtech-3.png"
          alt="Redgtech Screenshot 3"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://redgtech.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
        >
          Site
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.redgtech&hl=pt_BR"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
        >
          Playstore
        </a>

        <a
          href="https://apps.apple.com/br/app/redgtech-automa%C3%A7%C3%A3o/id1565631105"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
        >
          App Store
        </a>
      </div>
    </div>
  );
}
