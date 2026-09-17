export default function Navbar() {
    return (
      <header className="h-16 border-b bg-white flex items-center justify-between px-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Dashboard
        </h2>
  
        <div>
          <span className="text-sm text-gray-600">
            Admin
          </span>
        </div>
      </header>
    );
  }