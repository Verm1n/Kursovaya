; /* /bitrix/js/currency/core_currency.min.js?14784587881474*/

; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/js/currency/core_currency.min.js?14784587881474";s:6:"source";s:36:"/bitrix/js/currency/core_currency.js";s:3:"min";s:40:"/bitrix/js/currency/core_currency.min.js";s:3:"map";s:40:"/bitrix/js/currency/core_currency.map.js";}"*/
(function(r){if(BX.Currency){return}BX.Currency={currencyList:[],defaultFormat:{FORMAT_STRING:"#",DEC_POINT:".",THOUSANDS_SEP:" ",DECIMALS:2,HIDE_ZERO:"N"},setCurrencyFormat:function(r,t,e){var n=this.getCurrencyIndex(r),c=BX.clone(this.defaultFormat,true),i;e=!!e;if(n>-1&&!e){return}if(n===-1){n=this.currencyList.length}for(i in c){if(c.hasOwnProperty(i)&&typeof t[i]!=="undefined"){c[i]=t[i]}}this.currencyList[n]={currency:r,format:BX.clone(c,true)}},setCurrencies:function(r,t){var e;if(!!r&&BX.type.isArray(r)){for(e=0;e<r.length;e++){if(!!r[e].CURRENCY&&!!r[e].FORMAT){this.setCurrencyFormat(r[e].CURRENCY,r[e].FORMAT,t)}}}},getCurrencyFormat:function(r){var t=this.getCurrencyIndex(r);return t>-1?this.currencyList[t].format:false},getCurrencyIndex:function(r){var t,e=-1;if(this.currencyList.length===0){return e}for(t=0;t<this.currencyList.length;t++){if(this.currencyList[t].currency===r){e=t;break}}return e},clearCurrency:function(r){var t=this.getCurrencyIndex(r);if(t>-1)this.currencyList=BX.util.deleteFromArray(this.currencyList,t)},clean:function(){this.currencyList=[]},currencyFormat:function(r,t,e){var n="",c;e=!!e;c=this.getCurrencyFormat(t);if(!!c&&typeof c==="object"){c.CURRENT_DECIMALS=c.DECIMALS;if(c.HIDE_ZERO==="Y"&&r==parseInt(r,10))c.CURRENT_DECIMALS=0;n=BX.util.number_format(r,c.CURRENT_DECIMALS,c.DEC_POINT,c.THOUSANDS_SEP);if(e)n=c.FORMAT_STRING.replace(/(^|[^&])#/,"$1"+n)}return n}}})(window);
/* End */
;
//# sourceMappingURL=kernel_currency.map.js