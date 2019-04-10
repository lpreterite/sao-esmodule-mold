<% if(mode === 'vue-component'){ %>
import component from "./component.vue"
export * from "./utils"
export default component
<% }else{ %>
export * from "./utils"
export default function(){
    return 'yeah!'
}
<% } %>
