// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'PC Builder',
  description: 'Check PC component compatibility and build your PC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gray-900 text-white p-4 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold">PC Builder</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:text-gray-300">Home</a>
              <a href="/builder" className="hover:text-gray-300">Build</a>
              <a href="/about" className="hover:text-gray-300">About</a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 max-w-7xl mx-auto w-full p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700 p-4 mt-auto text-center">
          © 2025 PC Builder. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
