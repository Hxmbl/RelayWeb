/** @jsxImportSource solid-js */
import { render } from "solid-js/web";
import { For } from "solid-js";

function App() {
    const menuItems = [
        { name: "Home", href: "index.html" },
        { name: "About", href: "about.html" },
    ];

    return (
        <>
            <nav id="sidebar">
                <ul>
                    {/* Fixed 'each' prop here */}
                    <For each={menuItems}>
                        {(item) => (
                            <li>
                                <a href={item.href}>{item.name}</a>
                            </li>
                        )}
                    </For>
                </ul>
            </nav>

            <main>
                <div class="container">
                    <h2>Hello World</h2>
                    <p>Content goes here...</p>
                </div>
            </main>
        </>
    );
}

// Fixed render syntax here
const root = document.getElementById("app");
if (root) {
    render(() => <App />, root);
}