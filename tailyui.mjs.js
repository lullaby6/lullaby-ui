const plugin = require('tailwindcss/plugin')

const components = {
    '.flex-center': {
        "@apply flex justify-center items-center": {},
    },

    '.font-inter': {
        "font-family": "Inter",
    },

    '.container': {
        "@apply text-neutral-800 bg-white flex justify-center items-center gap-2 border border-neutral-200 w-fit h-fit p-4 rounded-lg shadow-sm": {},
    },

    '.separator': {
        '@apply w-full bg-neutral-200 rounded-full my-2 h-[0.5px]': {}
    },

    '.text': {
        "@apply text-neutral-800 text-pretty truncate": {},
    },
    '.title': {
        "@apply text-neutral-800 text-xl text-balance": {},
    },

    '.btn': {
        '@apply text-neutral-800 bg-white border border-neutral-200 hover:bg-neutral-100 text-nowrap w-fit px-4 py-1 flex justify-center items-center gap-1 transition-colors  rounded-lg shadow-sm cursor-pointer': {},
    },
    '.btn-outline': {
        '@apply text-neutral-800 bg-white border border-neutral-200 hover:ring-1 hover:ring-neutral-300 hover:ring-offset-1 text-nowrap w-fit px-4 py-1 flex justify-center items-center gap-1 transition-colors  rounded-lg shadow-sm cursor-pointer': {},
    },
    '.btn-alt': {
        '@apply text-neutral-50 bg-neutral-800 hover:bg-neutral-700 text-nowrap w-fit px-4 py-1 flex justify-center items-center gap-1 transition-colors  rounded-lg shadow-sm cursor-pointer': {},
    },
    '.btn-alt-outline': {
        '@apply text-neutral-50 bg-neutral-800 hover:ring-1 hover:ring-neutral-800 hover:ring-offset-1 text-nowrap w-fit px-4 py-1 flex justify-center items-center gap-1 transition-colors  rounded-lg shadow-sm cursor-pointer': {},
    },
    '.btn-ghost': {
        '@apply text-neutral-800 bg-neutral-100 hover:bg-neutral-200 text-nowrap w-fit px-4 py-1 flex justify-center items-center gap-1 transition-colors  rounded-lg shadow-sm cursor-pointer': {},
    },
    '.btn-ghost-outline': {
        '@apply text-neutral-800 bg-neutral-100 hover:ring-1 hover:ring-neutral-300 hover:ring-offset-1 text-nowrap w-fit px-4 py-1 flex justify-center items-center gap-1 transition-colors  rounded-lg shadow-sm cursor-pointer': {},
    },

    '.badge': {
        '@apply text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-200 text-sm w-fit px-3 py-0.5 flex justify-center items-center gap-1 transition-colors rounded-full shadow-sm': {}
    },
    '.badge-alt': {
        '@apply text-neutral-50 font-semibold bg-neutral-800 hover:bg-neutral-700 text-sm w-fit px-3 py-0.5 flex justify-center items-center gap-1 transition-colors rounded-full shadow-sm': {}
    },
    '.badge-ghost': {
        '@apply text-neutral-800 bg-neutral-100 hover:bg-neutral-200 text-sm w-fit px-3 py-0.5 flex justify-center items-center gap-1 transition-colors rounded-full shadow-sm': {}
    },

    '.input': {
        '@apply px-3 py-1 text-neutral-800 bg-white border border-neutral-200 focus:outline-none focus:bg-white focus:ring-1 focus:ring-neutral-300 focus:ring-offset-1 [&[error]]:ring-1 [&[error]]:ring-offset-1 [&[error]]:!ring-red-400 disabled:opacity-[0.6] disabled:cursor-not-allowed disabled:bg-neutral-100 transition-colors shadow-sm rounded-lg': {},
    },

    '.input-file': {
        '@apply text-neutral-800 bg-white border border-neutral-200 focus:outline-none focus:bg-white hover:ring-1 hover:ring-neutral-300 hover:ring-offset-1 focus:ring-1 focus:ring-neutral-300 focus:ring-offset-1 [&[error]]:ring-1 [&[error]]:ring-offset-1 [&[error]]:!ring-red-400 disabled:opacity-[0.6] disabled:cursor-not-allowed disabled:bg-neutral-100 transition-colors shadow-sm rounded-lg file:px-4 file:py-1.5 file:border-none file:bg-neutral-100 file:text-neutral-800 file:cursor-pointer file:mr-2 cursor-pointer': {}
    },

    '.input-icon': {
        '@apply text-neutral-800 bg-white py-1 relative flex !gap-0 items-center justify-between border border-neutral-200 has-[:focus]:ring-1 has-[:focus]:ring-neutral-300 has-[:focus]:ring-offset-1 has-[[error]]:ring-1 has-[[error]]:ring-offset-1 has-[[error]]:!ring-red-400 has-[[disabled]]:opacity-[0.6] has-[[disabled]]:cursor-not-allowed has-[[disabled]]:bg-neutral-100 shadow-sm rounded-lg': {},
    },

    '.input-icon input': {
        '@apply focus:outline-none w-full px-3 disabled:pointer-events-none': {},
    },
    '.input-icon input.right': {
        '@apply !pr-0': {},
    },
    '.input-icon input.left': {
        '@apply !pl-0': {},
    },


    '.input-icon .icon': {
        '@apply text-2xl px-1': {},
    },

    '.checkbox': {
        '@apply accent-neutral-800 cursor-pointer': {}
    },

    '.textarea': {
        '@apply px-3 py-1 text-neutral-800 bg-white border border-neutral-200 focus:outline-none focus:bg-white focus:ring-1 focus:ring-neutral-300 focus:ring-offset-1 [&[error]]:ring-1 [&[error]]:ring-offset-1 [&[error]]:!ring-red-400 disabled:opacity-[0.6] disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:resize-none transition-colors shadow-sm rounded-lg': {}
    },

    '.select': {
        '@apply px-3 py-1 text-neutral-800 bg-white border border-neutral-200 focus:outline-none hover:ring-1 focus:ring-1 ring-neutral-300 ring-offset-1 [&[error]]:ring-1 [&[error]]:ring-offset-1 [&[error]]:!ring-red-400 disabled:opacity-[0.6] disabled:cursor-not-allowed disabled:bg-neutral-100 transition-colors shadow-sm rounded-lg cursor-pointer': {},
    },

    '.link': {
        '@apply text-neutral-800 cursor-pointer hover:underline': {}
    },
    '.link-animated': {
        "@apply text-neutral-800 cursor-pointer relative h-fit w-fit before:content-[''] before:bg-neutral-800 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:transition-[width] before:duration-300 before:ease-in-out before:hover:w-full": {},
    },

    ".tooltip-container": {
        "@apply relative": {}
    },
    ".tooltip-container:hover .tooltip": {
        "@apply opacity-100": {}
    },
    ".tooltip-container:hover .tooltip-alt": {
        "@apply opacity-100": {}
    },
    ".tooltip": {
        "@apply text-neutral-800 bg-white text-sm border border-neutral-200 pointer-events-none opacity-0 transition-opacity rounded-lg px-2 py-0.5 absolute top-0 left-0 duration-200 z-10": {}
    },
    ".tooltip-alt": {
        "@apply text-neutral-50 bg-neutral-800 text-sm pointer-events-none opacity-0 transition-opacity rounded-lg px-2 py-0.5 absolute top-0 left-0 duration-200 z-10": {}
    },
    ".tooltip-t": {
        "@apply -translate-y-[110%] left-[50%] translate-x-[-50%]": {}
    },
    ".tooltip-b": {
        "@apply top-full left-[50%] translate-x-[-50%] mt-1": {}
    },
    ".tooltip-l": {
        "@apply -translate-x-[110%] top-[50%] translate-y-[-50%] mr-1": {}
    },
    ".tooltip-r": {
        "@apply left-full top-[50%] translate-y-[-50%] ml-1": {}
    },

    ".input-number": {
        "@apply text-neutral-800 bg-white border border-neutral-200 focus-within:ring-1 focus-within:ring-neutral-300 focus-within:ring-offset-1 [&[error]]:ring-1 [&[error]]:ring-offset-1 [&[error]]:!ring-red-400 disabled:opacity-[0.6] disabled:cursor-not-allowed shadow-sm rounded-lg": {}
    },
    ".input-number input": {
        "@apply w-10 px-3 py-1 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center focus:outline-none": {}
    },
    ".input-number-remove": {
        "@apply px-3 py-1 border-r border-neutral-200 hover:bg-neutral-100": {}
    },
    ".input-number-add": {
        "@apply px-3 py-1 border-l border-neutral-200 hover:bg-neutral-100": {}
    },
}

module.exports = plugin(function ({ addComponents }) {
    addComponents(components);
})