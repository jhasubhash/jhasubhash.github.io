(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{3308:function(e,t,n){"use strict";function s(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}n.d(t,{TU:function(){return B}});let r={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const i=/[&<>"']/,l=/[&<>"']/g,o=/[<>"']|&(?!#?\w+;)/,a=/[<>"']|&(?!#?\w+;)/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h=e=>c[e];function p(e,t){if(t){if(i.test(e))return e.replace(l,h)}else if(o.test(e))return e.replace(a,h);return e}const u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function g(e){return e.replace(u,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const f=/(^|[^\[])\^/g;function d(e,t){e=e.source||e,t=t||"";const n={replace:(t,s)=>(s=(s=s.source||s).replace(f,"$1"),e=e.replace(t,s),n),getRegex:()=>new RegExp(e,t)};return n}const k=/[^\w:]/g,x=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function m(e,t,n){if(e){let e;try{e=decodeURIComponent(g(n)).replace(k,"").toLowerCase()}catch(s){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!x.test(n)&&(n=function(e,t){b[" "+e]||(w.test(e)?b[" "+e]=e+"/":b[" "+e]=v(e,"/",!0));const n=-1===(e=b[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(y,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(_,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(s){return null}return n}const b={},w=/^[^:]+:\/*[^/]*$/,y=/^([^:]+:)[\s\S]*$/,_=/^([^:]+:\/*[^/]*)[\s\S]*$/;const z={exec:function(){}};function $(e){let t,n,s=1;for(;s<arguments.length;s++)for(n in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function S(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let s=!1,r=t;for(;--r>=0&&"\\"===n[r];)s=!s;return s?"|":" |"})).split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n[n.length-1].trim()||n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function v(e,t,n){const s=e.length;if(0===s)return"";let r=0;for(;r<s;){const i=e.charAt(s-r-1);if(i!==t||n){if(i===t||!n)break;r++}else r++}return e.substr(0,s-r)}function R(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function T(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function A(e,t,n,s){const r=t.href,i=t.title?p(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){s.state.inLink=!0;const e={type:"link",raw:n,href:r,title:i,text:l,tokens:s.inlineTokens(l,[])};return s.state.inLink=!1,e}return{type:"image",raw:n,href:r,title:i,text:p(l)}}class I{constructor(e){this.options=e||r}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:v(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const s=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=s.length?e.slice(s.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=v(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const n={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,s,r,i,l,o,a,c,h,p,u,g,f=t[1].trim();const d=f.length>1,k={type:"list",raw:"",ordered:d,start:d?+f.slice(0,-1):"",loose:!1,items:[]};f=d?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=d?f:"[*+-]");const x=new RegExp(`^( {0,3}${f})((?: [^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,t=x.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0],h=e.split("\n",1)[0],this.options.pedantic?(i=2,u=c.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,u=c.slice(i),i+=t[1].length),o=!1,!c&&/^ *$/.test(h)&&(n+=h+"\n",e=e.substring(h.length+1),g=!0),!g){const t=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(p=e.split("\n",1)[0],c=p,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c));){if(c.search(/[^ ]/)>=i||!c.trim())u+="\n"+c.slice(i);else{if(o)break;u+="\n"+c}o||c.trim()||(o=!0),n+=p+"\n",e=e.substring(p.length+1)}}k.loose||(a?k.loose=!0:/\n *\n *$/.test(n)&&(a=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(u),s&&(r="[ ] "!==s[0],u=u.replace(/^\[[ xX]\] +/,""))),k.items.push({type:"list_item",raw:n,task:!!s,checked:r,loose:!1,text:u}),k.raw+=n}k.items[k.items.length-1].raw=n.trimRight(),k.items[k.items.length-1].text=u.trimRight(),k.raw=k.raw.trimRight();const m=k.items.length;for(l=0;l<m;l++)this.lexer.state.top=!1,k.items[l].tokens=this.lexer.blockTokens(k.items[l].text,[]),!k.loose&&k.items[l].tokens.some((e=>"space"===e.type))&&(k.loose=!0,k.items[l].loose=!0);return k}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):p(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:S(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,s,r,i,l=e.align.length;for(n=0;n<l;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(l=e.rows.length,n=0;n<l;n++)e.rows[n]=S(e.rows[n],e.header.length).map((e=>({text:e})));for(l=e.header.length,s=0;s<l;s++)e.header[s].tokens=[],this.lexer.inlineTokens(e.header[s].text,e.header[s].tokens);for(l=e.rows.length,s=0;s<l;s++)for(i=e.rows[s],r=0;r<i.length;r++)i[r].tokens=[],this.lexer.inlineTokens(i[r].text,i[r].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:p(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):p(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=v(e.slice(0,-1),"\\");if((e.length-t.length)%2===0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let s=0,r=0;for(;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])s++;else if(e[r]===t[1]&&(s--,s<0))return r;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],s="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],s=e[3])}else s=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),A(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return A(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s)return;if(s[3]&&n.match(/[\p{L}\p{N}]/u))return;const r=s[1]||s[2]||"";if(!r||r&&(""===n||this.rules.inline.punctuation.exec(n))){const n=s[0].length-1;let r,i,l=n,o=0;const a="*"===s[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(a.lastIndex=0,t=t.slice(-1*e.length+n);null!=(s=a.exec(t));){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(i=r.length,s[3]||s[4]){l+=i;continue}if((s[5]||s[6])&&n%3&&!((n+i)%3)){o+=i;continue}if(l-=i,l>0)continue;if(i=Math.min(i,i+l+o),Math.min(n,i)%2){const t=e.slice(1,n+s.index+i);return{type:"em",raw:e.slice(0,n+s.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,n+s.index+i-1);return{type:"strong",raw:e.slice(0,n+s.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),s=/^ /.test(e)&&/ $/.test(e);return n&&s&&(e=e.substring(1,e.length-1)),e=p(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,s;return"@"===n[2]?(e=p(this.options.mangle?t(n[1]):n[1]),s="mailto:"+e):(e=p(n[1]),s=e),{type:"link",raw:n[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,s;if("@"===n[2])e=p(this.options.mangle?t(n[0]):n[0]),s="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=p(n[0]),s="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):p(n[0]):n[0]:p(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}const E={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:z,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};E.def=d(E.def).replace("label",E._label).replace("title",E._title).getRegex(),E.bullet=/(?:[*+-]|\d{1,9}[.)])/,E.listItemStart=d(/^( *)(bull) */).replace("bull",E.bullet).getRegex(),E.list=d(E.list).replace(/bull/g,E.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+E.def.source+")").getRegex(),E._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",E._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,E.html=d(E.html,"i").replace("comment",E._comment).replace("tag",E._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),E.paragraph=d(E._paragraph).replace("hr",E.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",E._tag).getRegex(),E.blockquote=d(E.blockquote).replace("paragraph",E.paragraph).getRegex(),E.normal=$({},E),E.gfm=$({},E.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),E.gfm.table=d(E.gfm.table).replace("hr",E.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",E._tag).getRegex(),E.gfm.paragraph=d(E._paragraph).replace("hr",E.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",E.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",E._tag).getRegex(),E.pedantic=$({},E.normal,{html:d("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",E._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:z,paragraph:d(E.normal._paragraph).replace("hr",E.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",E.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const L={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:z,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:z,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function C(e){return e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026")}function q(e){let t,n,s="";const r=e.length;for(t=0;t<r;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),s+="&#"+n+";";return s}L._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",L.punctuation=d(L.punctuation).replace(/punctuation/g,L._punctuation).getRegex(),L.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,L.escapedEmSt=/\\\*|\\_/g,L._comment=d(E._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),L.emStrong.lDelim=d(L.emStrong.lDelim).replace(/punct/g,L._punctuation).getRegex(),L.emStrong.rDelimAst=d(L.emStrong.rDelimAst,"g").replace(/punct/g,L._punctuation).getRegex(),L.emStrong.rDelimUnd=d(L.emStrong.rDelimUnd,"g").replace(/punct/g,L._punctuation).getRegex(),L._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,L._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,L._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,L.autolink=d(L.autolink).replace("scheme",L._scheme).replace("email",L._email).getRegex(),L._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,L.tag=d(L.tag).replace("comment",L._comment).replace("attribute",L._attribute).getRegex(),L._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,L._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,L._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,L.link=d(L.link).replace("label",L._label).replace("href",L._href).replace("title",L._title).getRegex(),L.reflink=d(L.reflink).replace("label",L._label).getRegex(),L.reflinkSearch=d(L.reflinkSearch,"g").replace("reflink",L.reflink).replace("nolink",L.nolink).getRegex(),L.normal=$({},L),L.pedantic=$({},L.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",L._label).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",L._label).getRegex()}),L.gfm=$({},L.normal,{escape:d(L.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),L.gfm.url=d(L.gfm.url,"i").replace("email",L.gfm._extended_email).getRegex(),L.breaks=$({},L.gfm,{br:d(L.br).replace("{2,}","*").getRegex(),text:d(L.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class Z{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||r,this.options.tokenizer=this.options.tokenizer||new I,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:E.normal,inline:L.normal};this.options.pedantic?(t.block=E.pedantic,t.inline=L.pedantic):this.options.gfm&&(t.block=E.gfm,this.options.breaks?t.inline=L.breaks:t.inline=L.gfm),this.tokenizer.rules=t}static get rules(){return{block:E,inline:L}}static lex(e,t){return new Z(t).lex(e)}static lexInline(e,t){return new Z(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,s,r,i;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((s=>!!(n=s.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),n.type&&t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),s=t[t.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?t.push(n):(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),s=t[t.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(s.raw+="\n"+n.raw,s.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(r=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let s;this.options.extensions.startBlock.forEach((function(e){s=e.call({lexer:this},n),"number"===typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r)))s=t[t.length-1],i&&"paragraph"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),i=r.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),s=t[t.length-1],s&&"text"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,s,r,i,l,o,a=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(a));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,i.index)+"["+T("a",i[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(a));)a=a.slice(0,i.index)+"["+T("a",i[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.escapedEmSt.exec(a));)a=a.slice(0,i.index)+"++"+a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(o=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((s=>!!(n=s.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),s=t[t.length-1],s&&"text"===n.type&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),s=t[t.length-1],s&&"text"===n.type&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,a,o))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,q))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,q))){if(r=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let s;this.options.extensions.startInline.forEach((function(e){s=e.call({lexer:this},n),"number"===typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(r,C))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(o=n.raw.slice(-1)),l=!0,s=t[t.length-1],s&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(n.raw.length),t.push(n);return t}}class O{constructor(e){this.options=e||r}code(e,t,n){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,s);null!=t&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",s?'<pre><code class="'+this.options.langPrefix+p(s,!0)+'">'+(n?e:p(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:p(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,s){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+s.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const s=t?"ol":"ul";return"<"+s+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+s+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=m(this.options.sanitize,this.options.baseUrl,e)))return n;let s='<a href="'+p(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){if(null===(e=m(this.options.sanitize,this.options.baseUrl,e)))return n;let s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class D{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class U{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,s=0;if(this.seen.hasOwnProperty(n)){s=this.seen[e];do{s++,n=e+"-"+s}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=s,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class M{constructor(e){this.options=e||r,this.options.renderer=this.options.renderer||new O,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new D,this.slugger=new U}static parse(e,t){return new M(t).parse(e)}static parseInline(e,t){return new M(t).parseInline(e)}parse(e,t=!0){let n,s,r,i,l,o,a,c,h,p,u,f,d,k,x,m,b,w,y,_="";const z=e.length;for(n=0;n<z;n++)if(p=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(y=this.options.extensions.renderers[p.type].call({parser:this},p),!1!==y||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type)))_+=y||"";else switch(p.type){case"space":continue;case"hr":_+=this.renderer.hr();continue;case"heading":_+=this.renderer.heading(this.parseInline(p.tokens),p.depth,g(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":_+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",a="",i=p.header.length,s=0;s<i;s++)a+=this.renderer.tablecell(this.parseInline(p.header[s].tokens),{header:!0,align:p.align[s]});for(c+=this.renderer.tablerow(a),h="",i=p.rows.length,s=0;s<i;s++){for(o=p.rows[s],a="",l=o.length,r=0;r<l;r++)a+=this.renderer.tablecell(this.parseInline(o[r].tokens),{header:!1,align:p.align[r]});h+=this.renderer.tablerow(a)}_+=this.renderer.table(c,h);continue;case"blockquote":h=this.parse(p.tokens),_+=this.renderer.blockquote(h);continue;case"list":for(u=p.ordered,f=p.start,d=p.loose,i=p.items.length,h="",s=0;s<i;s++)x=p.items[s],m=x.checked,b=x.task,k="",x.task&&(w=this.renderer.checkbox(m),d?x.tokens.length>0&&"paragraph"===x.tokens[0].type?(x.tokens[0].text=w+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&"text"===x.tokens[0].tokens[0].type&&(x.tokens[0].tokens[0].text=w+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:w}):k+=w),k+=this.parse(x.tokens,d),h+=this.renderer.listitem(k,b,m);_+=this.renderer.list(h,u,f);continue;case"html":_+=this.renderer.html(p.text);continue;case"paragraph":_+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(h=p.tokens?this.parseInline(p.tokens):p.text;n+1<z&&"text"===e[n+1].type;)p=e[++n],h+="\n"+(p.tokens?this.parseInline(p.tokens):p.text);_+=t?this.renderer.paragraph(h):h;continue;default:{const e='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return _}parseInline(e,t){t=t||this.renderer;let n,s,r,i="";const l=e.length;for(n=0;n<l;n++)if(s=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(r=this.options.extensions.renderers[s.type].call({parser:this},s),!1!==r||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)))i+=r||"";else switch(s.type){case"escape":i+=t.text(s.text);break;case"html":i+=t.html(s.text);break;case"link":i+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break;case"image":i+=t.image(s.href,s.title,s.text);break;case"strong":i+=t.strong(this.parseInline(s.tokens,t));break;case"em":i+=t.em(this.parseInline(s.tokens,t));break;case"codespan":i+=t.codespan(s.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(s.tokens,t));break;case"text":i+=t.text(s.text);break;default:{const e='Token with "'+s.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i}}function B(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"===typeof t&&(n=t,t=null),R(t=$({},B.defaults,t||{})),n){const r=t.highlight;let i;try{i=Z.lex(e,t)}catch(s){return n(s)}const l=function(e){let l;if(!e)try{t.walkTokens&&B.walkTokens(i,t.walkTokens),l=M.parse(i,t)}catch(s){e=s}return t.highlight=r,e?n(e):n(null,l)};if(!r||r.length<3)return l();if(delete t.highlight,!i.length)return l();let o=0;return B.walkTokens(i,(function(e){"code"===e.type&&(o++,setTimeout((()=>{r(e.text,e.lang,(function(t,n){if(t)return l(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),o--,0===o&&l()}))}),0))})),void(0===o&&l())}try{const n=Z.lex(e,t);return t.walkTokens&&B.walkTokens(n,t.walkTokens),M.parse(n,t)}catch(s){if(s.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+p(s.message+"",!0)+"</pre>";throw s}}B.options=B.setOptions=function(e){var t;return $(B.defaults,e),t=B.defaults,r=t,B},B.getDefaults=s,B.defaults=r,B.use=function(...e){const t=$({},...e),n=B.defaults.extensions||{renderers:{},childTokens:{}};let s;e.forEach((e=>{if(e.extensions&&(s=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=n.renderers?n.renderers[e.name]:null;n.renderers[e.name]=t?function(...n){let s=e.renderer.apply(this,n);return!1===s&&(s=t.apply(this,n)),s}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");n[e.level]?n[e.level].unshift(e.tokenizer):n[e.level]=[e.tokenizer],e.start&&("block"===e.level?n.startBlock?n.startBlock.push(e.start):n.startBlock=[e.start]:"inline"===e.level&&(n.startInline?n.startInline.push(e.start):n.startInline=[e.start]))}e.childTokens&&(n.childTokens[e.name]=e.childTokens)}))),e.renderer){const n=B.defaults.renderer||new O;for(const t in e.renderer){const s=n[t];n[t]=(...r)=>{let i=e.renderer[t].apply(n,r);return!1===i&&(i=s.apply(n,r)),i}}t.renderer=n}if(e.tokenizer){const n=B.defaults.tokenizer||new I;for(const t in e.tokenizer){const s=n[t];n[t]=(...r)=>{let i=e.tokenizer[t].apply(n,r);return!1===i&&(i=s.apply(n,r)),i}}t.tokenizer=n}if(e.walkTokens){const n=B.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),n&&n.call(this,t)}}s&&(t.extensions=n),B.setOptions(t)}))},B.walkTokens=function(e,t){for(const n of e)switch(t.call(B,n),n.type){case"table":for(const e of n.header)B.walkTokens(e.tokens,t);for(const e of n.rows)for(const n of e)B.walkTokens(n.tokens,t);break;case"list":B.walkTokens(n.items,t);break;default:B.defaults.extensions&&B.defaults.extensions.childTokens&&B.defaults.extensions.childTokens[n.type]?B.defaults.extensions.childTokens[n.type].forEach((function(e){B.walkTokens(n[e],t)})):n.tokens&&B.walkTokens(n.tokens,t)}},B.parseInline=function(e,t){if("undefined"===typeof e||null===e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");R(t=$({},B.defaults,t||{}));try{const n=Z.lexInline(e,t);return t.walkTokens&&B.walkTokens(n,t.walkTokens),M.parseInline(n,t)}catch(n){if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+p(n.message+"",!0)+"</pre>";throw n}},B.Parser=M,B.parser=M.parse,B.Renderer=O,B.TextRenderer=D,B.Lexer=Z,B.lexer=Z.lex,B.Tokenizer=I,B.Slugger=U,B.parse=B;B.options,B.setOptions,B.use,B.walkTokens,B.parseInline,M.parse,Z.lex},4045:function(e,t,n){e.exports=n(6071)},6071:function(e,t,n){"use strict";var s=n(3038),r=n(862);t.default=void 0;var i=r(n(7294)),l=n(1689),o=n(2441),a=n(5749),c={};function h(e,t,n,s){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,n,s).catch((function(e){0}));var r=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),r=n&&n.asPath||"/",p=i.default.useMemo((function(){var t=(0,l.resolveHref)(r,e.href,!0),n=s(t,2),i=n[0],o=n[1];return{href:i,as:e.as?(0,l.resolveHref)(r,e.as):o||i}}),[r,e.href,e.as]),u=p.href,g=p.as,f=e.children,d=e.replace,k=e.shallow,x=e.scroll,m=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var b=i.Children.only(f),w=b&&"object"===typeof b&&b.ref,y=(0,a.useIntersection)({rootMargin:"200px"}),_=s(y,2),z=_[0],$=_[1],S=i.default.useCallback((function(e){z(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,z]);(0,i.useEffect)((function(){var e=$&&t&&(0,l.isLocalURL)(u),s="undefined"!==typeof m?m:n&&n.locale,r=c[u+"%"+g+(s?"%"+s:"")];e&&!r&&h(n,u,g,{locale:s})}),[g,u,$,m,t,n]);var v={ref:S,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,s,r,i,o,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=s.indexOf("#")<0),t[r?"replace":"push"](n,s,{shallow:i,locale:a,scroll:o}))}(e,n,u,g,d,k,x,m)},onMouseEnter:function(e){(0,l.isLocalURL)(u)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),h(n,u,g,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var R="undefined"!==typeof m?m:n&&n.locale,T=n&&n.isLocaleDomain&&(0,l.getDomainLocale)(g,R,n&&n.locales,n&&n.domainLocales);v.href=T||(0,l.addBasePath)((0,l.addLocale)(g,R,n&&n.defaultLocale))}return i.default.cloneElement(b,v)};t.default=p},5749:function(e,t,n){"use strict";var s=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,a=(0,r.useRef)(),c=(0,r.useState)(!1),h=s(c,2),p=h[0],u=h[1],g=(0,r.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||p||e&&e.tagName&&(a.current=function(e,t,n){var s=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var s=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:r,elements:s}),n}(n),r=s.id,i=s.observer,l=s.elements;return l.set(e,t),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),o.delete(r))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[n,t,p]);return(0,r.useEffect)((function(){if(!l&&!p){var e=(0,i.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[p]),[g,p]};var r=n(7294),i=n(8391),l="undefined"!==typeof IntersectionObserver;var o=new Map}}]);