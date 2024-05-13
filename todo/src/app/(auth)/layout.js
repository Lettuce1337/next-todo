export default function AuthLayout({ children }) {
  return (
        <main className="min-h-full min-w-full flex justify-center items-center bg-gradient-to-r from-teal-400 to-yellow-200">
          {children}
        </main>
  );
}
