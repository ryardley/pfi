(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"5knR":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return a})),t.d(e,"default",(function(){return u}));t("4cIV"),t("NZyX"),t("c0Gx"),t("QNbk"),t("+ytS"),t("WY76"),t("r0ML");var r=t("V0Ug"),i=t("sN0p");t("xH0s");function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/usage-with-typescript.md"}});var o={_frontmatter:a},p=i.a;function u(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,["components"]);return Object(r.b)(p,s({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"usage-with-typescript"},"Usage with TypeScript"),Object(r.b)("p",null,"PDSL is really quite useful in TypeScript as guard functions are important to a good type management strategy. To use in TypeScript simply pass in the guard type you want your predicate to determine as a type prop."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-ts"}),'import p from "pdsl";\n\n// pass in string\nconst isString = p<string>`string`;\n\ntype User = {\n  name: string;\n  password: string;\n};\n\n// pass in User\nconst isUser = p<User>`{\n  name: string[3..8],\n  password: string[>5]\n}`;\n\nfunction doStuff(input: string | User) {\n  // input is either string or User\n  if (isString(input)) {\n    // input is now considered a string\n    return input.toLowerCase();\n  }\n\n  if (isUser(input)) {\n    // input is now considered a User\n    return input.name;\n  }\n}\n')))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/usage-with-typescript.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-usage-with-typescript-md-599c7f80a23a3a344326.js.map