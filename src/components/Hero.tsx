import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white px-6 lg:px-20 py-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-screen">
      
      {/* Parabolic Image Background — only visible on large screens */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[60%] xl:w-[40%] bg-white z-0 overflow-hidden clip-path-parabola-down" id="contact">
        <Image
          src="/s1.jpeg"
          alt="Shahab, Frontend Web Developer"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-bl-full rounded-br-full"
        />
      </div>

      {/* Image for small & medium screens */}
      <div className="block lg:hidden mb-10">
        <Image
          src="/s1.jpeg"
          alt="Shahab, Frontend Web Developer"
          width={400}
          height={400}
          className="rounded-xl object-cover shadow-md mx-auto"
        />
      </div>

      {/* Text + Stats */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        
        {/* Left: Text Content */}
        <div className="max-w-lg space-y-6 text-center lg:text-left lg:mr-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hey, I’m <span className="text-black">Shahab</span>, <br />
            A <span className="text-black">Frontend & AI Developer</span>
          </h1>
          <p className="text-black">
            Beginner developer passionate about creating engaging web interfaces and exploring the world of artificial intelligence.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Contact Me
          </button>
        </div>

        {/* Right: Stats */}
        <div className="flex flex-wrap gap-6 justify-center lg:flex-col text-center lg:text-left lg:ml-auto">
          <div>
            <p className="text-2xl font-bold">Fresh</p>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold">280+</p>
            <p className="text-sm text-gray-500">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold">99%</p>
            <p className="text-sm text-gray-500">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-2xl font-bold">50</p>
            <p className="text-sm text-gray-500">Clients Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
