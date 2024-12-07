import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaChartBar
} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import SidebarItem from '../Sidebaritem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Link to="/" onClick={closeSidebar}>
          <SidebarItem Icon={FaHome} Text="Gerenciar funcionários" />
        </Link>
        <Link to="/schedule" onClick={closeSidebar}>
          <SidebarItem Icon={FaChartBar} Text="Gerenciar horários" />
        </Link>
      </Content>
    </Container>
  )
}

export default Sidebar