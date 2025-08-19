module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/chatbot.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
"use client";
;
;
const AsharibAssistant = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "m-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: "https://cdn.jsdelivr.net/npm/flowise-embed@latest/dist/web.js",
            type: "module",
            strategy: "lazyOnload",
            onLoad: ()=>{
                if (window.Chatbot) {
                    window.Chatbot.init({
                        chatflowid: process.env.NEXT_PUBLIC_CHATFLOW_ID,
                        apiHost: process.env.NEXT_PUBLIC_API_HOST,
                        theme: {
                            button: {
                                backgroundColor: "#000000",
                                right: 15,
                                bottom: 16,
                                size: "medium",
                                iconColor: "white",
                                dragAndDrop: true,
                                customIconSrc: "https://raw.githubusercontent.com/AsharibAli/project-images/main/logo.png",
                                autoWindowOpen: {
                                    autoOpen: false,
                                    openDelay: 5,
                                    autoOpenOnMobile: false
                                }
                            },
                            tooltip: {
                                showTooltip: true,
                                tooltipMessage: "Try my Assistant",
                                tooltipBackgroundColor: "white",
                                tooltipTextColor: "black",
                                tooltipFontSize: 16
                            },
                            chatWindow: {
                                showTitle: true,
                                title: "🤖 Tejash 👈",
                                welcomeMessage: "Hello! I am Tejash Assistant, here to help you with any questions you have about  Tejash rajput. What can I assist you with today?",
                                errorMessage: "Unable to retrieve data from the server. Please try again later.",
                                backgroundColor: "#ffffff",
                                height: 600,
                                width: 400,
                                fontSize: 16,
                                poweredByTextColor: "#000000",
                                botMessage: {
                                    backgroundColor: "#f7f8ff",
                                    textColor: "#000000",
                                    showAvatar: true,
                                    avatarSrc: "/avatar.jpg"
                                },
                                userMessage: {
                                    backgroundColor: "#000000",
                                    textColor: "#ffffff",
                                    showAvatar: true,
                                    avatarSrc: "https://raw.githubusercontent.com/AsharibAli/project-images/main/usericon.png"
                                },
                                textInput: {
                                    placeholder: "Type your question",
                                    backgroundColor: "#ffffff",
                                    textColor: "#303235",
                                    sendButtonColor: "#000000",
                                    maxChars: 100,
                                    maxCharsWarningMessage: "You exceeded the characters limit. Please input less than 100 characters.",
                                    autoFocus: true,
                                    sendMessageSound: true,
                                    receiveMessageSound: true
                                },
                                feedback: {
                                    color: "#000000"
                                },
                                dateTimeToggle: {
                                    date: true,
                                    time: true
                                },
                                footer: {
                                    textColor: "#000000",
                                    text: "Build with ❤️ by",
                                    company: " Teajsh",
                                    companyLink: "https://github.com/tejash111/"
                                }
                            }
                        }
                    });
                }
            }
        }, void 0, false, {
            fileName: "[project]/src/components/chatbot.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/chatbot.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AsharibAssistant;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__b5ab1654._.js.map