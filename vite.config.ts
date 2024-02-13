// import { sveltekit } from "@sveltejs/kit/vite"; // for some reason this plugin breaks the vitest env
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [svelte()],
    test: {
        environment: "jsdom",
        setupFiles: ["./vitest-setup.js"],
        include: ["src/**/*.vitest.ts"],
    },
});
