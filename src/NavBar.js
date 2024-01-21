import './NavBar.css'

export default function NavBar() {
  return (
  <div className="navbar">
    <div className="barright">
      <div className="rounded-md">
        <a href="#aboutme">About Me</a>
      </div>
      <div className="rounded-md">
        <a href="#projects">Projects</a>
      </div>
    </div>
  </div>
  );
}
