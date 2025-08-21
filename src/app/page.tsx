import Background from "./components/Background";
import HomeComponent from "./components/HomeComponent";
import News from "./components/News";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main className="w-full font-merienda text-amber-200">
      <Background />
      <div className="relative">
        <HomeComponent />
        <News />
        <Stats />
      </div>
    </main>
  );
}
