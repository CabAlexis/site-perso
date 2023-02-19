<template>
    <div class="flex flex-col w-full h-screen bg-green-50">
        <PartialsHeader />
        <main class="flex-grow w-full h-full p-4 mb-auto">
            <slot />
        </main>
        <PartialsFooter />
    </div>
</template>