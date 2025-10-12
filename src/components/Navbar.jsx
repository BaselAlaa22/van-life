import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav>
      <ul className='navbar-flex'>
        <li>
          <Link className='first-child' to='/'>#VanLife</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/'>Van</Link>
        </li>
      </ul>
    </nav>
    </header>
  );
}
