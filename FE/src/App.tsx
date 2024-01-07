import Header from "@/components/header/Header";

/* tell the root route where we want it to render its child routes. */
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
