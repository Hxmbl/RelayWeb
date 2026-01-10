import Sidebar from "../islands/Sidebar.tsx";

export default function Home() {
  return (
      <div class="flex min-h-screen bg-gray-100">
        <Sidebar />

        <main class="flex-1 p-6">
          <h1 class="text-3xl font-bold mb-4">
            Welcome to Relay
          </h1>
          <p>
            This is your main content area.
          </p>
        </main>
      </div>
  );
}
