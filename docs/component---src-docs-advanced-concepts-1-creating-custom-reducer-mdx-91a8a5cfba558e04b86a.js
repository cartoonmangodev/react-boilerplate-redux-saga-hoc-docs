(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{xz84:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return d}));var r=t("Fcif"),a=t("+I+c"),c=(t("mXGw"),t("/FXl")),o=t("TjRS"),i=(t("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Advanced Concepts/1.creating-custom-reducer.mdx"}});var s={_frontmatter:i},u=o.a;function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)(u,Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"-creating-custom-reducer"},"# Creating Custom Reducer"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nconst AuthenticationHOC = HOC({ handlers: [] })({\n  initialState: {\n    profile: {},\n  },\n  apiEndPoints: {\n    TEST_API: {},\n    REGISTER_API: {\n      url: `users/user-signup/`,\n      method: "POST",\n    },\n  },\n  constantReducer: ({ type, state, action, constants, initialState }) => {\n    if (type === "LOGOUT") return initialState;\n    return state;\n  },\n  name: "Auth",\n});\n/*\nExample: const { dispatch } = props;\ndispatch({ type: "LOGOUT" });\n*/\n')),Object(c.b)("h2",{id:"-passing-create-reducer-or-own-reducer"},"# Passing create Reducer or own reducer"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\n\nimport { combineReducers } from "redux";\nimport { connectRouter } from "connected-react-router";\n\nimport history from "utils/history";\nimport globalReducer from "containers/App/reducer";\nimport languageProviderReducer from "containers/LanguageProvider/reducer";\n\n/**\n * Merges the main reducer with the router state and dynamically injected reducers\n */\n/* this is the pattern for passing custom reducer */\n\n/**\n * Merges the main reducer with the router state and dynamically injected reducers\n */\nexport default function createReducer(injectedReducers = {}) {\n  const rootReducer = combineReducers({\n    global: globalReducer,\n    language: languageProviderReducer,\n    router: connectRouter(history),\n    ...injectedReducers,\n  });\n\n  return rootReducer;\n}\n\nconst AuthenticationHOC = HOC({ createReducer })({\n  initialState: {\n    profile: {},\n  },\n  apiEndPoints: {\n    TEST_API: {},\n    REGISTER_API: {\n      url: `users/user-signup/`,\n      method: "POST",\n    },\n  },\n  constantReducer: ({ type, state, action, constants, initialState }) => {\n    if (type === "LOGOUT") return initialState;\n    return state;\n  },\n  name: "Auth",\n});\n/*\nExample: const { dispatch } = props;\ndispatch({ type: "LOGOUT" });\n*/\n')))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Advanced Concepts/1.creating-custom-reducer.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-advanced-concepts-1-creating-custom-reducer-mdx-91a8a5cfba558e04b86a.js.map