(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{VyKY:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return c})),n.d(a,"default",(function(){return d}));var t=n("Fcif"),r=n("+I+c"),s=(n("mXGw"),n("/FXl")),o=n("TjRS"),c=(n("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Basic Concepts/3.infinitedata.mdx"}});var l={_frontmatter:c},i=o.a;function d(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(i,Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"handling-infinite-data-or-infinite-scrolling"},"Handling Infinite Data or Infinite Scrolling"),Object(s.b)("h2",{id:"-storing-infinite-data-automatically-by-calling-api"},"# storing infinite data automatically by calling api"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{})," Note:\n - Data will be stored automatically in the reducer and also it handles all the states.\n - Such as error,infinte,loader..etc\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const BASE_URL = "https://example.com/";\n\nconst DEMO_API_CONFIGURATION = {\n  url: `${BASE_URL}user/`,\n  method: "GET",\n  responseStatusCode: [900],\n  responseStatusCodeKey: "code",\n  responseDataKey: "data",\n  responseMessageKey: "status",\n  errorMessageKey: "error",\n};\n\nDEMO_API_CONFIGURATION_CALL({\n  task: {\n    name: "Infinite-Handler",\n    isAppendTop: true, // By default data will add below\n  },\n  callback: {\n    updateCallback: (storeData: oldData, responseData: newData) => {\n      return { ...oldData, ...newData } || oldData.concat(newData); // It will update  the data in paricular reducer\n    },\n  },\n});\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{})," Note:\n - It will append data if already data is array.\n - Other wise it will replace the new data\n")),Object(s.b)("h2",{id:"-prepend-data-instead-of-appending-data"},"# Prepend data instead of appending data"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{})," Note:\n - It will store the data at the top instead of last\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const BASE_URL = "https://example.com/";\n\nconst DEMO_API_CONFIGURATION = {\n  url: ({ id }) => `${BASE_URL}user/${id}`,\n  method: "GET",\n  responseStatusCode: [900],\n  responseStatusCodeKey: "code",\n  responseDataKey: "data",\n  responseMessageKey: "status",\n  errorMessageKey: "error",\n};\n\nDEMO_API_CONFIGURATION_CALL({\n  task: {\n    name: "Infinite-Handler",\n    isAppendTop: true, // By default data will add below\n  },\n  request: {\n    params: { id: 1 },\n    query: { skip: 10, age: [20, 20] },\n    payload: { age: 20 }, // for post calls\n    paramsSerializer: { arrayFormat: "bracket" }, //default: none - refer query-string npm package\n  },\n});\n')),Object(s.b)("h2",{id:"-callbacks-for-handling-success-or-failure"},"# Callbacks for handling success or failure"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{}),"   Note:\n   - Callback are another helper function which handles errors, success, cancel..etc\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const BASE_URL = "https://example.com/";\n\nconst DEMO_API_CONFIGURATION = {\n  url: `${BASE_URL}user/${id}`,\n  method: "GET",\n  responseStatusCode: [900],\n  responseStatusCodeKey: "code",\n  responseDataKey: "data",\n  responseMessageKey: "status",\n  errorMessageKey: "error",\n};\n\nconst responseErrorParser = (data) =>\n  (Array.isArray(data) &&\n    data.reduce((acc, curr) => {\n      const [key, message] = Object.entries(curr)[0];\n      const payloadKey = key.split(",")[1];\n      return {\n        ...acc,\n        [payloadKey]: message,\n      };\n    }, {})) ||\n  {};\n\nDEMO_API_CONFIGURATION_CALL({\n  task: {\n    name: "Infinite-Handler",\n    isAppendTop: true, // By default data will add below\n  },\n  request: {\n    params: { id: 1 },\n    query: { skip: 10, age: [20, 20] },\n    paramsSerializer: { arrayFormat: "bracket" }, //default: none - refer query-string npm package\n  },\n  callback: {\n    successCallback: ({ res, data, message, status }) => {\n      // handle toast or call any other api\n    },\n    errorCallback: ({\n      error,\n      errorData: responseErrorParser,\n      message,\n      status,\n      errors,\n    }) => {\n      // handle toast or call any other api\n    },\n  },\n});\n')),Object(s.b)("h2",{id:"-manually-storing-or-updating-infinite-data-by-calling-custom-task"},"# Manually storing or updating infinite data by calling custom task"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{}),"Note:\n-Calling custom task will allow us to manipulate data without calling any api..such as adding count,linit,skip..etc\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Infinite-Handler",\n    isAppendTop: true, // By default data will add below\n    response: {\n      data: [\n        {\n          name: "example",\n        },\n      ],\n    },\n  },\n});\n')),Object(s.b)("h2",{id:"-getting-data-from-store"},"# Getting Data from store"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import { useMemo } from "react";\nimport { useQuery } from "react-boilerplate-redux-saga-hoc";\nconst {\n  Auth_hoc: {\n    reducerName,\n    reducerConstants: { DEMO_API_CONFIGURATION },\n  },\n} = props;\n\nconst { loader, data, lastUpdated, isInfinite, infiniteEnd } = useQuery(\n  reducerName,\n  DEMO_API_CONFIGURATION\n);\n')),Object(s.b)("p",null,"Next - ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/react-boilerplate-redux-saga-hoc-docs/docs/basic-concepts/deleting-data"}),"Deleting Data")))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Basic Concepts/3.infinitedata.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-basic-concepts-3-infinitedata-mdx-ec09dff3c9cb88bb09b5.js.map