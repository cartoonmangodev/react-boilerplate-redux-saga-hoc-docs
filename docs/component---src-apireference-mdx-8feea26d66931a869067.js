(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ck/N":function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return c})),a.d(n,"default",(function(){return i}));var t=a("Fcif"),r=a("+I+c"),o=(a("mXGw"),a("/FXl")),s=a("TjRS"),c=(a("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/apireference.mdx"}});var l={_frontmatter:c},O=s.a;function i(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(O,Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"-task---object"},"# task - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Object>")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"Object:\n1.name -> <String> - handler name to execute particular task\n2.options -> handler options - it will vary based on handlers\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'\nimport { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  clearData: true,\n  updateCallback: (data) => return data\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Data-Handler",\n    ...options,\n  },\n});\n')),Object(o.b)("h2",{id:"-tasks---array-of-task"},"# tasks - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Array of task>")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst dataOptions = {\n  clearData: true,\n};\nconst infiniteOptions = {\n  clearData: true,\n  id: [1],\n  isAppendTop: true,\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  tasks: [\n    {\n      task: {\n        name: "Data-Handler",\n        ...dataOptions,\n      },\n      filter: ["filter-1"],\n    },\n    {\n      task: {\n        name: "Infinite-Handler",\n        ...infiniteOptions,\n      },\n      filter: ["filter-2"],\n    },\n  ],\n});\n')),Object(o.b)("h2",{id:"-using-usequery-hook-in-different-ways"},"# using useQuery hook in different ways"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import { useQuery } from "react-boilerplate-redux-saga-hoc";\n\nconst { loader, data, lastUpdated, isError, error, toast } = useQuery(\n  reducerName,\n  TEST_GET_API\n);\n\n/* accessing multiple data  at single query */\nconst [test_data, test, test_deep, testGetApi] = useQuery(\n  reducerName /* can pass any reducer key such as \'Auth\' , \'router\' , ..etc*/,\n  [\n    {\n      key: TEST_GET_API,\n      name: "test",\n      initialLoaderState: true,\n    },\n    {\n      key: TEST_GET_API,\n      query: ".data[0]",\n      initialLoaderState: false,\n    },\n    {\n      key: TEST_GET_API,\n      query: ".data",\n      initialLoaderState: false,\n      default: [], // Default for data key it also check\'s type of data..if type is object return [].Don\'t pass if you dont want to type check\n    },\n    TEST_GET_API,\n  ]\n);\n\n/* query can be used in different ways based on your requirement */\n\nconst [data, loader] = useQuery(\n  reducerName, // can pass any reducer key such as \'Auth\' , \'router\' , ..etc\n  TEST_GET_API,\n  [\n    {\n      query: ".data[0]",\n      default: [],\n    },\n    {\n      query: ".loader",\n      default: false,\n    },\n  ]\n);\n\n/* For direct accessing reducer keys */\nconst { isLoggedIn, profile } = useQuery(reducerName, {\n  requiredKey: ["isLoggedIn", "profile"],\n});\n\n/* pass array of string instead of object */\n\nconst [\n  { loader, data, lastUpdated, isError, error, toast },\n] = useQuery(reducerName, [TEST_GET_API]);\n\n/* Pass an object instead of array */\nconst data = useQuery(reducerName, {\n  key: TEST_GET_API,\n  default: [],\n  requiredKey: ["loader", "data", "lastUpdated"],\n});\n\n/* pass a string insted of array */\nconst { loader, data, lastUpdated, isError, error, toast } = useQuery(\n  reducerName,\n  TEST_GET_API\n);\n\n/* Pass a config as a third parameter its optional */\nconst data = useQuery(reducerName, TEST_GET_API, {\n  query: ".data",\n  default: [],\n});\n\n/* for getting whole reducer data */\nconst data = useQuery(); // Don\'t use this use this until its required it will render the component every time reducer change\nconst data = useQuery(reducerName); // Don\'t use this until its required it will render the component every time reducer data change\n')),Object(o.b)("h2",{id:"-request---object"},"# request - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Object>")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{})," Object:\n1.query -> <object> - send query params to the api\n2.params -> <object> - passing params to an api\n3.payload -> <object> - send payload to the api for post calls\n4.axiosConfig -> <object>\n5.paramSerializer -> <object> default { arrayFormat: 'brackets' } refer axios\n6.asyncFunction -> <function>\n7.asyncFunctionParams -> <array[params]>\n8.retry -> <number>\n9.errorParser -> <function>\n10.polling -> <boolean> true or false\n11.pollingCount -> <number> number of polling\n12.delay -> <Number> in milliseconds\n13.clearDataOnError -> <boolean> true or false - (default false)\n14.errorDataHandling -> <boolean> true or false  - (default true)\n15.responseErrorParser -> <Boolean> in milliseconds  - (default false)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  clearData: true,\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Data-Handler",\n    ...options,\n  },\n  request: {\n    query: {\n      search: "name",\n    },\n    params: {\n      id: 1,\n    },\n    payload: {\n      password: "test",\n    },\n    axiosConfig: {\n      responseType: "application/json",\n    },\n    paramSerializer: {},\n  },\n});\n')),Object(o.b)("h2",{id:"-callback---object"},"# callback - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Object>")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{})," Object:\n1.successCallback -> <function({ data, status, message})> - for handling success\n2.errorCallback -> <function({ error, status, message, errorData})> - for handling failure\n3.finalCallback -> <function({ type, action, payload, Cancelled })> - triggers on both success and failure\n4.updateStateCallback -> <function({ state, data /* successdata */, type })> - for manipulating the state\n5.pollingCallback -> <function({ res, data /* successdata */, message, status, count /* polling count */ })> - return <object || boolean || null> returns true will stop polling\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  clearData: true,\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Data-Handler",\n    ...options,\n  },\n  callback: {\n    successCallback({ data, status, message }) {\n      console.log({ data, status, message });\n    },\n    errorCallback({ error, status, message, errorData }) {\n      console.log({ error, status, message, errorData });\n    },\n    errorCallback({ type, action, payload, Cancelled }) {\n      console.log({ type, action, payload, Cancelled });\n    },\n    pollingCallback({\n      res,\n      data /* successdata */,\n      message,\n      status,\n      count /* polling count */,\n    }) {\n      console.log({ res, data, message, status, count });\n      return {\n        params: {},\n        query: {},\n        paramsSerializer: {},\n        asyncFunctionParams: {},\n      };\n      /* returns true will stop polling */\n    },\n    updateStateCallback({ state, data /* successdata */, type }) {\n      return newObject(state, ({ [type]: Data }) => ({\n        [type]: newObject(Data, () => data),\n      }));\n    },\n  },\n});\n')),Object(o.b)("h2",{id:"-updatestatecallback---function"},"# updateStateCallback - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Function>")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{})," Function:\nupdateStateCallback -> <function({ state, data /* successdata */, type })> - for manipulating the state\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  clearData: true,\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Data-Handler",\n    ...options,\n  },\n  callback: {\n    updateStateCallback({ state, data /* successdata */, type }) {\n      return newObject(state, ({ [type]: Data }) => ({\n        [type]: newObject(Data, () => data),\n      }));\n    },\n  },\n});\n')),Object(o.b)("h2",{id:"-subkey---array-accessing-deep-object"},"# subKey - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Array>")," accessing deep object"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"Array:\nsubKey -> <Array> - for store or update data on that paricular object\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  subKey: ["data", "data"],\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Data-Handler",\n    ...options,\n  },\n});\n')),Object(o.b)("h2",{id:"-deletekey---array-of-keys-to-delete"},"# deleteKey - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Array>")," of keys to delete"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"Array:\ndeleteKey -> <Array> - for removing a particular key in an object\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  deleteKey: ["name", "age"],\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Delete-Handler",\n    ...options,\n  },\n});\n')),Object(o.b)("h2",{id:"-filter---array-storing-data-based-on-filter"},"# filter - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Array>")," storing data based on filter"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"Array:\nfilter -> <Array> - for storing different type of data\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  deleteKey: ["name", "age"],\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Delete-Handler",\n    ...options,\n  },\n  filter: ["gadgets", "grocerries"],\n});\n')),Object(o.b)("h2",{id:"-filter---array-update-n-number-of-filters-at-single-task"},"# filter - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Array>")," update n number of filters at single task"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"Array:\nfilter -> <Array> - create or update n number of filters at single task\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  deleteKey: ["name", "age"],\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Delete-Handler",\n    ...options,\n  },\n  filter: [["gadgets", "grocerries"], ["cars"], ["house"]],\n});\n')),Object(o.b)("h2",{id:"-id---array--string--number"},"# id - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Array>")," || ",Object(o.b)("inlineCode",{parentName:"h2"},"<string>")," || ",Object(o.b)("inlineCode",{parentName:"h2"},"<number>")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"Array:\nid -> <Array> - for accessing particular object in an array\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  id: ["1", "2"],\n  key: "id",\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Update-Handler",\n    ...options,\n  },\n  filter: [["gadgets", "grocerries"], ["cars"], ["house"]],\n});\n')),Object(o.b)("h2",{id:"-key---id-key-example-user_id-string"},"# key - id Key example: 'user_id' ",Object(o.b)("inlineCode",{parentName:"h2"},"<String>")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"    Array:\n    key -> <string> - for reference to id\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  id: ["1", "2"],\n  key: "id",\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Update-Handler",\n    ...options,\n  },\n  filter: [["gadgets", "grocerries"], ["cars"], ["house"]],\n});\n')),Object(o.b)("h2",{id:"-cleardata---clearing-data-boolean-for-infinite"},"# clearData - clearing data ",Object(o.b)("inlineCode",{parentName:"h2"},"<Boolean>")," for infinite"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  clearData: true,\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Infinite-Handler",\n    ...options,\n  },\n});\n')),Object(o.b)("h2",{id:"-isappendtop---for-storing-data-in-top-for-infinite"},"# isAppendTop - for storing data in top for infinite"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  clearData: true,\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Infinite-Handler",\n    ...options,\n  },\n});\n')),Object(o.b)("h2",{id:"-limit---number-for-infinite-scrool-to-false"},"# limit - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Number>")," for infinite scrool to false"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\nconst options = {\n  limit: 15,\n};\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    name: "Infinite-Handler",\n    ...options,\n  },\n});\n')),Object(o.b)("h2",{id:"-query---object-adding-query-parameters-to-url"},"# query - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Object>")," adding query parameters to url"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  request: {\n    query: {\n      type: 1,\n    },\n  },\n});\n')),Object(o.b)("h2",{id:"-params---object-params-for-aps-egapiid"},"# params - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Object>")," params for aps eg:api/:id"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  request: {\n    params: {\n      id: 1,\n    },\n  },\n});\n')),Object(o.b)("h2",{id:"-successcallback---functionres--objectdataobjectstatus-message"},"# successCallback - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Function>"),"<{res : ",Object(o.b)("inlineCode",{parentName:"h2"},"<Object>"),",data",Object(o.b)("inlineCode",{parentName:"h2"},"<Object>"),",status, message}>"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  callback: {\n    successCallback({ data, status, message, res }) {\n      console.log({ data, status, message, res });\n    },\n  },\n});\n')),Object(o.b)("h2",{id:"-errorcallback---functionerror--error-instanceerrordataobjectstatus-message"},"# errorCallback - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Function>"),"<{error : ",Object(o.b)("inlineCode",{parentName:"h2"},"<Error instance>"),",errorData",Object(o.b)("inlineCode",{parentName:"h2"},"<Object>"),",status, message}>"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  callback: {\n    errorCallback({ error, status, message, errorData }) {\n      console.log({ error, status, message, errorData });\n    },\n  },\n});\n')),Object(o.b)("h2",{id:"-updatecallback---function-object"},"# updateCallback - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Function> <Object>")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    updateCallback(oldData, successData) {\n      return {\n        ...oldData,\n        ...successData,\n      };\n    },\n  },\n});\n')),Object(o.b)("h2",{id:"-payload---function"},"# payload - ",Object(o.b)("inlineCode",{parentName:"h2"},"<Function>")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  request: {\n    payload: {\n      id: 1,\n      password: "test",\n    },\n  },\n});\n')),Object(o.b)("h2",{id:"-on_success---storing-data-based-on-success-data-or-loaded-data"},"# ON_SUCCESS - storing data based on success data or loaded data"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_SUCCESS } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_SUCCESS, {\n  task: {\n    response: {\n      data: {\n        age: 20,\n      },\n    },\n  },\n  request: {\n    payload: {\n      id: 1,\n      password: "test",\n    },\n  },\n});\n')),Object(o.b)("h2",{id:"-on_unmount---reset-the-data"},"# ON_UNMOUNT - reset the data"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_UNMOUNT } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_UNMOUNT, ["flter-1"]);\n')),Object(o.b)("h2",{id:"-on_error---setting-the-loader-false-and-error-data"},"# ON_ERROR - setting the loader false and error data"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_ERROR } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_ERROR, {\n  error: {\n    status: 500,\n    message: "internal server error",\n    isError: true,\n  },\n});\n')),Object(o.b)("h2",{id:"-on_loading---setting-the-loader-true-or-false"},"# ON_LOADING - setting the loader true or false"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_LOADING } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_LOADING, {\n  loader: false,\n});\n')),Object(o.b)("h2",{id:"-on_toast---setting-the-toast-data"},"# ON_TOAST - setting the toast data"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_TOAST } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(ON_TOAST, {\n  toast: {\n    message: "new toast",\n    isError: false,\n  },\n});\n')),Object(o.b)("h2",{id:"-on_toast-on_loading-on_error-on_success---doing-all-task-at-one-action"},"# ","[ON_TOAST, ON_LOADING, ON_ERROR, ON_SUCCESS]"," - doing all task at one action"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import {\n  HOC,\n  commonConstants,\n  store,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst { ON_TOAST } = commonConstants;\nconst { DEMO_API_CONFIGURATION_CUSTOM_TASK } = props;\n\nDEMO_API_CONFIGURATION_CUSTOM_TASK(\n  [ON_TOAST, ON_LOADING, ON_ERROR, ON_SUCCESS],\n  {\n    task: {\n      response: {\n        data: {\n          age: 20,\n        },\n      },\n    },\n    toast: {\n      message: "new toast",\n      isError: false,\n    },\n    loader: false,\n    error: {\n      status: 500,\n      message: "internal server error",\n      isError: true,\n    },\n  }\n);\n')),Object(o.b)("h2",{id:"-api-end-point-params"},"# Api End Point Params"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"url,"),Object(o.b)("li",{parentName:"ul"},"method,"),Object(o.b)("li",{parentName:"ul"},"responseMessageKey,"),Object(o.b)("li",{parentName:"ul"},"responseDataKey,"),Object(o.b)("li",{parentName:"ul"},"responseStatusKey,"),Object(o.b)("li",{parentName:"ul"},"responseStatusCodeKey,"),Object(o.b)("li",{parentName:"ul"},"errorMessageKey,"),Object(o.b)("li",{parentName:"ul"},"errorDataKey,"),Object(o.b)("li",{parentName:"ul"},"errorHandlerStatusCode,"),Object(o.b)("li",{parentName:"ul"},"effect - takeLatest default || 'every' for takeEvery")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const response = {\n  code: 900,\n  data: {},\n  status: "successfully fetched data",\n};\nconst error = {\n  errorCode: 500,\n  error: {},\n  message: "successfully fetched data",\n};\nconst DEMO_API_CONFIGURATION = {\n  url: `${BASE_URL}user/`,\n  method: "GET",\n  responseStatusCode: [900, 200], // for handling success\n  responseStatusCodeKey: "code", // for storing status message - default key will be status\n  responseMessageKey: "status",\n  errorMessageKey: "error",\n  responseDataKey: "data", // default will be data\n  errorMessageKey: "message",\n  errorDataKey: "error",\n  errorHandlerStatusCode: [901], // if success data has error code [901] it will goes to error handler\n};\n')),Object(o.b)("h2",{id:"-getdata---returns"},"# GetData - returns"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"data - ",Object(o.b)("inlineCode",{parentName:"li"},"< Object >")),Object(o.b)("li",{parentName:"ul"},"loader - ",Object(o.b)("inlineCode",{parentName:"li"},"< Boolean >")),Object(o.b)("li",{parentName:"ul"},"lastUpdated - ",Object(o.b)("inlineCode",{parentName:"li"},"< Boolean >")),Object(o.b)("li",{parentName:"ul"},"isInfinite - ",Object(o.b)("inlineCode",{parentName:"li"},"< Boolean >")),Object(o.b)("li",{parentName:"ul"},"infiniteEnd - ",Object(o.b)("inlineCode",{parentName:"li"},"< Boolean >")),Object(o.b)("li",{parentName:"ul"},"isError - ",Object(o.b)("inlineCode",{parentName:"li"},"< Boolean >")),Object(o.b)("li",{parentName:"ul"},"error - ",Object(o.b)("inlineCode",{parentName:"li"},"< Object >")),Object(o.b)("li",{parentName:"ul"},"toast - ",Object(o.b)("inlineCode",{parentName:"li"},"< toast >"))),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import { useMemo } from "react";\nconst {\n  getData,\n  Auth_data: { DEMO_API_CONFIGURATION },\n} = props;\n\nconst { data, loader, latUpdated, isInfinite, isInfiniteEnd } = useMemo(\n  () => getData(DEMO_API_CONFIGURATION, {}, false),\n  [DEMO_API_CONFIGURATION]\n);\n')),Object(o.b)("h2",{id:"-getdata---params"},"# GetData - params"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Object(data) - ",Object(o.b)("inlineCode",{parentName:"li"},"< Object >")),Object(o.b)("li",{parentName:"ul"},"defaultValue - ",Object(o.b)("inlineCode",{parentName:"li"},"< Array || Object || Boolean || null || String >")),Object(o.b)("li",{parentName:"ul"},"loader - ",Object(o.b)("inlineCode",{parentName:"li"},"< Boolean >")),Object(o.b)("li",{parentName:"ul"},"filter - ",Object(o.b)("inlineCode",{parentName:"li"},"< Array >"))),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'import { useMemo } from "react";\nconst {\n  getData,\n  Auth_data: { DEMO_API_CONFIGURATION },\n} = props;\n\nconst { data, loader, latUpdated, isInfinite, isInfiniteEnd } = useMemo(\n  () =>\n    getData(\n      DEMO_API_CONFIGURATION /* data */,\n      {} /* typeof value */\n      false /* initial state of the loader*/,\n      ["filter-1"] /* for getting paricular filter data */\n    ),\n  [DEMO_API_CONFIGURATION]\n);\n')))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/apireference.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-apireference-mdx-8feea26d66931a869067.js.map