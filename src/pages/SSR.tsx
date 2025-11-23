import { GetServerSideProps } from "next";
import { User } from "@/types/user";

interface Props {
  users: User[];
  time: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const users: User[] = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((res) => res.json());

  return {
    props: {
      users,
      time: new Date().toLocaleTimeString(),
    },
  };
};

export default function SSRExample({ users, time }: Props) {
  return (
    <main className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Server-Side Rendering</h1>
      <p>Using getServerSideProps - Server time: {time}</p>

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
