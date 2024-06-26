import {Excel} from "@/components/excel/Excel";
import {Header} from "@/components/header/Header";
import {Table} from "@/components/table/Table";
import {Toolbar} from "@/components/toolbar/Toolbar";
import {Formula} from "@/components/formula/Formula";
import './scss/index.scss'

const excel = new Excel("#app", {
    components:[Header,Toolbar,Formula,Table] // список компонентов для рендра
})

excel.render() // запуск рендра