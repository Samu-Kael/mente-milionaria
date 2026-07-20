export function Footer() {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 h-12 flex items-center justify-center px-6">
      <p className="text-xs text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Mente Milionária
      </p>
    </footer>
  );
}