import { Link } from "react-rounter-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Experience</Link>
        </li>
        <li>
          <Link>Project</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
