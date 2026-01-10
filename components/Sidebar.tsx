import { useSignal } from "@preact/signals";



export default function Sidebar() {
    const open = useSignal(false);
    const inboxOpen = useSignal(false);

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

                <nav className="flex flex-col gap-3">
                    <nav className="flex flex-col gap-2">

                        {/* Inbox (toggleable, but selectable) */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between p-2 rounded hover:bg-gray-800">
                                <a href="#" className="flex-1">
                                    Inbox
                                </a>

                                <button
                                    aria-label="Toggle Inbox"
                                    className={`ml-2 text-gray-400 hover:text-white transition-transform
                                    ${inboxOpen.value ? "rotate-90" : ""}
  `}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        inboxOpen.value = !inboxOpen.value;
                                    }}
                                >
                                    ▸
                                </button>

                            </div>

                            {/* Inbox sub-categories */}
                            <div
                                className={`ml-4 flex-col gap-1 ${
                                    inboxOpen.value ? "flex" : "hidden"
                                }`}
                            >
                            <a href="#" className="p-2 rounded text-sm hover:bg-gray-800">
                                    Promotions
                                </a>
                                <a href="#" className="p-2 rounded text-sm hover:bg-gray-800">
                                    Social
                                </a>
                                <a href="#" className="p-2 rounded text-sm hover:bg-gray-800">
                                    Updates
                                </a>
                            </div>
                        </div>

                        {/* Skipped / flat categories */}
                        <a href="#" className="p-2 rounded hover:bg-gray-800">
                            Sent
                        </a>

                        <a href="#" className="p-2 rounded hover:bg-gray-800">
                            Drafts
                        </a>

                        <a href="#" className="p-2 rounded hover:bg-gray-800">
                            Archive
                        </a>

                        {/* Spacer */}
                        <div className="h-4"/>

                        {/* Bottom section */}
                        <a href="#" className="p-2 rounded hover:bg-gray-800 text-gray-400 hover:text-white">
                            Trash
                        </a>

                        <a href="#" className="p-2 rounded hover:bg-gray-800 text-gray-400 hover:text-white">
                            Settings
                        </a>

                    </nav>

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
