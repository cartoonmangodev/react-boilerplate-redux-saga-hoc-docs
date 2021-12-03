(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{vfYh:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return d})),n.d(a,"default",(function(){return u}));var t=n("Fcif"),r=n("+I+c"),c=(n("mXGw"),n("/FXl")),s=n("TjRS"),d=(n("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Handlers/3.updatehandler.mdx"}});var l={_frontmatter:d},i=s.a;function u(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)(i,Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"update-handler"},"Update Handler"),Object(c.b)("h2",{id:"-update-handler-without-filter"},"# Update Handler without filter"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Update-Handler",\n  },\n});\n')),Object(c.b)("h2",{id:"-update-handler-handling-array-of-objects"},"# Update Handler handling array of objects"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Update-Handler",\n    id: [1, 2],\n    key: "id",\n  },\n});\n')),Object(c.b)("h2",{id:"-update-handler-with-filter"},"# Update Handler with filter"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Update-Handler",\n    id: [1, 2],\n    key: "id",\n  },\n  filter: ["name"],\n});\n')),Object(c.b)("h2",{id:"-update-handler-with-multi-filter"},"# Update Handler with Multi-filter"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Update-Handler",\n    id: [1, 2],\n    key: "id",\n  },\n  filter: [["filter-1"], ["filter-2"], ["filter-2"]],\n});\n')),Object(c.b)("h2",{id:"-update-handler-with-subkey"},"# Update Handler with Subkey"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"Note:\n- sub key for handling sub level of data in an object\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Update-Handler",\n    subKey: ["data"],\n    id: [1, 2],\n    key: "id",\n  },\n  filter: [["filter-1"], ["filter-2"], ["filter-2"]],\n});\n')),Object(c.b)("h2",{id:"-update-handler-function---api"},"# Update Handler Function - Api"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"    Important:\n- The code below are the built in handler function.\n- Don't copy and paste this handler, it is already available with this hoc.\n- You will learn how to create your own custom handler in below.\n- If you want to customize this handler you can do it.\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import {\n  generateTimeStamp,\n  updateIn,\n  getIn,\n  Safe,\n} from "react-boilerplate-redux-saga-hoc";\nconst updateData = (data, successData, updateCallback) => {\n  if (updateCallback) return updateCallback(data, successData) || data;\n  if (\n    typeof successData === "object" &&\n    !Array.isArray(successData) &&\n    typeof data === "object" &&\n    !Array.isArray(data)\n  )\n    return newObject(data, successData);\n  return successData;\n};\n\nexport const updateHandler = ({\n  task: { key, id, subKey = [], values = {} } = {},\n  callback: { updateCallback } = {},\n  successData = {},\n}) => ({ data = [] } = {}) => ({\n  data:\n    subKey.length > 0\n      ? updateIn(\n          {\n            ...data,\n            ...successData,\n            [subKey[0]]: data[subKey[0]],\n          },\n          subKey,\n          (_Data) =>\n            (() => {\n              let index = -1;\n              const _values = Array.isArray(values);\n              /**  update data if old data is object */\n              if (!Array.isArray(_Data))\n                return updateData(\n                  _Data,\n                  Safe(successData, `.${subKey.join(".")}`),\n                  updateCallback\n                );\n              else if (Array.isArray(id) && key && Array.isArray(_Data))\n                return _Data.reduce(\n                  (acc, curr = {}) =>\n                    id.includes(curr[key])\n                      ? (() => {\n                          index = index + 1;\n                          return acc.concat([\n                            updateData(\n                              curr,\n                              values[_values ? index : curr[key]] || curr,\n                              updateCallback\n                            ),\n                          ]);\n                        })()\n                      : acc.concat([curr]),\n                  []\n                );\n              else if ((id === 0 || id) && key)\n                return _Data.map((_data) =>\n                  _data[key] === id\n                    ? (() => {\n                        index = index + 1;\n                        return updateData(\n                          _data,\n                          values[_values ? index : curr[key]] || _data,\n                          updateCallback\n                        );\n                      })()\n                    : _data\n                );\n              return updateData(\n                _Data,\n                Safe(successData, `.${subKey.join(".")}`),\n                updateCallback\n              );\n            })()\n        )\n      : (() => {\n          let index = -1;\n          const _values = Array.isArray(values);\n          if (!Array.isArray(data))\n            return updateData(data, successData, updateCallback);\n          else if (Array.isArray(id) && key)\n            return data.reduce(\n              (acc, curr = {}) =>\n                id.includes(curr[key])\n                  ? (() => {\n                      index = index + 1;\n                      return acc.concat([\n                        updateData(\n                          curr,\n                          values[_values ? index : curr[key]] || curr,\n                          updateCallback\n                        ),\n                      ]);\n                    })()\n                  : acc.concat([curr]),\n              []\n            );\n          else if ((id === 0 || id) && key)\n            return data.map((_data) =>\n              _data[key] === id\n                ? (() => {\n                    index = index + 1;\n                    return updateData(\n                      _data,\n                      values[_values ? index : _data[key]] || _data,\n                      updateCallback\n                    );\n                  })()\n                : _data\n            );\n          return updateData(data, successData, updateCallback);\n        })(),\n  lastUpdated: generateTimeStamp(),\n  isError: false,\n});\n')))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Handlers/3.updatehandler.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-handlers-3-updatehandler-mdx-0bcc5033d769a31cb3da.js.map