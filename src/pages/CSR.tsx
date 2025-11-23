import { useState } from "react";

export default function CSRExample() {
  const [count, setCount] = useState(0);

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Client-Side Rendering</h1>
      <p>No changes: using React hooks will make it CSR by default.</p>

      <button
        onClick={() => setCount(count + 1)}
        className="p-2 font-semibold rounded-md bg-neutral-600 hover:bg-neutral-700"
      >
        Clicked {count} times
      </button>
    </main>
  );
}
