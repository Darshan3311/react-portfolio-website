import { BrowserRouter, Routes, Route } from "react-router-dom"
// import your page components here
import Home from "./pages/Home"        // ✅ replace with your actual Home component path
import NotFound from "./pages/NotFound" // ✅ replace with your actual NotFound component path
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
