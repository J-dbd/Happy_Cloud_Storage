import Header from "@/components/header/Header";
import "./App.css";
/* tell the root route where we want it to render its child routes. */
import { Outlet } from "react-router-dom";

/* export a loader */

function App() {
  return (
    // <div id="total-cotainer">
    //   <Header />
    //   <main>
    //     <Outlet />
    //   </main>
    // </div>
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
