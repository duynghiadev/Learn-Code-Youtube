import { Route } from './components/layout'
import { Footer, Header, Menu } from './components/ui'
import { SidebarContext } from './context'
import { useSidebar } from './hooks'

function App() {
  const { isSidebarOpened, toggleSidebar } = useSidebar()

  return (
    <>
      <SidebarContext.Provider value={isSidebarOpened}>
        <Header toggleSidebar={toggleSidebar} />
        <Menu />
        <Route />
        <Footer />
      </SidebarContext.Provider>
    </>
  )
}

export default App
