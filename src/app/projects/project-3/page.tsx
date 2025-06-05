export default function Project3() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Encurtador de Links</h1>
      <img
        src="/images/coding-banner.png"
        alt="Coding Banner"
        className="w-full h-64 object-cover mb-6 rounded-lg shadow-md"
      />
      <p className="text-lg text-gray-700 mb-6">
        Desenvolvi um encurtador de links simples e funcional, utilizando
        tecnologias como TypeScript, Node.js, Express.js e MongoDB. O sistema
        permite que os usuários encurtem URLs longas, gerando links curtos que
        redirecionam para os endereços originais. Essa é uma aplicação feita
        apenas com o backend, sem interface gráfica, ideal para aprender e
        praticar conceitos de desenvolvimento web e manipulação de URLs.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://github.com/JosielMatos/url-shortener/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
        >
          Github
        </a>
      </div>
    </div>
  );
}
