<template>
    <div class="card text-center">
        <img class="skeleton-img thumb ">
        <div class="skeleton-title bg-slate-500 mt-4"></div>
    </div>
</template>

<style scoped>
.skeleton-title{
    padding-top: 2%;
    width: 100%;
    height: 1rem;
    display: block;
    animation: pulse-bg 2s infinite;
}

.skeleton-img {
    width: 100%;
    padding-top: 30%;
    animation: pulse-bg 2s infinite;
}

@keyframes pulse-bg {
    0% {
        background-color: #eee;
    }
    50% {
        background-color: #ebebeb;
    }
    100% {
        background-color: #ebebeb;
    }
}
</style>