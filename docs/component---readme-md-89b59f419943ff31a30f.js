(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1wAp":function(e,t,a){e.exports=a.p+"static/4-a4aeb9ec478c297b915829acacddadcf.png"},GT2c:function(e,t,a){e.exports=a.p+"static/1-c550d7da5fa35428d85b2097102d78ea.png"},SWWr:function(e,t,a){e.exports=a.p+"static/6-0a202102bf8ba8f6835aa1263ce85910.png"},fHxp:function(e,t,a){e.exports=a.p+"static/3-c3c247ded4c81736ff3389328f4195e5.png"},xfB3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("Fcif"),r=a("+I+c"),c=(a("mXGw"),a("/FXl")),b=a("TjRS"),o=(a("aD51"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"Readme.md"}});var i={_frontmatter:o},l=b.a;function d(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(c.b)(l,Object(n.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"react-boilerplate-redux-saga-hoc"},"React Boilerplate Redux Saga HOC"),Object(c.b)("p",null,"React Boilerplate Redux Saga HOC is a hoc for handling api calls as well as mataintaing redux state."),Object(c.b)("h2",{id:"-installation"},"# Installation"),Object(c.b)("p",null,"This package requires ",Object(c.b)("strong",{parentName:"p"},"React 16.8.4 or later.")),Object(c.b)("p",null,"Use the package manager ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"npm")," to install react-boilerplate-redux-saga-hoc."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i react-boilerplate-redux-saga-hoc\n")),Object(c.b)("p",null,"or"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-boilerplate-redux-saga-hoc\n")),Object(c.b)("h2",{id:"-setup"},"# Setup"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cartoonmangodev.github.io/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/beginnerTutorial"})," Beginner Tutorial")),Object(c.b)("h1",{id:""}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cartoonmangodev.github.io/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/installation-setup#-installing-on-create-react-app-scafolding"}),"Installing on create-react-app scafolding")),Object(c.b)("h1",{id:"-1"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cartoonmangodev.github.io/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/installation-setup#-installing-on-react-boilerplate-scafolding"}),"Installing on React-Boilerplate scafolding")),Object(c.b)("h1",{id:"-2"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cartoonmangodev.github.io/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/installation-setup#-installing-on-react-native"}),"Installing on React-Native")),Object(c.b)("h1",{id:"-3"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cartoonmangodev.github.io/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/installation-setup#-installing-on-next-js"}),"Installing on Next-js")),Object(c.b)("blockquote",null,Object(c.b)("h3",Object(n.a)({parentName:"blockquote"},{id:"note-before-proceeding-furtherplease-read-the-detail-documentation-from-here"}),Object(c.b)("strong",{parentName:"h3"},"Note:")," Before proceeding further.",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://cartoonmangodev.github.io/react-boilerplate-redux-saga-hoc-docs/"}),"Please read the detail documentation from here"))),Object(c.b)("h2",{id:"-before-start"},"# Before Start"),Object(c.b)("h3",{id:"1-why-we-created-this-hoc"},"1. Why we created this hoc?"),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"we are repeatedly creating constants, reducer, actions, saga whenever we want to make the API call.\nWe are doing the same thing again and again that will make most of the developers feel disconnected from coding.\nTo avoid that, we have created a Hoc for you to handle those repeated things.\n")),Object(c.b)("h3",{id:"2-do-i-need-the-basic-knowledge-about-redux-saga-to-use-this-hoc"},"2. Do i need the basic knowledge about redux-saga to use this hoc?"),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"No need to have basic knowledge about redux-saga.\nWe are using redux-saga to handle API calls because Redux-Saga is a great library for handling all the side effects.\n")),Object(c.b)("h3",{id:"3-who-can-use-this-hoc"},"3. Who can use this hoc?"),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"A person who wants to do development faster and also who doesn't want to create constants, reducer, saga, actions repeatedly.\n")),Object(c.b)("h2",{id:"-overview"},"# Overview"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"React Boilerplate Redux-Saga HOC is a Hoc for handling API calls as well as maintain redux state.\nWith the help of this Hoc no need to worry about handling multiple API calls.\nBecause when you connect this Hoc with the component it will automatically create constants, reducer, saga, actions for you.\nAnd also provides a method to call the API as well as manipulating the state.\n")),Object(c.b)("h3",{id:"-4"}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"It also handles success, errors, loader, canceling API calls when you are unmounting the component.\nMost of the developers failed to cancel the API calls while unmounting the component.\nThat will create unwanted network traffic and also affect the performance of the application.\nNo worry Hoc will handle those things.\n")),Object(c.b)("h3",{id:"-5"}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"This package also supports both React and React native.\nSo no need to worry about basic configuration and also no separate coding needed.\nJust use the configuration on both react and react-native.\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"-basic-usage"},"# Basic usage"),Object(c.b)("h3",{id:"-store-configuration"},"# Store Configuration"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Note:\n- No need to configure store seperately.\n- Store can be imported from react-boilerplate-redux-saga-hoc.\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport { Provider } from "react-redux";\nimport { store as configureStore } from "react-boilerplate-redux-saga-hoc";\n\nconst initialState = {};\nconst connected_router_enable = false;\nconst store = configureStore(initialState, connected_router_enable); // by default second parameter will be false\nexport default function App(props) {\n  return (\n    <Provider store={store}>\n      <CustomComponent />\n    </Provider>\n  );\n}\n\nexport default App;\n')),Object(c.b)("h3",{id:"-creating-config-file"},"# creating config file"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'/* config.js */\nimport { HOC as HocConfigure } from "react-boilerplate-redux-saga-hoc";\n\nconst HOC = HocConfigure({\n  handlers: [],\n});\n\nconst TEST_API =\n  "https://jsonplaceholder.typicode.com/posts/"; /* Default method GET */\n\nconst REGISTER_API = { url: "/user/register", method: "POST" };\n\n// const TEST_POSTS_API = {\n//   url: "https://jsonplaceholder.typicode.com/posts/",\n//   method: "POST",\n// };\n\n// const TEST_WITH_CONFIG_API = {\n//   url: "https://jsonplaceholder.typicode.com/posts/",\n//   method: "GET",\n//   responseStatusCode: [900] /* optional */,\n//   responseStatusCodeKey: "code" /* optional */,\n//   responseDataKey: "data" /* optional */,\n//   responseMessageKey: "message" /* optional */,\n// };\n\nconst AuthHoc = HOC({\n  initialState: {\n    profile: {},\n  },\n  useHook: true /* This will avoid unwanted rendering on every state changes */,\n  dontReset: {\n    TEST_API /* If you pass anything on don\'t reset it wont reset the paricular state on setting to reset */,\n  },\n  apiEndPoints: { TEST_API, REGISTER_API },\n  constantReducer: ({ type, state, resetState }) => {\n    /* For handling custom action */\n    if (type === "logout") return resetState;\n    return state;\n  },\n  name: "Auth" /* Reducer name */,\n});\n\nexport { AuthHoc };\n')),Object(c.b)("h3",{id:"-connecting-hoc-to-the-component-and-make-the-api-calls"},"# connecting hoc to the component and make the api calls"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'/* basic-example.js */\nimport React, { useEffect } from "react";\nimport {\n  HOC as HocConfigure,\n  useQuery,\n} from "react-boilerplate-redux-saga-hoc";\nimport { compose } from "redux";\nimport { AuthHoc } from "./config";\n\nfunction basicExample(props) {\n  const {\n    Auth_hoc: {\n      reducerConstants: { TEST_API },\n      reducerName,\n      actions: { TEST_API_CALL, TEST_API_CANCEL },\n    },\n  } = props;\n\n  /* useQuery hook for getting data from the reducer */\n\n  const { loader, data, lastUpdated, isError, error, toast } = useQuery(\n    reducerName,\n    TEST_API\n  );\n\n  useEffect(() => {\n    TEST_API_CALL();\n    return () => TEST_API_CANCEL(); /* for cancelling api calls on unmounting */\n  }, []);\n\n  return <div>{data.map({ title }(<li>{title}</li>))}</div>;\n}\n\nexport default compose(AuthHoc)(basicExample);\n')),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"This is the image from Redux Store for initial state after connecting hoc to the component"))),Object(c.b)("p",null,Object(c.b)("img",{alt:"  ",src:a("1wAp")})),Object(c.b)("h3",{id:"-things-to-remember"},Object(c.b)("strong",{parentName:"h3"},"# Things to Remember")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"- The image which we seeing above are the two endpoints which we created before.\n- Hoc will create Constants, Reducer, Saga, Actions for You.\n- No Need worry about creating seperate actions, reducers for every end-points.It will handle by itsself.\n- Just provide the configuration.Hoc will handle all the task for you.\n")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"This is the image from Console where hoc will provide actions, constants for handling tasks"))),Object(c.b)("p",null,Object(c.b)("img",{alt:"  ",src:a("SWWr")})),Object(c.b)("h3",{id:"-things-to-remember-1"},Object(c.b)("strong",{parentName:"h3"},"# Things to Remember")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"- Hoc will create 3 actions for you for handling api calls,handing data..etc\n- REGISTER_API_CALL: ƒ () - for handling api calls\n- REGISTER_API_CANCEL: ƒ () - for handling api cancel request\n- REGISTER_API_CUSTOM_TASK ƒ () - for handling custom task without doing api calls\n- CALL, CANCEL, CUSTOM_TASK will be created for every api end points\n")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"state from Redux Store before api gets success or failure"))),Object(c.b)("p",null,Object(c.b)("img",{alt:"  ",src:a("GT2c")})),Object(c.b)("h3",{id:"-things-to-remember-2"},Object(c.b)("strong",{parentName:"h3"},"# Things to Remember")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"- Loader will change to true if api call triggers\n- Toast will reset to initial state\n")),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"This is state from Redux Store after api gets success"))),Object(c.b)("p",null,Object(c.b)("img",{alt:"  ",src:a("fHxp")})),Object(c.b)("h3",{id:"-things-to-remember-3"},Object(c.b)("strong",{parentName:"h3"},"# Things to Remember")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"- Loader will change to false if api call gets success or failure\n- Toast will be stored into to toast key\n- Data will be stored into the data key\n")),Object(c.b)("h2",{id:"-using-usequery-hook-in-different-ways"},"# using useQuery hook in different ways"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"/* accessing multiple data  at single query */\n/*\n  use this method if you are accessing multiple data from the same reducer key\n*/\nconst [\n  test_data\n  test,\n  test_deep,\n  testGetApi,\n] = useQuery(\n  reducerName /* can pass any reducer key such as 'Auth' , 'router' , ..etc*/,\n  [\n    {\n      key: TEST_API,\n      initialLoaderState: true,\n    },\n    {\n      key: TEST_API,\n      query: \".data[0]\",\n      initialLoaderState: false,\n    },\n    {\n      key: TEST_API,\n      query: \".data\",\n      initialLoaderState: false,\n      default: [], // Default for data key it also check's type of data..if type is object return [].Don't pass if you dont want to type check\n    },\n    TEST_API,\n  ]\n);\n\n/* query can be used in different ways based on your requirement */\n\n/* pass array of string instead of object */\n\nconst [\n { loader, data, lastUpdated, isError, error, toast },\n] = useQuery(reducerName, [TEST_API]);\n\n/* Pass an object instead of array */\nconst data = useQuery(reducerName, {\n  key: TEST_API,\n  query: \".data\",\n  default: [],\n});\n\n/* pass a string insted of array */\nconst { loader, data, lastUpdated, isError, error, toast } = useQuery(\n  reducerName,\n  TEST_API\n);\n\n/* Pass a config as a third parameter its optional */\nconst data = useQuery(reducerName, TEST_API, {\n  query: \".data\",\n  default: [],\n});\n\n/* for getting whole reducer data */\nconst data = useQuery(); // Don't use this until its required it will render the component every time state change\nconst data = useQuery(reducerName); // Don't use this until its required it will render the component every time state change\n")),Object(c.b)("h2",{id:"-params"},"# Params"),Object(c.b)("h2",{id:"-task---object"},"# task - ",Object(c.b)("inlineCode",{parentName:"h2"},"<Object>")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Props"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"usage"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Type of task to execute"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"Data-Handler,")," ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"Infinite-Handler,")," ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"Delete-Handler,")," ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"Update-Handler,")," ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"Update-Key-Handler,")," ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"Toggle-Key-Handler,")," ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"Splice-Data-Handler,")," ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"Delete-Key-Handler,")," ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"Don't-Update-Data-Handler,")," ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"Custom-Handler,")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"Data-Handler")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ name: 'Data-Handler' }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"clearData"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"clear previous stored data"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"true")," or ",Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ clearData: true }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"subKey"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"for doing various tasks on deep object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"[]")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"null")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"array")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ subKey: ['data','filter-1'] }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"limit"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"null")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ name: 'Infinite-Handler', limit: 15 }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"isAppendTop"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"true")," or ",Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ isAppendTop: true }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"deleteKey"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"[]")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"null")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"array")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ deleteKey: ['age','name'] }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"id"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"[]")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"null")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"array")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ id: [1,2] }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"key"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"null")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ key: 'id' }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"spliceKey"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"[2,4]")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"null")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"array")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ spliceKey: [2,4] }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"toggleKey"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"[]")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"null")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"array")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ toggleKey: ['age','name'] }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"values"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"[] or {}")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"null")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"array or object")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{values: {2: {name: 'ram'}}}")," ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"{values: [{name: 'sundar'}]}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"updateCallback"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"function")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"null")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"function")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{updateCallback: (previousData,responseData) =>")," ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"previousData.concat(responseData)}"))))),Object(c.b)("h2",{id:"-request---object"},"# request - ",Object(c.b)("inlineCode",{parentName:"h2"},"<Object>")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Props"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"usage"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"query"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{}")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"null"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{query: { id: 20 }}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"params"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{}")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"null"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{params: { id: 20 }}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"payload"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{}")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"null"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{payload: { id: 20 }}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"axiosConfig"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{}")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"null"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{headers: {} }"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"paramSerializer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{}")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ arrayFormat: 'brackets' }")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"`{ arrayFormat: 'comma")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"asyncFunction"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"function")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"null"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{asyncFunction : async (url) => fetch(url)}"),"}")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"asyncFunctionParams"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"array")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"null"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"array"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{asyncFunctionParams: ['https://www.example.com/']}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"retry"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{retry: 3}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"errorParser"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"function")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"null"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{errorParser: () => {}}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"polling"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{polling: true}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"pollingCount"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Infinite"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{pollingCount: 4}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"delay"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"8000"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{delay: 10000}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"clearDataOnError"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{clearDataOnError: false}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"errorDataHandling"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"true"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{errorDataHandling: false}"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"defaultErrorParser"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{defaultErrorParser: true}"))))),Object(c.b)("h1",{id:"before-proceeding-further"},"Before Proceeding Further"),Object(c.b)("p",null,"We already knows ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/"}),"redux")," is a valuable tool for organising your state and also ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-saga.js.org/"}),"redux-saga")," is a powerful middleware for handling side Effects.With the help of those two tools we have created a package for handling api calls and storing data in an organised way."),Object(c.b)("h2",{id:"-why-should-i-use-this-package"},"# Why should i use this package"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Important:\n-This package is not an alternative for redux and redux-saga\n-This package is mostly for developer who wants to make development faster and also to handle most of the api calls.\n")),Object(c.b)("h2",{id:"-benefits-of-using-this-package"},"# Benefits of using this package"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#-contents"}),"Go to Top")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"- Handles api calls by itself\n- No need to create store, constants, actions, saga, reducer\n- It handles cancelling api call by itself\n- Handles error, success, cancel, loading, infinite data handling\n- No worry about api calls, loaders...etc\n- No separate coding needed for react and react native\n")),Object(c.b)("h2",{id:"-whether-this-package-will-support-for-react-native"},"# Whether this package will support for react-native"),Object(c.b)("h4",{id:"yes-this-package-will-support-for-both-react-and-react-native"},Object(c.b)("strong",{parentName:"h4"},"Yes")," ,this package will support for both ",Object(c.b)("a",Object(n.a)({parentName:"h4"},{href:"https://reactjs.org/"}),"react")," and ",Object(c.b)("a",Object(n.a)({parentName:"h4"},{href:"https://reactnative.dev/"}),"react-native")),Object(c.b)("h3",{id:"-6"}),Object(c.b)("blockquote",null,Object(c.b)("h3",Object(n.a)({parentName:"blockquote"},{id:"note-please-read-the-detail-documentation-from-here"}),Object(c.b)("strong",{parentName:"h3"},"Note:")," Please read the detail documentation from ",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://cartoonmangodev.github.io/react-boilerplate-redux-saga-hoc-docs/"}),"here"))),Object(c.b)("blockquote",null,Object(c.b)("h3",Object(n.a)({parentName:"blockquote"},{id:"important-this-package-now-also-support-nextjsplease-read-nextjs-setup-documentation-from-here"}),Object(c.b)("strong",{parentName:"h3"},"Important:")," This package now also support nextJS.Please read nextjs setup documentation from ",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://cartoonmangodev.github.io/react-boilerplate-redux-saga-hoc-docs/docs/getting-started/installation-setup#-installing-on-next-js"}),"here"))),Object(c.b)("h2",{id:"contributing"},"Contributing"),Object(c.b)("p",null,"Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change."),Object(c.b)("p",null,"Please make sure to update tests as appropriate."),Object(c.b)("h2",{id:"license"},"License"),Object(c.b)("p",null,"Copyright (c) 2020-present Chrissie Fernando"))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"Readme.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---readme-md-89b59f419943ff31a30f.js.map