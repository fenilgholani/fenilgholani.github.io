import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import Home from '../Home/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          &lt;html&gt;
          <br />
          &lt;body&gt;
        </span>
        <Home />
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
    </div>
  )
}

export default Layout
