import { RouterProvider } from "react-router-dom";
import router from "./Route/Route";



// <RouterProvider router={router}></RouterProvider>
function App() {
 
  return (
    <div className="container mx-auto">
     <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
