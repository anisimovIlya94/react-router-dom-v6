import {
  // Route,
  NavLink,
  // Routes,
  Navigate,
  useRoutes,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import UsersLayout from "./components/UsersLayout";
import UserPage from "./components/UserPage";
import EditUserPage from "./components/EditUserPage";
import UsersListPage from "./components/UsersListPage";
import UserLayout from "./components/UserLayout";

const routes = [
  { path: "/", element: <MainPage /> },
  {
    path: "users",
    element: <UsersLayout />,
    children: [
      { path: "", element: <UsersListPage /> },
      {
        path: ":userId",
        element: <UserLayout />,
        children: [
          { path: "", element: <Navigate to={"profile"} /> },
          { path: "profile", element: <UserPage /> },
          { path: "edit", element: <EditUserPage /> },
          { path: "*", element: <Navigate to={"profile"} /> },
        ],
      },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
];

function App() {
  const elements = useRoutes(routes);
  return (
    <div className="App">
      <h1>React-router-dom v6</h1>
      <h1>App Layout</h1>
      <NavLink to="/users">Users List Page</NavLink>
      {elements}
      {/* <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="users" element={<UsersLayout />}>
          <Route path={""} element={<UsersListPage />} />
          <Route path={":userId"} element={<UserLayout />}>
            <Route path="" element={<Navigate to={"profile"} />} />
            <Route path={"profile"} element={<UserPage />} />
            <Route path={"edit"} element={<EditUserPage />} />
            <Route path="*" element={<Navigate to={"profile"} />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes> */}
    </div>
  );
}

export default App;
