import Background from "./components/Background";
import HomeComponent from "./components/HomeComponent";
import News from "./components/News";

export default function Home() {
  return (
    <main className="w-full font-merienda text-amber-200">
      <Background />
      <HomeComponent />
      <News />
    </main>
  );
}
