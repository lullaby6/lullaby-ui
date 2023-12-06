document.head.innerHTML += `
<style type="text/tailwindcss">
@layer components {

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
    @apply bg-neutral-900;
}

.text {
    @apply text-neutral-800;
}

.bg {
    @apply bg-white;
}

.text-dark {
    @apply text-neutral-50;
}

.bg-dark {
    @apply bg-neutral-900;
}

.button {
    @apply text-neutral-800 bg-neutral-100 border border-neutral-300 rounded px-4 py-1 shadow hover:shadow-md hover:bg-neutral-200 h-fit w-fit;
}

.dark-button {
    @apply text-neutral-50 font-semibold bg-neutral-900 border border-neutral-700 rounded px-4 py-1 shadow hover:shadow-md hover:bg-neutral-800 h-fit w-fit;
}

.link {
    @apply text-neutral-800 cursor-pointer relative h-fit w-fit;
}

.link:before {
    @apply bg-neutral-800;
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
    @apply text-neutral-50 cursor-pointer relative h-fit w-fit;
}

.dark-link:before {
    @apply bg-neutral-50;
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
    @apply text-neutral-700 text-sm bg-neutral-100 border border-neutral-300 rounded-full px-3 py-[2.5px] shadow hover:bg-neutral-200 hover:shadow-md h-fit w-fit;
}

.dark-badget {
    @apply text-neutral-50 text-sm bg-neutral-900 border border-neutral-700 rounded-full px-3 py-[2.5px] shadow hover:bg-neutral-800 hover:shadow-md h-fit w-fit;
}

.title {
    @apply text-neutral-800 text-3xl font-semibold;
}

.dark-title {
    @apply text-neutral-50 text-3xl font-semibold;
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
    @apply text-neutral-700 bg-white rounded z-10 p-6 shadow;
}

.dark-modal-content {
    @apply text-neutral-50 bg-neutral-900 rounded z-10 p-6 shadow border border-neutral-600;
}

.card {
    @apply text-neutral-700 bg-white flex flex-col gap-4 p-6 shadow border border-neutral-300 rounded shadow;
}

.card-header {
    @apply flex flex-col w-full;
}

.card-title {
    @apply text-2xl font-semibold text-neutral-800;
}

.card-desc {
    @apply text-neutral-600;
}

.card-content {
    @apply w-full;
}

.card-footer {
    @apply flex w-full;
}

.dark-card {
    @apply bg-neutral-900 text-neutral-100 flex flex-col gap-4 p-6 shadow border border-neutral-700 rounded shadow;
}

.dark-card-title {
    @apply text-2xl font-semibold text-neutral-50;
}

.dark-card-desc {
    @apply text-neutral-400;
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
    @apply flex flex-col items-center justify-center w-[500px] h-64 border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-100 shadow hover:shadow-xl hover:bg-neutral-200;
}

.dropzone-content {
    @apply flex flex-col items-center justify-center py-6 gap-3;
}

.dropzone-icon {
    @apply w-10 h-10 text-neutral-700;
}

.dropzone-title {
    @apply text-sm text-neutral-800;
}

.dropzone-desc {
    @apply text-xs text-neutral-600;
}

.dropzone-input {
    @apply file:hidden text-xs text-neutral-700 text-center flex justify-center items-center w-[125px];
}

.dark-dropzone {
    @apply flex flex-col items-center justify-center w-[500px] h-64 border-2 border-neutral-700 border-dashed rounded-lg cursor-pointer bg-neutral-900 shadow hover:shadow-xl hover:bg-neutral-800;
}

.dark-dropzone-icon {
    @apply w-10 h-10 text-neutral-100;
}

.dark-dropzone-title {
    @apply text-sm text-neutral-50;
}

.dark-dropzone-desc {
    @apply text-xs text-neutral-300;
}

.dark-dropzone-input {
    @apply file:hidden text-xs text-neutral-200 text-center flex justify-center items-center w-[125px];
}

.input {
    @apply text-neutral-700 bg-neutral-100 border border-neutral-300 rounded focus:outline-none focus:ring-1 focus:ring-neutral-300 px-2 py-1 shadow h-fit;
}

.dark-input {
    @apply placeholder-neutral-500 text-neutral-50 bg-neutral-900 border border-neutral-600 rounded focus:outline-none focus:ring-1 focus:ring-neutral-600 px-2 py-1 shadow h-fit;
}

.input-file {
    @apply file:px-3 file:py-1 file:border-none file:bg-neutral-200 file:h-full file:text-neutral-700 file:cursor-pointer text-neutral-500 bg-neutral-100 rounded border border-neutral-300 p-0 m-0 cursor-pointer hover:ring-1 hover:ring-neutral-300 shadow pr-2 h-fit;
}

.dark-input-file {
    @apply file:px-3 file:py-1 file:border-none file:bg-neutral-900 file:h-full file:text-neutral-50 file:cursor-pointer text-neutral-500 bg-neutral-800 rounded border border-neutral-600 p-0 m-0 cursor-pointer hover:ring-1 hover:ring-neutral-600 shadow pr-2 h-fit;
}


}
</style>
`