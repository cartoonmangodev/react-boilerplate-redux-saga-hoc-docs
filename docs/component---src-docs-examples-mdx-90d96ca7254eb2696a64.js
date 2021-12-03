(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{IoPV:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t("Fcif"),r=t("+I+c"),o=(t("mXGw"),t("/FXl")),s=t("TjRS"),c=(t("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Examples.mdx"}});var u={_frontmatter:c},i=s.a;function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(i,Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"basic-example"},"Basic Example"),Object(o.b)("h2",{id:"-creating-config-file"},"# creating config file"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* config.js */\nimport { HOC as HocConfigure } from "react-boilerplate-redux-saga-hoc";\n\nconst HOC = HocConfigure({\n  handlers: [],\n  useHocHook: true,\n});\n\nconst TEST_GET_API =\n  "https://jsonplaceholder.typicode.com/posts/"; /* Default method GET */\n\nconst TEST_GET_BY_ID_API = ({ id }) =>\n  `https://jsonplaceholder.typicode.com/posts/${id}`; /* Default method GET */\n\nconst TEST_POSTS_API = {\n  url: "https://jsonplaceholder.typicode.com/posts/",\n  method: "POST",\n};\n\nconst TEST_WITH_CONFIG_API = {\n  url: "https://jsonplaceholder.typicode.com/posts/",\n  method: "GET",\n  responseStatusCode: [900] /* optional */,\n  responseStatusCodeKey: "code" /* optional */,\n  responseDataKey: "data" /* optional */,\n  responseMessageKey: "message" /* optional */,\n};\nconst HOC = HocConfigure({ handlers: [] });\nconst useAuthHoc = HOC({\n  initialState: {\n    profile: {},\n  },\n  useHook: true /* This will avoid unwanted rendering on every state changes */,\n  dontReset: {\n    TEST_GET_API /* If you pass anything on don\'t reset it wont reset the paricular state on setting to reset */,\n  },\n  apiEndPoints: { TEST_GET_API, TEST_POSTS_API, TEST_WITH_CONFIG_API },\n  constantReducer: ({ type, state, resetState }) => {\n    /* For handling custom action */\n    if (type === "logout") return resetState;\n    return state;\n  },\n  name: "Auth" /* Reducer name */,\n});\n\nexport { useAuthHoc };\n')),Object(o.b)("h2",{id:"-connecting-hoc-to-component-and-making-api-calls"},"# connecting hoc to component and making api calls"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_API },\n    reducerName,\n    actions: { TEST_GET_API_CALL, TEST_GET_API_CANCEL },\n  } = useAuthHoc();\n\n  /* useQuery hook for getting data from the reducer */\n\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_API]);\n\n  useEffect(() => {\n    TEST_GET_API_CALL();\n    return () => TEST_GET_API_CANCEL(); /* for cancelling api on unmounting */\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n\nexport default basicExample;\n/*\n   export default compose(AuthHoc)(basicExample);\n   can connect this hoc without using hook by disabling useHocHook to false in Hoc Configure (./config.js)\n    const HOC = HocConfigure({\n      handlers: [],\n      useHocHook: false, // default false\n    });\n*/\n')),Object(o.b)("h2",{id:"-using-usequery-hook-in-different-ways"},"# using useQuery hook in different ways"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* accessing multiple data  at single query */\nconst [test_data, test, test_deep, testGetApi] = useQuery(\n  reducerName /* can pass any reducer key such as \'Auth\' , \'router\' , ..etc*/,\n  [\n    {\n      key: TEST_GET_API,\n      name: "test",\n      initialLoaderState: true,\n    },\n    {\n      key: TEST_GET_API,\n      query: ".data[0]",\n      initialLoaderState: false,\n    },\n    {\n      key: TEST_GET_API,\n      query: ".data",\n      initialLoaderState: false,\n      default: [], // Default for data key it also check\'s type of data..if type is object return [].Don\'t pass if you dont want to type check\n    },\n    TEST_GET_API,\n  ]\n);\n\n/* query can be used in different ways based on your requirement */\n\nconst [data, loader] = useQuery(\n  reducerName, // can pass any reducer key such as \'Auth\' , \'router\' , ..etc\n  TEST_GET_API,\n  [\n    {\n      query: ".data[0]",\n      default: [],\n    },\n    {\n      query: ".loader",\n      default: false,\n    },\n  ]\n);\n\n/* pass array of string instead of object */\n\nconst [\n  { loader, data, lastUpdated, isError, error, toast },\n] = useQuery(reducerName, [TEST_GET_API]);\n\n/* Pass an object instead of array */\nconst data = useQuery(reducerName, {\n  key: TEST_GET_API,\n  default: [],\n  requiredKey: ["loader", "data", "lastUpdated"],\n});\n\n/* pass a string insted of array */\nconst { loader, data, lastUpdated, isError, error, toast } = useQuery(\n  reducerName,\n  TEST_GET_API\n);\n\n/* Pass a config as a third parameter its optional */\nconst data = useQuery(reducerName, TEST_GET_API, {\n  query: ".data",\n  default: [],\n});\n\n/* for getting whole reducer data */\nconst data = useQuery(); // Don\'t use this use this until its required it will render the component every time reducer change\nconst data = useQuery(reducerName); // Don\'t use this until its required it will render the component every time reducer data change\n')),Object(o.b)("h2",{id:"-calling-api"},"# calling api"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_API },\n    reducerName,\n    actions: { TEST_GET_API_CALL, TEST_GET_API_CANCEL },\n  } = useAuthHoc();\n\n  /* useQuery hook for getting data from the reducer */\n\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_API]);\n\n  useEffect(() => {\n    TEST_GET_API_CALL();\n    return () => TEST_GET_API_CANCEL(); /* for cancelling api on unmounting */\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-calling-api-by-passing-params"},"# calling api by passing params"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n\n  /* useQuery hook for getting data from the reducer */\n\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      request: {\n        id: 1,\n      },\n    });\n    return () => TEST_GET_API_CANCEL(); /* for cancelling api on unmounting */\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-mutate-reducer-value"},"# mutate reducer value"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const mutate = useMutation(reducerName);\n  /* useMutation hook for modifying data in the reducer */\n\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      request: {\n        params: { id: 1 },\n      },\n    });\n    setTimeout(() => {\n      mutate({\n        key: TEST_GET_BY_ID_API,\n        value: {\n          data: [{ title: "movie" }],\n        },\n      });\n    }, 3000);\n    return () => TEST_GET_API_CANCEL(); /* for cancelling api on unmounting */\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-passing-query-params"},"# passing query params"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      request: {\n        query: { id: 1 },\n      },\n    });\n    return () => TEST_GET_API_CANCEL(); /* for cancelling api on unmounting */\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-cancelling-api-call-or-polling"},"# Cancelling Api call or polling"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    actions: { TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n\n  useEffect(() => {\n    return () => TEST_GET_API_CANCEL(); /* for cancelling api on unmounting */\n  }, []);\n\n  return <div />;\n}\n')),Object(o.b)("h2",{id:"-accessing-data-using-usequery"},"# accessing data using useQuery"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      request: {\n        query: { id: 1 },\n      },\n    });\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-using-data-handler-for-storing-data"},"# using data-handler for storing data"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: {\n        name: "Data-Handler",\n      },\n      request: {\n        query: { id: 1 },\n      },\n    });\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-using-infinite-handler-for-infinite-scrolling"},"# using Infinite-handler for infinite scrolling"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: {\n        name: "Infinite-handler",\n        isAppendTop: false, // default will be false\n      },\n    });\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-clearing-old-data-before-storing-new-data"},"# clearing old Data before storing new Data"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: {\n        name: "Infinite-handler",\n        clearData: page === 1 ? true : false,\n      },\n    });\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-storing-data-in-deep-keys-using-subkey"},"# storing data in deep keys using subKey"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: {\n        name: "Infinite-handler",\n        subKey: ["items"], // it will store the data inside items in the reducer\n        clearData: page === 1 ? true : false,\n      },\n    });\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-deleting-paricular-data-in-an-array-using-delete-handler"},"# Deleting paricular data in an array using Delete-Handler"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: {\n        name: "Delete-Handler",\n        id: [2, 3], // delete items id\n        key: "id",\n      },\n    });\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-deleting-paricular-key-in-an-array-of-objects-using-delete-key-handler"},"# Deleting paricular key in an array of objects using Delete-Key-Handler"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: {\n        name: "Delete-Key-Handler",\n        id: [2, 3], // delete items id\n        key: "id",\n        deleteKey: ["name", ["team", "name"]],\n      },\n    });\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-update-paricular-object-in-an-array-of-objects-using-update-handler"},"# Update paricular object in an array of objects using update handler"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: {\n        name: "Update-Handler",\n        id: [2, 3], // delete items id\n        key: "id",\n      },\n    });\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-update-paricular-key-in-an-array-of-objects-using-update-key-handler"},"# Update paricular key in an array of objects using update key handler"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: {\n        name: "Update-Key-Handler",\n        id: [2, 3],\n        key: "id",\n        updateKey: ["order_status"],\n        values: [{ order_status: "delivered" }],\n      },\n    });\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-update-paricular-object-in-an-array-of-objects-using-update-handler-1"},"# Update paricular object in an array of objects using update handler"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: {\n        name: "Update-Handler",\n        id: [2, 3], // delete items id\n        key: "id",\n      },\n    });\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-polling-data"},"# Polling Data"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      request: {\n        polling: true,\n        delay: 8000, // default is 8000 milliseconds\n        pollingCount: 30, // max count default will be \'unlimited\' dont pass if you dont want to stop polling\n      },\n      callback: {\n        pollingCallback({ count, response, status, message }) {\n          // this will pass the query parameters to the next call\n          if (count > 2)\n            return {\n              query: {\n                status: "ongoing",\n              },\n            };\n          else if (status === 902) {\n            return false; // this will stop polling\n          }\n        },\n      },\n    });\n    return () => TEST_GET_BY_ID_API_CANCEL(); // this stop the polling on unmount\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-modifying-task-on-success"},"# Modifying task on success"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: "Infinite-Handler",\n      callback: {\n        successCallback({ status, data }) {\n          if (status === 902)\n            return {\n              task: {\n                name: "Data-Handler",\n                response: {\n                  data: data.concat([{ id: 400 }]),\n                },\n              },\n            };\n        },\n      },\n    });\n    return () => TEST_GET_BY_ID_API_CANCEL(); // this stop the polling on unmount\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-on-success-callback"},"# on success callback"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: "Infinite-Handler",\n      callback: {\n        successCallback({ status, data }) {\n          if (status === 902) toast("Successfully updated");\n        },\n      },\n    });\n    return () => TEST_GET_BY_ID_API_CANCEL(); // this stop the polling on unmount\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-on-error-callback"},"# on Error callback"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: "Infinite-Handler",\n      callback: {\n        errorCallback({ status, data }) {\n          if (status === 902) toast("Error while updating");\n        },\n      },\n    });\n    return () => TEST_GET_BY_ID_API_CANCEL(); // this stop the polling on unmount\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-update-callback"},"# update callback"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      task: "Infinite-Handler",\n      callback: {\n        updateCallback(previousData, successData) {\n          return previousData.concat(successData);\n        },\n      },\n    });\n    return () => TEST_GET_BY_ID_API_CANCEL(); // this stop the polling on unmount\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-final-callback-for-handling-loaderscancel"},"# final callback for handling loaders,cancel"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_GET_BY_ID_API_CALL, TEST_GET_BY_ID_API_CANCEL },\n  } = useAuthHoc();\n  const [loader, setLoader] = useState(true);\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_GET_BY_ID_API_CALL({\n      callback: {\n        finalCallback({ Cancelled }) {\n          if (Cancelled) toast("Update cancelled");\n          setLoader(false);\n        },\n      },\n    });\n    return () => TEST_GET_BY_ID_API_CANCEL(); // this stop the polling on unmount\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-updating-other-reducer-by-calling-api---updatedatareducerkey"},"# Updating other reducer by calling api - (updateDataReducerKey)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: { TEST_PUT_API_CALL, TEST_PUT_API_CANCEL },\n  } = useAuthHoc();\n  const [loader, setLoader] = useState(true);\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_PUT_API_CALL({\n      task: {\n        name:\n          orderStatus[order_status] === "delivered"\n            ? "Delete-Handler"\n            : "Update-Key-Handler",\n        id: [id],\n        key: "id",\n        updateKey: ["order_status"],\n        values: [{ order_status: orderStatus[order_status] }],\n      },\n      updateDataReducerKey: TEST_GET_BY_ID_API,\n      request: {\n        payload: { order_status: orderStatus[order_status] },\n        params: { orderId: id },\n      },\n      callback: {\n        successCallback() {\n          setShowModal(false);\n        },\n      },\n    });\n    return () => TEST_GET_BY_ID_API_CANCEL(); // this stop the polling on unmount\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')),Object(o.b)("h2",{id:"-updating-other-reducer-by-calling-api-using-customtask"},"# Updating other reducer by calling api using customTask"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect, useState } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n  useMutation,\n  commonConstants,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    reducerConstants: { TEST_GET_BY_ID_API },\n    reducerName,\n    actions: {\n      TEST_PUT_API_CALL,\n      TEST_PUT_API_CANCEL,\n      TEST_GET_BY_ID_API_CUSTOM_TASK,\n    },\n  } = useAuthHoc();\n  const [loader, setLoader] = useState(true);\n  const { ON_SUCCESS } = commonConstants;\n  /* useQuery hook for getting data from the reducer */\n  const [page, setPage] = useState(1);\n  const [\n    { loader, data, lastUpdated, isError, error, toast },\n  ] = useQuery(reducerName, [TEST_GET_BY_ID_API]);\n\n  useEffect(() => {\n    TEST_PUT_API_CALL({\n      request: {\n        payload: { order_status: orderStatus[order_status] },\n        params: { orderId: id },\n      },\n      callback: {\n        successCallback() {\n          TEST_GET_BY_ID_API_CUSTOM_TASK(ON_SUCCESS, {\n            task: {\n              name:\n                orderStatus[order_status] === "delivered"\n                  ? "Delete-Handler"\n                  : "Update-Key-Handler",\n              id: [id],\n              key: "id",\n              updateKey: ["order_status"],\n              values: [{ order_status: orderStatus[order_status] }],\n            },\n          });\n          setShowModal(false);\n        },\n      },\n    });\n    return () => TEST_GET_BY_ID_API_CANCEL(); // this stop the polling on unmount\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n')))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Examples.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-examples-mdx-90d96ca7254eb2696a64.js.map