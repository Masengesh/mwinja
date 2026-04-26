module.exports = {

"[project]/.next-internal/server/app/programs/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/programs.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAllProgramSlugs": (()=>getAllProgramSlugs),
    "getProgramBySlug": (()=>getProgramBySlug),
    "programs": (()=>programs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-rsc] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-rsc] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-rsc] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-rsc] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-rsc] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-rsc] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-rsc] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-rsc] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-rsc] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-rsc] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-rsc] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-rsc] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/piggy-bank.js [app-rsc] (ecmascript) <export default as PiggyBank>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gavel.js [app-rsc] (ecmascript) <export default as Gavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tractor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Tractor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tractor.js [app-rsc] (ecmascript) <export default as Tractor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-rsc] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-rsc] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-rsc] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-rsc] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-rsc] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-rsc] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-check.js [app-rsc] (ecmascript) <export default as BookOpenCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand-heart.js [app-rsc] (ecmascript) <export default as HandHeart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trees.js [app-rsc] (ecmascript) <export default as Trees>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$salad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Salad$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/salad.js [app-rsc] (ecmascript) <export default as Salad>");
;
;
function slugify(text) {
    return text.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
const programs = [
    {
        id: "education",
        slug: slugify("Education Programs"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 63,
            columnNumber: 11
        }, this),
        image: "https://ext.same-assets.com/922964245/84962539.jpeg",
        gallery: [
            "https://ext.same-assets.com/922964245/84962539.jpeg",
            "https://ext.same-assets.com/922964245/2606823118.jpeg",
            "https://ext.same-assets.com/922964245/3347159728.jpeg",
            "https://ext.same-assets.com/922964245/496075394.jpeg"
        ],
        title: "Education Programs",
        shortDescription: "Empowering refugees through adult literacy, vocational training, and capacity building.",
        fullDescription: `Our Education Programs are designed to empower refugees and host communities through knowledge, skills, and capacity building. We believe education is the foundation for long-term self-reliance and dignity.

Adult Literacy & Language  
We support refugees facing language barriers by offering English training that improves communication and employment opportunities.

• Functional English for daily communication  
• Business English for entrepreneurship  
• Digital literacy skills  
• Cultural integration support  

Vocational Skills Training  
We equip learners with practical skills that can be used to create jobs or start small businesses.

• Computer & IT skills  
• Tailoring and fashion design  
• Hairdressing and beauty therapy  
• Makeup and personal styling  
• Entrepreneurship development  

Capacity Building  
We strengthen individuals and organizations through leadership and management training.

• Project management  
• Financial reporting  
• Proposal writing & fundraising  
• Governance & leadership  
• Monitoring & evaluation (M&E)  

    These programs are designed to create independence, opportunity, and long-term impact in communities.`,
        sections: [
            {
                title: "Adult Literacy & Language",
                description: "English training for communication and employment",
                items: [
                    "Functional English",
                    "Business English",
                    "Digital literacy",
                    "Cultural integration"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__["BookOpenCheck"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 110,
                    columnNumber: 15
                }, this)
            },
            {
                title: "Vocational Skills Training",
                description: "Practical skills for job creation and business",
                items: [
                    "Computer & IT",
                    "Tailoring & fashion",
                    "Hairdressing & beauty",
                    "Entrepreneurship"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 116,
                    columnNumber: 15
                }, this)
            },
            {
                title: "Capacity Building",
                description: "Leadership and management training",
                items: [
                    "Project management",
                    "Financial reporting",
                    "Fundraising",
                    "Governance & leadership",
                    "M&E"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 122,
                    columnNumber: 15
                }, this)
            }
        ],
        objectives: [
            "Increase access to education and skills training",
            "Improve literacy and communication skills",
            "Support vocational and technical training",
            "Strengthen leadership and organizational capacity"
        ],
        activities: [
            {
                icon: "BookOpenCheck",
                title: "English Literacy",
                description: "Daily communication skills",
                frequency: "Daily"
            },
            {
                icon: "Briefcase",
                title: "Business English",
                description: "Professional communication",
                frequency: "Weekly"
            },
            {
                icon: "Users",
                title: "Digital Skills",
                description: "Computer literacy training",
                frequency: "Bi-weekly"
            }
        ],
        impact: {
            peopleHelped: "1,500+",
            beneficiaries: "2,500+",
            projects: "12",
            communities: "25+"
        },
        color: "bg-primary-blue",
        secondaryColor: "text-primary-blue"
    },
    {
        id: "economic empowerment",
        slug: slugify("Economic Empowerment"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this),
        image: "https://ext.same-assets.com/922964245/2606823118.jpeg",
        gallery: [
            "https://ext.same-assets.com/922964245/2606823118.jpeg",
            "https://ext.same-assets.com/922964245/3893045342.jpeg",
            "https://ext.same-assets.com/922964245/3980788437.jpeg",
            "https://ext.same-assets.com/922964245/4234630857.jpeg"
        ],
        title: "Economic Empowerment",
        shortDescription: "Building sustainable incomes and financial independence.",
        fullDescription: `Our Economic Empowerment program helps individuals and families achieve financial independence through skills, training, and business support.

Livelihood Development  
Food insecurity among refugee households worsened dramatically from 37% in 2022 to 68% in 2023. With only 25% of required livelihood funding available in 2024, Mwinja Devine Help Foundation Ltd addresses this gap through comprehensive economic empowerment programs.

• Vocational skills training and certification
• Business development and entrepreneurship
• Microfinance access and financial literacy
• Market linkages and value chain development
• Cooperative formation and management





Economic Challenges  

• Food Insecurity (2023): 68%  
• Skills Gap: 36.8% unskilled  
• Livelihood Funding Gap: 75%  


Mentorship & Growth  
We provide continuous support to ensure long-term success.

• Business coaching  
• Market linkages  
    • Enterprise development  
    • Growth monitoring`,
        sections: [
            {
                title: "Business Skills Training",
                description: "Practical entrepreneurship knowledge",
                items: [
                    "Business planning",
                    "Marketing strategies",
                    "Customer management",
                    "Record keeping"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 199,
                    columnNumber: 15
                }, this)
            },
            {
                title: "Financial Support & Access",
                description: "Support for small businesses and income generation",
                items: [
                    "Savings groups",
                    "Microfinance access",
                    "Seed funding",
                    "Investment guidance"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__["PiggyBank"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 205,
                    columnNumber: 15
                }, this)
            },
            {
                title: "Mentorship & Growth",
                description: "Continuous support for long-term success",
                items: [
                    "Business coaching",
                    "Market linkages",
                    "Enterprise development",
                    "Growth monitoring"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 211,
                    columnNumber: 15
                }, this)
            }
        ],
        objectives: [
            "Promote financial independence",
            "Support small business creation",
            "Improve financial literacy",
            "Increase employment opportunities"
        ],
        activities: [
            {
                icon: "Briefcase",
                title: "Business Training",
                description: "Entrepreneurship skills",
                frequency: "Weekly"
            },
            {
                icon: "PiggyBank",
                title: "Savings Groups",
                description: "Community savings support",
                frequency: "Weekly"
            },
            {
                icon: "TrendingUp",
                title: "Business Mentorship",
                description: "Growth support",
                frequency: "Bi-weekly"
            }
        ],
        impact: {
            peopleHelped: "500+",
            beneficiaries: "800+",
            projects: "8",
            communities: "15+"
        },
        color: "bg-green-600",
        secondaryColor: "text-green-600"
    },
    {
        id: "Urban Refugee livelihoods",
        slug: slugify("Urban Refugee Livelihoods"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this),
        image: "https://ext.same-assets.com/922964245/496075394.jpeg",
        gallery: [
            "https://ext.same-assets.com/922964245/496075394.jpeg",
            "https://ext.same-assets.com/922964245/3347159728.jpeg",
            "https://ext.same-assets.com/922964245/84962539.jpeg",
            "https://ext.same-assets.com/922964245/2606823118.jpeg"
        ],
        title: "Urban Refugee Livelihoods",
        shortDescription: "Empowering refugees to build independent urban lives.",
        fullDescription: `This program supports refugees living in urban areas to build sustainable livelihoods and integrate into city life.

Urban Refugee Livelihoods

• The 2024 Urban Livelihoods Assessment in Kampala revealed that 36.8% of respondents have not acquired any skills since leaving formal education, resulting in limited employability. Key barriers identified include low- income levels, lack of access to credit, language barriers, and discrimination. 

• Women particularly struggle with limited access to financial resources, competition from male-dominated businesses, and harassment. Urban refugees face unique challenges including limited funding, insufficient livelihood opportunities, and lack of academic credential recognition. 
`,
        objectives: [
            "Improve urban employment opportunities",
            "Support entrepreneurship",
            "Provide vocational training",
            "Strengthen social integration"
        ],
        activities: [
            {
                icon: "Briefcase",
                title: "Job Placement",
                description: "Employment support",
                frequency: "Monthly"
            },
            {
                icon: "Users",
                title: "Networking",
                description: "Community connections",
                frequency: "Monthly"
            },
            {
                icon: "TrendingUp",
                title: "Business Support",
                description: "Startup guidance",
                frequency: "Ongoing"
            }
        ],
        impact: {
            peopleHelped: "300+",
            beneficiaries: "450+",
            projects: "6",
            communities: "10+"
        },
        sections: [
            {
                title: "Skills Development",
                description: "Practical training for urban job markets",
                items: [
                    "Tailoring and crafts",
                    "Hospitality training",
                    "IT and digital skills",
                    "Trade skills"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 287,
                    columnNumber: 15
                }, this)
            },
            {
                title: "Job Placement",
                description: "Connecting trained individuals with employers",
                items: [
                    "Job matching",
                    "CV preparation",
                    "Interview coaching",
                    "Employer networking"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 293,
                    columnNumber: 15
                }, this)
            },
            {
                title: "Entrepreneurship Support",
                description: "Help starting and growing businesses",
                items: [
                    "Startup training",
                    "Business registration support",
                    "Seed capital access",
                    "Market linkage"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 299,
                    columnNumber: 15
                }, this)
            }
        ],
        color: "bg-orange-600",
        secondaryColor: "text-orange-600"
    },
    {
        id: "skills developments programs",
        slug: slugify("Skills Development"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this),
        image: "https://ext.same-assets.com/922964245/3347159728.jpeg",
        gallery: [],
        title: "Skills Development",
        shortDescription: "Practical vocational training for self-reliance.",
        fullDescription: `Our Skills Development program provides hands-on vocational training that prepares individuals for employment and self-employment.

Technical Training  
We offer practical skills for job readiness.

• Tailoring & Fashion: Textile industry, self-employment  
• Hairdressing: Beauty sector, salon ownership  
• Computer/IT Skills: Digital economy, office work  
• Makeup Artistry: Events industry, freelance

Employment Support  
We help graduates transition into work.

• Certification  
• Tool provision  
• Job placement  
• Apprenticeships`,
        objectives: [],
        activities: [],
        impact: {
            peopleHelped: "",
            beneficiaries: "",
            projects: "",
            communities: ""
        },
        sections: [
            {
                title: "Vocational Training",
                description: "Hands-on skills for employment",
                items: [
                    "Tailoring",
                    "Hairdressing",
                    "Electrical work",
                    "Mobile repair"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 343,
                    columnNumber: 15
                }, this)
            },
            {
                title: "Employment Support",
                description: "Graduate transition assistance",
                items: [
                    "Certification",
                    "Tool provision",
                    "Job placement",
                    "Apprenticeships"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 349,
                    columnNumber: 15
                }, this)
            }
        ],
        color: "bg-indigo-600",
        secondaryColor: "text-indigo-600"
    },
    {
        id: "financial programs",
        slug: slugify("Financial Inclusion"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this),
        image: "",
        gallery: [],
        title: "Financial Inclusion",
        shortDescription: "Savings, credit and financial literacy.",
        fullDescription: `Our Financial Inclusion program helps communities access savings, credit, and financial education.


Savings Groups  
We support community financial systems.

• Village Savings & Loan Associations (VSLAs)  
• Loan access  
• Financial security  

Financial Inclusion  
We teach money management skills.

• Budgeting  
• Saving strategies  
• Debt management  
• Credit use`,
        objectives: [],
        activities: [],
        impact: {
            peopleHelped: "",
            beneficiaries: "",
            projects: "",
            communities: ""
        },
        sections: [
            {
                title: "Savings Groups",
                description: "Community financial systems",
                items: [
                    "VSLA groups",
                    "Savings culture",
                    "Loan access",
                    "Financial security"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__["PiggyBank"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 393,
                    columnNumber: 15
                }, this)
            },
            {
                title: "Financial Education",
                description: "Money management skills",
                items: [
                    "Budgeting",
                    "Saving strategies",
                    "Debt management",
                    "Credit use"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 399,
                    columnNumber: 15
                }, this)
            }
        ],
        color: "bg-teal-600",
        secondaryColor: "text-teal-600"
    },
    {
        id: "refugee rights advocacy",
        slug: slugify("Rights & Advocacy"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this),
        image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1776548109/7_cs9yi6.jpg",
        gallery: [],
        title: "Rights & Advocacy",
        shortDescription: "Protecting human rights and dignity.",
        fullDescription: `We promote and protect human rights through education, advocacy, and legal awareness.

Rights-Based Approach  
Uganda’s progressive refugee policy—anchored in the 2006 Refugee Act and 2010 Regulations—provides freedom of movement, right to work, establish businesses, own property, and access national services including education and health. Mwinja Devine Help Foundation Ltd advocates to ensure these rights translate into lived reality

• Legal awareness and rights education  
• Documentation support and advocacy  
• Policy engagement with local authorities
• Community representation in coordination forums
• Anti-discrimination campaigns

Social Inclusion
we promotes peaceful coexistence between refugees and host communities through joint programming, cultural exchange, and shared resource management. Our 70/30 targeting ensures host communities benefit alongside refugees.

• Host-refugee joint activities  
• Interfaith dialogue initiatives 
• Youth leadership development
• Community conflict resolution

Advocacy  
We amplify community voices.

• Policy engagement  
• Community mobilization  
• Legal referrals`,
        objectives: [],
        activities: [],
        impact: {
            peopleHelped: "",
            beneficiaries: "",
            projects: "",
            communities: ""
        },
        sections: [
            {
                title: "Rights Awareness",
                description: "Educating communities about their rights",
                items: [
                    "Legal rights education",
                    "Work rights",
                    "Protection services"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__["Gavel"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 451,
                    columnNumber: 15
                }, this)
            },
            {
                title: "Advocacy",
                description: "Amplifying community voices",
                items: [
                    "Policy engagement",
                    "Community mobilization",
                    "Legal referrals"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 457,
                    columnNumber: 15
                }, this)
            }
        ],
        color: "bg-purple-600",
        secondaryColor: "text-purple-600"
    },
    {
        id: "sporting-artistic",
        slug: slugify("Sporting and Artistic"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 468,
            columnNumber: 9
        }, this),
        image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1777224200/WhatsApp_Image_2026-04-24_at_11.30.05_g6bpii.jpg",
        gallery: [
            "",
            "https://res.cloudinary.com/dbllxptl8/image/upload/v1777224201/WhatsApp_Image_2026-04-24_at_11.30.07_2_q2k4gn.jpg",
            "https://res.cloudinary.com/dbllxptl8/image/upload/v1777224200/WhatsApp_Image_2026-04-24_at_11.30.06_2_rwhgte.jpg",
            "https://res.cloudinary.com/dbllxptl8/image/upload/v1777224200/WhatsApp_Image_2026-04-24_at_11.30.06_egqcfm.jpg"
        ],
        title: "Sporting and Artistic",
        shortDescription: "Promoting sports, creativity, and youth talent development for community well-being.",
        fullDescription: `Our Sporting and Artistic program promotes physical health, creativity, and social cohesion among youth and communities.

Through sports and arts, we create safe spaces where young people can develop talent, build confidence, and strengthen teamwork skills.

This program is also a tool for peacebuilding, inclusion, and youth empowerment across refugee and host communities.

Sports Development  
We organize structured sports activities that promote discipline, teamwork, and physical health.

• Football, volleyball, and athletics tournaments  
• Youth sports leagues and competitions  
• Physical fitness and wellness training  
• Community sports events and outreach  

Creative Arts Development  
We support artistic expression and cultural creativity among youth.

• Music, dance, and drama training  
• Visual arts and crafts workshops  
• Talent shows and cultural festivals  
• Creative expression for healing and confidence building  

Community Engagement  
We use sports and arts to strengthen unity and inclusion.

• Inter-community tournaments  
• Cultural exchange events  
• Youth leadership through sports  
• Peacebuilding activities`,
        objectives: [],
        activities: [],
        impact: {
            peopleHelped: "",
            beneficiaries: "",
            projects: "",
            communities: ""
        },
        sections: [
            {
                title: "Sports Development",
                description: "Promoting physical health and teamwork",
                items: [
                    "Football & volleyball",
                    "Athletics training",
                    "Youth competitions",
                    "Fitness programs"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 528,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Creative Arts",
                description: "Developing artistic and cultural talent",
                items: [
                    "Music & dance",
                    "Drama & theater",
                    "Visual arts",
                    "Talent shows"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 539,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Community Engagement",
                description: "Building unity through sports and arts",
                items: [
                    "Cultural events",
                    "Peacebuilding activities",
                    "Youth leadership",
                    "Inter-community events"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 550,
                    columnNumber: 13
                }, this)
            }
        ],
        color: "bg-rose-600",
        secondaryColor: "text-rose-600"
    },
    {
        id: "mental-health-disability",
        slug: slugify("Mental Health and Disability Support"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 561,
            columnNumber: 9
        }, this),
        image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1777224201/WhatsApp_Image_2026-04-24_at_11.04.28_lh6bq3.jpg",
        gallery: [],
        title: "Mental Health and Disability Support",
        shortDescription: "Providing psychosocial support and promoting inclusion for vulnerable groups.",
        fullDescription: `Our Mental Health and Disability Support program promotes emotional well-being, psychosocial healing, and inclusion for persons with disabilities.

We address trauma, stress, stigma, and exclusion by creating safe, supportive community systems.

Mental Health Support  
We provide structured psychosocial and emotional care services.

• Individual and group counseling  
• Trauma healing sessions  
• Stress management support  
• Community mental health awareness  

Disability Inclusion  
We promote equal participation and accessibility for persons with disabilities.

• Disability assessments and referrals  
• Assistive device support  
• Inclusive education advocacy  
• Accessibility awareness campaigns  

Community Healing & Awareness  
We reduce stigma and promote understanding in communities.

• Anti-stigma campaigns  
• Peer support groups  
• Community dialogue forums  
• Family support sessions`,
        objectives: [],
        activities: [],
        impact: {
            peopleHelped: "",
            beneficiaries: "",
            projects: "",
            communities: ""
        },
        sections: [
            {
                title: "Mental Health Support",
                description: "Psychosocial healing and counseling",
                items: [
                    "Counseling sessions",
                    "Trauma healing",
                    "Stress management",
                    "Support groups"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 615,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Disability Inclusion",
                description: "Supporting persons with disabilities",
                items: [
                    "Accessibility support",
                    "Assistive devices",
                    "Inclusive education",
                    "Advocacy programs"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 626,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Community Awareness",
                description: "Reducing stigma and promoting inclusion",
                items: [
                    "Anti-stigma campaigns",
                    "Community dialogues",
                    "Family support",
                    "Peer groups"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__["HandHeart"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 637,
                    columnNumber: 13
                }, this)
            }
        ],
        color: "bg-pink-600",
        secondaryColor: "text-pink-600"
    },
    {
        id: "culinary-art",
        slug: slugify("Culinary Art"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 648,
            columnNumber: 9
        }, this),
        image: "https://ext.same-assets.com/922964245/3980788437.jpeg",
        gallery: [
            "https://ext.same-assets.com/922964245/4234630857.jpeg",
            "https://ext.same-assets.com/922964245/3980788437.jpeg"
        ],
        title: "Culinary Art",
        shortDescription: "Training in cooking skills, food safety, and culinary entrepreneurship.",
        fullDescription: `Our Culinary Art program develops professional cooking skills and supports food-based entrepreneurship.

We empower participants to turn cooking skills into sustainable livelihoods in the hospitality and food industry.

Culinary Training  
We provide hands-on cooking and baking skills development.

• Professional cooking techniques  
• Baking and pastry training  
• Food presentation and hygiene  
• Kitchen management skills  

Food Entrepreneurship  
We support participants in building food businesses.

• Catering business training  
• Small restaurant startup support  
• Food packaging and branding  
• Market access and sales skills  

Cultural Food Heritage  
We preserve and promote traditional food knowledge.

• Traditional recipe training  
• Cultural food festivals  
• Community cooking events  
• Nutrition awareness`,
        objectives: [],
        activities: [],
        impact: {
            peopleHelped: "",
            beneficiaries: "",
            projects: "",
            communities: ""
        },
        sections: [
            {
                title: "Culinary Training",
                description: "Professional cooking and baking skills",
                items: [
                    "Cooking techniques",
                    "Baking & pastries",
                    "Food hygiene",
                    "Kitchen management"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 704,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Food Business",
                description: "Supporting culinary entrepreneurship",
                items: [
                    "Catering business",
                    "Restaurant startup",
                    "Food packaging",
                    "Market access"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 715,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Cultural Food Heritage",
                description: "Preserving traditional food knowledge",
                items: [
                    "Traditional recipes",
                    "Food festivals",
                    "Community cooking",
                    "Nutrition awareness"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$salad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Salad$3e$__["Salad"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 726,
                    columnNumber: 13
                }, this)
            }
        ],
        color: "bg-yellow-600",
        secondaryColor: "text-yellow-600"
    },
    {
        id: "agriculture",
        slug: slugify("Agriculture Programs"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 737,
            columnNumber: 9
        }, this),
        image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1776560303/team_lr9k0j.jpg",
        gallery: [
            "https://res.cloudinary.com/dbllxptl8/image/upload/v1776880422/team_y1mtwu.jpg",
            "https://res.cloudinary.com/dbllxptl8/image/upload/v1776560302/WhatsApp_Image_2026-04-18_at_18.13.58_whs68x.jpg",
            "https://res.cloudinary.com/dbllxptl8/image/upload/v1776560302/cbg2_d5maaf.jpg",
            "https://res.cloudinary.com/dbllxptl8/image/upload/v1776548109/7_cs9yi6.jpg"
        ],
        title: "Agriculture Programs",
        shortDescription: "Supporting sustainable farming, food security, and rural livelihoods.",
        fullDescription: `Our Agriculture Program supports farmers with training, inputs, and market access to improve food security and income generation.

We promote modern and sustainable farming techniques that strengthen resilience against climate and economic challenges.

Sustainable Farming  
We train farmers in improved agricultural practices.

• Modern farming techniques  
• Climate-smart agriculture  
• Crop and livestock management  
• Soil and water conservation  

Food Security Support  
We strengthen household and community food production.

• Kitchen gardens  
• Seed distribution support  
• Nutrition-sensitive farming  
• Post-harvest handling  

Market & Livelihoods  
We help farmers connect to markets and income opportunities.

• Market linkage support  
• Cooperative farming groups  
• Value addition training  
• Agricultural entrepreneurship`,
        objectives: [],
        activities: [],
        impact: {
            peopleHelped: "",
            beneficiaries: "",
            projects: "",
            communities: ""
        },
        sections: [
            {
                title: "Sustainable Farming",
                description: "Improving agricultural productivity",
                items: [
                    "Climate-smart agriculture",
                    "Crop management",
                    "Soil conservation",
                    "Livestock farming"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tractor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Tractor$3e$__["Tractor"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 794,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Food Security",
                description: "Improving household nutrition",
                items: [
                    "Kitchen gardens",
                    "Seed support",
                    "Nutrition farming",
                    "Harvest storage"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__["Trees"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 805,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Market Access",
                description: "Connecting farmers to markets",
                items: [
                    "Market linkages",
                    "Cooperatives",
                    "Value addition",
                    "Agri-business"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 816,
                    columnNumber: 13
                }, this)
            }
        ],
        color: "bg-emerald-600",
        secondaryColor: "text-emerald-600"
    },
    {
        id: "fishing-program",
        slug: slugify("Fishing Program"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/programs.tsx",
            lineNumber: 826,
            columnNumber: 9
        }, this),
        image: "",
        gallery: [
            ""
        ],
        title: "Fishing Program",
        shortDescription: "Promoting sustainable fishing practices and aquaculture for food security and income generation.",
        fullDescription: `Our Fishing Program supports sustainable fishing practices and aquaculture development to improve food security, nutrition, and livelihoods for refugee and host communities.

Sustainable Aquaculture
We promote environmentally responsible fish farming techniques that can be practiced at small scale.

• Pond construction and management
• Fish breeding and hatchery techniques
• Feed formulation and management
• Water quality monitoring
• Harvest and post-harvest handling

Capture Fisheries Support
We support traditional fishing communities with resources and training for sustainable practices.

• Sustainable fishing techniques
• Equipment maintenance and repair
• Safety training and life-saving equipment
• Fish processing and preservation
• Market access and value addition

Training and Capacity Building
We provide comprehensive training to build skills in fisheries and aquaculture.

• Technical training in aquaculture and fisheries
• Business skills for fish farming enterprises
• Environmental stewardship and conservation
• Community organizing and cooperative development

These activities aim to reduce pressure on natural fish stocks while providing reliable sources of protein and income.`,
        sections: [
            {
                title: "Sustainable Aquaculture",
                description: "Environmentally responsible fish farming",
                items: [
                    "Pond construction",
                    "Fish breeding",
                    "Feed management",
                    "Water quality",
                    "Harvest handling"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__["Trees"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 867,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Capture Fisheries Support",
                description: "Supporting traditional fishing communities",
                items: [
                    "Sustainable techniques",
                    "Equipment support",
                    "Safety training",
                    "Processing",
                    "Market access"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 873,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Training and Capacity Building",
                description: "Building skills in fisheries and aquaculture",
                items: [
                    "Technical training",
                    "Business skills",
                    "Environmental stewardship",
                    "Community organizing"
                ],
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/lib/programs.tsx",
                    lineNumber: 879,
                    columnNumber: 13
                }, this)
            }
        ],
        objectives: [
            "Promote sustainable fishing and aquaculture practices",
            "Improve food security and nutrition",
            "Generate income through fisheries-related activities",
            "Protect aquatic ecosystems and biodiversity",
            "Build capacity for sustainable resource management"
        ],
        activities: [
            {
                icon: "Droplets",
                title: "Fish Farming",
                description: "Sustainable aquaculture training",
                frequency: "Weekly"
            },
            {
                icon: "Briefcase",
                title: "Fishing Equipment Support",
                description: "Tools and maintenance training",
                frequency: "Bi-weekly"
            },
            {
                icon: "GraduationCap",
                title: "Fisheries Business Training",
                description: "Entrepreneurship in aquaculture",
                frequency: "Monthly"
            },
            {
                icon: "Users",
                title: "Community Fishing Cooperatives",
                description: "Organizing and managing fishing groups",
                frequency: "Ongoing"
            }
        ],
        impact: {
            peopleHelped: "800+",
            beneficiaries: "1,200+",
            projects: "10",
            communities: "15+"
        },
        color: "bg-cyan-600",
        secondaryColor: "text-cyan-600"
    }
];
function getProgramBySlug(slug) {
    return programs.find((p)=>p.slug === slug);
}
function getAllProgramSlugs() {
    return programs.map((p)=>p.slug);
}
}}),
"[project]/src/components/Navbar.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Navbar.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Navbar.tsx <module evaluation>", "default");
}}),
"[project]/src/components/Navbar.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Navbar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Navbar.tsx", "default");
}}),
"[project]/src/components/Navbar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/Footer.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Footer.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Footer.tsx <module evaluation>", "default");
}}),
"[project]/src/components/Footer.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Footer.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Footer.tsx", "default");
}}),
"[project]/src/components/Footer.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/program/ProgramHero.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/program/ProgramHero.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/program/ProgramHero.tsx <module evaluation>", "default");
}}),
"[project]/src/components/program/ProgramHero.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/program/ProgramHero.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/program/ProgramHero.tsx", "default");
}}),
"[project]/src/components/program/ProgramHero.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramHero$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/program/ProgramHero.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramHero$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/program/ProgramHero.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramHero$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/program/ProgramDescription.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProgramDescription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ProgramDescription({ program }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            program.sections && program.sections.length > 0 ? // 🔥 NEW UI (CARD-BASED)
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: program.sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-6 rounded-2xl bg-white shadow-md border border-gray-100 transition-all duration-700 hover:shadow-xl opacity-100 translate-y-0`,
                        style: {
                            transitionDelay: `${index * 150}ms`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 flex items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue",
                                        children: section.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/program/ProgramDescription.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-dark-navy",
                                        children: section.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/program/ProgramDescription.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/program/ProgramDescription.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm mb-4 leading-relaxed",
                                children: section.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/program/ProgramDescription.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: section.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary-blue mt-1",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/program/ProgramDescription.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this),
                                            item
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/program/ProgramDescription.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/program/ProgramDescription.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/program/ProgramDescription.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/program/ProgramDescription.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this) : // ⚠️ FALLBACK (OLD TEXT SYSTEM)
            program.fullDescription?.split("\n\n").map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-gray-600 text-lg leading-relaxed transition-all duration-700 opacity-100 translate-y-0`,
                    style: {
                        transitionDelay: `${(index + 1) * 150}ms`
                    },
                    children: paragraph
                }, index, false, {
                    fileName: "[project]/src/components/program/ProgramDescription.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-4 p-8 bg-light-blue rounded-2xl border-l-4 border-primary-blue transition-all duration-700 opacity-100 translate-y-0`,
                style: {
                    transitionDelay: "600ms"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-dark-navy italic text-lg font-medium",
                        children: '"Your Support helps to transform lives. From education to health care, every contribution moves us one step closer"'
                    }, void 0, false, {
                        fileName: "[project]/src/components/program/ProgramDescription.tsx",
                        lineNumber: 67,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mt-2 text-sm",
                        children: "— protect and love, care and support vulnerable people"
                    }, void 0, false, {
                        fileName: "[project]/src/components/program/ProgramDescription.tsx",
                        lineNumber: 70,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/program/ProgramDescription.tsx",
                lineNumber: 63,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/program/ProgramDescription.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/program/ProgramObjectives.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/program/ProgramObjectives.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/program/ProgramObjectives.tsx <module evaluation>", "default");
}}),
"[project]/src/components/program/ProgramObjectives.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/program/ProgramObjectives.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/program/ProgramObjectives.tsx", "default");
}}),
"[project]/src/components/program/ProgramObjectives.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramObjectives$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/program/ProgramObjectives.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramObjectives$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/program/ProgramObjectives.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramObjectives$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/program/ProgramGallery.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/program/ProgramGallery.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/program/ProgramGallery.tsx <module evaluation>", "default");
}}),
"[project]/src/components/program/ProgramGallery.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/program/ProgramGallery.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/program/ProgramGallery.tsx", "default");
}}),
"[project]/src/components/program/ProgramGallery.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramGallery$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/program/ProgramGallery.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramGallery$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/program/ProgramGallery.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramGallery$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/program/ProgramCTA.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/program/ProgramCTA.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/program/ProgramCTA.tsx <module evaluation>", "default");
}}),
"[project]/src/components/program/ProgramCTA.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/program/ProgramCTA.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/program/ProgramCTA.tsx", "default");
}}),
"[project]/src/components/program/ProgramCTA.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramCTA$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/program/ProgramCTA.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramCTA$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/program/ProgramCTA.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramCTA$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/programs/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProgramDetailPage),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$programs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/programs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/program/ProgramHero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramDescription$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/program/ProgramDescription.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramObjectives$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/program/ProgramObjectives.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/program/ProgramGallery.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/program/ProgramCTA.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
async function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$programs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProgramSlugs"])().map((slug)=>({
            slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const program = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$programs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProgramBySlug"])(slug);
    if (!program) {
        return {
            title: "Program Not Found | Mwinja Divine Help Foundation"
        };
    }
    return {
        title: `${program.title} | Mwinja Divine Help Foundation`,
        description: program.shortDescription
    };
}
async function ProgramDetailPage({ params }) {
    const { slug } = await params;
    const program = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$programs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProgramBySlug"])(slug);
    if (!program) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const relatedPrograms = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$programs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["programs"].filter((p)=>p.id !== program.id).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/programs/[slug]/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                program: program
            }, void 0, false, {
                fileName: "[project]/src/app/programs/[slug]/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramDescription$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                program: program
            }, void 0, false, {
                fileName: "[project]/src/app/programs/[slug]/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramObjectives$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                program: program
            }, void 0, false, {
                fileName: "[project]/src/app/programs/[slug]/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                program: program
            }, void 0, false, {
                fileName: "[project]/src/app/programs/[slug]/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$program$2f$ProgramCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                program: program,
                relatedPrograms: relatedPrograms
            }, void 0, false, {
                fileName: "[project]/src/app/programs/[slug]/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/programs/[slug]/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/programs/[slug]/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/programs/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/programs/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_3dcca71f._.js.map