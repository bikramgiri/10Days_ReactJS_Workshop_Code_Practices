import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
      {
         path: "/",
            element: <h1>Home Page</h1>
      },
      {
            path: "/about",
            element: <h1>About Page</h1>
      }
])


export default router


// In App.jsx

// import { RouterProvider } from 'react-router-dom'
// import router from './routes'


// function App() {
//   return(
//     <RouterProvider router={router} />
//   )
// }
// export default App


