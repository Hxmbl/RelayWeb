import { AppProps } from "$fresh/server.ts";
import Sidebar from "../islands/Sidebar.tsx";

export default function App({ Component }: AppProps) {
    return (
        <html>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Tailwind CDN */}
            <script src="https://cdn.tailwindcss.com"></script>

            <title>RelayWeb</title>
        </head>
        <body>
        <Component />
        </body>
        </html>
    );
}
