import ProjectCard from "@/components/projectCard";

const projetos = [
  {
    id: 1,
    title: "TFSports",
    description:
      "Tenha acesso a aulas e eventos, com os melhores treinadores, onde e quando for mais conveniente para você. Yoga, funcional, pilates, dança, lutas, running: são várias as modalidades disponíveis, online ou presencial.",
    image: "/images/tfsports-banner.png",
  },
  {
    id: 2,
    title: "Redgtech Automação",
    description:
      "Produtos que atendem a diversos acionamentos, proporcionando praticidade em automação residencial e comercial.",
    image: "/images/redgtech-banner.png",
  },
  {
    id: 3,
    title: "Url Shortener",
    description: "Encurte seus links de maneira eficiente.",
    image: "/images/coding-banner.png",
  },
];

export default function Projects() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Alguns dos meus projetos</h2>
      <div className="flex flex-wrap gap-4">
        {projetos.map((proj) => (
          <ProjectCard
            key={proj.id}
            title={proj.title}
            description={proj.description}
            image={proj.image}
            link={`/projects/project-${proj.id}`}
          />
        ))}
      </div>
    </>
  );
}
