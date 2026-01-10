import { useSignal } from "@preact/signals";

export default function Sidebar() {
    const open = useSignal(false);

    return (
        <>
            {/* Overlay (mobile only) */}
            {open.value && (
                <div
                    class="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => (open.value = false)}
                />
            )}

            {/* Sidebar */}
            <aside
                class={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white p-4
        transform transition-transform duration-300
        ${open.value ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0`}
            >
                <h2 class="text-xl font-bold mb-6">RelayWeb</h2>

                <nav class="flex flex-col gap-3">
                    <a class="hover:bg-gray-800 p-2 rounded" href="#">Dashboard</a>
                    <a class="hover:bg-gray-800 p-2 rounded" href="#">Projects</a>
                    <a class="hover:bg-gray-800 p-2 rounded" href="#">Settings</a>
                </nav>
            </aside>

            {/* Hamburger */}
            <button
                class="fixed top-4 left-4 z-50 md:hidden text-white"
                onClick={() => (open.value = !open.value)}
            >
                ☰
            </button>
        </>
    );
}
