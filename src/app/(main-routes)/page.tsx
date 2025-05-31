import Hero from "../_component/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl">
        <Hero />
      </div>
    </div>
  );
}
