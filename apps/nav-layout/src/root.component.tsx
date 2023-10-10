import { BrowserRouter } from "react-router-dom";
import PrimaryNavigation from "./components/navbar";

export default function Root() {
  return (
    <BrowserRouter basename="/">
      <PrimaryNavigation />
    </BrowserRouter>
  );
}
