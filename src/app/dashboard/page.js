import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export default function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get("token").value;

  const payload = verify(token, process.env.NEXT_PUBLIC_SECRET_KEY);

  return (
    <div>
      <header className="flex justify-between items-center p-8">
        <div>Eventmakers</div>
        <nav className="flex items-center gap-4">
          <div>{payload.name}</div>
          <button>Logout</button>
        </nav>
      </header>
    </div>
  );
}
