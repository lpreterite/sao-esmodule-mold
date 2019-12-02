const { expect, assert } = require("chai")

<% if(mode === 'vue-component'){ %>
const jsdom = require('jsdom-global')
jsdom()
<% } %>

global.expect = expect
global.assert = assert
