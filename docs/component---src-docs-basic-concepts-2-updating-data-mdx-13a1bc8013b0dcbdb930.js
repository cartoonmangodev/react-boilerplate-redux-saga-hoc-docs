(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{sY5h:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return d})),n.d(a,"default",(function(){return p}));var t=n("Fcif"),r=n("+I+c"),s=(n("mXGw"),n("/FXl")),o=n("TjRS"),d=(n("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Basic Concepts/2.UpdatingData.mdx"}});var c={_frontmatter:d},l=o.a;function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(l,Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"updating-data"},Object(s.b)("strong",{parentName:"h1"},"Updating Data")),Object(s.b)("h2",{id:"-updating-data-automatically-by-calling-api"},"# Updating data automatically by calling api"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{})," Note:\n -It will only update if the reponse data is object otherwise it will replace the data.\n -It won't update Array.\n -Array will be handle in diferent way.you will find Below\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const BASE_URL = "https://example.com/";\n\nconst DEMO_API_CONFIGURATION = {\n  url: `${BASE_URL}user/`,\n  method: "GET",\n  responseStatusCode: [900],\n  responseStatusCodeKey: "code",\n  responseDataKey: "data",\n  responseMessageKey: "status",\n  errorMessageKey: "error",\n};\n\nDEMO_API_CONFIGURATION_CALL({\n  task: {\n    name: "Update-Handler",\n  },\n});\n\n// Example: storedData = {\n//   name: "example",\n//   date: "22-8-2222",\n// };\n// responseData = {\n//   name: "example 2",\n// };\n// UpdateData = {\n//   name: "example 2",\n//   date: "22-8-2222",\n// };\n')),Object(s.b)("h2",{id:"-updating-data-in-an-array"},"# Updating Data in an Array"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{})," Note:\n -If the update data is Array it requires extra 2 parameters to itentify the Object that is id,key\n")),Object(s.b)("h5",{id:"id---array--string--number---array-of-ids"},"id - Array || string || number - Array of ids"),Object(s.b)("h5",{id:"key---key-example-user_id---string"},"key - Key example: 'user_id' - String"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const BASE_URL = \"https://example.com/\";\n\nconst DEMO_API_CONFIGURATION = {\n  url: `${BASE_URL}user/${id}`,\n  method: \"GET\",\n  responseStatusCode: [900],\n  responseStatusCodeKey: \"code\",\n  responseDataKey: \"data\",\n  responseMessageKey: \"status\",\n  errorMessageKey: \"error\",\n};\n\nDEMO_API_CONFIGURATION_CALL({\n  task: {\n    name: \"Update-Handler\",\n    key: \"id\", // for handling array of object\n    id: [2, 3],\n  },\n  request: {\n    params: { id: 1 },\n    query: { skip: 10, age: 20 },\n    payload: { age: 20 }, // for post calls\n    paramsSerializer: { arrayFormat: \"bracket\" }, //default: none - refer query-string npm package\n  },\n});\n/*\nExample:\nstoredData = [{\n  id: 1\n  name: 'example',\n  date: '22-8-2222'\n},\n{\n  id: 2\n  name: 'example',\n  date: '22-8-2222'\n}]\n\nresponseData = {\n  name: 'example 2'\n}\n\nUpdateData = [{\n  id: 1\n  name: 'example',\n  date: '22-8-2222'\n},\n{\n  id: 2\n  name: 'example 2',\n  date: '22-8-2222'\n}]\n*/\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{})," Note:\n -In the above scenario id number 3 will be ignored.\n -If u want to append or prepend data there are some other ways.you will find below\n")),Object(s.b)("h2",{id:"-callbacks-for-handling-updated-data"},"# Callbacks for handling Updated Data"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{})," Note:\n -There are several callback are available can be used in different requirements\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const BASE_URL = "https://example.com/";\n\nconst DEMO_API_CONFIGURATION = {\n  url: `${BASE_URL}user/${id}`,\n  method: "GET",\n  responseStatusCode: [900],\n  responseStatusCodeKey: "code",\n  responseDataKey: "data",\n  responseMessageKey: "status",\n  errorMessageKey: "error",\n};\n\nDEMO_API_CONFIGURATION_CALL({\n  task: {\n    name: "Update-Handler",\n    key: "id", // for handling array of object\n    id: [2, 3],\n  },\n  request: {\n    params: { id: 1 },\n    query: { skip: 10, age: 20 },\n    payload: { age: 20 }, // for post calls\n    paramsSerializer: { arrayFormat: "bracket" }, //default: none - refer query-string npm package\n  },\n  callback: {\n    updateCallback: (storeData: oldData, responseData: newData) => {\n      return { ...oldData, ...newData } || oldData.concat(newData); // It will update  the data in paricular reducer\n    },\n    updateStateCallback: ({ state: updatedState, data: responseData }) => {\n      return updatedState; // By default it takes the updated state if returns undefined or null\n    },\n    successCallback: () => {\n      // handle success toast or call any other api\n    },\n    errorCallback: ({\n      error,\n      errorData: responseErrorParser,\n      message,\n      status,\n      errors,\n    }) => {\n      // handle error toast or call any other api\n    },\n  },\n});\n')),Object(s.b)("h2",{id:"-manually-updating-data-by-calling-custom-task"},"# Manually updating data by calling custom task"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Update-Handler",\n    key: "id", // for handling array of object\n    id: [2, 3],\n    response: {\n      data: {\n        age: "20",\n      },\n    },\n  },\n  callback: {\n    updateCallback: (storeData: oldData, responseData: newData) => {\n      return { ...oldData, ...newData } || oldData.concat(newData); // It will update  the data in paricular reducer\n    },\n  },\n});\n')),Object(s.b)("h2",{id:"-getting-updated-data-from-store"},"# Getting Updated Data from store"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import { useMemo } from "react";\nimport { useQuery } from "react-boilerplate-redux-saga-hoc";\nconst {\n  Auth_hoc: {\n    reducerName,\n    reducerConstants: { DEMO_API_CONFIGURATION },\n  },\n} = props;\n\nconst { loader, data, lastUpdated, isInfinite, infiniteEnd } = useQuery(\n  reducerName,\n  DEMO_API_CONFIGURATION\n);\n')),Object(s.b)("p",null,"Next - ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/react-boilerplate-redux-saga-hoc-docs/docs/basic-concepts/handling-infinite-data"}),"Handling Infinite Data")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Basic Concepts/2.UpdatingData.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-basic-concepts-2-updating-data-mdx-13a1bc8013b0dcbdb930.js.map