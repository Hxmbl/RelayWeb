import { serve } from "https://deno.land/std@0.205.0/http/server.ts";

console.log("RelayWeb running on http://localhost:8000");

serve((_req) => {
    return new Response("Hello from RelayWeb!", { status: 200 });
});
