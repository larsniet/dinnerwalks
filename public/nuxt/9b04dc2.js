(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{240:function(e,t,o){var content=o(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("2d63a94b",content,!0,{sourceMap:!1})},256:function(e,t,o){"use strict";o(240)},257:function(e,t,o){var n=o(28)(!1);n.push([e.i,".checkout[data-v-5e7f1666]{margin-top:30px;background-color:#fcfcfc;box-shadow:0 4px 49px 6px rgba(0,0,0,.25);text-align:left;padding:100px 90px;margin-right:200px}.checkout--sub[data-v-5e7f1666]{max-width:700px;width:100%}.flex_container--item[data-v-5e7f1666]{flex:1 1 auto}.boekingsgegevens[data-v-5e7f1666]{padding:50px;box-shadow:18px 15px 23px -13px rgba(0,0,0,.1);border-radius:20px;background-color:#fff;margin-top:50px;max-width:570px;width:100%}.boekingsgegevens--title[data-v-5e7f1666]{font-weight:600;color:#000;letter-spacing:.16em;text-transform:uppercase;margin-bottom:20px;font-size:23px;margin-left:10px}.boekingsgegevens_field[data-v-5e7f1666]{display:flex;flex-flow:column-reverse}label[data-v-5e7f1666]{font-size:22px;font-weight:600;margin-bottom:10px;margin-left:10px;letter-spacing:.05em;color:#b7b7b7;z-index:0}input[data-v-5e7f1666],label[data-v-5e7f1666]{transition:all .2s;touch-action:manipulation;background:none}input[data-v-5e7f1666],select[data-v-5e7f1666],textarea[data-v-5e7f1666]{font-family:Avenir,Helvetica,Arial,sans-serif;resize:none;border:1px solid rgba(0,0,0,.185);border-radius:20px;margin-bottom:10px;padding:10px 5px 10px 20px;color:#000;font-size:22px;-webkit-appearance:none;cursor:pointer;z-index:1}input[data-v-5e7f1666]:focus,select[data-v-5e7f1666]:focus,textarea[data-v-5e7f1666]:focus{border:2px solid #ffb496}input:-moz-placeholder-shown+label[data-v-5e7f1666]{cursor:text;max-width:66.66%;white-space:nowrap;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(.5rem,3rem) scale(1.1)}input:-ms-input-placeholder+label[data-v-5e7f1666]{cursor:text;max-width:66.66%;white-space:nowrap;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(.5rem,3rem) scale(1.1)}input:placeholder-shown+label[data-v-5e7f1666]{cursor:text;max-width:66.66%;white-space:nowrap;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(.5rem,3rem) scale(1.1)}[data-v-5e7f1666]::-moz-placeholder{color:rgba(0,0,0,.274)}[data-v-5e7f1666]::placeholder{color:rgba(0,0,0,.274)}[data-v-5e7f1666]:-ms-input-placeholder{color:rgba(0,0,0,.274)}[data-v-5e7f1666]::-ms-input-placeholder{color:rgba(0,0,0,.274)}[data-v-5e7f1666]::-webkit-input-placeholder{opacity:0;-webkit-transition:inherit;transition:inherit}input[data-v-5e7f1666]:focus::-webkit-input-placeholder{opacity:1}input:not(:-moz-placeholder-shown)+label[data-v-5e7f1666]{transform:translate(0) scale(1);cursor:pointer}input:not(:-ms-input-placeholder)+label[data-v-5e7f1666]{transform:translate(0) scale(1);cursor:pointer}input:focus+label[data-v-5e7f1666],input:not(:placeholder-shown)+label[data-v-5e7f1666]{transform:translate(0) scale(1);cursor:pointer}.boekingskosten[data-v-5e7f1666]{padding:50px;background-color:#ffb496;border-radius:20px;box-shadow:18px 15px 23px -13px rgba(0,0,0,.1);color:#fff;height:100%;margin-top:50px;margin-left:30px;width:auto}.boekingskosten--title[data-v-5e7f1666]{font-weight:600;font-size:22px;padding-bottom:10px}.boekingskosten_prijs[data-v-5e7f1666]{padding:10px 0;position:relative}.boekingskosten_prijs--teken[data-v-5e7f1666]{display:inline-block;color:#ffede5;font-weight:700;font-size:20px;top:10px;left:-15px;position:absolute}.boekingskosten_prijs--amount[data-v-5e7f1666]{display:inline-block;font-size:46px;font-weight:700}.boekingskosten_prijs--after[data-v-5e7f1666]{display:inline-block;color:#ffede5;font-weight:700}.boekingskosten--sub[data-v-5e7f1666]{color:hsla(0,0%,100%,.7);padding:10px 0}.boekingskosten_extra[data-v-5e7f1666]{background-color:#ffccb8;color:#fff;margin-top:10px;padding:20px}.checkout_buttons[data-v-5e7f1666]{margin:50px 0;position:relative;width:100%}.checkout_buttons--return[data-v-5e7f1666]{color:#b7b7b7;text-decoration:none;font-weight:500;font-size:20px}.checkout_buttons--betalen[data-v-5e7f1666]{margin:0;position:absolute;top:50%;right:0;transform:translateY(-50%);background-color:#ffb496;padding:20px 30px;border-radius:20px;font-size:20px;font-weight:500;color:#fff;border:none;box-shadow:18px 15px 23px -13px rgba(0,0,0,.1)}",""]),e.exports=n},325:function(e,t,o){"use strict";o.r(t);var n={name:"Checkout",asyncData:function(){return{peopleCount:null,price:0,timezone:""}},methods:{goToWalks:function(){this.$router.push("/walks")}},computed:{getPrice:function(){return 1==this.peopleCount?3:2==this.peopleCount?6:0}}},r=(o(256),o(17)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"checkout"},[o("h1",{staticClass:"checkout--title header--title"},[e._v("\n        Bevestig je boeking en betaal\n    ")]),e._v(" "),o("p",{staticClass:"checkout--sub header--sub"},[e._v("\n        Bekijk hieronder je boeking en bevestig de gegevens. Zodra de\n        betaling voltooid is, krijg je een e-mail met de boekingsgegevens en\n        een link naar de desbetreffende wandeling.\n    ")]),e._v(" "),o("div",{staticClass:"flex_container"},[o("div",{staticClass:"flex_container--item boekingsgegevens"},[o("h3",{staticClass:"boekingsgegevens--title"},[e._v("Boekingsgegevens")]),e._v(" "),e._m(0),e._v(" "),o("div",{staticClass:"boekingsgegevens_field"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.peopleCount,expression:"peopleCount"}],attrs:{name:"peopleCount",id:"peopleCount"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.peopleCount=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"null"}},[e._v("Kies het aantal personen")]),e._v(" "),o("option",{attrs:{value:"1"}},[e._v("1")]),e._v(" "),o("option",{attrs:{value:"2"}},[e._v("2")])]),e._v(" "),o("label",{attrs:{for:"peopleCount"}},[e._v("Aantal personen")])]),e._v(" "),o("div",{staticClass:"boekingsgegevens_field"},[o("DatePicker",{attrs:{mode:"dateTime",type:"date",name:"date",id:"date",placeholder:"20 Maart 2021 om 12:30",timezone:e.timezone,"minute-increment":5,is24hr:"",locale:"nl"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.inputValue,r=t.inputEvents;return[o("input",e._g({domProps:{value:n}},r))]}}])}),e._v(" "),o("label",{attrs:{for:"date"}},[e._v("Datum van de wandeling")])],1),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)]),e._v(" "),o("div",{staticClass:"flex_container--item boekingskosten"},[o("h3",{staticClass:"boekingskosten--title"},[e._v("Deze boeking kost")]),e._v(" "),o("div",{staticClass:"boekingskosten_prijs"},[o("p",{staticClass:"boekingskosten_prijs--teken"},[e._v("€")]),e._v(" "),o("p",{staticClass:"boekingskosten_prijs--amount"},[e._v(e._s(e.getPrice))]),e._v(" "),o("p",{staticClass:"boekingskosten_prijs--after"},[e._v(".00")])]),e._v(" "),o("p",{staticClass:"boekingskosten--sub"},[e._v("\n                Het is niet mogelijk om dit bedrag terug te krijgen.\n                Wandelen kan namelijk altijd!\n            ")]),e._v(" "),o("p",{staticClass:"boekingskosten_extra"},[e._v("\n                Betalen kan via credit card, IDEAL, Paypal, Klarna, etc.\n            ")])])]),e._v(" "),o("div",{staticClass:"checkout_buttons"},[o("a",{staticClass:"checkout_buttons--return",attrs:{href:"/walks"},on:{click:function(t){return t.preventDefault(),e.goToWalks()}}},[e._v("Terug naar walks")]),e._v(" "),o("button",{staticClass:"checkout_buttons--betalen"},[e._v("Betalen")])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"boekingsgegevens_field"},[o("select",{attrs:{name:"locatie",id:"locatie"}},[o("option",{attrs:{value:"null"}},[e._v("Kies een locatie")]),e._v(" "),o("option",{attrs:{value:"Noordwijk"}},[e._v("Noordwijk")]),e._v(" "),o("option",{attrs:{value:"Katwijk"}},[e._v("Katwijk")])]),e._v(" "),o("label",{attrs:{for:"locatie"}},[e._v("Locatie")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"boekingsgegevens_field"},[o("input",{attrs:{type:"text",name:"name",id:"name",placeholder:"Uw naam"}}),e._v(" "),o("label",{attrs:{for:"name"}},[e._v("Volledige naam")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"boekingsgegevens_field"},[o("input",{attrs:{type:"email",name:"email",id:"email",placeholder:"email@voorbeeld.nl"}}),e._v(" "),o("label",{attrs:{for:"email"}},[e._v("E-mailadres")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"boekingsgegevens_field"},[o("input",{attrs:{type:"tel",name:"phone",id:"phone",placeholder:"06-1234567"}}),e._v(" "),o("label",{attrs:{for:"phone"}},[e._v("Telefoonnummer")])])}],!1,null,"5e7f1666",null);t.default=component.exports}}]);