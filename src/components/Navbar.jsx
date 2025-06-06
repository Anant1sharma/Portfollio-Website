export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Anant Sharma</h1>
        <ul className="flex gap-6">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}