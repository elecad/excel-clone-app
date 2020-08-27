import {$} from "@core/dom";
import {Emitter} from "@core/Emitter";

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector) // тот Дом объект, в который нужно складывать шаблоны
        this.components = options.components || [] // список необходимых компонентов
        this.emitter = new Emitter()
    }

    getRoot() { // возвращает корневую ноду для Excel
        const $root = $.create("div","excel")
        const componentsOptions = {
            emitter: this.emitter
        }
        this.components = this.components.map(Component => {
            const $el = $.create("div", Component.className)
            const component = new Component($el,componentsOptions)
            $el.html(component.toHTML());
            $root.append($el)
            return component
        })

        return $root
    }


    render() {
        this.$el.append(this.getRoot())
        this.components.forEach(component => component.init())
    }

    destroy() {
        this.components.forEach(component => component.destroy())
    }
}