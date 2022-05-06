(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"2sQ0":function(e,t,l){e.exports=l.p+"static/grid-settings-menu@2x-95987a82831109f33bf9a8e7fb4a78cc.jpg"},"6mJY":function(e,t,l){e.exports=l.p+"static/stb_grid-layout-04403d8316971ea07b3cbf6d45779a32.jpg"},ACbT:function(e,t,l){e.exports=l.p+"static/grid-settings-8542f1c79670bd5a73957a364b22d268.jpg"},"Ba6+":function(e,t,l){e.exports=l.p+"static/stb_grid-layout@2x-f0834c8e46e3caf6069462d4c43ce45b.jpg"},GJwU:function(e,t,l){e.exports=l.p+"static/grid-settings-menu-84494363ce41208630c411eb1090fe64.jpg"},X9Zi:function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return O})),l.d(t,"default",(function(){return g}));var i=l("zLVn"),n=(l("3U+G"),l("7ljp")),a=l("Snbm"),m=l("+6pB"),s=l("quxV"),o=l.n(s),d=l("b0ts"),r=l.n(d),u=l("ds4K"),c=l.n(u),p=l("ETNr"),x=l.n(p),b=l("P0Bd"),j=l.n(b),O={},f={_frontmatter:O},h=a.a;function g(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.mdx)(h,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",{id:"grid"},"Grid"),Object(n.mdx)("p",null,"Using a grid system is very helpful when designing web pages. It makes it easier to place elements on the page."),Object(n.mdx)("h2",{id:"introduction"},"Introduction"),Object(n.mdx)("p",null,"The grid system normally has 12 columns (12-column grid system) and has a total width of 100%."),Object(n.mdx)("p",null,"It can also be transformed to other grid systems for the different purposes and layouts, including: 2-column, 3-column, 4-column, 5-column, 6-column, 8-column or 10-column system."),Object(n.mdx)("img",{src:l("6mJY"),srcSet:l("Ba6+")+" 2x",className:"u-maxWidthFull",alt:"Grid structure"}),Object(n.mdx)("ol",{className:"u-textGray u-marginTopTiny"},Object(n.mdx)("li",null,"Column"),Object(n.mdx)("li",null,"Region"),Object(n.mdx)("li",null,"Gutter"),Object(n.mdx)("li",null,"Row")),Object(n.mdx)("h2",{id:"setup-in-sketch"},"Setup in Sketch"),Object(n.mdx)("p",null,'Step 1: Go to "Layout Settings..."'),Object(n.mdx)("p",null,Object(n.mdx)("img",{src:l("GJwU"),srcSet:l("2sQ0")+" 2x",className:"u-maxWidthFull u-border u-rounded",alt:"Layout Settings..."})),Object(n.mdx)("p",null,"Step 2: Setup your layout settings according to the following example"),Object(n.mdx)("p",null,Object(n.mdx)("img",{src:l("ACbT"),srcSet:l("r/5t")+" 2x",className:"u-maxWidthFull u-border u-rounded",alt:"Layout Settings..."})),Object(n.mdx)("h2",{id:"grid-elements"},"Grid Elements"),Object(n.mdx)("h3",{id:"row"},"Row"),Object(n.mdx)("p",null,"A row is the horizontal space which takes 100% of the width, we use Grid to name a row."),Object(n.mdx)("p",null,"Gutter options:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"Grid"),"  - has gutter between columns by default"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"Grid--smallGutter"),"  - small gutter"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"Grid--withoutGutter"),"  - no gutter")),Object(n.mdx)("h3",{id:"column"},"Column"),Object(n.mdx)("p",null,"Column is where to place content. Columns should be placed directly in row. The maximum number of columns in a row is 12. Columns are used withu-size*  in CSS utilities."),Object(n.mdx)("h4",{id:"sizes"},"Sizes"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"u-sizeFit"),"  - Make an element shrink wrap its content with flex-basis."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"u-sizeFull"),"  - Make an element the width of its parent."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"u-sizeFill"),"  - Make an element fill the remaining space. Distribute space evenly on multiple elements."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"u-sizeFillAlt"),"  - An alternative method to make an element fill the remaining space. Distribute space based on element width."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"u-sizeXofY"),"  (numerous) - Specify the proportional width of an object.")),Object(n.mdx)("p",null,Object(n.mdx)("inlineCode",{parentName:"p"},"X"),"  must be an integer less than  ",Object(n.mdx)("inlineCode",{parentName:"p"},"Y"),"."),Object(n.mdx)("p",null,Object(n.mdx)("inlineCode",{parentName:"p"},"Y"),"  can be any of the following numbers: 2, 3, 4, 5, 6, 8, 10, 12."),Object(n.mdx)("h4",{id:"responsive-classes"},"Responsive classes"),Object(n.mdx)("p",null,"The grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit."),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"sm:u-sizeXofY"),"  - To use at the smallest Media Query breakpoint."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"md:u-sizeXofY"),"  - To use at the medium Media Query breakpoint."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"lg:u-sizeXofY"),"  - To use at the large Media Query breakpoint."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"xl:u-sizeXofY"),"  - To use at the extra large or desktop Media Query breakpoint."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"xxl:u-sizeXofY"),"  - To use at the monitor Media Query breakpoint.")),Object(n.mdx)("h3",{id:"offsetting-columns"},"Offsetting columns"),Object(n.mdx)("h4",{id:"offset-classes"},"Offset classes"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"u-offsetXofY"),"  (numerous) - Specify the proportional offset before an object.")),Object(n.mdx)("h4",{id:"responsive-classes-1"},"Responsive classes"),Object(n.mdx)("p",null,"The offset includes six tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit."),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"sm:u-offsetXofY"),"  - To use at the smallest Media Query breakpoint."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"md:u-offsetXofY"),"  - To use at the medium Media Query breakpoint."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"lg:u-offsetXofY"),"  - To use at the large Media Query breakpoint."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"xl:u-offsetXofY"),"  - To use at the extra large or desktop Media Query breakpoint."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"xxl:u-offsetXofY"),"  - To use at the monitor Media Query breakpoint.")),Object(n.mdx)("h2",{id:"examples"},"Examples"),Object(n.mdx)("h3",{id:"12-columns"},"12 columns"),Object(n.mdx)(m.a,{exampleClassName:"example-grids",codeText:r.a,mdxType:"CodeView"}),Object(n.mdx)("h3",{id:"10-columns"},"10 columns"),Object(n.mdx)(m.a,{exampleClassName:"example-grids",codeText:o.a,mdxType:"CodeView"}),Object(n.mdx)("h3",{id:"remove-gutter"},"Remove gutter"),Object(n.mdx)("p",null,"Use ",Object(n.mdx)("inlineCode",{parentName:"p"},".Grid--withoutGutter"),"  to remove a gutter to between cells"),Object(n.mdx)(m.a,{exampleClassName:"example-grids",codeText:c.a,mdxType:"CodeView"}),Object(n.mdx)("h3",{id:"small-gutter"},"Small gutter"),Object(n.mdx)("p",null,"Use  ",Object(n.mdx)("inlineCode",{parentName:"p"},".Grid--smallGutter"),"  to add a small gutter to between cells"),Object(n.mdx)(m.a,{exampleClassName:"example-grids",codeText:x.a,mdxType:"CodeView"}),Object(n.mdx)("h3",{id:"offset-columns"},"Offset columns"),Object(n.mdx)(m.a,{exampleClassName:"example-grids",codeText:j.a,mdxType:"CodeView"}))}g.isMDXComponent=!0},"r/5t":function(e,t,l){e.exports=l.p+"static/grid-settings@2x-516991ed596b858ea82406e271aa2689.jpg"}}]);
//# sourceMappingURL=component---src-pages-layout-grid-mdx-4c25bbce2d7b4401c1c4.js.map