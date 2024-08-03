import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from "@sveltejs/adapter-static";

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: undefined,
        }),

        paths: {
            base: "/svelte-five-codemirror-editor",
        },
    },
};

export default config;
