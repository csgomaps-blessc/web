/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "accent-gradient": "linear-gradient(90deg, rgba(142,255,185,1) 0%, rgba(58,255,134,1) 100%);",
                "image-none": "none",
            },
            colors: {
                primary: {
                    100: "#191919",
                },
                text: {
                    100: "#f1f1f1",
                    200: "#a7a7a7",
                    black: "#0f0f0f",
                },
                secondary: {
                    100: "#242424",
                    200: "#262626",
                    300: "#333333",
                },
                accent: {
                    100: "#3AFF86",
                    200: "#7ff5ad",
                },
                background: {
                    100: "#0c0e10",
                },
            },
            screens: {
                xs: "320px",
                sm: "384px",
                md: "448px",
                lg: "512px",
                xl: "576px",
                "2xl": "672px",
                "3xl": "768px",
                "4xl": "896px",
                "5xl": "1024px",
                "6xl": "1152px",
                "7xl": "1280px",
            },
        },
    },
    plugins: [require("@tailwindcss/container-queries")],
};
