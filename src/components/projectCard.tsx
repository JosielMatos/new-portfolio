type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md max-w-xs flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <a
          href={link}
          className="mt-auto inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors justify-self-en text-center"
        >
          Ver Projeto
        </a>
      </div>
    </div>
  );
}
