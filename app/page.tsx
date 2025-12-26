import Canvas from "./components/canvas";
import Customizer from "./components/customizer";
import HomePage from "./components/homePage";

export default function Home() {
  return (
      <main className="app transition-all ease-in">
        <HomePage />
        <Canvas />
        <Customizer />
      </main>
  );
}
