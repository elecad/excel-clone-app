export class Emitter {
    constructor() {
        this.listeners = {}
    }
    //Уведомляем слушателей
    emit(event, ...args) {
        if(!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }
    // Подписка на уведомление(добавление нового слушателя)
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || [] // динамическое обращение
        this.listeners[event].push(fn)

        return () => { // Возвращаем функцию отписки
            this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}

