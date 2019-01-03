import Component from "can-component";

Component.extend({
    tag: "can-inner-inner",
    view: `<span>{{val}}</span>`,
    ViewModel: {
        val: {
            type: "string"
        }
    }
});