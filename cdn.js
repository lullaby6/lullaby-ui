let lullabyUIComponents = {
    '.lu-flex-center': {
        "@apply flex justify-center items-center": {},
    },
    '.lu-text-light': {
        "@apply text-neutral-800": {},
    },
    '.lu-text-light-alt': {
        "@apply text-neutral-600": {},
    },
    '.lu-bg-light': {
        "@apply bg-white": {},
    },
    '.lu-bg-light-alt': {
        "@apply bg-neutral-100": {},
    },
    '.lu-bg-light-hover': {
        "@apply bg-neutral-200": {},
    },
    '.lu-border-light': {
        "@apply border-neutral-300": {},
    },
    '.lu-ring-light': {
        "@apply ring-neutral-300": {},
    },
    '.lu-light-colors': {
        "@apply lu-text-light lu-bg-light": {},
    },
    '.lu-text-dark': {
        "@apply text-neutral-100": {},
    },
    '.lu-text-dark-alt': {
        "@apply text-neutral-400": {},
    },
    '.lu-bg-dark': {
        "@apply bg-[#111114]": {},
    },
    '.lu-bg-dark-alt': {
        "@apply bg-[#131316]": {},
    },
    '.lu-bg-dark-hover': {
        "@apply bg-[#1B1B21]": {},
    },
    '.lu-border-dark': {
        "@apply border-[#222228]": {},
    },
    '.lu-ring-dark': {
        "@apply ring-[#222228]": {},
    },
    '.lu-dark-colors': {
        "@apply lu-text-dark lu-bg-dark": {},
    },

    '.lu-scrollbar::-webkit-scrollbar': {
        "@apply w-4": {},
    },
    '.lu-scrollbar::-webkit-scrollbar-thumb': {
        "@apply bg-neutral-400": {},
        "border": "4px solid transparent",
        "border-radius": "9999px",
        "background-clip": "padding-box",
    },
    '.lu-scrollbar::-webkit-scrollbar-track': {
        "@apply bg-white": {},
    },

    '.lu-dark-scrollbar::-webkit-scrollbar': {
        "@apply w-4": {},
    },
    '.lu-dark-scrollbar::-webkit-scrollbar-thumb': {
        "@apply bg-neutral-600": {},
        "border": "4px solid transparent",
        "border-radius": "9999px",
        "background-clip": "padding-box",
    },
    '.lu-dark-scrollbar::-webkit-scrollbar-track': {
        "@apply lu-bg-dark": {},
    },

    '.lu-theme-switcher': {
        "@apply lu-text-light lu-bg-light-alt border lu-border-light rounded-full p-1 cursor-pointer shadow hover:lu-bg-light-hover hover:shadow-md dark:lu-text-dark dark:lu-bg-dark dark:lu-border-dark dark:hover:lu-bg-dark-hover select-none": {},
    },
    '.lu-theme-switcher .theme-switcher-icon': {
        "@apply w-5 h-5": {},
    },

    '.lu-button': {
        "@apply lu-text-light lu-bg-light-alt border lu-border-light rounded px-4 py-1 shadow hover:shadow-md hover:lu-bg-light-hover h-fit w-fit": {},
    },
    '.lu-dark-button': {
        "@apply lu-text-dark lu-bg-dark-alt font-semibold border lu-border-dark rounded px-4 py-1 shadow hover:shadow-md hover:lu-bg-dark-hover h-fit w-fit": {},
    },

    '.lu-link': {
        "@apply lu-text-light cursor-pointer relative h-fit w-fit before:content-[''] before:lu-bg-dark-hover before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:transition-[width] before:duration-200 before:ease-in-out before:hover:w-full": {},
    },
    '.lu-dark-link': {
        "@apply lu-text-dark cursor-pointer relative h-fit w-fit before:content-[''] before:lu-bg-light-alt before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:transition-[width] before:duration-200 before:ease-in-out before:hover:w-full": {},
    },

    '.lu-badget': {
        "@apply lu-text-light lu-bg-light-alt text-sm border lu-border-light rounded-full px-3 py-[2.5px] shadow hover:lu-bg-light-hover hover:shadow-md h-fit w-fit": {}
    },
    '.lu-dark-badget': {
        "@apply lu-text-dark lu-bg-dark-alt text-sm border lu-border-dark rounded-full px-3 py-[2.5px] shadow hover:lu-bg-dark-hover hover:shadow-md h-fit w-fit": {}
    },

    '.lu-title': {
        "@apply lu-text-light text-3xl font-semibold": {},
        "text-wrap": "balance",

    },
    '.lu-dark-title': {
        "@apply lu-text-dark text-3xl font-semibold": {},
        "text-wrap": "balance",
    },

    '.lu-text': {
        "@apply lu-text-light text-base": {},
        "text-wrap": "pretty",

    },
    '.lu-dark-text': {
        "@apply lu-text-dark text-base": {},
        "text-wrap": "pretty",
    },

    '.lu-input': {
        "@apply lu-text-light lu-bg-light-alt border lu-border-light rounded focus:outline-none focus:ring-1 focus:lu-ring-light px-2 py-1 shadow h-fit": {}
    },
    '.lu-dark-input': {
        "@apply lu-text-dark lu-bg-dark-alt border lu-border-dark placeholder-neutral-500  rounded focus:outline-none focus:ring-1 focus:lu-ring-dark px-2 py-1 shadow h-fit": {}
    },

    '.lu-input-file': {
        "@apply lu-text-light-alt lu-bg-light-alt file:px-3 file:py-1 file:border-none file:lu-bg-light-hover file:h-full file:lu-text-light-alt file:cursor-pointer rounded border lu-border-light p-0 m-0 cursor-pointer hover:ring-1 hover:lu-ring-light shadow pr-2 h-fit": {}
    },
    '.lu-dark-input-file': {
        "@apply lu-text-dark-alt lu-bg-dark-hover file:px-3 file:py-1 file:border-none file:lu-bg-dark file:h-full file:lu-text-dark file:cursor-pointer rounded border lu-border-dark p-0 m-0 cursor-pointer hover:ring-1 hover:lu-ring-dark shadow pr-2 h-fit": {}
    },

    '.lu-input-auto-width': {
        "@apply min-w-[15ch] w-[15ch]": {}
    },

    ".lu-textarea": {
        "@apply lu-text-light lu-bg-light-alt border lu-border-light relative rounded focus:outline-none focus:ring-1 focus:lu-ring-light px-2 py-1 shadow min-h-[75px] h-[75px] max-h-[250px]": {}
    },
    ".lu-textarea-resize": {
        "@apply relative w-fit h-fit before:content-['']": {}
    },
    ".lu-textarea-resize .lu-textarea::-webkit-resizer": {},
    ".lu-textarea-resize::before": {
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
    ".lu-dark-textarea": {
        "@apply lu-text-dark lu-bg-dark-alt border lu-border-dark placeholder:lu-text-dark-alt rounded focus:outline-none focus:ring-1 focus:lu-ring-dark px-2 py-1 shadow min-h-[75px] h-[75px] max-h-[250px]": {}
    },
    ".lu-dark-textarea-resize": {
        "@apply relative w-fit h-fit before:content-['']": {},
    },
    ".lu-dark-textarea-resize .lu-dark-textarea::-webkit-resizer": {
    },
    ".lu-dark-textarea-resize::before": {
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

    ".lu-card": {
        "@apply lu-text-light lu-bg-light flex flex-col gap-4 p-6 shadow border lu-border-light rounded shadow w-fit h-fit": {},
    },
    ".lu-card-header": {
        "@apply flex flex-col w-full": {},
    },
    ".lu-card-title": {
        "@apply lu-text-light text-2xl font-semibold": {},
    },
    ".lu-card-desc": {
        " @apply text-light-alt": {},
    },
    ".lu-card-content": {
        "@apply w-full": {},
    },
    ".lu-card-footer": {
        "@apply flex w-full": {},
    },
    ".lu-dark-card": {
        "@apply lu-text-dark lu-bg-dark flex flex-col gap-4 p-6 shadow border lu-border-dark rounded shadow w-fit h-fit": {},
    },
    ".lu-dark-card-title": {
        "@apply lu-text-dark text-2xl font-semibold": {},
    },
    ".lu-dark-card-desc": {
        "@apply lu-text-dark-alt": {},
    },

    ".lu-dropzone": {
        "@apply lu-text-light lu-bg-light-alt flex flex-col items-center justify-center w-[500px] h-64 border-2 lu-border-light border-dashed rounded-lg cursor-pointer shadow hover:shadow-md hover:lu-bg-light-hover": {},
    },
    ".lu-dropzone-content": {
        "@apply flex flex-col items-center justify-center py-6 gap-3": {},
    },
    ".lu-dropzone-icon": {
        "@apply lu-text-light-alt w-10 h-10": {},
    },
    ".lu-dropzone-title": {
        "@apply lu-text-light text-sm": {},
    },
    ".lu-dropzone-desc": {
        "@apply lu-text-light-alt text-xs": {},
    },
    ".lu-dropzone-input": {
        "@apply lu-text-light-alt file:hidden text-xs text-center flex justify-center items-center w-[125px]": {},
    },
    ".lu-dark-dropzone": {
        "@apply lu-text-dark lu-bg-dark-alt flex flex-col items-center justify-center w-[500px] h-64 border-2 lu-border-dark border-dashed rounded-lg cursor-pointer shadow hover:shadow-md hover:lu-bg-dark-hover": {},
    },
    ".lu-dark-dropzone-icon": {
        "@apply lu-text-dark-alt w-10 h-10": {},
    },
    ".lu-dark-dropzone-title": {
        "@apply lu-text-dark text-sm": {},
    },
    ".lu-dark-dropzone-desc": {
        "@apply lu-text-dark-alt text-xs": {},
    },
    ".lu-dark-dropzone-input": {
        "@apply lu-text-dark-alt file:hidden text-xs text-center flex justify-center items-center w-[125px]": {},
    },

    ".lu-modal-container": {
        "@apply w-screen h-screen fixed left-0 top-0 flex justify-center items-center z-10": {},
    },
    ".lu-modal-overlay": {
        "@apply w-full h-full lu-bg-dark absolute left-0 top-0 opacity-25 z-10": {},
    },
    ".lu-modal-blurred-overlay": {
        "@apply w-full h-full lu-bg-dark absolute left-0 top-0 z-10 backdrop-blur-3xl": {},
    },
    ".lu-modal-content": {
        "@apply lu-text-light lu-bg-light rounded z-10 p-6 shadow border lu-border-light": {},
    },
    ".lu-dark-modal-content": {
        "@apply lu-text-dark lu-bg-dark rounded z-10 p-6 shadow border lu-border-dark": {},
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
                const neonComponentName = `.lu-neon-${size}-${color}-${colorValue}`
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

if(!tailwind.config.plugins) tailwind.config.plugins = []

tailwind.config = {
    ...tailwind.config,
    darkMode: 'class',
    plugins: [...tailwind.config.plugins, lullabyUIPlugin],
}
`;

document.head.appendChild(tailwindConfig);