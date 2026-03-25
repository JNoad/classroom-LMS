<template>
    <div id="class-list">
        <UTable :data="data" class="flex-1">
              <template #caption>
                    Class 2H — 10 March 2026
            </template>
        </UTable>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        id: '4600',
                        date: '2024-03-11T15:30:00',
                        status: 'paid',
                        email: 'james.anderson@example.com',
                        amount: 594
                    },
                    {
                        id: '4599',
                        date: '2024-03-11T10:10:00',
                        status: 'failed',
                        email: 'mia.white@example.com',
                        amount: 276
                    },
                    {
                        id: '4598',
                        date: '2024-03-11T08:50:00',
                        status: 'refunded',
                        email: 'william.brown@example.com',
                        amount: 315
                    },
                    {
                        id: '4597',
                        date: '2024-03-10T19:45:00',
                        status: 'paid',
                        email: 'emma.davis@example.com',
                        amount: 529
                    },
                    {
                        id: '4596',
                        date: '2024-03-10T15:55:00',
                        status: 'paid',
                        email: 'ethan.harris@example.com',
                        amount: 639
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    #class-list {
        table {
            // background-color: mix(#333, $color-primary, 70%);
            padding: 0;
            border: 0;
            outline: none;
            background-color: mix(#f8f8f8, $color-primary, 99%);
            border-radius: 2px;
            border-collapse: collapse;
        }
        tr {
            padding: 0px;
        }
        th {
            text-align: left;
        }
        th, td {
            border: 1px solid mix(#333, $color-primary, 95%);
            border-radius: 2px;
            padding: 0 6px;
        }
    }
</style>