import Background from "./components/Background";
import Contact from "./components/Contact";
import HomeComponent from "./components/HomeComponent";
import News from "./components/News";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <Background>
      <main className="relative z-10">
        <HomeComponent />
        <News />
        <Stats />
        <Contact />
      </main>
    </Background>
  );
}
