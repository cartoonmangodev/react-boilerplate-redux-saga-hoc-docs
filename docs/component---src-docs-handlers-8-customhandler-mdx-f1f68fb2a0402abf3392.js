(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{g0i7:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return c})),t.d(e,"default",(function(){return i}));var a=t("Fcif"),r=t("+I+c"),o=(t("mXGw"),t("/FXl")),s=t("TjRS"),c=(t("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Handlers/8.customhandler.mdx"}});var m={_frontmatter:c},l=s.a;function i(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(o.b)(l,Object(a.a)({},m,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"custom-handler"},"Custom Handler"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  Note:\n- You are not limited to built-in handlers.\n- With the help of custom handler you can create n number of handlers in you project.\n- You can even share your logic in gitub for other developers to use.\n- It will update existing data or create a new data based on your logic.\n")),Object(o.b)("h2",{id:"-custom-handler-without-filter"},"# Custom Handler without filter"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Custom-Handler",\n    customHandler: ({ task, request, successData, errorData, status }) => ({\n      data = {},\n    } = {}) => {\n      return {\n        data: {\n          comment: "Hi i added comment in data",\n        },\n      };\n    },\n  },\n});\n')),Object(o.b)("h2",{id:"-custom-handler-with-filter"},"# Custom Handler with filter"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Custom-Handler",\n    customHandler: ({ task, request, successData, errorData, status }) => ({\n      data = {},\n    } = {}) => {\n      return {\n        data: {\n          comment: "Hi i added comment in data",\n        },\n      };\n    },\n  },\n  filter: ["name"],\n});\n')),Object(o.b)("h2",{id:"-custom-handler-with-multi-filter"},"# Custom Handler with Multi-filter"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Custom-Handler",\n    customHandler: ({ task, request, successData, errorData, status }) => ({\n      data = {},\n    } = {}) => {\n      return newObject(data, {\n        data: {\n          comment: "Hi i added comment in data",\n        },\n      });\n    },\n  },\n  filter: [["filter-1"], ["filter-2"], ["filter-2"]],\n});\n')),Object(o.b)("h2",{id:"-how-to-use-custom-handler-for-all-the-apis"},"# How to use custom handler for all the api's"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import {\n  HOC as HocConfigure,\n  commonConstants,\n  store,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\n\nconst handler = () => () => {};\nconst handler2 = () => () => {};\n\nconst HOC = HocConfigure({\n  handlers: [\n    {\n      name: "my-own-handler",\n      handler,\n    },\n    {\n      name: "my-own-handler-2",\n      handler: handler2,\n    },\n  ],\n});\nconst AuthHoc = HOC({\n  name: "Auth",\n  apiEndPoints: {},\n});\n')))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Handlers/8.customhandler.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-handlers-8-customhandler-mdx-f1f68fb2a0402abf3392.js.map