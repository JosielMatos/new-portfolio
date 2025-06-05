export default function Project1() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">TFSports</h1>
      <img
        src="/images/tfsports-banner.png"
        alt="TFSports Banner"
        className="w-full h-64 object-cover mb-6 rounded-lg shadow-md"
      />
      <p className="text-lg text-gray-700 mb-6">
        Desenvolvi funcionalidades e melhorei a experiência do usuário no app
        TFSports, aprimorando o tempo de resposta das APIs com uma redução dos
        dados retornados nas principais rotas. Dentre as tecnologias utilizadas
        estavam TypeScript, Nest.js, TypeORM, MariaDB, além de infraestrutura
        AWS com features de mensageria usando Amazon SQS e S3. Tudo isso
        impactou positivamente a performance do app, que conecta mais de 700 mil
        usuários a 7 mil treinadores em eventos de bem-estar, como yoga,
        funcional, pilates, dança, lutas e running. O app está disponível para
        Android e iOS.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <img
          src="/images/tfsports-1.png"
          alt="TFSports Screenshot 1"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
        <img
          src="/images/tfsports-2.png"
          alt="TFSports Screenshot 2"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
        <img
          src="/images/tfsports-3.png"
          alt="TFSports Screenshot 3"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://play.google.com/store/apps/details?id=br.com.tfsports.customer&hl=pt_BR"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
        >
          Playstore
        </a>

        <a
          href="https://apps.apple.com/br/app/tfsports/id1251078517"
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
