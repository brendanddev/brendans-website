

export default function HomePage() {
  return (
    <section className="container mx-auto py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Brendan Dileo</h1>
      <p className="text-xl text-gray-700 mb-8">
        Frontend Developer & 3D Web Enthusiast
      </p>
      <a
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        See My Projects
      </a>
    </section>
  );
}
