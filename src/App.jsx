import AppNoticias from "./AppNoticias"
import { NoticiasProvider } from "./context/NoticiasProvider"

function App() {

  return (
    <NoticiasProvider>
      <AppNoticias />
    </NoticiasProvider>
  )
}

export default App
