import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter basename="/class">
        <Navbar />
        <p>Home component </p>
      </BrowserRouter>
    </div>
  );
}

export default App;
