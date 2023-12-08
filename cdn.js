let lullabyUIComponents = {
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
    },
    '.scrollbar::-webkit-scrollbar-track': {
        "@apply bg-white": {},
    },

    '.dark-scrollbar::-webkit-scrollbar': {
        "@apply w-4": {},
    },
    '.dark-scrollbar::-webkit-scrollbar-thumb': {
        "@apply bg-neutral-600": {},
        "border": "4px solid transparent",
        "border-radius": "9999px",
        "background-clip": "padding-box",
    },
    '.dark-scrollbar::-webkit-scrollbar-track': {
        "@apply bg-dark": {},
    },

    '.theme-switcher': {
        "@apply text-light bg-light-alt border border-light rounded-full p-1 cursor-pointer shadow hover:bg-light-hover hover:shadow-md dark:text-dark dark:bg-dark dark:border-dark dark:hover:bg-dark-hover select-none": {},
    },
    '.theme-switcher .theme-switcher-icon': {
        "@apply w-5 h-5": {},
    },

    '.button': {
        "@apply text-light bg-light-alt border border-light rounded px-4 py-1 shadow hover:shadow-md hover:bg-light-hover h-fit w-fit": {},
    },
    '.dark-button': {
        "@apply text-dark bg-dark-alt font-semibold border border-dark rounded px-4 py-1 shadow hover:shadow-md hover:bg-dark-hover h-fit w-fit": {},
    },

    '.link': {
        "@apply text-light cursor-pointer relative h-fit w-fit before:content-[''] before:bg-dark-hover before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:transition-[width] before:duration-200 before:ease-in-out before:hover:w-full": {},
    },
    '.dark-link': {
        "@apply text-dark cursor-pointer relative h-fit w-fit before:content-[''] before:bg-light-alt before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:transition-[width] before:duration-200 before:ease-in-out before:hover:w-full": {},
    },

    '.badget': {
        "@apply text-light bg-light-alt text-sm border border-light rounded-full px-3 py-[2.5px] shadow hover:bg-light-hover hover:shadow-md h-fit w-fit": {}
    },
    '.dark-badget': {
        "@apply text-dark bg-dark-alt text-sm border border-dark rounded-full px-3 py-[2.5px] shadow hover:bg-dark-hover hover:shadow-md h-fit w-fit": {}
    },

    '.title': {
        "@apply text-light text-3xl font-semibold": {}
    },
    '.dark-title': {
        "@apply text-dark text-3xl font-semibold": {}
    },

    '.input': {
        "@apply text-light bg-light-alt border border-light rounded focus:outline-none focus:ring-1 focus:ring-light px-2 py-1 shadow h-fit": {}
    },
    '.dark-input': {
        "@apply text-dark bg-dark-alt border border-dark placeholder-neutral-500  rounded focus:outline-none focus:ring-1 focus:ring-dark px-2 py-1 shadow h-fit": {}
    },

    '.input-file': {
        "@apply text-light-alt bg-light-alt file:px-3 file:py-1 file:border-none file:bg-light-hover file:h-full file:text-light-alt file:cursor-pointer rounded border border-light p-0 m-0 cursor-pointer hover:ring-1 hover:ring-light shadow pr-2 h-fit": {}
    },
    '.dark-input-file': {
        "@apply text-dark-alt bg-dark-hover file:px-3 file:py-1 file:border-none file:bg-dark file:h-full file:text-dark file:cursor-pointer rounded border border-dark p-0 m-0 cursor-pointer hover:ring-1 hover:ring-dark shadow pr-2 h-fit": {}
    },

    '.input-auto-width': {
        "@apply min-w-[15ch] w-[15ch]": {}
    },

    ".textarea": {
        "@apply text-light bg-light-alt border border-light relative rounded focus:outline-none focus:ring-1 focus:ring-light px-2 py-1 shadow min-h-[75px] h-[75px] max-h-[250px]": {}
    },
    ".textarea-resize": {
        "@apply relative w-fit h-fit before:content-['']": {}
    },
    ".textarea-resize .textarea::-webkit-resizer": {},
    ".textarea-resize::before": {
        "content": "",
        "position": "absolute",
        "z-index": 10,
        "bottom": 0,
        "right": 0,
        "width": "0px",
        "height": "0px",
        "border-style": "solid",
        "border-width":" 0 7.5px 7.5px 7.5px",
        "border-color": "transparent transparent #aaa transparent",
        "transform": "rotate(135deg)",
        "translate": "4.5px -5px",
    },
    ".dark-textarea": {
        "@apply text-dark bg-dark-alt border border-dark placeholder:text-dark-alt rounded focus:outline-none focus:ring-1 focus:ring-dark px-2 py-1 shadow min-h-[75px] h-[75px] max-h-[250px]": {}
    },
    ".dark-textarea-resize": {
        "@apply relative w-fit h-fit before:content-['']": {},
    },
    ".dark-textarea-resize .dark-textarea::-webkit-resizer": {
    },
    ".dark-textarea-resize::before": {
        "content": "",
        "position": "absolute",
        "z-index": 10,
        "bottom": 0,
        "right": 0,
        "width": "0px",
        "height": "0px",
        "border-style": "solid",
        "border-width":" 0 7.5px 7.5px 7.5px",
        "border-color": "transparent transparent #45454C transparent",
        "transform": "rotate(135deg)",
        "translate": "4.5px -5px",
    },

    ".card": {
        "@apply text-light bg-light flex flex-col gap-4 p-6 shadow border border-light rounded shadow w-fit h-fit": {},
    },
    ".card-header": {
        "@apply flex flex-col w-full": {},
    },
    ".card-title": {
        "@apply text-light text-2xl font-semibold": {},
    },
    ".card-desc": {
        " @apply text-light-alt": {},
    },
    ".card-content": {
        "@apply w-full": {},
    },
    ".card-footer": {
        "@apply flex w-full": {},
    },
    ".dark-card": {
        "@apply text-dark bg-dark flex flex-col gap-4 p-6 shadow border border-dark rounded shadow w-fit h-fit": {},
    },
    ".dark-card-title": {
        "@apply text-dark text-2xl font-semibold": {},
    },
    ".dark-card-desc": {
        "@apply text-dark-alt": {},
    },

    ".dropzone": {
        "@apply text-light bg-light-alt flex flex-col items-center justify-center w-[500px] h-64 border-2 border-light border-dashed rounded-lg cursor-pointer shadow hover:shadow-md hover:bg-light-hover": {},
    },
    ".dropzone-content": {
        "@apply flex flex-col items-center justify-center py-6 gap-3": {},
    },
    ".dropzone-icon": {
        "@apply text-light-alt w-10 h-10": {},
    },
    ".dropzone-title": {
        "@apply text-light text-sm": {},
    },
    ".dropzone-desc": {
        "@apply text-light-alt text-xs": {},
    },
    ".dropzone-input": {
        "@apply text-light-alt file:hidden text-xs text-center flex justify-center items-center w-[125px]": {},
    },
    ".dark-dropzone": {
        "@apply text-dark bg-dark-alt flex flex-col items-center justify-center w-[500px] h-64 border-2 border-dark border-dashed rounded-lg cursor-pointer shadow hover:shadow-md hover:bg-dark-hover": {},
    },
    ".dark-dropzone-icon": {
        "@apply text-dark-alt w-10 h-10": {},
    },
    ".dark-dropzone-title": {
        "@apply text-dark text-sm": {},
    },
    ".dark-dropzone-desc": {
        "@apply text-dark-alt text-xs": {},
    },
    ".dark-dropzone-input": {
        "@apply text-dark-alt file:hidden text-xs text-center flex justify-center items-center w-[125px]": {},
    },

    ".modal-container": {
        "@apply w-screen h-screen fixed left-0 top-0 flex justify-center items-center z-10": {},
    },
    ".modal-overlay": {
        "@apply w-full h-full bg-black absolute left-0 top-0 opacity-25 z-10": {},
    },
    ".modal-blurred-overlay": {
        "@apply w-full h-full bg-black absolute left-0 top-0 z-10 backdrop-blur-3xl": {},
    },
    ".modal-content": {
        "@apply text-light bg-light rounded z-10 p-6 shadow border border-light": {},
    },
    ".dark-modal-content": {
        "@apply text-dark bg-dark rounded z-10 p-6 shadow border border-dark": {},
    },

    ...genNeonComponents()
}

function genNeonComponents() {
    const neonComponents = {}

    const sizes = {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
        '2xl': 24,
    }

    const colors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']

    const colorValues = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']

    Object.entries(sizes).forEach(([size, sizeValue]) => {
        colors.forEach(color => {
            colorValues.forEach(colorValue => {
                const neonComponentName = `.neon-${size}-${color}-${colorValue}`
                const neonComponentValue = {
                    "box-shadow": `0 0 ${sizeValue}px 2.5px theme('colors.${color}.${colorValue}')`,
                }
                neonComponents[neonComponentName] = neonComponentValue
            })
        })
    })

    return neonComponents
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