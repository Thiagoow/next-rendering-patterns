import { User } from "@/types/user";

export default async function SSRExample() {
  const time = new Date().toLocaleTimeString();

  const users: User[] = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
      /* or:
      next: {
        revalidate: 60,
      }, */
    },
  ).then((res) => res.json());

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Server-Side Rendering</h1>
      <p>
        fetch with cache: &apos;no-store&apos; or next revalidate - Server time:{" "}
        {time}
      </p>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}: {user.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
