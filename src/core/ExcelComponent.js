import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {

    constructor($root,options = {}) {
        super($root,options.listeners)
        this.neme = options.name || ""
    }
    toHTML() { // возвращает шаблон компонента
        return ""
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
    }
}