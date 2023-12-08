import plugin from "tailwindcss/plugin";

export default plugin(function lullabyUI({ addComponents }) {
    addComponents({
        '.red': {
            "@apply bg-red-900": {},
        }
    });
})