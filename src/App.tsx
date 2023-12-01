import { RouterProvider, Route } from "react-router-dom"

function App() {
  return (
    <>    
    <RouterProvider>
      <Route>
      <h1 className="text-3xl font-bold underline shadow-md">
        Hello world!
      </h1>
      </Route>
      </RouterProvider>
    </>

  )
}

export default App