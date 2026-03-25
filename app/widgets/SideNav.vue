<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Dashboard</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/class">Class</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/subjects">Subjects</NuxtLink>
            </li>
            
            <li>
                <NuxtLink to="/lesson-plan">Lesson Plans</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/exercises">Exercises</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    nav {
        background-color: $color-primary;
        height: 100%;
        padding: 6px 16px;
        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            list-style: none;
            li {
                a {
                    color: white;
                    text-decoration: none;
                    text-wrap: nowrap;
                    &:hover, &.router-link-active {
                        color: lighten(crimson, 15%);
                    }
                }
            }
        }
    }
</style>