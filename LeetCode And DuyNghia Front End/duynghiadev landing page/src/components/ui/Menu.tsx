import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Menu.scss'
import { SidebarContext } from '../../context'
import MyCV from '../../assets/files/NGUYEN_NHAT_HUY_CV.pdf'

interface IMenuItem {
  title: string
  path: string
  children?: IMenuItem[]
}

const highlightIfActive = ({ isActive }: { isActive: boolean; isPending: boolean }) => {
  return isActive
    ? {
        textDecoration: 'none',
        color: 'red'
      }
    : {}
}

const items: IMenuItem[] = [
  {
    title: 'OVERVIEW',
    path: '/'
  },
  {
    title: 'STARTER REPOS',
    path: '/starter-repos',
    children: [
      {
        title: 'NestJs Starter Repo',
        path: '/nestjs-starter-repo'
      },
      {
        title: 'ReactJs Starter Repo',
        path: '/reactjs-starter-repo'
      }
    ]
  },
  {
    title: 'PROJECTS',
    path: '/projects',
    children: [
      {
        title: 'Codie Landing Page',
        path: '/codie-landing-page'
      },
      {
        title: 'Css Battle',
        path: '/css-battle'
      },
      {
        title: 'Movie Landing Page',
        path: '/movie-landing-page'
      },
      {
        title: 'Solana Todo App',
        path: '/solana-todo-app'
      },
      {
        title: 'Chinese Chess Game',
        path: '/chinese-chess-game'
      }
    ]
  }
]

export function Menu() {
  const isSidebarOpened = useContext(SidebarContext)
  const [isOpen, setIsOpen] = useState<{ [title: string]: boolean }>({})

  const toggleDropdown = (title: string) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [title]: !prevOpen[title]
    }))
  }

  const dropdownItems = items.map((item) => (
    <div key={item.title}>
      <a className='btn btn-version' onClick={() => toggleDropdown(item.title)}>
        <NavLink to={item.path} className='nav-link' style={highlightIfActive}>
          {item.title}
        </NavLink>
      </a>
      {isOpen[item.title] && item.children && (
        <ul className='dropdown-menu'>
          {item.children.map((child) => (
            <li key={child.title}>
              <a href={item.path + child.path}>{child.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  ))

  return (
    isSidebarOpened && (
      <nav className='nav-container'>
        {dropdownItems}
        <a href={MyCV} download='NGUYEN_NHAT_HUY_CV' target='_blank' className='btn btn-support'>
          DOWNLOAD MY CV
        </a>
      </nav>
    )
  )
}
