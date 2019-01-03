import Component from "can-component";
import "./can-inner-inner";

Component.extend({
    tag: "can-inner",
    view: `<span><can-inner-inner val:from="val"></can-inner-inner></span>`,
    ViewModel: {
        val: {
            type: "string"
        }
    }
});