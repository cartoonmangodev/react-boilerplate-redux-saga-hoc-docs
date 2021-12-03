(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{KCxe:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return c})),t.d(e,"default",(function(){return _}));var r=t("Fcif"),o=t("+I+c"),s=(t("mXGw"),t("/FXl")),a=t("TjRS"),c=(t("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Advanced Examples.mdx"}});var i={_frontmatter:c},u=a.a;function _(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(s.b)(u,Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"advanced-examples"},"Advanced Examples"),Object(s.b)("h2",{id:"-creating-config-file"},"# creating config file"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'/* config.js */\nimport { HOC as HocConfigure } from "react-boilerplate-redux-saga-hoc";\n\nconst HOC = HocConfigure({\n  handlers: [],\n  useHocHook: true,\n});\n\nconst TEST_GET_API =\n  "https://jsonplaceholder.typicode.com/posts/"; /* Default method GET */\n\nconst TEST_GET_BY_ID_API = ({ id }) =>\n  `https://jsonplaceholder.typicode.com/posts/${id}`; /* Default method GET */\n\nconst TEST_POSTS_API = {\n  url: "https://jsonplaceholder.typicode.com/posts/",\n  method: "POST",\n};\n\nconst TEST_WITH_CONFIG_API = {\n  url: "https://jsonplaceholder.typicode.com/posts/",\n  method: "GET",\n  responseStatusCode: [900] /* optional */,\n  responseStatusCodeKey: "code" /* optional */,\n  responseDataKey: "data" /* optional */,\n  responseMessageKey: "message" /* optional */,\n};\nconst HOC = HocConfigure({ handlers: [] });\nconst useAuthHoc = HOC({\n  initialState: {\n    profile: {},\n  },\n  useHook: true /* This will avoid unwanted rendering on every state changes */,\n  dontReset: {\n    TEST_GET_API /* If you pass anything on don\'t reset it wont reset the paricular state on setting to reset */,\n  },\n  apiEndPoints: { TEST_GET_API, TEST_POSTS_API, TEST_WITH_CONFIG_API },\n  constantReducer: ({ type, state, resetState }) => {\n    /* For handling custom action */\n    if (type === "logout") return resetState;\n    return state;\n  },\n  name: "Auth" /* Reducer name */,\n});\n\nexport { useAuthHoc };\n')),Object(s.b)("h2",{id:"-modifing-state-using-mutation"},"# Modifing State using Mutation"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const mutate = useMutation(reducerName);\n  /* useMutation hook for modifying data in the reducer */\n\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      request: {\n        params: { id: 1 },\n      },\n    });\n    setTimeout(() => {\n      mutate({\n        key: TEST_GET_BY_ID_API,\n        value: {\n          data: [{ title: "movie" }],\n        },\n      });\n    }, 3000);\n    return () => TEST_GET_API_CANCEL(); /* for cancelling api on unmounting */\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(s.b)("h2",{id:"-using-usemutatereducer"},"# Using useMutateReducer"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutateReducer,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const mutateState = useMutateReducer(reducerName);\n  /* useMutation hook for modifying data in the reducer */\n\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      request: {\n        params: { id: 1 },\n      },\n    });\n    mutateState((state) => ({\n      isLoggedIn: true,\n      [TEST_GET_BY_ID_API]: {\n        ...state[TEST_GET_BY_ID_API],\n        loader: false,\n      },\n      [TEST_GET_BY_ID_API]: newObject(\n        state[TEST_GET_BY_ID_API],\n        ({ data: Data }) => ({\n          ...data,\n          loader: false,\n        })\n      ),\n    }));\n    return () => TEST_GET_API_CANCEL(); /* for cancelling api on unmounting */\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(s.b)("h2",{id:"-using-usestalerefresh"},"# Using useStaleRefresh"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutateReducer,\n  newObject,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: {\n      VENDORS_GET_DASBOARD_API,\n      VENDORS_GET_ORDERS_BY_DAY_API,\n    },\n    reducerName,\n    actions: {\n      VENDORS_GET_DASBOARD_API_CALL,\n      VENDORS_GET_ORDERS_BY_DAY_API_CALL,\n      VENDORS_GET_DASBOARD_API_CANCEL,\n      VENDORS_GET_ORDERS_BY_DAY_API_CANCEL,\n    },\n  } = useAuthHoc();\n  const pollingConfig = {\n    request: {\n      polling: true,\n      delay: 8000,\n    },\n  };\n  const [refresh, isUpdating] = useStaleRefresh(\n    VENDORS_GET_DASBOARD_API_CALL,\n    VENDORS_GET_DASBOARD_API,\n    pollingConfig\n  );\n  const [refreshOrders, isUpdating] = useStaleRefresh(\n    VENDORS_GET_ORDERS_BY_DAY_API_CALL,\n    VENDORS_GET_ORDERS_BY_DAY_API,\n    pollingConfig\n  );\n  useEffect(() => {\n    function pollingStart() {\n      /// refresh({loader, clearData, config}); optional parameters\n      refresh();\n      refreshOrders();\n    }\n    function pollingEnd() {\n      VENDORS_GET_DASBOARD_API_CANCEL();\n      VENDORS_GET_ORDERS_BY_DAY_API_CANCEL();\n    }\n    pollingStart();\n    window.addEventListener("online", pollingStart);\n    window.addEventListener("offline", pollingEnd);\n    return () => {\n      window.removeEventListener("online", pollingStart);\n      window.removeEventListener("offline", pollingEnd);\n      VENDORS_GET_DASBOARD_API_CANCEL();\n      VENDORS_GET_ORDERS_BY_DAY_API_CANCEL();\n    };\n  }, []);\n}\n')),Object(s.b)("h2",{id:"-using-asyncfuntion"},"# Using asyncFuntion"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { useEffect } from "react";\n// import { ON_UNMOUNT } from \'shared/src/utils/commonReduxSagaConverter/commonConstants\';\n\nclass CustomError extends Error {\n  constructor(response, ...params) {\n    // Pass remaining arguments (including vendor specific ones) to parent constructor\n    super(...params);\n\n    // Maintains proper stack trace for where our error was thrown (only available on V8)\n    if (Error.captureStackTrace) {\n      Error.captureStackTrace(this, CustomError);\n    }\n\n    // this.name =\n    // Custom debugging information\n    this.response = response;\n  }\n}\n\nexport default ({ useAuthHoc }) => {\n  const {\n    // eslint-disable-next-line no-unused-vars\n    actions: { DEMO_URL_CALL, DEMO_URL_CANCEL, DEMO_URL_CUSTOM_TASK },\n  } = useAuthHoc();\n  useEffect(() => {\n    // setInterval(() => {\n    DEMO_URL_CALL({\n      task: {\n        name: "Callback-Handler",\n        infiniteEnd: true,\n        callback: () => ({\n          loading: null,\n        }),\n      },\n      request: {\n        errorDataHandling: true,\n        polling: true,\n        delay: 2000,\n        retry: 2,\n        onCancelTask: () => {\n          console.log("cancel");\n        },\n        asyncFunction: async (url) => {\n          try {\n            const response = await fetch(url);\n            const data = await response.json();\n            // console.log(data, response, \'data\');\n            if (response.status === 200)\n              return Promise.resolve({\n                data,\n                status: response.status,\n                message: response.statusText,\n              });\n            throw new CustomError(\n              { isAxiosError: true, response },\n              "AXIOS ERROR"\n            );\n          } catch (err) {\n            console.log(typeof err);\n            if (err && typeof err === "object" && err.isAxiosError)\n              return Promise.reject({\n                message: err.response.message,\n                isAxiosError: true,\n                response: {\n                  status: err.response.status,\n                  message: err.response.statusText,\n                  data: {\n                    hello: "jddhd",\n                  },\n                },\n              });\n            return Promise.reject({\n              message: err.response && err.response.message,\n              isAxiosError: true,\n              response: {\n                status: err.response && err.response.status,\n                message: err.response && err.response.statusText,\n                data: {\n                  hello: "jddhd",\n                },\n              },\n            });\n          }\n        },\n        asyncFunctionParams: ["https://jsonplaceholder.typicode.com/posts/"],\n      },\n      // request: {\n      //   polling: true,\n      //   delay: 2000,\n      // },\n    });\n    // DEMO_URL_CANCEL(ON_UNMOUNT);\n    // DEMO_URL_CUSTOM_TASK();\n    // }, 2000);\n  }, []);\n};\n')))}void 0!==_&&_&&_===Object(_)&&Object.isExtensible(_)&&!_.hasOwnProperty("__filemeta")&&Object.defineProperty(_,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Advanced Examples.mdx"}}),_.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-advanced-examples-mdx-54ebb3c0965a468e4c12.js.map