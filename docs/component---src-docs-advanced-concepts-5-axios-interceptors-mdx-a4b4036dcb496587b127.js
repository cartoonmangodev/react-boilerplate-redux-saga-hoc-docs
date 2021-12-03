(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5Zyw":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t("Fcif"),o=t("+I+c"),s=(t("mXGw"),t("/FXl")),a=t("TjRS"),i=(t("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Advanced Concepts/5.axios-interceptors.mdx"}});var c={_frontmatter:i},u=a.a;function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)(u,Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"-axios-interceptors"},"# Axios Interceptors"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { HOC, commonConstants, store } from "react-boilerplate-redux-saga-hoc";\nimport axios from "axios";\nimport promise from "promise";\n\nconst request = axios;\nrequest.defaults.withCredentials = true;\nrequest.interceptors.request.use(\n  (config) => {\n    if (!config.headers.Authorization) {\n      const token = localStorage.getItem("token");\n      if (token)\n        request.defaults.headers.common.Authorization = `Bearer ${token}`;\n    }\n    return config;\n  },\n  (error) => promise.reject(error)\n);\n\nrequest.interceptors.response.use(\n  (response) => {\n    return response;\n  },\n  (error) => Promise.reject(error)\n);\n\nconst AuthenticationHOC = HOC({\n  initialState: {\n    profile: {},\n  },\n  apiEndPoints: {\n    TEST_API: {},\n    REGISTER_API: {\n      url: `users/user-signup/`,\n      method: "POST",\n    },\n  },\n  axiosInterceptors: request,\n  constantReducer: ({ type, state, action, constants, initialState }) => {\n    if (type === "LOGOUT") return initialState;\n    return state;\n  },\n  name: "Auth",\n});\n/*\nExample:\n\nconst { dispatch } = props;\ndispatch({ type: \'LOGOUT\' });\n\n*/\n')),Object(s.b)("h2",{id:"-modifying-default-axios-from-package"},"# Modifying default axios from package"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import {\n  HOC,\n  commonConstants,\n  store,\n  axios,\n} from "react-boilerplate-redux-saga-hoc";\nimport promise from "promise";\n\nconst request = axios;\nrequest.defaults.withCredentials = true;\nrequest.interceptors.request.use(\n  (config) => {\n    if (!config.headers.Authorization) {\n      const token = localStorage.getItem("token");\n      if (token)\n        request.defaults.headers.common.Authorization = `Bearer ${token}`;\n    }\n    return config;\n  },\n  (error) => promise.reject(error)\n);\n\nrequest.interceptors.response.use(\n  (response) => {\n    return response;\n  },\n  (error) => Promise.reject(error)\n);\n')))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Advanced Concepts/5.axios-interceptors.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-advanced-concepts-5-axios-interceptors-mdx-a4b4036dcb496587b127.js.map