import Header from "@/components/header/Header";
import "./App.css";
/* tell the root route where we want it to render its child routes. */
import { Outlet } from "react-router-dom";
/* react-toastify */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* export a loader */

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        newestOnTop={true}
        limit={2}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
      />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
