var e={},t=[],n=e=>e,o=t.map,l=Array.isArray,i="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,r=e=>{var t="";if("string"==typeof e)return e;if(l(e))for(var n,o=0;o<e.length;o++)(n=r(e[o]))&&(t+=(t&&" ")+n);else for(var o in e)e[o]&&(t+=(t&&" ")+o);return t},s=(e,t)=>{for(var n in{...e,...t})if("function"==typeof(l(e[n])?e[n][0]:e[n]))t[n]=e[n];else if(e[n]!==t[n])return!0},a=e=>null==e?e:e.key,d=(e,t,n,o,l,i)=>{if("key"===t);else if("style"===t)for(var s in{...n,...o})n=null==o||null==o[s]?"":o[s],"-"===s[0]?e[t].setProperty(s,n):e[t][s]=n;else"o"===t[0]&&"n"===t[1]?((e.events||(e.events={}))[t=t.slice(2)]=o)?n||e.addEventListener(t,l):e.removeEventListener(t,l):!i&&"list"!==t&&"form"!==t&&t in e?e[t]=null==o?"":o:null==o||!1===o||"class"===t&&!(o=r(o))?e.removeAttribute(t):e.setAttribute(t,o)},u=(e,t,n)=>{var o=e.props,l=3===e.type?document.createTextNode(e.tag):(n=n||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag,o.is&&o):document.createElement(e.tag,o.is&&o);for(var i in o)d(l,i,null,o[i],t,n);for(var r=0;r<e.children.length;r++)l.appendChild(u(e.children[r]=p(e.children[r]),t,n));return e.node=l},c=(e,t,n,o,l,i)=>{if(n===o);else if(null!=n&&3===n.type&&3===o.type)n.tag!==o.tag&&(t.nodeValue=o.tag);else if(null==n||n.tag!==o.tag)t=e.insertBefore(u(o=p(o),l,i),t),null!=n&&e.removeChild(n.node);else{var r,s,f,v,m=n.props,h=o.props,y=n.children,g=o.children,k=0,$=0,b=y.length-1,w=g.length-1;for(var A in i=i||"svg"===o.tag,{...m,...h})("value"===A||"selected"===A||"checked"===A?t[A]:m[A])!==h[A]&&d(t,A,m[A],h[A],l,i);for(;$<=w&&k<=b&&null!=(f=a(y[k]))&&f===a(g[$]);)c(t,y[k].node,y[k],g[$]=p(g[$++],y[k++]),l,i);for(;$<=w&&k<=b&&null!=(f=a(y[b]))&&f===a(g[w]);)c(t,y[b].node,y[b],g[w]=p(g[w--],y[b--]),l,i);if(k>b)for(;$<=w;)t.insertBefore(u(g[$]=p(g[$++]),l,i),(s=y[k])&&s.node);else if($>w)for(;k<=b;)t.removeChild(y[k++].node);else{var C={},E={};for(A=k;A<=b;A++)null!=(f=y[A].key)&&(C[f]=y[A]);for(;$<=w;)f=a(s=y[k]),v=a(g[$]=p(g[$],s)),E[f]||null!=v&&v===a(y[k+1])?(null==f&&t.removeChild(s.node),k++):null==v||1===n.type?(null==f&&(c(t,s&&s.node,s,g[$],l,i),$++),k++):(f===v?(c(t,s.node,s,g[$],l,i),E[v]=!0,k++):null!=(r=C[v])?(c(t,t.insertBefore(r.node,s&&s.node),r,g[$],l,i),E[v]=!0):c(t,s&&s.node,null,g[$],l,i),$++);for(;k<=b;)null==a(s=y[k++])&&t.removeChild(s.node);for(var A in C)null==E[A]&&t.removeChild(C[A].node)}}return o.node=t},p=(e,t)=>!0!==e&&!1!==e&&e?"function"==typeof e.tag?((!t||null==t.memo||((e,t)=>{for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0})(t.memo,e.memo))&&((t=e.tag(e.memo)).memo=e.memo),t):e:m(""),f=t=>3===t.nodeType?m(t.nodeValue,t):v(t.nodeName.toLowerCase(),e,o.call(t.childNodes,f),1,t),v=(e,t,n,o,l)=>({tag:e,props:t,key:t.key,children:n,type:o,node:l}),m=(n,o)=>v(n,e,t,3,o);const h=e=>" "==e||"\t"==e||"\n"==e||"\r"==e,y=(e,n)=>{let o,i,r,s,a,d=[],u="",c=0,p=!0;const f=e=>(e||0===e)&&d.push("string"==typeof e?m(e):"number"==typeof e?m(""+e):e),y=(e,n=e.flat(2))=>{f(o.call?o(r,n):((e,n,o=t)=>v(e,n,l(o)?o:[o]))(o,r,n)),c=0},g=e=>{e&&(u=u.trimEnd()),u&&f(u),p=!1,u=""},k=()=>{s=[d,o,r,s],d=[],c=0},$=(e=c)=>{o=u,u="",r={},c=e},b=(e=c)=>{r[u]=!0,c=e,u=""},w=e=>{r[i]=e,c=5,u=""},A=()=>{let e=d;[d,o,r,s]=s,y(e)};for(let t=0;t<e.length;t++){for(let n=0;n<e[t].length;n++)a=e[t][n],0==c?"<"==a?c=2:h(a)?"\n"==a?p=!0:p||(c=1,u=a):(c=1,u=a):1==c?"<"==a?c=2:"\n"==a?(g(!1),p=!0,c=0):u+=a:2==c?"/"==a?(c=3,g(!0)):(c=4,g(!1),u=a):3==c?">"==a&&A():4==c?h(a)?$(5):"/"==a?$(6):">"==a?($(),k()):u+=a:6==c?">"==a&&y([]):5==c?"."==a||("/"==a?c=6:">"==a?k():h(a)||(u=a,c=7)):7==c?"="==a?(i=u,c=8):">"==a?(b(),k()):"/"==a?b(6):h(a)?b(5):u+=a:8==c?'"'==a&&(c=9,u=""):9==c&&('"'==a?w(u):u+=a);2==c?(o=n[t],r={},c=5):1==c?(g(!n[t]),f(n[t])):5==c?r={...r,...n[t]}:8==c?w(n[t]):9==c?u+=n[t]:0==c&&null!=n[t]&&f(n[t])}return d=d.flat(2),d.length>1?d:d[0]};var g=(e,...t)=>y(e,t);const k=e=>e.value?{...e,value:"",tasks:e.tasks.concat(e.value),done:[!1,...e.done]}:e,$=(e,t)=>({...e,value:t.target.value}),b=(e,t)=>{let n=[...e.tasks],o=[...e.done];return n.splice(t,1),o.splice(t,1),{...e,tasks:n,done:o}},w=(e,t)=>{let n=[...e.done];return n[t]=!n[t],{...e,done:n}},A=(e,t)=>"Enter"!==t.key?e:k;(({node:o,view:r,subscriptions:a,dispatch:d=n,init:u=e})=>{var p,v,m=o&&f(o),h=[],y=e=>{p!==e&&(null==(p=e)&&(d=a=g=n),a&&(h=((e,n=t,o)=>{for(var l,i,r=[],a=0;a<e.length||a<n.length;a++)l=e[a],i=n[a],r.push(i&&!0!==i?!l||i[0]!==l[0]||s(i[1],l[1])?[i[0],i[1],(l&&l[2](),i[0](o,i[1]))]:l:l&&l[2]());return r})(h,a(p),d)),r&&!v&&i(g,v=!0))},g=()=>o=c(o.parentNode,o,m,m=r(p),k,v=!1),k=function(e){d(this.events[e.type],e)};(d=d(((e,t)=>"function"==typeof e?d(e(p,t)):l(e)?"function"==typeof e[0]?d(e[0],e[1]):e.slice(1).map((e=>e&&!0!==e&&e[0](d,e[1])),y(e[0])):y(e))))(u)})({init:[{tasks:[],value:"",done:[]}],view:e=>g`
    <div id="app">
      <h1 class="todo-list title">To-Do List</h1>
      <div className="todo-list container">
        <input
          class="todo-list input"
          id="todo-list-input"
          type="text"
          placeholder="Type your task"
          oninput=${$}
          value=${e.value}
          onkeypress=${A}
        />
        <button id="todo-list-btn-add" onclick=${k}>Add Task</button>
      </div>
      <div className="todo-list item-list">
        <ul>
          ${e.tasks.map(((t,n)=>g`<li class="todo-list task" id="task-${n}">
              <input
                type="checkbox"
                id="todo-list-input-check"
                class="todo-list input-check"
                checked=${e.done[n]}
                oninput=${[w,n]}
              />
              <span
                class=${e.done[n]?"todo-list task-done":"todo-list task-not-done"}
                >${t}</span
              >
              <span
                id="delete-task${n}"
                class=${!0===e.done[n]?"todo-list delete-task-active":"todo-list delete-task"}
                onclick=${[b,n]}
                >❌</span
              >
            </li>`))}
        </ul>
      </div>
    </div>
  `,node:document.getElementById("app")});
//# sourceMappingURL=index.038ed78a.js.map
