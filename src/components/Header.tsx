export default function Header() {
    return (
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="font-bold text-xl">Mi Proyecto</div>
          <nav className="space-x-4">
            <a href="/" className="text-gray-600 hover:text-black">Inicio</a>
            <a href="/contacto" className="text-gray-600 hover:text-black">Contacto</a>
          </nav>
        </div>
      </header>
    );
  }
  