import Image from "next/image";

export default function Login() {
  return (
    <main className="h-screen flex items-center justify-center bg-gray-100">
      <header className="fixed top-0 w-full bg-blue-600 p-3">
        <h1 className="text-white text-[1.5em]">SalesFlow</h1>
      </header>
      <div className="shadow-xs shadow-gray-300 rounded-xl lg p-5 py-8 bg-white min-w-[300px]">
        <h1 className="text-center text-[2em] font-bold pb-3">Acesse o <span className="text-blue-500">SalesFlow</span></h1>
        <form action="/api/login" method="POST">
          <div>
            <label htmlFor="email">E-mail</label><br />
            <input className="bg-gray-100 border border-gray-300 rounded w-full p-1 outline-none" type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input className="bg-gray-100 border border-gray-300 rounded w-full p-1 outline-none" type="password" name="password" id="password" />
          </div>
          <div>
            <input className="mt-2 p-1 bg-blue-600 rounded w-full shadow text-white cursor-pointer" type="submit" value="Entrar" />
          </div>
        </form>
      </div>
    </main>
  );
}
