(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"1wAp":function(e,t,a){e.exports=a.p+"static/4-a4aeb9ec478c297b915829acacddadcf.png"},GT2c:function(e,t,a){e.exports=a.p+"static/1-c550d7da5fa35428d85b2097102d78ea.png"},SWWr:function(e,t,a){e.exports=a.p+"static/6-0a202102bf8ba8f6835aa1263ce85910.png"},fHxp:function(e,t,a){e.exports=a.p+"static/3-c3c247ded4c81736ff3389328f4195e5.png"},n1t8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("Fcif"),o=a("+I+c"),r=(a("mXGw"),a("/FXl")),c=a("TjRS"),s=(a("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Getting Started/introduction.mdx"}});var i={_frontmatter:s},l=c.a;function b(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},i,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"react-boilerplate-redux-saga-hoc"},"React Boilerplate Redux Saga HOC"),Object(r.b)("h2",{id:"-before-start"},"# Before Start"),Object(r.b)("h3",{id:"1-why-we-created-this-hoc"},"1. Why we created this hoc?"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"we are repeatedly creating constants, reducer, actions, saga whenever we want to make the API call.\nWe are doing the same thing again and again that will make most of the developers feel disconnected from coding.\nTo avoid that, we have created a Hoc for you to handle those repeated things.\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"2-do-i-need-the-basic-knowledge-about-redux-saga-to-use-this-hoc"},"2. Do i need the basic knowledge about redux-saga to use this hoc?"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"No need to have basic knowledge about redux-saga.\nWe are using redux-saga to handle API calls because Redux-Saga is a great library for handling all the side effects.\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"3-who-can-use-this-hoc"},"3. Who can use this hoc?"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"A person who wants to do development faster and also who doesn't want to create constants, reducer, saga, actions repeatedly.\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"-overview"},"# Overview"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"React Boilerplate Redux-Saga HOC is a Hoc for handling API calls as well as maintain redux state.\nWith the help of this Hoc no need to worry about handling multiple API calls.\nBecause when you connect this Hoc with the component it will automatically create constants, reducer, saga, actions for you.\nAnd also provides a method to call the API as well as manipulating the state.\n")),Object(r.b)("h3",{id:""}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"It also handles success, errors, loader, canceling API calls when you are unmounting the component.\nMost of the developers failed to cancel the API calls while unmounting the component.\nThat will create unwanted network traffic and also affect the performance of the application.\nNo worry Hoc will handle those things.\n")),Object(r.b)("h3",{id:"-1"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"This package also supports both React and React native.\nSo no need to worry about basic configuration and also no separate coding needed.\nJust use the configuration on both react and react-native.\n")),Object(r.b)("h2",{id:"-benefits-of-using-this-package"},"# Benefits of using this package"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"- Handles api calls\n- No need to create store, constants, actions, saga, reducer.\n- It also handles cancelling api call when unmounting the component.\n- Handles error, success, cancel, loading, infinite data handling,polling,pagination,...etc\n- No worry about api calls, loaders, error handling...etc\n- No separate coding needed for react and react native - use same configuration for all the platforms.\n")),Object(r.b)("h2",{id:"-installation"},"# Installation"),Object(r.b)("p",null,"This package requires ",Object(r.b)("strong",{parentName:"p"},"React 16.8.4 or later.")),Object(r.b)("p",null,"Use the package manager ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"npm")," to install react-boilerplate-redux-saga-hoc."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Note:\nPlease make sure to install required dependencies.\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install redux-saga@0.16.2 react-redux  react-boilerplate-redux-saga-hoc\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn  add redux-saga@0.16.2 react-redux  react-boilerplate-redux-saga-hoc\n\n")),Object(r.b)("h2",{id:"-setup"},"# Setup"),Object(r.b)("h3",{id:"react-js"},"React JS"),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/installation-setup#-installing-on-create-react-app-scafolding"}),"Installing on create-react-app scafolding")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/installation-setup#-installing-on-react-boilerplate-scafolding"}),"Installing on React-Boilerplate scafolding")),Object(r.b)("h3",{id:"react-native"},"React Native"),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/installation-setup#-installing-on-react-native"}),"Installing on React-Native")),Object(r.b)("h3",{id:"next-js"},"Next JS"),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/installation-setup#-installing-on-next-js"}),"Installing on Next-js")),Object(r.b)("h2",{id:"-basic-usage"},"# Basic usage"),Object(r.b)("h3",{id:"-store-configuration"},"# Store Configuration"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Note:\n- No need to configure store seperately.\n- Store can be imported from react-boilerplate-redux-saga-hoc.\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport { Provider } from "react-redux";\nimport { store as configureStore } from "react-boilerplate-redux-saga-hoc";\n\nconst initialState = {};\nconst connected_router_enable = false;\nconst store = configureStore(initialState, connected_router_enable); // by default second parameter will be false\nexport default function App(props) {\n  return (\n    <Provider store={store}>\n      <CustomComponent />\n    </Provider>\n  );\n}\n\nexport default App;\n')),Object(r.b)("h3",{id:"-creating-config-file"},"# creating config file"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'/* config.js */\nimport { HOC as HocConfigure } from "react-boilerplate-redux-saga-hoc";\n\nconst HOC = HocConfigure({\n  handlers: [],\n  useHocHook: true /* This will help us to use hoc as a hook */,\n});\n\nconst TEST_API =\n  "https://jsonplaceholder.typicode.com/posts/"; /* Default method GET */\n\nconst REGISTER_API = { url: "/user/register", method: "POST" };\n\n// const TEST_POSTS_API = {\n//   url: "https://jsonplaceholder.typicode.com/posts/",\n//   method: "POST",\n// };\n\n// const TEST_WITH_CONFIG_API = {\n//   url: "https://jsonplaceholder.typicode.com/posts/",\n//   method: "GET",\n//   responseStatusCode: [900] /* optional */,\n//   responseStatusCodeKey: "code" /* optional */,\n//   responseDataKey: "data" /* optional */,\n//   responseMessageKey: "message" /* optional */,\n// };\n\nconst useAuthHoc = HOC({\n  initialState: {\n    profile: {},\n  },\n  dontReset: {\n    TEST_API /* If you pass anything on don\'t reset it wont reset the paricular state on setting to reset */,\n  },\n  apiEndPoints: { TEST_API, REGISTER_API },\n  constantReducer: ({ type, state, resetState }) => {\n    /* For handling custom action */\n    if (type === "logout") return resetState;\n    return state;\n  },\n  name: "Auth" /* Reducer name */,\n});\n\nexport { useAuthHoc };\n')),Object(r.b)("h3",{id:"-connecting-hoc-to-the-component-and-make-the-api-calls"},"# connecting hoc to the component and make the api calls"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n} from "react-boilerplate-redux-saga-hoc";\nimport { useAuthHoc } from "./config";\n\nfunction basicExample(props) {\n  /* \n  if you have wrapped with hoc instead of using hook you will get all the constants,actions...etc from props like given below\n  const {\n    Auth_hoc: {\n      reducerConstants: { TEST_API },\n      reducerName,\n      actions: { TEST_API_CALL, TEST_API_CANCEL },\n    },\n  } = props;  \n  */\n\n  const {\n    reducerConstants: { TEST_API },\n    reducerName,\n    actions: { TEST_API_CALL, TEST_API_CANCEL },\n  } = useAuthHoc();\n\n  /* useQuery hook for getting data from the reducer */\n\n  const { loader, data, lastUpdated, isError, error, toast } = useQuery(\n    reducerName,\n    TEST_API\n  );\n\n  useEffect(() => {\n    TEST_API_CALL();\n    /* for cancelling api calls on unmounting */\n    return () => TEST_API_CANCEL();\n  }, []);\n\n  return (\n    <ul>\n      {data.map(({ title, id }) => (\n        <li key={id}>{title}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default basicExample;\n// export default compose(AuthHoc)(basicExample); you can connect this component with hoc by toggling useHocHook to false in HocConfigure\n')),Object(r.b)("h2",{id:"-using-usequery-hook-in-different-ways"},"# using useQuery hook in different ways"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'/* accessing multiple data  at single query */\nconst [test_data, test, test_deep, testGetApi] = useQuery(\n  reducerName /* can pass any reducer key such as \'Auth\' , \'router\' , ..etc*/,\n  [\n    {\n      key: TEST_GET_API,\n      name: "test",\n      initialLoaderState: true,\n    },\n    {\n      key: TEST_GET_API,\n      query: ".data[0]",\n      initialLoaderState: false,\n    },\n    {\n      key: TEST_GET_API,\n      query: ".data",\n      initialLoaderState: false,\n      default: [], // Default for data key it also check\'s type of data..if type is object return [].Don\'t pass if you dont want to type check\n    },\n    TEST_GET_API,\n  ]\n);\n\n/* query can be used in different ways based on your requirement */\n\nconst [data, loader] = useQuery(\n  reducerName, // can pass any reducer key such as \'Auth\' , \'router\' , ..etc\n  TEST_GET_API,\n  [\n    {\n      query: ".data[0]",\n      default: [],\n    },\n    {\n      query: ".loader",\n      default: false,\n    },\n  ]\n);\n\n/* For direct accessing reducer keys */\nconst { isLoggedIn, profile } = useQuery(reducerName, {\n  requiredKey: ["isLoggedIn", "profile"],\n});\n\n/* pass array of string instead of object */\n\nconst [\n  { loader, data, lastUpdated, isError, error, toast },\n] = useQuery(reducerName, [TEST_GET_API]);\n\n/* Pass an object instead of array */\nconst data = useQuery(reducerName, {\n  key: TEST_GET_API,\n  default: [],\n  requiredKey: ["loader", "data", "lastUpdated"],\n});\n\n/* pass a string insted of array */\nconst { loader, data, lastUpdated, isError, error, toast } = useQuery(\n  reducerName,\n  TEST_GET_API\n);\n\n/* Pass a config as a third parameter its optional */\nconst data = useQuery(reducerName, TEST_GET_API, {\n  query: ".data",\n  default: [],\n});\n\n/* for getting whole reducer data */\nconst data = useQuery(); // Don\'t use this use this until its required it will render the component every time reducer change\nconst data = useQuery(reducerName); // Don\'t use this until its required it will render the component every time reducer data change\n')),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"This is the image from Redux Store for initial state after connecting hoc to the component"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"  ",src:a("1wAp")})),Object(r.b)("h3",{id:"-things-to-remember"},Object(r.b)("strong",{parentName:"h3"},"# Things to Remember")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"- The image which we seeing above are the two endpoints which we created before.\n- Hoc will create Constants, Reducer, Saga, Actions for You.\n- No Need worry about creating seperate actions, reducers for every end-points.It will handle by itsself.\n- Just provide the configuration.Hoc will handle all the task for you.\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"This is the image from Console where hoc will provide actions, constants for handling tasks"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"  ",src:a("SWWr")})),Object(r.b)("h3",{id:"-things-to-remember-1"},Object(r.b)("strong",{parentName:"h3"},"# Things to Remember")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"- Hoc will create 3 actions for you for handling api calls,handing data..etc\n- REGISTER_API_CALL: ƒ () - for handling api calls\n- REGISTER_API_CANCEL: ƒ () - for handling api cancel request\n- REGISTER_API_CUSTOM_TASK ƒ () - for handling custom task without doing api calls\n- CALL, CANCEL, CUSTOM_TASK will be created for every api end points\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"state from Redux Store before api gets success or failure"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"  ",src:a("GT2c")})),Object(r.b)("h3",{id:"-things-to-remember-2"},Object(r.b)("strong",{parentName:"h3"},"# Things to Remember")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"- Loader will change to true if api call triggers\n- Toast will reset to initial state\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"This is state from Redux Store after api gets success"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"  ",src:a("fHxp")})),Object(r.b)("h3",{id:"-things-to-remember-3"},Object(r.b)("strong",{parentName:"h3"},"# Things to Remember")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"- Loader will change to false if api call gets success or failure\n- Toast will be stored into to toast key\n- Data will be stored into the data key\n")),Object(r.b)("h1",{id:"before-proceeding-further"},"Before Proceeding Further"),Object(r.b)("p",null,"We already know ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/"}),"redux")," is a valuable tool for organising your state and also ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-saga.js.org/"}),"redux-saga")," is a powerful library for handling side Effects.With the help of those two tools we have created a package for handling api calls and storing data in an organised way."),Object(r.b)("h2",{id:"-why-should-i-use-this-package"},"# Why should i use this package"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Important:\n-This package is not an alternative for redux and redux-saga\n-This package is mostly for developer who wants to make development faster and also to handle most of the api calls.\n")),Object(r.b)("h2",{id:"-whether-this-package-will-support-for-react-native"},"# Whether this package will support for react-native"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Yes, this package will support for both react and react-native.\n")),Object(r.b)("h2",{id:"-contributing"},"# Contributing"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.\nPlease make sure to update tests as appropriate.\n")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cartoonmangodev/react-boilerplate-redux-saga-hoc"}),"click here for github page")),Object(r.b)("h2",{id:"-gitbook-documentation"},"# Gitbook Documentation"),Object(r.b)("p",null,"Please find the gitbook Documentation from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://chrissieaerospace.gitbook.io/react-boilerplate-redux-saga-hoc/"}),"here")),Object(r.b)("h2",{id:"-license"},"# License"),Object(r.b)("p",null,"Copyright (c) 2020-present Chrissie Fernando"),Object(r.b)("p",null,"Next - ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/beginnerTutorial"}),"Beginner Tutorial")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Getting Started/introduction.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-getting-started-introduction-mdx-5df74eaec7bcaa5e8466.js.map