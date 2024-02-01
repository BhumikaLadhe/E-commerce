import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";

function App() {
  const tabs = [
    { title: "Home", url: "/", element: <h1>HOme</h1> },
    { title: "products", url: "/products", element: <h1>products</h1> },
    {
      title: "Add product",
      url: "/add-product",
      element: <h1>add product</h1>,
    },
    { title: "logout", url: "/logout", element: <h1>logout</h1> },
    { title: "sign up", url: "/sign up", element: <h1>sign up</h1> },
    { title: "Profile", url: "/profile", element: <h1>sign up</h1> },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          {tabs.map((t) => (
            <Route
              style={{ margin: "10px" }}
              path={t.url}
              element={t.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
