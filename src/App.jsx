import { Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/route";
import { Suspense } from "react";

// import loader
import Loader from "./components/loader";
function App() {


  
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
