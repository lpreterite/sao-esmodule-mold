import { expect } from "chai"

<% if(mode === 'vue-component'){ %>
import jsdom from 'jsdom-global'
jsdom()
<% } %>

global.expect = expect