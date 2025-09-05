import Image from "next/image";

export default function Projects() {
  const projectList = [
    {
      title: "KNN-Based Color Classification of White Pixels",
      description: "A machine learning project that uses K-Nearest Neighbors to classify white pixels in an image as either blue or green based on their spatial proximity to labeled pixels.",
      image: "/knn.png",
    },
    {
      title: "Cat & Dog Image Recommender Using Feature Similarity",
      description: "A content-based recommendation system that suggests top 5 similar cat or dog images by comparing feature similarity percentages.",
      image: "/d1.jpg",
    },
    {
      title: "Face & Voice Emotion Recognition System",
      description: "A multimodal system that detects human emotions using facial expressions and voice tone analysis.",
      image: "/face.jpeg",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS",
      image: "/n1.jpeg",
    },
    {
      title: "Frontend Website Clones",
      description: "A responsive clone of websites built using HTML, CSS, JavaScript, and Bootstrap for frontend practice.",
      image: "/web.jpeg",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16" id="projects">
      <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-xl"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
