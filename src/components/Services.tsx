export default function Services() {
  const services = [
    {
      title: "🌐 Website Development",
      desc: "Build clean and fast websites using modern HTML, CSS, and JavaScript.",
    },
    {
      title: "📱 Responsive Design",
      desc: "Make sure your site looks great on all devices from phones to desktops.",
    },
    {
      title: "🧠 Basic Machine Learning Models",
      desc: "Build and train models (like Linear Regression, Decision Trees, or KNN) for predictions or classifications.",
    },
    {
      title: "🗣️ Speech/Face Emotion Detection",
      desc: "Use basic models to detect emotion in face or voice inputs using existing datasets and libraries like scikit-learn or tensorflow.",
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-20 py-16 bg-gray-50" id="services">
      {services.map((service, i) => (
        <div key={i} className="space-y-2">
          <h3 className="font-semibold text-lg">{service.title}</h3>
          <p className="text-sm text-gray-500">{service.desc}</p>
        </div>
      ))}
    </section>
  );
}
