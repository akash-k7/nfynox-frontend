export default function Header() {
  return (
    <header className="p-4 shadow flex justify-between">
      <div className="font-bold">Nfynox</div>
      <nav className="space-x-4">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
