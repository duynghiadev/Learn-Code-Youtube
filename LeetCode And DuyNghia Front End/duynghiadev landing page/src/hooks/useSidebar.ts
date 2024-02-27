import { useState } from 'react'

export function useSidebar() {
  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(true)

  const toggleSidebar = () => {
    setIsSidebarOpened(!isSidebarOpened)
  }

  return { isSidebarOpened, toggleSidebar }
}
