import{_ as a,o as e,c as l,e as t,b as s,d as i}from"./app-BauTsuTD.js";const n={},h=t('<h2 id="_5-a-b问题vii" tabindex="-1"><a class="header-anchor" href="#_5-a-b问题vii"><span>5. A+B问题VII</span></a></h2><p>时间限制：1.000S 空间限制：32MB</p><h3 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h3><p>你的任务是计算两个整数的和。</p><h3 id="输入描述" tabindex="-1"><a class="header-anchor" href="#输入描述"><span>输入描述</span></a></h3><p>输入包含若干行，每行输入两个整数a和b，由空格分隔。</p><h3 id="输出描述" tabindex="-1"><a class="header-anchor" href="#输出描述"><span>输出描述</span></a></h3><p>对于每组输入，输出a和b的和，每行输出后接一个空行。</p><h3 id="输入示例" tabindex="-1"><a class="header-anchor" href="#输入示例"><span>输入示例</span></a></h3>',9),k=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",null,"2 4")]),i(`
`),s("span",{class:"line"},[s("span",null,"11 19")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),r=s("h3",{id:"输出示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#输出示例"},[s("span",null,"输出示例")])],-1),d=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",null,"6")]),i(`
`),s("span",{class:"line"},[s("span")]),i(`
`),s("span",{class:"line"},[s("span",null,"30")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),p=s("h2",{id:"解法一-模拟",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#解法一-模拟"},[s("span",null,"解法一(模拟)")])],-1),c=s("p",null,"思路分析:",-1),o=s("ol",null,[s("li",null,"根据题意模拟实现")],-1),m=s("p",null,"代码如下:",-1),g=s("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," java"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"util"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"Scanner"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"@author"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," 花木凋零成兰")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * @title k_5_AAndBQuestionVII")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * @date 2024/6/24 13:43")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * @package com.kamacoder")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * @description 5. A+B问题VII")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"public"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," class"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," k_5_AAndBQuestionVII"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    public"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," static"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," void"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," main"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"String"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," args"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"        Scanner"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," in"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," new"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," Scanner"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"System"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"in"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"        int"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," a"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," b"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"        while"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"in"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"hasNext"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"())"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"            a "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," in"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"nextInt"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"();")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"            b "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," in"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"nextInt"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"();")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"            System"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"out"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"println"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"a "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"+"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," b"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"            System"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"out"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"println"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"();")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),u=s("p",null,"结果如下:",-1),y=s("blockquote",null,[s("p",null,"运行时间： 356ms 消耗内存： 12904kb")],-1),A=s("p",null,"复杂度分析:",-1),D=s("ul",null,[s("li",null,[i("时间复杂度: "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])]),s("li",null,[i("空间复杂度: "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])])],-1),B=[h,k,r,d,p,c,o,m,g,u,y,A,D];function v(b,_){return e(),l("div",null,B)}const I=a(n,[["render",v],["__file","index.html.vue"]]),f=JSON.parse(`{"path":"/kamacoder/4cjixno5/","title":"5.A+B问题VII","lang":"zh-CN","frontmatter":{"title":"5.A+B问题VII","author":"花木凋零成兰","createTime":"2024/06/24 13:41:08","permalink":"/kamacoder/4cjixno5/","description":"5. A+B问题VII 时间限制：1.000S 空间限制：32MB 题目描述 你的任务是计算两个整数的和。 输入描述 输入包含若干行，每行输入两个整数a和b，由空格分隔。 输出描述 对于每组输入，输出a和b的和，每行输出后接一个空行。 输入示例 输出示例 解法一(模拟) 思路分析: 根据题意模拟实现 代码如下: 结果如下: 运行时间： 356ms 消耗...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://ytazwc.top/blogs/kamacoder/4cjixno5/"}],["meta",{"property":"og:site_name","content":"花木凋零成兰"}],["meta",{"property":"og:title","content":"5.A+B问题VII"}],["meta",{"property":"og:description","content":"5. A+B问题VII 时间限制：1.000S 空间限制：32MB 题目描述 你的任务是计算两个整数的和。 输入描述 输入包含若干行，每行输入两个整数a和b，由空格分隔。 输出描述 对于每组输入，输出a和b的和，每行输出后接一个空行。 输入示例 输出示例 解法一(模拟) 思路分析: 根据题意模拟实现 代码如下: 结果如下: 运行时间： 356ms 消耗..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-24T05:47:17.000Z"}],["meta",{"property":"article:author","content":"花木凋零成兰"}],["meta",{"property":"article:modified_time","content":"2024-06-24T05:47:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.A+B问题VII\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-24T05:47:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"花木凋零成兰\\"}]}"]]},"headers":[{"level":2,"title":"5. A+B问题VII","slug":"_5-a-b问题vii","link":"#_5-a-b问题vii","children":[{"level":3,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":3,"title":"输入描述","slug":"输入描述","link":"#输入描述","children":[]},{"level":3,"title":"输出描述","slug":"输出描述","link":"#输出描述","children":[]},{"level":3,"title":"输入示例","slug":"输入示例","link":"#输入示例","children":[]},{"level":3,"title":"输出示例","slug":"输出示例","link":"#输出示例","children":[]}]},{"level":2,"title":"解法一(模拟)","slug":"解法一-模拟","link":"#解法一-模拟","children":[]}],"readingTime":{"minutes":0.77,"words":232},"git":{"updatedTime":1719208037000,"contributors":[{"name":"花木凋零成兰","email":"18570354653@163.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/卡码网刷题/题库/5.A+B问题VII.md"}`);export{I as comp,f as data};
