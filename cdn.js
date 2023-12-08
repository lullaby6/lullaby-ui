document.head.innerHTML += `
<style type="text/tailwindcss">
@layer components {

.flex-center {
    @apply flex justify-center items-center;
}

.text-light {
    @apply text-neutral-800;
}

.text-light-alt {
    @apply text-neutral-600;
}

.bg-light {
    @apply bg-white;
}

.bg-light-alt {
    @apply bg-neutral-100;
}

.bg-light-hover {
    @apply bg-neutral-200;
}

.border-light {
    @apply border-neutral-300;
}

.ring-light {
    @apply ring-neutral-300;
}

.light-colors {
    @apply text-light bg-light;
}

.text-dark {
    @apply text-neutral-100;
}

.text-dark-alt {
    @apply text-neutral-400;
}

.bg-dark {
    @apply bg-[#111114];
}

.bg-dark-alt {
    @apply bg-[#131316];
}

.bg-dark-hover {
    @apply bg-[#17171C];
}

.border-dark {
    @apply border-[#202026];
}

.ring-dark {
    @apply ring-[#202026];
}

.dark-colors {
    @apply text-dark bg-dark;
}

.scrollbar::-webkit-scrollbar {
    @apply w-4;
}

.scrollbar::-webkit-scrollbar-thumb{
    @apply bg-neutral-400;
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 9999px;
}

.scrollbar::-webkit-scrollbar-track {
    @apply bg-white;
}

.dark-scrollbar::-webkit-scrollbar {
    @apply w-4;
}

.dark-scrollbar::-webkit-scrollbar-thumb{
    @apply bg-neutral-600;
    border: 5px solid transparent;
    background-clip: padding-box;
    border-radius: 9999px;
}

.dark-scrollbar::-webkit-scrollbar-track {
    @apply bg-dark;
}

.theme-switcher {
    @apply text-light bg-light-alt border border-light rounded-full p-1 cursor-pointer shadow hover:bg-light-hover hover:shadow-md dark:text-dark dark:bg-dark dark:border-dark dark:hover:bg-dark-hover select-none;
}

.theme-switcher svg {
    @apply w-5 h-5;
}

.button {
    @apply text-light bg-light-alt border border-light rounded px-4 py-1 shadow hover:shadow-md hover:bg-light-hover h-fit w-fit;
}

.dark-button {
    @apply text-dark bg-dark-alt font-semibold border border-dark rounded px-4 py-1 shadow hover:shadow-md hover:bg-dark-hover h-fit w-fit;
}

.link {
    @apply text-light cursor-pointer relative h-fit w-fit;
}

.link:before {
    @apply bg-dark-hover;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 1px;
    transition: width .2s ease-in-out;
}

.link:hover:before {
    width: 100%;
}

.dark-link {
    @apply text-dark cursor-pointer relative h-fit w-fit;
}

.dark-link:before {
    @apply bg-light-alt;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 1px;
    transition: width .2s ease-in-out;
}

.dark-link:hover:before {
    width: 100%;
}

.badget {
    @apply text-light bg-light-alt text-sm border border-light rounded-full px-3 py-[2.5px] shadow hover:bg-light-hover hover:shadow-md h-fit w-fit;
}

.dark-badget {
    @apply text-dark bg-dark text-sm border border-dark rounded-full px-3 py-[2.5px] shadow hover:bg-dark-hover hover:shadow-md h-fit w-fit;
}

.title {
    @apply text-light text-3xl font-semibold;
}

.dark-title {
    @apply text-light text-3xl font-semibold;
}

.modal-container {
    @apply w-screen h-screen fixed left-0 top-0 flex justify-center items-center z-10;
}

.modal-overlay {
    @apply w-full h-full bg-black absolute left-0 top-0 opacity-25 z-10;
}

.modal-blurred-overlay {
    @apply w-full h-full bg-black absolute left-0 top-0 z-10 backdrop-blur-3xl;
}

.modal-content {
    @apply text-light bg-light rounded z-10 p-6 shadow border border-light;
}

.dark-modal-content {
    @apply text-dark bg-dark rounded z-10 p-6 shadow border border-dark;
}

.card {
    @apply text-light bg-light flex flex-col gap-4 p-6 shadow border border-light rounded shadow;
}

.card-header {
    @apply flex flex-col w-full;
}

.card-title {
    @apply text-light text-2xl font-semibold;
}

.card-desc {
    @apply text-light-alt;
}

.card-content {
    @apply w-full;
}

.card-footer {
    @apply flex w-full;
}

.dark-card {
    @apply text-dark bg-dark flex flex-col gap-4 p-6 shadow border border-dark rounded shadow;
}

.dark-card-title {
    @apply text-dark text-2xl font-semibold;
}

.dark-card-desc {
    @apply text-dark-alt;
}

.neon-red-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.red.600');
}

.neon-red-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.red.600');
}

.neon-red-md {
    box-shadow: 0 0 12px 2.5px theme('colors.red.600');
}

.neon-red-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.red.600');
}

.neon-red-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.red.600');
}

.neon-red-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.red.600');
}

.neon-blue-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.blue.700');
}

.neon-blue-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.blue.700');
}

.neon-blue-md {
    box-shadow: 0 0 12px 2.5px theme('colors.blue.700');
}

.neon-blue-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.blue.700');
}

.neon-blue-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.blue.700');
}

.neon-blue-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.blue.700');
}

.neon-green-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.green.600');
}

.neon-green-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.green.600');
}

.neon-green-md {
    box-shadow: 0 0 12px 2.5px theme('colors.green.600');
}

.neon-green-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.green.600');
}

.neon-green-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.green.600');
}

.neon-green-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.green.600');
}

.neon-yellow-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.yellow.500');
}

.neon-yellow-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.yellow.500');
}

.neon-yellow-md {
    box-shadow: 0 0 12px 2.5px theme('colors.yellow.500');
}

.neon-yellow-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.yellow.500');
}

.neon-yellow-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.yellow.500');
}

.neon-yellow-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.yellow.500');
}

.neon-cyan-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.cyan.500');
}

.neon-cyan-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.cyan.500');
}

.neon-cyan-md {
    box-shadow: 0 0 12px 2.5px theme('colors.cyan.500');
}

.neon-cyan-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.cyan.500');
}

.neon-cyan-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.cyan.500');
}

.neon-cyan-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.cyan.500');
}

.neon-orange-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.orange.500');
}

.neon-orange-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.orange.500');
}

.neon-orange-md {
    box-shadow: 0 0 12px 2.5px theme('colors.orange.500');
}

.neon-orange-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.orange.500');
}

.neon-orange-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.orange.500');
}

.neon-orange-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.orange.500');
}

.neon-rose-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.rose.600');
}

.neon-rose-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.rose.600');
}

.neon-rose-md {
    box-shadow: 0 0 12px 2.5px theme('colors.rose.600');
}

.neon-rose-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.rose.600');
}

.neon-rose-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.rose.600');
}

.neon-rose-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.rose.600');
}

.neon-pink-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.pink.600');
}

.neon-pink-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.pink.600');
}

.neon-pink-md {
    box-shadow: 0 0 12px 2.5px theme('colors.pink.600');
}

.neon-pink-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.pink.600');
}

.neon-pink-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.pink.600');
}

.neon-pink-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.pink.600');
}

.neon-fuchsia-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.fuchsia.600');
}

.neon-fuchsia-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.fuchsia.600');
}

.neon-fuchsia-md {
    box-shadow: 0 0 12px 2.5px theme('colors.fuchsia.600');
}

.neon-fuchsia-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.fuchsia.600');
}

.neon-fuchsia-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.fuchsia.600');
}

.neon-fuchsia-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.fuchsia.600');
}

.neon-purple-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.purple.600');
}

.neon-purple-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.purple.600');
}

.neon-purple-md {
    box-shadow: 0 0 12px 2.5px theme('colors.purple.600');
}

.neon-purple-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.purple.600');
}

.neon-purple-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.purple.600');
}

.neon-purple-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.purple.600');
}

.neon-violet-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.violet.600');
}

.neon-violet-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.violet.600');
}

.neon-violet-md {
    box-shadow: 0 0 12px 2.5px theme('colors.violet.600');
}

.neon-violet-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.violet.600');
}

.neon-violet-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.violet.600');
}

.neon-violet-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.violet.600');
}

.neon-sky-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.sky.500');
}

.neon-sky-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.sky.500');
}

.neon-sky-md {
    box-shadow: 0 0 12px 2.5px theme('colors.sky.500');
}

.neon-sky-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.sky.500');
}

.neon-sky-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.sky.500');
}

.neon-sky-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.sky.500');
}

.neon-indigo-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.indigo.600');
}

.neon-indigo-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.indigo.600');
}

.neon-indigo-md {
    box-shadow: 0 0 12px 2.5px theme('colors.indigo.600');
}

.neon-indigo-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.indigo.600');
}

.neon-indigo-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.indigo.600');
}

.neon-indigo-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.indigo.600');
}

.neon-teal-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.teal.600');
}

.neon-teal-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.teal.600');
}

.neon-teal-md {
    box-shadow: 0 0 12px 2.5px theme('colors.teal.600');
}

.neon-teal-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.teal.600');
}

.neon-teal-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.teal.600');
}

.neon-teal-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.teal.600');
}

.neon-emerald-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.emerald.600');
}

.neon-emerald-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.emerald.600');
}

.neon-emerald-md {
    box-shadow: 0 0 12px 2.5px theme('colors.emerald.600');
}

.neon-emerald-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.emerald.600');
}

.neon-emerald-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.emerald.600');
}

.neon-emerald-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.emerald.600');
}

.neon-lime-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.lime.500');
}

.neon-lime-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.lime.500');
}

.neon-lime-md {
    box-shadow: 0 0 12px 2.5px theme('colors.lime.500');
}

.neon-lime-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.lime.500');
}

.neon-lime-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.lime.500');
}

.neon-lime-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.lime.500');
}

.neon-amber-xs {
    box-shadow: 0 0 4px 2.5px theme('colors.amber.600');
}

.neon-amber-sm {
    box-shadow: 0 0 8px 2.5px theme('colors.amber.600');
}

.neon-amber-md {
    box-shadow: 0 0 12px 2.5px theme('colors.amber.600');
}

.neon-amber-lg {
    box-shadow: 0 0 16px 2.5px theme('colors.amber.600');
}

.neon-amber-xl {
    box-shadow: 0 0 20px 2.5px theme('colors.amber.600');
}

.neon-amber-2xl {
    box-shadow: 0 0 24px 2.5px theme('colors.amber.600');
}

.dropzone {
    @apply text-light bg-light-alt flex flex-col items-center justify-center w-[500px] h-64 border-2 border-light border-dashed rounded-lg cursor-pointer shadow hover:shadow-md hover:bg-light-hover;
}

.dropzone-content {
    @apply flex flex-col items-center justify-center py-6 gap-3;
}

.dropzone-icon {
    @apply text-light-alt w-10 h-10;
}

.dropzone-title {
    @apply text-light text-sm;
}

.dropzone-desc {
    @apply text-light-alt text-xs;
}

.dropzone-input {
    @apply text-light-alt file:hidden text-xs text-center flex justify-center items-center w-[125px];
}

.dark-dropzone {
    @apply text-dark bg-dark-alt flex flex-col items-center justify-center w-[500px] h-64 border-2 border-dark border-dashed rounded-lg cursor-pointer shadow hover:shadow-md hover:bg-dark-hover;
}

.dark-dropzone-icon {
    @apply text-dark-alt w-10 h-10;
}

.dark-dropzone-title {
    @apply text-dark text-sm;
}

.dark-dropzone-desc {
    @apply text-dark-alt text-xs;
}

.dark-dropzone-input {
    @apply text-dark-alt file:hidden text-xs text-center flex justify-center items-center w-[125px];
}

.input {
    @apply text-light bg-light-alt border border-light rounded focus:outline-none focus:ring-1 focus:ring-light px-2 py-1 shadow h-fit;
}

.dark-input {
    @apply text-dark bg-dark-alt placeholder-neutral-500 border border-dark rounded focus:outline-none focus:ring-1 focus:ring-dark px-2 py-1 shadow h-fit;
}

.input-file {
    @apply text-light-alt bg-light-alt file:px-3 file:py-1 file:border-none file:bg-light-hover file:h-full file:text-light-alt file:cursor-pointer rounded border border-light p-0 m-0 cursor-pointer hover:ring-1 hover:ring-light shadow pr-2 h-fit;
}

.dark-input-file {
    @apply text-dark-alt bg-dark-hover file:px-3 file:py-1 file:border-none file:bg-dark file:h-full file:text-dark file:cursor-pointer rounded border border-dark p-0 m-0 cursor-pointer hover:ring-1 hover:ring-dark shadow pr-2 h-fit;
}

.input-auto-width {
    @apply min-w-[15ch] w-[15ch];
}

.textarea {
    @apply text-light bg-light-alt border border-light relative rounded focus:outline-none focus:ring-1 focus:ring-light px-2 py-1 shadow min-h-[75px] h-[75px] max-h-[250px];;
}

.dark-textarea {
    @apply text-dark bg-dark-alt border border-dark placeholder:text-dark-alt rounded focus:outline-none focus:ring-1 focus:ring-dark px-2 py-1 shadow min-h-[75px] h-[75px] max-h-[250px];
}

.textarea-resize{
    @apply relative w-fit h-fit;
}

.textarea-resize .textarea::-webkit-resizer{
}

.textarea-resize::before {
    content: "";
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 7.5px 7.5px 7.5px;
    border-color: transparent transparent #aaa transparent;
    transform: rotate(135deg);
    translate: 4.5px -5px;
}

.dark-textarea-resize{
    @apply relative w-fit h-fit;
}

.dark-textarea-resize .dark-textarea::-webkit-resizer{
}

.dark-textarea-resize::before {
    content: "";
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 7.5px 7.5px 7.5px;
    border-color: transparent transparent #45454C transparent;
    transform: rotate(135deg);
    translate: 4.5px -5px;
}

}
</style>
`