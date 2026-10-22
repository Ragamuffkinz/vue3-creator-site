// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/ui"],
    css: ["~/assets/css/main.css"],
    icon: {
        clientBundle: {
            scan: true,
        },
    },

    fonts: {
        families: [
            {
                name: "Bricolage Grotesque",
                provider: "google",
                weights: [500, 600, 700, 800],
            },
            {
                name: "Hanken Grotesk",
                provider: "google",
                weights: [400, 500, 600, 700],
            },
        ],
    },
    // Soft cross-fade between routes (see .page-* in main.css)
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            title: "Jessie Page",
            htmlAttrs: { lang: "en" },
        },
    },
});
