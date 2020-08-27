import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {

    constructor($root,options = {}) {
        super($root,options.listeners)
        this.name = options.name || ""
        this.emitter = options.emitter
        this.prepare()
        this.insubscribers = []
    }

    prepare()  { // Настраиваем компонент до init

    }
    toHTML() { // возвращает шаблон компонента
        return ""
    }

    $emit(event,...args) { // Уведомляем слушателей о событии
        this.emitter.emit(event,...args)
    }

    $on(event, fn) { // Подписываемся на события
        const unsub = this.emitter.subscribe(event,fn)
        this.insubscribers.push(unsub)
    }

    init() { // Иницилищируем компонент + добавляем слушателей
        this.initDOMListeners()
    }

    destroy() { // Удаляем компонент + чистим слушателей
        this.removeDOMListeners()
        this.insubscribers.forEach(unsub => unsub())
    }
}