import {$} from "@core/dom";

export function resizeHandler($root, event) {
    const $resizer = $(event.target)
    const $parent = $resizer.closest("[data-type='resizable']") // родительский элемент(тот который нужно изменять)
    const coords = $parent.getCords()
    const type = $resizer.data.resize
    const sideProp = type === "col" ? "bottom" : "right"
    let value
    $resizer.css({
        opacity:1,
        zIndex:1000,
        [sideProp]: "-5000px"

    })
    document.onmousemove = e => { // добавляем событие
        if(type === "col") {
            const delta = e.pageX - coords.right
            value = (coords.width + delta)
            $resizer.css({ right: -delta + "px"})
            // $parent.css({width:value + "px"})
            // cells.forEach(el => el.style.width = value + "px")
        } else {
            const delta = e.pageY - coords.bottom
            value = coords.height + delta
            $resizer.css({bottom: -delta + "px"})
        }

    }
    document.onmouseup = () => {
        document.onmousemove = null // чистим событие передвижения мыши
        document.onmouseup = null
        if(type === "col") {
            $parent.css({width:value + "px"})
            $root.findAll(`[data-col="${$parent.data.col}"]`)
                .forEach(el => el.style.width = value + "px")
        } else {
            $parent.css({height:value + "px"})
        }
        $resizer.css({
            opacity:0,
            bottom:0,
            right:0
        })
    }
}