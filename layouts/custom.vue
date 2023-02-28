<template>
    <div class="min-h-screen">
        <PartialsHeader />
        <main class="flex flex-col flex-grow lg:w-9/12 mb-auto ml-auto mr-auto mt-40 p-4">
            <slot />
        </main>
        <PartialsFooter />
    </div>
</template>