(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"2TEl":function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return o})),a.d(n,"default",(function(){return d}));var t=a("Fcif"),r=a("+I+c"),i=(a("mXGw"),a("/FXl")),s=a("TjRS"),o=(a("aD51"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Handlers/2.infinitehandler.mdx"}});var c={_frontmatter:o},l=s.a;function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(l,Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"infinite-handler"},"Infinite Handler"),Object(i.b)("h2",{id:"-infinite-handler-without-filter"},"# Infinite Handler without filter"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Infinite-Handler",\n    clearData: true,\n  },\n});\n')),Object(i.b)("h2",{id:"-infinite-handler-with-filter"},"# Infinite Handler with filter"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Infinite-Handler",\n    isAppendTop: true,\n  },\n  filter: ["name"],\n});\n')),Object(i.b)("h2",{id:"-infinite-handler-with-multi-filter"},"# Infinite Handler with Multi-filter"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Data-Handler",\n    isAppendTop: false, // By default date will added below\n  },\n  filter: [["filter-1"], ["filter-2"], ["filter-2"]],\n});\n')),Object(i.b)("h2",{id:"-things-to-remember"},"# Things to Remember"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{})," -Adding multiple filters will create multiple copy of the same data.\n-It will helps to handle different types of data in same api..such as variable kind of filters.\n")),Object(i.b)("h2",{id:"-infinite-handler-function---api"},"# Infinite Handler Function - Api"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"    Important:\n- The code below are the built in handler function.\n- Don't copy and paste this handler, it is already available with this hoc.\n- You will learn how to create your own custom handler in below.\n- If you want to customize this handler you can do it.\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import {\n  generateTimeStamp,\n  updateIn,\n  getIn,\n  Safe,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst _checkIsNotObject = (data) =>\n  Object.prototype.toString.call(data) !== "[object Object]";\n\nexport const infiniteHandler = ({\n  task: { clearData, subKey = [], limit, isAppendTop = false } = {},\n  callback: { updateCallback } = {},\n  successData = {},\n}) => ({ data: oldData = {} } = {}) => ({\n  data: (() => {\n    if (subKey.length > 0 && Array.isArray(getIn(oldData, subKey))) {\n      const _oldCopyData = {\n        ...oldData,\n        ...successData,\n        [subKey[0]]: oldData[subKey[0]],\n      };\n      // return _oldCopyData\n      return updateIn(_oldCopyData, subKey, (_oldData) => {\n        if (clearData) return Safe(successData, `.${subKey.join(".")}`, []);\n        return updateCallback\n          ? updateCallback(\n              _oldData,\n              Safe(successData, `.${subKey.join(".")}`, [])\n            )\n          : isAppendTop\n          ? Safe(successData, `.${subKey.join(".")}`, []).concat(_oldData)\n          : _oldData.concat(Safe(successData, `.${subKey.join(".")}`, []));\n      });\n    }\n    const getData = Array.isArray(successData) ? successData : [];\n    const appendData = Array.isArray(oldData)\n      ? isAppendTop\n        ? getData.concat(oldData)\n        : oldData.concat(getData)\n      : getData;\n    const newData =\n      (clearData && successData) ||\n      (Array.isArray(successData) && appendData) ||\n      successData;\n    return updateCallback ? updateCallback(oldData, successData) : newData;\n  })(),\n  error: false,\n  lastUpdated: generateTimeStamp(),\n  isInfinite: true,\n  isError: false,\n  infiniteEnd:\n    (subKey.length > 0\n      ? Safe(successData, `.${subKey.join(".")}`, [])\n      : successData\n    ).length < limit,\n});\n')))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Handlers/2.infinitehandler.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-handlers-2-infinitehandler-mdx-137f2c442d990647f6f2.js.map