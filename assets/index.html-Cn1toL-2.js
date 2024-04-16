import{_ as e,o as t,c as a,e as o}from"./app-CsXxd9Vw.js";const n={},r=o('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>Zookeeper是一个开源的分布式的,为分布式框架提供协调服务的Apache项目.</p><h3 id="工作机制" tabindex="-1"><a class="header-anchor" href="#工作机制"><span>工作机制</span></a></h3><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><p><strong>提供的服务:</strong></p><h4 id="统一命名服务" tabindex="-1"><a class="header-anchor" href="#统一命名服务"><span>统一命名服务</span></a></h4><p>在分布式环境下,经常需要对应用/服务进行统一命名,便于识别</p><p>例如: IP不容易记住, 而域名容易记住</p><h4 id="统一配置管理" tabindex="-1"><a class="header-anchor" href="#统一配置管理"><span>统一配置管理</span></a></h4><ol><li>在分布式环境下,配置文件同步非常常见 <ol><li>一边要求一个集群中, 所有节点的配置信息是一致的,比如Kafka集群</li><li>对配置信息修改后, 希望能够快速同步到各个节点上</li></ol></li><li>配置管理可交由Zookeeper实现 <ol><li>可将配置信息写入Zookeeper上的一个Znode</li><li>各个客户端服务器监听这个Znode</li><li>一旦Znode中的数据发生修改,则会对Client发出通知</li></ol></li></ol><h4 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h4>',11),i=[r];function c(l,s){return t(),a("div",null,i)}const d=e(n,[["render",c],["__file","index.html.vue"]]),h=JSON.parse(`{"path":"/zookeeper/wz9jt6uj/","title":"入门","lang":"zh-CN","frontmatter":{"title":"入门","author":"花木凋零成兰","createTime":"2024/04/16 23:17:35","permalink":"/zookeeper/wz9jt6uj/","description":"概述 Zookeeper是一个开源的分布式的,为分布式框架提供协调服务的Apache项目. 工作机制 应用场景 提供的服务: 统一命名服务 在分布式环境下,经常需要对应用/服务进行统一命名,便于识别 例如: IP不容易记住, 而域名容易记住 统一配置管理 在分布式环境下,配置文件同步非常常见 一边要求一个集群中, 所有节点的配置信息是一致的,比如Kaf...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://ytazwc.top/blogs/zookeeper/wz9jt6uj/"}],["meta",{"property":"og:site_name","content":"花木凋零成兰"}],["meta",{"property":"og:title","content":"入门"}],["meta",{"property":"og:description","content":"概述 Zookeeper是一个开源的分布式的,为分布式框架提供协调服务的Apache项目. 工作机制 应用场景 提供的服务: 统一命名服务 在分布式环境下,经常需要对应用/服务进行统一命名,便于识别 例如: IP不容易记住, 而域名容易记住 统一配置管理 在分布式环境下,配置文件同步非常常见 一边要求一个集群中, 所有节点的配置信息是一致的,比如Kaf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-16T16:00:04.000Z"}],["meta",{"property":"article:author","content":"花木凋零成兰"}],["meta",{"property":"article:modified_time","content":"2024-04-16T16:00:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-16T16:00:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"花木凋零成兰\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"工作机制","slug":"工作机制","link":"#工作机制","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]}],"readingTime":{"minutes":0.81,"words":243},"git":{"updatedTime":1713283204000,"contributors":[{"name":"YTAZWC","email":"18570354653@163.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/Zookeeper/1.入门.md"}`);export{d as comp,h as data};
