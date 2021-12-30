export const proxy = (vm) => {
    Object.keys(vm.$data).forEach(key => {
        Object.defineProperty(vm, key, {
            get: () => vm.$data[key],
            set: (value) => { vm.$data[key] = value }
        })
    })
}