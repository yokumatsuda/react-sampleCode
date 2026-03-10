import "./App.css";
import Hello from "./components/Hello/Hello";
import MegaMenuHeader from "./components/MegaMenuHeader/MegaMenuHeader";

export default function App() {
  return (
    <main>
      <MegaMenuHeader />
      <h1>React Sample Code</h1>
      <Hello />
    </main>
  );
}
