import { useSignal } from "@preact/signals";

/**
 * Top Navigation Group
 */
const PRIMARY_NAV = [
    {
        label: "Inbox",
        href: "#",
        icon: <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z" />,
        subItems: [
            { label: "Promotions", href: "#" },
            { label: "Social", href: "#" },
            { label: "Updates", href: "#" },
        ],
    },
    {
        label: "Sent",
        href: "#",
        icon: <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />,
        subItems: [
            {
                label: "Drafts",
                href: "#",
                icon: <path d="m480-920 362 216q18 11 28 30t10 40v434q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-434q0-21 10-40t28-30l362-216Zm0 466 312-186-312-186-312 186 312 186Zm0 94L160-552v352h640v-352L480-360Zm0 160h320-640 320Z"/>
            },
        ],
    },
];

export default function Sidebar() {
    const open = useSignal(false);

    return (
        <>
            {open.value && (
                <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => (open.value = false)} />
            )}

                <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white p-4 transform transition-transform duration-300 flex flex-col ${open.value ? "translate-x-0" : "-translate-x-full"} md:static md:translate-x-0`}>
                    <h2 className="text-xl font-bold mb-6 px-2">Relay</h2>

                    <nav className="flex flex-col gap-1 flex-1">
                        {/* Top Section (Inbox & Sent) */}
                        {PRIMARY_NAV.map((item) => (
                            <NavGroup key={item.label} item={item} />
                        ))}

                        {/* This spacer pushes everything below it to the bottom */}
                        <div className="flex-1" />

                        {/* Bottom Section (All Mail, Spam, Trash, Settings) */}
                        <div className="flex flex-col gap-1 border-t border-gray-800 pt-4">
                            <NavItem
                                label="All Mail"
                                icon={<path d="M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm280-188L280-663v303h560v-303L560-468Zm0-98 280-194H280l280 194ZM120-120q-33 0-56.5-23.5T40-200v-500h80v500h660v80H120Zm720-546v-94H280v94-94h560v94Z"/>}
                            />

                            <div className="h-4" aria-hidden="false" />

                            <NavItem
                                label="Spam"
                                icon={<path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"/>}
                            />
                            <NavItem
                                label="Trash"
                                icon={<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>}
                            />
                            <NavItem
                                label="Settings"
                                icon={<path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q22-23 48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>}
                            />
                        </div>
                    </nav>
                </aside>
        </>
    );
}

/**
 * Shared Item Component
 */
function NavItem({ label, href = "#", icon, className = "", isSubItem = false }) {
    return (
        <a href={href} className={`flex items-center p-2 rounded hover:bg-gray-800 transition-colors ${className}`}>
            {icon ? (
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 -960 960 960">{icon}</svg>
            ) : isSubItem ? (
                <div className="w-5" />
            ) : null}
            <span className={`ml-3 ${isSubItem ? 'text-xs text-gray-300' : 'text-sm font-medium'}`}>{label}</span>
        </a>
    );
}

/**
 * Group Component for Expandable Submenus
 */
function NavGroup({ item }) {
    const isExpanded = useSignal(false);
    const hasSubItems = item.subItems && item.subItems.length > 0;

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between group rounded hover:bg-gray-800">
                <NavItem label={item.label} href={item.href} icon={item.icon} className="flex-1 hover:bg-transparent" />
                {hasSubItems && (
                    <button
                        onClick={() => (isExpanded.value = !isExpanded.value)}
                        className={`p-2 text-gray-500 hover:text-white transition-transform ${isExpanded.value ? "rotate-90" : ""}`}
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 -960 960 960">
                            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                        </svg>
                    </button>
                )}
            </div>

            {isExpanded.value && hasSubItems && (
                <div className="ml-4 flex flex-col gap-1 border-l border-gray-800 mt-1">
                    {item.subItems.map((sub) => (
                        <NavItem
                            key={sub.label}
                            label={sub.label}
                            href={sub.href}
                            icon={sub.icon}
                            isSubItem={true}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}