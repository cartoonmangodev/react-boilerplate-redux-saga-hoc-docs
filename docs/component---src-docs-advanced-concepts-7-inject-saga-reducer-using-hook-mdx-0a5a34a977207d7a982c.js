(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{fSQp:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t("Fcif"),r=t("+I+c"),c=(t("mXGw"),t("/FXl")),o=t("TjRS"),s=(t("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Advanced Concepts/7.inject-saga-reducer-using-hook.mdx"}});var i={_frontmatter:s},u=o.a;function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)(u,Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"-inject-saga-and-reducer-to-the-store-by-using-hooks"},"# Inject saga and reducer to the store by using hooks"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"     Note:\n- By injecting reducer and saga you can able to create your own reducer and saga.\n- It helps in most of the scenarios such as polling,creating your own logic..etc\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{.line-numbers}","{.line-numbers}":!0}),'import { takeLatest } from "redux-saga/effects";\nimport {\n  useInjectReducer,\n  useInjectSaga,\n} from "react-boilerplate-redux-saga-hoc";\n\nconst reducer = (state, action) => {\n  return state;\n};\nfunction* getRepos() {}\n\nconst saga = function*() {\n  yield takeLatest("LOAD_DATA", getRepos);\n};\n\nconst key = "Dashboard";\n\nconst Dashboard = () => {\n  useInjectReducer({ key, reducer });\n  useInjectSaga({ key, saga });\n\n  return <div />;\n};\n\nexport default Dashboard;\n')))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Advanced Concepts/7.inject-saga-reducer-using-hook.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-advanced-concepts-7-inject-saga-reducer-using-hook-mdx-0a5a34a977207d7a982c.js.map