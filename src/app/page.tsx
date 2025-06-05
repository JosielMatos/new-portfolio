import Image from "next/image";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      <main className="container mx-auto p-4 mt-8">
        <h2 className="text-4xl font-bold mb-2 text-center">
          Iaê, tudo bom? aqui é o Josiel!
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src="/images/profile.jpg"
              alt="Foto de perfil"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1/12">
            <p className="text-lg">
              Sou desenvolvedor de Software Full Stack há mais de 2 anos
              especializado na criação de soluções para aplicações web. Minha
              expertise atualmente está no ecossistema JavaScript/TypeScript,
              com tecnologias como Node.js, Nest.js, React.js, , MongoDB, e
              MariaDB. Atuei no projeto que conecta mais de 700 mil usuários a 7
              mil treinadores em eventos de bem-estar, o app TFSports da
              Track&Field, contribuindo para entrega de soluções que melhoram a
              experiência de interação e integração dos atletas. Na REDGTECH
              Automação, contribuí com o desenvolvimento de componentes
              Front-End, integrando com soluções de automação, garantindo uma
              melhor experiência de usuário.
            </p>
          </div>
        </div>

        {/** Footer */}
        <div className="mt-8 flex flex-col items-center">
          <Projects />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-center mt-8">
            Entre em contato comigo
          </h2>
          <p className="text-center">
            Você pode me encontrar no{" "}
            <a
              href="https://wa.me/5575992681027"
              className="text-blue-500 hover:underline"
            >
              WhatsApp
            </a>
            , ou me enviar um e-mail para{" "}
            <a
              href="mailto:josielmasteradv@gmail.com"
              className="text-blue-500 hover:underline"
            >
              josielmasteradv@gmail.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
