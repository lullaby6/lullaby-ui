let lullabyUIComponents = {
    '.ly-flex-center': {
        "@apply flex justify-center items-center": {},
    },
    '.ly-text-light-strong': {
        "@apply text-neutral-800": {},
    },
    '.ly-text-light': {
        "@apply text-neutral-600": {},
    },
    '.ly-bg-light-black': {
        "@apply bg-neutral-600": {},
    },
    '.ly-text-light-alt': {
        "@apply text-neutral-500": {},
    },
    '.ly-bg-light': {
        "@apply bg-white": {},
    },
    '.ly-bg-light-alt': {
        "@apply bg-neutral-100": {},
    },
    '.ly-bg-light-hover': {
        "@apply bg-neutral-200": {},
    },
    '.ly-border-light': {
        "@apply border-neutral-200": {},
    },
    '.ly-ring-light': {
        "@apply ring-neutral-200": {},
    },
    '.ly-light-colors': {
        "@apply ly-text-light ly-bg-light": {},
    },
    '.ly-text-dark': {
        "@apply text-neutral-100": {},
    },
    '.ly-text-dark-alt': {
        "@apply text-neutral-400": {},
    },
    '.ly-bg-dark': {
        "@apply bg-[#111114]": {},
    },
    '.ly-bg-dark-alt': {
        "@apply bg-[#131316]": {},
    },
    '.ly-bg-dark-hover': {
        "@apply bg-[#1B1B21]": {},
    },
    '.ly-border-dark': {
        "@apply border-[#222228]": {},
    },
    '.ly-ring-dark': {
        "@apply ring-[#222228]": {},
    },
    '.ly-dark-colors': {
        "@apply ly-text-dark ly-bg-dark": {},
    },

    '.ly-scrollbar::-webkit-scrollbar': {
        "@apply w-4": {},
    },
    '.ly-scrollbar::-webkit-scrollbar-thumb': {
        "@apply bg-neutral-400": {},
        "border": "4px solid transparent",
        "border-radius": "9999px",
        "background-clip": "padding-box",
    },
    '.ly-scrollbar::-webkit-scrollbar-track': {
        "@apply bg-white": {},
    },

    '.ly-dark-scrollbar::-webkit-scrollbar': {
        "@apply w-4": {},
    },
    '.ly-dark-scrollbar::-webkit-scrollbar-thumb': {
        "@apply bg-neutral-600": {},
        "border": "4px solid transparent",
        "border-radius": "9999px",
        "background-clip": "padding-box",
    },
    '.ly-dark-scrollbar::-webkit-scrollbar-track': {
        "@apply ly-bg-dark": {},
    },

    '.ly-theme-switcher': {
        "@apply ly-text-light-strong ly-bg-light-alt border ly-border-light rounded-full p-1 cursor-pointer shadow hover:ly-bg-light-hover hover:shadow-md dark:ly-text-dark dark:ly-bg-dark dark:ly-border-dark dark:hover:ly-bg-dark-hover select-none": {},
    },
    '.ly-theme-switcher .theme-switcher-icon': {
        "@apply w-5 h-5": {},
    },

    '.ly-button': {
        "@apply ly-text-light ly-bg-light-alt border ly-border-light rounded px-4 py-1 shadow hover:shadow-md hover:ly-bg-light-hover h-fit w-fit": {},
    },
    '.ly-dark-button': {
        "@apply ly-text-dark ly-bg-dark-alt font-semibold border ly-border-dark rounded px-4 py-1 shadow hover:shadow-md hover:ly-bg-dark-hover h-fit w-fit": {},
    },

    '.ly-link': {
        "@apply ly-text-light cursor-pointer relative h-fit w-fit before:content-[''] before:ly-bg-light-black before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:transition-[width] before:duration-300 before:ease-in-out before:hover:w-full": {},
    },
    '.ly-dark-link': {
        "@apply ly-text-dark cursor-pointer relative h-fit w-fit before:content-[''] before:ly-bg-light-alt before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:transition-[width] before:duration-300 before:ease-in-out before:hover:w-full": {},
    },

    '.ly-badget': {
        "@apply ly-text-light ly-bg-light-alt text-sm border ly-border-light rounded-full px-3 py-[2.5px] shadow hover:ly-bg-light-hover hover:shadow-md h-fit w-fit": {}
    },
    '.ly-dark-badget': {
        "@apply ly-text-dark ly-bg-dark-alt text-sm border ly-border-dark rounded-full px-3 py-[2.5px] shadow hover:ly-bg-dark-hover hover:shadow-md h-fit w-fit": {}
    },

    '.ly-title': {
        "@apply ly-text-light-strong text-3xl font-semibold": {},
        "text-wrap": "balance",

    },
    '.ly-dark-title': {
        "@apply ly-text-dark text-3xl font-semibold": {},
        "text-wrap": "balance",
    },

    '.ly-text': {
        "@apply ly-text-light text-base": {},
        "text-wrap": "pretty",

    },
    '.ly-dark-text': {
        "@apply ly-text-dark text-base": {},
        "text-wrap": "pretty",
    },

    '.ly-input': {
        "@apply ly-text-light ly-bg-light-alt border ly-border-light rounded focus:outline-none focus:ring-1 focus:ly-ring-light px-2 py-1 shadow h-fit": {}
    },
    '.ly-dark-input': {
        "@apply ly-text-dark ly-bg-dark-alt border ly-border-dark placeholder-neutral-500  rounded focus:outline-none focus:ring-1 focus:ly-ring-dark px-2 py-1 shadow h-fit": {}
    },

    '.ly-input-file': {
        "@apply ly-text-light-alt ly-bg-light-alt file:px-3 file:py-1 file:border-none file:ly-bg-light-hover file:h-full file:ly-text-light-alt file:cursor-pointer rounded border ly-border-light p-0 m-0 cursor-pointer hover:ring-1 hover:ly-ring-light shadow pr-2 h-fit": {}
    },
    '.ly-dark-input-file': {
        "@apply ly-text-dark-alt ly-bg-dark-hover file:px-3 file:py-1 file:border-none file:ly-bg-dark file:h-full file:ly-text-dark file:cursor-pointer rounded border ly-border-dark p-0 m-0 cursor-pointer hover:ring-1 hover:ly-ring-dark shadow pr-2 h-fit": {}
    },

    '.ly-input-auto-width': {
        "@apply min-w-[15ch] w-[15ch]": {}
    },

    '.ly-select': {
        "@apply flex items-center relative w-fit h-fit": {}
    },

    '.ly-select-input': {
        "@apply ly-text-light ly-bg-light-alt border ly-border-light rounded pl-2 pr-10 py-1 focus:outline-none shadow hover:shadow-md hover:ring-1 hover:ly-ring-light focus:ly-bg-light cursor-pointer w-fit h-fit appearance-none": {}
    },

    '.ly-select-icon': {
        "@apply ly-text-light w-3 h-3 absolute right-2 opacity-75 pointer-events-none transition-transform duration-300 ease-in-out": {}
    },
    '.ly-select-icon-open': {
        "@apply rotate-180": {},
    },

    '.ly-dark-select-input': {
        "@apply ly-text-dark ly-bg-dark-alt border ly-border-dark rounded pl-2 pr-10 py-1 focus:outline-none shadow hover:shadow-md hover:ring-1 hover:ly-ring-dark focus:ly-bg-dark cursor-pointer w-fit h-fit appearance-none": {}
    },

    '.ly-dark-select-icon': {
        "@apply ly-text-dark w-3 h-3 absolute right-2 opacity-75 pointer-events-none transition-transform duration-300 ease-in-out": {}
    },

    '.ly-custom-select-input': {
        "@apply hidden": {}
    },
    '.ly-custom-select-options': {
        "@apply ly-text-light ly-bg-light border ly-border-light rounded shadow absolute left-0 -bottom-1 flex flex-col gap-2 w-full h-fit translate-y-[100%] z-10 p-2 hover:ring-1 hover:ly-ring-light": {}
    },
    '.ly-custom-select-option': {
        "@apply ly-text-light-alt text-left px-2 py-1 hover:ly-bg-light-hover hover:ly-text-light rounded": {}
    },

    '.ly-dark-custom-select-options': {
        "@apply ly-text-dark ly-bg-dark border ly-border-dark rounded shadow absolute left-0 -bottom-1 flex flex-col gap-2 w-full h-fit translate-y-[100%] z-10 p-2 hover:ring-1 hover:ly-ring-dark": {}
    },
    '.ly-dark-custom-select-option': {
        "@apply ly-text-dark-alt text-left px-2 py-1 hover:ly-bg-dark-hover hover:ly-text-dark rounded": {}
    },


    '.ly-accordion': {
        "@apply ly-bg-light ly-text-light flex flex-col gap-2 border-b ly-border-light px-4 pt-2 min-h-[0] h-fit w-fit": {},
    },
    '.ly-accordion-header': {
        "@apply ly-bg-light ly-text-light flex justify-between items-center cursor-pointer": {},
    },
    '.ly-accordion-title': {
        "@apply ly-text-light select-none hover:underline": {},
    },
    '.ly-accordion-icon': {
        "@apply ly-text-light w-3 h-3 transition-transform duration-300 ease-in-out": {},
    },
    '.ly-accordion-icon-open': {
        "@apply rotate-180": {},
    },
    '.ly-accordion-wrapper': {
        "@apply grid overflow-hidden py-0": {},
        "grid-template-rows": "0fr",
        "transition": "grid-template-rows 300ms ease-in-out, padding 300ms ease-in-out",
    },
    '.ly-accordion-wrapper.ly-accordion-wrapper-open': {
        "@apply pb-4": {},
        "grid-template-rows": "1fr",
    },
    '.ly-accordion-content': {
        "@apply ly-bg-light ly-text-light min-h-[0]": {},
    },

    '.ly-dark-accordion': {
        "@apply ly-bg-dark ly-text-dark flex flex-col gap-2 border-b ly-border-dark px-4 pt-2 min-h-[0] h-fit w-fit": {},
    },
    '.ly-dark-accordion-header': {
        "@apply ly-bg-dark ly-text-dark flex justify-between items-center cursor-pointer": {},
    },
    '.ly-dark-accordion-title': {
        "@apply ly-text-dark select-none hover:underline": {},
    },
    '.ly-dark-accordion-icon': {
        "@apply ly-text-dark w-3 h-3 transition-transform duration-300 ease-in-out": {},
    },
    '.ly-dark-accordion-content': {
        "@apply ly-bg-dark ly-text-dark min-h-[0]": {},
    },

    ".ly-textarea": {
        "@apply ly-text-light ly-bg-light-alt border ly-border-light relative rounded focus:outline-none focus:ring-1 focus:ly-ring-light px-2 py-1 shadow min-h-[75px] h-[75px] max-h-[250px]": {},
        "reisze": "horizontal",
        "overflow": "hidden",
    },
    ".ly-textarea-resize": {
        "@apply relative w-fit h-fit before:content-['']": {}
    },
    ".ly-textarea-resize .ly-textarea::-webkit-resizer": {},
    ".ly-textarea-resize::before": {
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
    ".ly-dark-textarea": {
        "@apply ly-text-dark ly-bg-dark-alt border ly-border-dark placeholder:ly-text-dark-alt rounded focus:outline-none focus:ring-1 focus:ly-ring-dark px-2 py-1 shadow min-h-[75px] h-[75px] max-h-[250px]": {},
        "reisze": "horizontal",
        "overflow": "hidden",
    },
    ".ly-dark-textarea-resize": {
        "@apply relative w-fit h-fit before:content-['']": {},
    },
    ".ly-dark-textarea-resize .ly-dark-textarea::-webkit-resizer": {
        "@apply ly-bg-dark-alt": {}
    },
    ".ly-dark-textarea-resize::before": {
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

    ".ly-card": {
        "@apply ly-text-light ly-bg-light flex flex-col gap-4 p-6 shadow border ly-border-light rounded shadow w-fit h-fit": {},
    },
    ".ly-card-header": {
        "@apply flex flex-col w-full": {},
    },
    ".ly-card-title": {
        "@apply ly-text-light-strong text-2xl font-semibold": {},
    },
    ".ly-card-desc": {
        " @apply text-light-alt": {},
    },
    ".ly-card-content": {
        "@apply w-full": {},
    },
    ".ly-card-footer": {
        "@apply flex w-full": {},
    },
    ".ly-dark-card": {
        "@apply ly-text-dark ly-bg-dark flex flex-col gap-4 p-6 shadow border ly-border-dark rounded shadow w-fit h-fit": {},
    },
    ".ly-dark-card-title": {
        "@apply ly-text-dark text-2xl font-semibold": {},
    },
    ".ly-dark-card-desc": {
        "@apply ly-text-dark-alt": {},
    },

    ".ly-dropzone": {
        "@apply ly-text-light ly-bg-light-alt flex flex-col items-center justify-center w-[500px] h-64 border-2 ly-border-light border-dashed rounded-lg cursor-pointer shadow hover:shadow-md hover:ly-bg-light-hover": {},
    },
    ".ly-dropzone-content": {
        "@apply flex flex-col items-center justify-center py-6 gap-3": {},
    },
    ".ly-dropzone-icon": {
        "@apply ly-text-light-alt w-10 h-10": {},
    },
    ".ly-dropzone-title": {
        "@apply ly-text-light text-sm": {},
    },
    ".ly-dropzone-desc": {
        "@apply ly-text-light-alt text-xs": {},
    },
    ".ly-dropzone-input": {
        "@apply ly-text-light-alt file:hidden text-xs text-center flex justify-center items-center w-[125px]": {},
    },
    ".ly-dark-dropzone": {
        "@apply ly-text-dark ly-bg-dark-alt flex flex-col items-center justify-center w-[500px] h-64 border-2 ly-border-dark border-dashed rounded-lg cursor-pointer shadow hover:shadow-md hover:ly-bg-dark-hover": {},
    },
    ".ly-dark-dropzone-icon": {
        "@apply ly-text-dark-alt w-10 h-10": {},
    },
    ".ly-dark-dropzone-title": {
        "@apply ly-text-dark text-sm": {},
    },
    ".ly-dark-dropzone-desc": {
        "@apply ly-text-dark-alt text-xs": {},
    },
    ".ly-dark-dropzone-input": {
        "@apply ly-text-dark-alt file:hidden text-xs text-center flex justify-center items-center w-[125px]": {},
    },

    ".ly-modal-container": {
        "@apply w-screen h-screen fixed left-0 top-0 flex justify-center items-center z-50": {},
    },
    ".ly-modal-overlay": {
        "@apply w-full h-full ly-bg-dark absolute left-0 top-0 opacity-25 z-10": {},
    },
    ".ly-modal-blurred-overlay": {
        "@apply w-full h-full ly-bg-dark absolute left-0 top-0 opacity-25 z-10 backdrop-blur-3xl": {},
    },
    ".ly-modal-content": {
        "@apply ly-text-light ly-bg-light rounded z-10 p-6 shadow border ly-border-light": {},
    },
    ".ly-dark-modal-content": {
        "@apply ly-text-dark ly-bg-dark rounded z-10 p-6 shadow border ly-border-dark": {},
    },

    ".ly-table": {
        "@apply ly-bg-light ly-text-light w-fit h-fit": {}
    },
    ".ly-table-tr-head": {
        "@apply ly-bg-light-alt border-b border-t ly-border-light": {}
    },
    ".ly-table-th": {
        "@apply ly-text-light-alt font-normal py-3 px-6": {}
    },
    ".ly-table-tr": {
        "@apply ly-text-light border-b ly-border-light": {}
    },
    ".ly-table-td": {
        "@apply ly-text-light py-3 px-6": {}
    },

    ".ly-dark-table": {
        "@apply ly-bg-dark ly-text-dark w-fit h-fit": {}
    },
    ".ly-dark-table-tr-head": {
        "@apply ly-bg-dark-alt border-b border-t ly-border-dark": {}
    },
    ".ly-dark-table-th": {
        "@apply ly-text-dark font-semibold py-3 px-6": {}
    },
    ".ly-dark-table-tr": {
        "@apply ly-text-dark border-b ly-border-dark": {}
    },
    ".ly-dark-table-td": {
        "@apply ly-text-dark py-3 px-6": {}
    },

    ".ly-header" : {
        "@apply ly-text-light ly-bg-light sticky top-0 left-0 px-16 flex justify-between items-center border-b ly-border-light w-full h-14 shadow z-20": {}
    },

    ".ly-dark-header" : {
        "@apply ly-text-dark ly-bg-dark sticky top-0 left-0 px-16 flex justify-between items-center border-b ly-border-dark w-full h-14 shadow z-20": {}
    },

    ".ly-aside": {
        "@apply ly-text-light ly-bg-light px-16 py-5 flex flex-col items-center sticky left-0 top-14 h-fit z-30": {}
    },

    ".ly-dark-aside": {
        "@apply ly-text-dark ly-bg-dark px-16 py-5 flex flex-col items-center sticky left-0 top-14 h-fit z-30": {}
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
                const neonComponentName = `.ly-neon-${size}-${color}-${colorValue}`
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