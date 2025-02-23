import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/About";
import Greetings from "./components/Greetings";
import Crud from "./components/Crud";
import App from "./App";
import ListPosts from "./components/blogs/ListPost";
import CreatePost from "./components/blogs/CreatePost";
import ViewPost from "./components/blogs/Viewpost";
import EditPost from "./components/blogs/EditPost";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
const router = createBrowserRouter([
  { path: "", element: <App /> },
  { path: "aboutus", element: <Aboutus /> },
  { path: "greeting/:name ", element: <Greetings /> },
  { path: "crud", element: <Crud /> },
  { path: "blog/posts", element: <ListPosts /> },
  { path: "blog/posts/create", element: <CreatePost /> },
  { path: "blog/posts/:postId", element: <ViewPost /> },
  { path: "/blog/posts/:postId/edit", element: <EditPost /> },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
]);

export default router;
