import { NavLink } from 'react-router-dom';
import "./navbarstyle.css";

function NavBar() {
  
  return (
    <div className='col-2 menu'>
      <nav className='uat-navbar-flex'>
        <NavLink className='uat-navbar-li' to= '/backlog'>Backlog</NavLink>
        <NavLink className='uat-navbar-li' to= '/upload-jira-items'>Upload Jira Tickets</NavLink>
        <NavLink className='uat-navbar-li' to= '/active-sprint'>Active Sprint</NavLink>
        <NavLink className='uat-navbar-li' to= '/closed-sprints'>Closed Sprints</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
