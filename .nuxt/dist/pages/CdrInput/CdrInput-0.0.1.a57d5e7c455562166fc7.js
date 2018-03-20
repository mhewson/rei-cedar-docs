webpackJsonp([37],{"ZDY+":function(t,n){t.exports='<section><h1><span class="display-name">CdrInput</span></h1>\n<p><span class="file">src/components/input/cdrInput.vue<span></p>\n<p>Cedar 2 component for input</p>\n<p><strong>NOTE:</strong> <code>v-model</code> is required.</p>\n<h3><button class=\'title\'>PROPS, METHODS, EVENTS, SLOTS</button></h3>\n<table>\n<thead>\n<tr>\n<th>Prop Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Require</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td><code>id</code> for the input that is mapped to the label <code>for</code> attribute. If one is not provided, it will be auto generated.</td>\n</tr>\n<tr>\n<td>label</td>\n<td>string</td>\n<td>n/a</td>\n<td>true</td>\n<td>Label text. This is required for a11y even if hiding the label with <code>hideLabel</code>.</td>\n</tr>\n<tr>\n<td>hideLabel</td>\n<td>boolean</td>\n<td>n/a</td>\n<td>false</td>\n<td>Removes the label element but sets the input <code>aria-label</code> to <code>label</code> text for a11y.</td>\n</tr>\n<tr>\n<td>multiLine</td>\n<td>boolean</td>\n<td>n/a</td>\n<td>false</td>\n<td>Changes the input to a textarea.</td>\n</tr>\n<tr>\n<td>pattern</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>Regex validation pattern. Useful for simple validation.</td>\n</tr>\n<tr>\n<td>patternError</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>Error message to be displayed when <code>pattern</code> validation fails.</td>\n</tr>\n<tr>\n<td>feedback</td>\n<td>boolean</td>\n<td>n/a</td>\n<td>false</td>\n<td>Enables icon feedback as part of validation for valid, warn, and error states.</td>\n</tr>\n<tr>\n<td>type</td>\n<td>string</td>\n<td>&quot;text&quot;</td>\n<td>false</td>\n<td>Input type. NOTE: This component is meant for text style inputs. Other input types (checkbox, radio) have their own components.</td>\n</tr>\n<tr>\n<td>rules</td>\n<td>array</td>\n<td>function() { return []; }</td>\n<td>false</td>\n<td>Array of functions. Provide your own validation function(s). Takes the input string and outputs an object with a state and message. State is a String with value <code>valid</code>, <code>warning</code>, or <code>error</code>. Message is any String.</td>\n</tr>\n<tr>\n<td>debounce</td>\n<td>boolean,number</td>\n<td>false</td>\n<td>false</td>\n<td>Boolean or Number. <code>true</code> has a default of 500ms. Providing a number will set debounce to that (in ms). <code>false</code> is no debounce.</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>Event Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>paste</td>\n<td>event</td>\n<td>Fires when text is pasted into input.</td>\n</tr>\n<tr>\n<td>focus</td>\n<td>event</td>\n<td>Fires when input gains focus.</td>\n</tr>\n<tr>\n<td>blur</td>\n<td>event</td>\n<td>Fires when input loses focus.</td>\n</tr>\n<tr>\n<td>input</td>\n<td>string</td>\n<td>Current input value. Fires while typing.</td>\n</tr>\n<tr>\n<td>change</td>\n<td>string</td>\n<td>New input value (if changed). Fires on blur.</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>Slot</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>preicon</td>\n<td>Icon to be put in front of input</td>\n</tr>\n</tbody>\n</table>\n</section>\n'},bizv:function(t,n,e){"use strict";var d=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{attrs:{id:"cedar-comp"},domProps:{innerHTML:this._s(this.md)}})])};d._withStripped=!0;var r={render:d,staticRenderFns:[]};n.a=r},dnrP:function(t,n,e){"use strict";var d=e("ZDY+"),r=e.n(d);n.a={name:"CdrInput-0-0-1",computed:{md:function(){return r.a}}}},oUAM:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var d=e("dnrP"),r=e("bizv"),a=e("VU/8")(d.a,r.a,!1,null,null,null);a.options.__file="pages/CdrInput/CdrInput-0.0.1.vue",n.default=a.exports}});