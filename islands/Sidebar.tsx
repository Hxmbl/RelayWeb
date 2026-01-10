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
          md:static md:translate-x-0 flex flex-col`}
            >
                <h2 class="text-xl font-bold mb-6">Relay</h2>

                <nav className="flex flex-col gap-2 flex-1">
                    {/* Inbox (toggleable) */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between p-2 rounded hover:bg-gray-800">
                            <a href="#" className="flex items-center flex-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-400"
                                    viewBox="0 -960 960 960"
                                    fill="currentColor"
                                >
                                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z" />
                                </svg>
                                <span className="ml-2">Inbox</span>
                            </a>

                            <button
                                aria-label="Toggle Inbox"
                                className={`ml-2 text-gray-400 hover:text-white transition-transform ${
                                    inboxOpen.value ? "rotate-90" : ""
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    inboxOpen.value = !inboxOpen.value;
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    viewBox="0 -960 960 960"
                                    fill="currentColor"
                                >
                                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                </svg>
                            </button>
                        </div>

                        {/* Inbox sub-categories */}
                        <div
                            className={`ml-4 flex-col gap-1 ${
                                inboxOpen.value ? "flex" : "hidden"
                            }`}
                        >
                            <a
                                href="#"
                                className="p-2 rounded text-sm hover:bg-gray-800 flex items-center"
                            >
                                <span className="ml-2">Promotions</span>
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded text-sm hover:bg-gray-800 flex items-center"
                            >
                                <span className="ml-2">Social</span>
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded text-sm hover:bg-gray-800 flex items-center"
                            >
                                <span className="ml-2">Updates</span>
                            </a>
                        </div>
                    </div>

                    {/* Other top-level items */}
                    <a href="#" className="p-2 rounded hover:bg-gray-800 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
                        <span className="ml-2">Sent</span>
                    </a>

                    <a href="#" className="p-2 rounded hover:bg-gray-800 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-400"
                            viewBox="0 -960 960 960"
                            fill="currentColor"
                        >
                            <path d="M120-200h720v-80H120v80Zm0-160h720v-80H120v80Z" />
                        </svg>
                        <span className="ml-2">Drafts</span>
                    </a>

                    <a href="#" className="p-2 rounded hover:bg-gray-800 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-400"
                            viewBox="0 -960 960 960"
                            fill="currentColor"
                        >
                            <path d="M120-120h720v-720H120v720Zm80-80v-560h560v560H200Z" />
                        </svg>
                        <span className="ml-2">Archive</span>
                    </a>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Bottom section */}
                    <div className="flex flex-col gap-2">
                        <a
                            href="#"
                            className="p-2 rounded hover:bg-gray-800 text-gray-400 hover:text-white flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-400"
                                viewBox="0 -960 960 960"
                                fill="currentColor"
                            >
                                <path d="M200-200h560v-560H200v560Zm80-80v-400h400v400H280Z" />
                            </svg>
                            <span className="ml-2">Trash</span>
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded hover:bg-gray-800 text-gray-400 hover:text-white flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-400"
                                viewBox="0 -960 960 960"
                                fill="currentColor"
                            >
                                <path d="M480-120q-83 0-141.5-58.5T280-320q0-83 58.5-141.5T480-520q83 0 141.5 58.5T680-320q0 83-58.5 141.5T480-120Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Z" />
                            </svg>
                            <span className="ml-2">Settings</span>
                        </a>
                    </div>
                </nav>
            </aside>

            {/* Hamburger (mobile toggle) */}
            <button
                class="fixed top-4 left-4 z-50 md:hidden text-white"
                onClick={() => (open.value = !open.value)}
            >
                ☰
            </button>
        </>
    );
}
