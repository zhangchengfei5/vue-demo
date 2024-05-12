import {defineStore} from "pinia";

const useIndexStore = defineStore('index',{
    state: () => ({
        isDark: false
    }),
    getters: {},
    actions: {
        changeDark() {
            console.log('打印看看', this.isDark)
            this.isDark = !this.isDark
        }
    }
})

export default useIndexStore
