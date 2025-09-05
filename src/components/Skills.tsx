export default function Skills() {
  const logos = ["C++", "Python", "HTML", "CSS", "JavaScript"];

  return (
    <section className="px-6 md:px-20 py-16 bg-white text-center" id="skills">
      <h2 className="text-xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="p-4 border rounded-lg text-gray-500 hover:text-black transition"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
