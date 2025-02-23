import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
function Greetings() {
  const params = useParams();
    return (
      <div>
        <Navbar></Navbar>
        <h1>Hello {params.name}</h1>
      </div>
    );
}
export default Greetings;
