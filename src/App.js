import "./App.css";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Singlepage from "./pages/singlePage/Singlepage";
import New from "./pages/new/New";
import { Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./FormSource";
import "./Dark/dark.scss";
import { UseglobalHook } from "./components/context/context";

function App() {
  const { dark } = UseglobalHook();
  return (
    <div className={dark ? "app dark" : "app"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Singlepage />} />
          <Route
            path="new"
            element={<New Inputs={userInputs} Title={"Add New User"} />}
          />
        </Route>
        <Route path="/products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Singlepage />} />
          <Route
            path="new"
            element={<New Inputs={productInputs} Title={"Add new Product"} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
