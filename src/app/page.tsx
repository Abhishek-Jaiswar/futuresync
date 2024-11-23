import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recomended from "./components/Recomended";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <section className="bg-blue-50 min-h-screen flex flex-col md:flex-row">
        {/* Navigation Section */}
        <div className="w-full md:w-[70%]">
          <div className=" max-w-[90%] mx-auto">
            <div>
              <Navbar />
            </div>
            <div className="mt-14">
              <Hero />
            </div>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="w-full md:w-[30%] bg-white/50 p-4">
          <Recomended />
        </div>
      </section>
    </main>
  );
}
