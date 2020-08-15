import {capitalize} from "@core/utils";

export class DomListener {
    constructor($root,listeners = []) {
        if(!$root) {
            throw new Error(`Нет $root для DomListener!`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if(!this[method]) {
                throw new Error (`Метод ${method} не найден для ${this.name || ""} компенента`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener,this[method])
        })
    }


}
function getMethodName(eventName) {
    return "on" + capitalize(eventName)
}