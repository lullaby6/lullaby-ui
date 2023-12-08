const lullabyUIComponents = {
    '.flex-center': {
        "@apply flex justify-center items-center": {},
    },
    '.text-light': {
        "@apply text-neutral-800": {},
    },
    '.text-light-alt': {
        "@apply text-neutral-600": {},
    },
    '.bg-light': {
        "@apply bg-white": {},
    },
    '.bg-light-alt': {
        "@apply bg-neutral-100": {},
    },
    '.bg-light-hover': {
        "@apply bg-neutral-200": {},
    },
    '.border-light': {
        "@apply border-neutral-300": {},
    },
    '.ring-light': {
        "@apply ring-neutral-300": {},
    },
    '.light-colors': {
        "@apply text-light bg-light": {},
    },
    '.text-dark': {
        "@apply text-neutral-100": {},
    },
    '.text-dark-alt': {
        "@apply text-neutral-400": {},
    },
    '.bg-dark': {
        "@apply bg-[#111114]": {},
    },
    '.bg-dark-alt': {
        "@apply bg-[#131316]": {},
    },
    '.bg-dark-hover': {
        "@apply bg-[#1B1B21]": {},
    },
    '.border-dark': {
        "@apply border-[#222228]": {},
    },
    '.ring-dark': {
        "@apply ring-[#222228]": {},
    },
    '.dark-colors': {
        "@apply text-dark bg-dark": {},
    },
    '.scrollbar::-webkit-scrollbar': {
        "@apply w-4": {},
    },
    '.scrollbar::-webkit-scrollbar-thumb': {
        "@apply bg-neutral-400": {},
        "border": "4px solid transparent",
        "border-radius": "9999px",
        "background-clip": "padding-box",
    }
}

const tailwindConfig = document.createElement('script');
tailwindConfig.innerHTML = `
const lullabyUIPlugin = tailwind.plugin(function lullabyUI({ addComponents }) {
    addComponents(${JSON.stringify(lullabyUIComponents)});
})

tailwind.config = {
    darkMode: 'class',
    plugins: [lullabyUIPlugin]
}
`;

document.head.appendChild(tailwindConfig);