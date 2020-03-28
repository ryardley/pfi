(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"3wQV":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));t("4cIV"),t("NZyX"),t("c0Gx"),t("QNbk"),t("+ytS"),t("WY76"),t("r0ML");var a=t("V0Ug"),r=t("sN0p");t("xH0s");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/primative-matching.md"}});var s={_frontmatter:i},c=r.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,o({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"primitive-matching"},"Primitive matching"),Object(a.b)("p",null,"If you pass a JavaScript primitive object, you will get the appropriate typeof check."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const isNumeric = p`Number`; // typeof value === 'number'\nconst isBoolean = p`Boolean`; // typeof value === 'boolean'\nconst isString = p`String`; // typeof value === 'string'\nconst isSymbol = p`Symbol`; // typeof value === 'symbol'\nconst isArray = p`Array`; // Array.isArray(value)\nconst isObject = p`Object`; // typeof value === 'object'\nconst isFunction = p`Function`; // typeof value === 'function'\n// const isBigInt = p`BigInt`;// BigInt will be coming soon once standardised\n")),Object(a.b)("p",null,"For consistency with typesystems such as TypeScript and Flow you can use lower case for the following:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const isNumeric = p`number`; // typeof value === 'number'\nconst isBoolean = p`boolean`; // typeof value === 'boolean'\nconst isString = p`string`; // typeof value === 'string'\nconst isSymbol = p`symbol`; // typeof value === 'symbol'\nconst isArray = p`array`; // Array.isArray(value)\n")),Object(a.b)("p",null,"You can test both the type and length of strings and arrays by using the length syntax:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),'p`string[5]`("12345"); // true\np`string[5]`("1234"); // false\np`string[<5]`("1234"); // true\n\np`array[5]`(1, 2, 3, 4, 5); // true\np`array[5]`(1, 2, 3, 4); // false\np`array[<5]`(1, 2, 3, 4); // true\n')),Object(a.b)("p",null,"You can also pass in a JavaScript primitive to the template string."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const isNumeric = p`${Number}`; // typeof value === 'number'\nconst isBoolean = p`${Boolean}`; // typeof value === 'boolean'\nconst isString = p`${String}`; // typeof value === 'string'\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/primative-matching.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-primative-matching-md-01bfcccdc11b13b34683.js.map