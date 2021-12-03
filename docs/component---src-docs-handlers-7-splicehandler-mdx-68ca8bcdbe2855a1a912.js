(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{zMr9:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return s})),a.d(n,"default",(function(){return b}));var t=a("Fcif"),r=a("+I+c"),l=(a("mXGw"),a("/FXl")),c=a("TjRS"),s=(a("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Handlers/7.splicehandler.mdx"}});var i={_frontmatter:s},o=c.a;function b(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(o,Object(t.a)({},i,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"splice-data-handler"},"Splice Data Handler"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"  Note:\n  - It is like a splice method in an array.\n  - It will remove the object in an array and add the new object in an array.\n")),Object(l.b)("h2",{id:"-splice-data-handler-without-filter"},"# Splice Data Handler without filter"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Splice-Data-Handler",\n    id: [1, 2],\n    key: "id",\n    spliceKey: [1, 3],\n  },\n});\n')),Object(l.b)("h2",{id:"-splice-data-handler-with-filter"},"# Splice Data Handler with filter"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Splice-Data-Handler",\n    id: [1, 2],\n    key: "id",\n    spliceKey: [1, 3],\n  },\n  filter: ["name"],\n});\n')),Object(l.b)("h2",{id:"-splice-data-handler-with-multi-filter"},"# Splice Data Handler with Multi-filter"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Splice-Data-Handler",\n    id: [1, 2],\n    key: "id",\n    spliceKey: [1, 3],\n  },\n  filter: [["filter-1"], ["filter-2"], ["filter-2"]],\n});\n')),Object(l.b)("h2",{id:"-splice-data-handler-with-subkey"},"# Splice Data Handler with Subkey"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"Note:\n- sub key for handling sub level of data in an object\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Splice-Data-Handler",\n    subKey: ["data"],\n    id: [1, 2],\n    key: "id",\n    spliceKey: [1, 3],\n  },\n  filter: [["filter-1"], ["filter-2"], ["filter-2"]],\n});\n')),Object(l.b)("h2",{id:"-splice-data-handler-function---api"},"# Splice Data Handler Function - Api"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"  Important:\n- The code below are the built in handler function.\n- Don't copy and paste this handler, it is already available with this hoc.\n- You will learn how to create your own custom handler in below.\n- If you want to customize this handler you can do it.\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import {\n  generateTimeStamp,\n  updateIn,\n  getIn,\n  Safe,\n} from "react-boilerplate-redux-saga-hoc";\nexport const spliceHandler = ({\n  task: { clearData, spliceKey = [], subKey = [] } = {},\n  callback: { updateCallback } = {},\n  successData = {},\n}) => ({ data: oldData = {} } = {}) => ({\n  data: (() => {\n    if (subKey.length > 0 && Array.isArray(getIn(oldData, subKey))) {\n      const _oldCopyData = {\n        ...oldData,\n        ...successData,\n        [subKey[0]]: oldData[subKey[0]],\n      };\n      // return _oldCopyData\n      return updateIn(_oldCopyData, subKey, (_oldData) => {\n        if (clearData) return Safe(successData, `.${subKey.join(".")}`, []);\n        return updateCallback\n          ? updateCallback(\n              _oldData,\n              Safe(successData, `.${subKey.join(".")}`, [])\n            )\n          : Array.isArray(_oldData)\n          ? (() => {\n              const _newData = _oldData.slice();\n              _newData.splice(\n                ...spliceKey,\n                ...Safe(successData, `.${subKey.join(".")}`, [])\n              );\n              return _newData;\n            })()\n          : _oldData;\n      });\n    }\n    const newData = Array.isArray(oldData)\n      ? (() => {\n          const _newData = oldData.slice();\n          return _newData.splice(\n            ...spliceKey,\n            ...Safe(successData, `.${subKey.join(".")}`, [])\n          );\n        })()\n      : oldData;\n    return updateCallback ? updateCallback(oldData, successData) : newData;\n  })(),\n  error: false,\n  lastUpdated: generateTimeStamp(),\n  isError: false,\n});\n')))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Handlers/7.splicehandler.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-handlers-7-splicehandler-mdx-68ca8bcdbe2855a1a912.js.map