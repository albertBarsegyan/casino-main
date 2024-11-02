import {RouterProvider} from "react-router-dom";
import {notAuthenticated} from "./routes/not-authenticated.tsx";

function App() {

  return (
    <RouterProvider router={notAuthenticated}/>
  )
}

export default App
