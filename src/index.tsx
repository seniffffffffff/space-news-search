import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import ArticleCards from "./components/ArticleCards/ArticleCards";
import Article from "./components/Article/Article";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="App">
          <div className="content">
            <SearchBar />
            <ArticleCards />
          </div>
        </div>
      </>
    ),
  },
  {
    path: "/article/:id",
    element: <Article />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
