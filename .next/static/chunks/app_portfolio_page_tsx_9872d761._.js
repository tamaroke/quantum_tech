(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_portfolio_page_tsx_9872d761._.js", {

"[project]/app/portfolio/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const portfolioItems = [
    {
        title: "IoT Smart Lighting System",
        description: "A smart lighting solution using microcontrollers and mobile control.",
        color: "from-blue-500 to-cyan-400",
        textColor: "text-blue-900",
        shadowColor: "shadow-blue-200",
        details: {
            fullDescription: "A comprehensive IoT-based lighting system that allows users to control lights remotely through a mobile application. The system includes motion sensors for automatic activation and scheduled lighting patterns.",
            technologies: [
                "Arduino",
                "ESP8266",
                "React Native",
                "Firebase"
            ],
            features: [
                "Remote control via mobile app",
                "Motion-activated lighting",
                "Customizable lighting schedules",
                "Energy usage analytics",
                "Voice control integration"
            ],
            duration: "3 months",
            client: "Residential smart home project",
            images: [
                "/images/iot-lighting-1.jpg",
                "/images/iot-lighting-2.jpg"
            ]
        }
    },
    // Other portfolio items remain the same...
    {
        title: "Custom PC Build & Repair",
        description: "Built and optimized gaming and business machines for clients.",
        color: "from-purple-500 to-pink-400",
        textColor: "text-purple-900",
        shadowColor: "shadow-purple-200",
        details: {
            fullDescription: "Specialized service for building custom PCs tailored to specific needs, from high-performance gaming rigs to reliable business workstations. Also provides diagnostics and repair services for existing systems.",
            technologies: [
                "Custom PC Hardware",
                "Windows/Linux OS",
                "Overclocking",
                "System Optimization"
            ],
            features: [
                "Custom component selection",
                "Performance optimization",
                "Thermal management solutions",
                "Software configuration",
                "Troubleshooting and repair"
            ],
            duration: "Ongoing service",
            client: "Various individual and business clients",
            images: [
                "/images/custom-pc-1.jpg",
                "/images/custom-pc-2.jpg"
            ]
        }
    },
    {
        title: "School Management System",
        description: "Web-based system for managing student data, grading, and attendance.",
        color: "from-green-500 to-emerald-400",
        textColor: "text-green-900",
        shadowColor: "shadow-green-200",
        details: {
            fullDescription: "A comprehensive web-based school management system that handles student records, attendance tracking, grade management, and communication between teachers, students, and parents.",
            technologies: [
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "JWT Authentication"
            ],
            features: [
                "Student information management",
                "Attendance tracking",
                "Grade and assessment recording",
                "Parent-teacher communication portal",
                "Assignment submission and tracking"
            ],
            duration: "6 months",
            client: "Local private high school",
            images: [
                "/images/school-system-1.jpg",
                "/images/school-system-2.jpg"
            ]
        }
    },
    {
        title: "Electronics PCB Design",
        description: "Designed and fabricated custom PCBs for client-specific applications.",
        color: "from-amber-500 to-yellow-400",
        textColor: "text-amber-900",
        shadowColor: "shadow-amber-200",
        details: {
            fullDescription: "Professional design and fabrication of printed circuit boards for various electronic applications. Services include schematic design, PCB layout, prototyping, and small-batch production.",
            technologies: [
                "Eagle CAD",
                "KiCad",
                "SMD Assembly",
                "Through-hole Technology"
            ],
            features: [
                "Custom schematic design",
                "Multi-layer PCB layouts",
                "Component sourcing",
                "Prototype testing",
                "Small-batch manufacturing"
            ],
            duration: "Varies by project",
            client: "Electronics startups and hobbyists",
            images: [
                "/images/pcb-design-1.jpg",
                "/images/pcb-design-2.jpg"
            ]
        }
    },
    {
        title: "Inventory App",
        description: "A mobile app for small business inventory tracking.",
        color: "from-rose-500 to-red-400",
        textColor: "text-rose-900",
        shadowColor: "shadow-rose-200",
        details: {
            fullDescription: "A cross-platform mobile application that helps small businesses track their inventory in real-time. Features include barcode scanning, stock alerts, sales reporting, and supplier management.",
            technologies: [
                "React Native",
                "Firebase",
                "Expo",
                "Redux"
            ],
            features: [
                "Barcode and QR code scanning",
                "Inventory level tracking",
                "Low stock notifications",
                "Sales and inventory reporting",
                "Supplier contact management"
            ],
            duration: "4 months",
            client: "Local retail businesses",
            images: [
                "/images/inventory-app-1.jpg",
                "/images/inventory-app-2.jpg"
            ]
        }
    }
];
const DetailModal = ({ item, onClose })=>{
    _s();
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailModal.useEffect": ()=>{
            // Handle clicking outside the modal
            const handleClickOutside = {
                "DetailModal.useEffect.handleClickOutside": (event)=>{
                    if (modalRef.current && !modalRef.current.contains(event.target)) {
                        onClose();
                    }
                }
            }["DetailModal.useEffect.handleClickOutside"];
            // Handle browser back button
            const handlePopState = {
                "DetailModal.useEffect.handlePopState": (event)=>{
                    onClose();
                    // Prevent default only if needed to avoid breaking other browser functionality
                    event.preventDefault();
                }
            }["DetailModal.useEffect.handlePopState"];
            // Handle escape key press
            const handleKeyDown = {
                "DetailModal.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        onClose();
                    }
                }
            }["DetailModal.useEffect.handleKeyDown"];
            // Add event listeners
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
            window.addEventListener("popstate", handlePopState);
            // Push a new history state to handle back button
            if (item) {
                window.history.pushState({
                    modalOpen: true
                }, "");
            }
            // Clean up event listeners
            return ({
                "DetailModal.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    document.removeEventListener("keydown", handleKeyDown);
                    window.removeEventListener("popstate", handlePopState);
                }
            })["DetailModal.useEffect"];
        }
    }["DetailModal.useEffect"], [
        onClose,
        item
    ]);
    if (!item) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-all duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: modalRef,
            className: "bg-gray-50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-6 rounded-t-2xl bg-gradient-to-r ${item.color}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-white",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/page.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-6 w-6 text-white",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/page.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/page.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-gradient-to-b from-gray-50 to-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 mb-6",
                            children: item.details.fullDescription
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-2",
                                            children: "Technologies"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: item.details.technologies.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm",
                                                    children: tech
                                                }, index, false, {
                                                    fileName: "[project]/app/portfolio/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-2",
                                            children: "Project Details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-3 rounded-lg shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Duration:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portfolio/page.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        item.details.duration
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portfolio/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Client:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portfolio/page.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        item.details.client
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portfolio/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-2",
                                    children: "Key Features"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc pl-5 space-y-1 bg-white p-4 rounded-lg shadow-sm",
                                    children: item.details.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-gray-700",
                                            children: feature
                                        }, index, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: item.details.images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg aspect-video flex items-center justify-center shadow-sm p-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-sm",
                                        children: [
                                            "Image placeholder: ",
                                            image.split("/").pop()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portfolio/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/page.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/portfolio/page.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/portfolio/page.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
};
_s(DetailModal, "iXNJws+mDn9J+ZcpHudMXHGV85c=");
_c = DetailModal;
const PortfolioPage = ()=>{
    _s1();
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openDetails = (item)=>{
        setSelectedItem(item);
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    };
    const closeDetails = ()=>{
        setSelectedItem(null);
        document.body.style.overflow = "auto"; // Restore scrolling
    };
    // Handle browser back button if modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioPage.useEffect": ()=>{
            const handlePopState = {
                "PortfolioPage.useEffect.handlePopState": ()=>{
                    if (selectedItem) {
                        closeDetails();
                    }
                }
            }["PortfolioPage.useEffect.handlePopState"];
            window.addEventListener("popstate", handlePopState);
            return ({
                "PortfolioPage.useEffect": ()=>{
                    window.removeEventListener("popstate", handlePopState);
                }
            })["PortfolioPage.useEffect"];
        }
    }["PortfolioPage.useEffect"], [
        selectedItem
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen px-6 py-20 bg-gradient-to-br from-stone-50 to-zinc-100 text-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text",
                children: "Our Projects & Portfolio"
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto",
                children: "Explore our diverse range of technical projects and solutions"
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto",
                children: portfolioItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-gradient-to-br ${item.color} p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${item.shadowColor}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-xl h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-2xl font-semibold mb-3 ${item.textColor}`,
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openDetails(item),
                                        className: "px-4 py-2 rounded-lg bg-white text-sm font-medium border border-gray-200 hover:bg-gray-50 transition",
                                        children: "View Details"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/portfolio/page.tsx",
                        lineNumber: 342,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailModal, {
                item: selectedItem,
                onClose: closeDetails
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/page.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, this);
};
_s1(PortfolioPage, "4irTaxy1Qi+zldwJIeGrk9uzDsI=");
_c1 = PortfolioPage;
const __TURBOPACK__default__export__ = PortfolioPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "DetailModal");
__turbopack_context__.k.register(_c1, "PortfolioPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_portfolio_page_tsx_9872d761._.js.map