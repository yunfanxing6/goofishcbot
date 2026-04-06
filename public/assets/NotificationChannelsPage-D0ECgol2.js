import{a as e}from"./chunk-BEqpzyXh.js";import{m as t,s as n,t as r,u as i}from"./jsx-runtime-BzYf6QVH.js";import{t as a}from"./mail-BahPMDnW.js";import{t as o}from"./plus-ponST2rf.js";import{t as s}from"./refresh-cw-XC7cvWr9.js";import{t as c}from"./square-pen-CGuwv430.js";import{t as l}from"./trash-2-Cfbnb6xF.js";import{t as u}from"./x-CHbmzDLw.js";import{A as d,C as f,S as p,t as m,y as h}from"./index-DPy1llKY.js";import{n as g,t as _}from"./useAccountsWebSocket-C-TJXVLw.js";import{t as v}from"./modalCardClass-DZfTom1_.js";/* empty css                      */import{a as y,i as b,n as x,o as S,r as C,t as w}from"./notificationChannelsApi-Xx5ryWZl.js";/* empty css                      */var T=n(`link`,[[`path`,{d:`M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71`,key:`1cjeqo`}],[`path`,{d:`M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`,key:`19qd67`}]]),E=n(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),D=n(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),O=[{type:`dingtalk`,name:`钉钉通知`,icon:d,description:`钉钉机器人消息`},{type:`feishu`,name:`飞书通知`,icon:p,description:`飞书机器人消息`},{type:`bark`,name:`Bark通知`,icon:E,description:`iOS推送通知`},{type:`email`,name:`邮件通知`,icon:a,description:`SMTP邮件发送`},{type:`webhook`,name:`Webhook`,icon:T,description:`自定义HTTP请求`},{type:`wechat`,name:`微信通知`,icon:f,description:`企业微信机器人`},{type:`telegram`,name:`Telegram`,icon:D,description:`Telegram机器人`}];function k(e){switch(e){case`dingtalk`:case`feishu`:case`wechat`:return{webhook:``};case`bark`:return{deviceKey:``,serverUrl:`https://api.day.app`};case`email`:return{smtpHost:``,smtpPort:465,smtpUser:``,smtpPassword:``,smtpSecure:!0,fromEmail:``,toEmail:``};case`webhook`:return{url:``,method:`POST`,headers:{},bodyTemplate:`{"title":"{{title}}","content":"{{content}}"}`};case`telegram`:return{botToken:``,chatId:``};default:return{}}}var A={dingtalk:`示例（驼峰格式）：
{
  "webhook": "https://oapi.dingtalk.com/robot/send?access_token=YOUR_TOKEN"
}

或（下划线格式）：
{
  "webhook_url": "https://oapi.dingtalk.com/robot/send?access_token=YOUR_TOKEN"
}`,feishu:`示例（驼峰格式）：
{
  "webhook": "https://open.feishu.cn/open-apis/bot/v2/hook/YOUR_TOKEN"
}

或（下划线格式）：
{
  "webhook_url": "https://open.feishu.cn/open-apis/bot/v2/hook/YOUR_TOKEN"
}`,wechat:`示例（驼峰格式）：
{
  "webhook": "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=YOUR_KEY"
}

或（下划线格式）：
{
  "webhook_url": "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=YOUR_KEY"
}`,bark:`基础配置（必需）：
{
  "deviceKey": "YOUR_DEVICE_KEY",
  "serverUrl": "https://api.day.app"
}

完整配置（包含扩展参数）：
{
  "deviceKey": "YOUR_DEVICE_KEY",
  "serverUrl": "https://api.day.app",
  "title": "制造者",
  "group": "制造者",
  "sound": "alarm",
  "icon": "https://day.app/assets/images/avatar.jpg",
  "badge": 1,
  "level": "active",
  "barkUrl": "https://example.com",
  "copy": "自动复制的内容",
  "automaticallyCopy": "1",
  "isArchive": "1"
}

支持的扩展参数：
- title: 通知标题（覆盖默认标题）
- group: 通知分组标识
- sound: 提示音（如：alarm, bell等）
- icon: 图标URL（iOS 15+）
- badge: 角标数字
- level: 优先级（active/timeSensitive/passive）
- barkUrl: 点击打开的链接
- copy: 自动复制的内容
- automaticallyCopy: 是否自动复制（"1"或true）
- isArchive: 是否归档（"1"或true）`,email:`示例：
{
  "smtpHost": "smtp.example.com",
  "smtpPort": 465,
  "smtpUser": "your_email@example.com",
  "smtpPassword": "your_password",
  "smtpSecure": true,
  "fromEmail": "your_email@example.com",
  "toEmail": "recipient@example.com"
}`,webhook:`示例（驼峰格式）：
{
  "url": "https://your-webhook-url.com/api",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "bodyTemplate": "{\\"title\\":\\"{{title}}\\",\\"content\\":\\"{{content}}\\"}"
}

或（下划线格式）：
{
  "webhook_url": "https://your-webhook-url.com/api",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body_template": "{\\"title\\":\\"{{title}}\\",\\"content\\":\\"{{content}}\\"}"
}`,telegram:`示例（驼峰格式）：
{
  "botToken": "YOUR_BOT_TOKEN",
  "chatId": "YOUR_CHAT_ID"
}

或（下划线格式）：
{
  "bot_token": "YOUR_BOT_TOKEN",
  "chat_id": "YOUR_CHAT_ID"
}`},j={dingtalk:`{
  "webhook": "https://oapi.dingtalk.com/robot/send?access_token=YOUR_TOKEN"
}`,feishu:`{
  "webhook": "https://open.feishu.cn/open-apis/bot/v2/hook/YOUR_TOKEN"
}`,wechat:`{
  "webhook": "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=YOUR_KEY"
}`,bark:`{
  "deviceKey": "YOUR_DEVICE_KEY",
  "serverUrl": "https://api.day.app",
  "title": "制造者",
  "group": "制造者",
  "sound": "alarm",
  "icon": "https://day.app/assets/images/avatar.jpg",
  "barkUrl": "https://example.com"
}`,email:`{
  "smtpHost": "smtp.example.com",
  "smtpPort": 465,
  "smtpUser": "your_email@example.com",
  "smtpPassword": "your_password",
  "smtpSecure": true,
  "fromEmail": "your_email@example.com",
  "toEmail": "recipient@example.com"
}`,webhook:`{
  "url": "https://your-webhook-url.com/api",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "bodyTemplate": "{\\"title\\":\\"{{title}}\\",\\"content\\":\\"{{content}}\\"}"
}`,telegram:`{
  "botToken": "YOUR_BOT_TOKEN",
  "chatId": "YOUR_CHAT_ID"
}`};function M(e){return e?A[e]||`请填写配置信息`:``}function N(e){return e&&j[e]||`{
  "webhook": "https://..."
}`}function P(e){return O.find(t=>t.type===e)?.name||e}function F(e){return O.find(t=>t.type===e)?.icon??d}var I=e(t(),1);function L(){return{name:``,type:`dingtalk`,config:{},enabled:!0,accountId:``}}function R(){_();let e=g(e=>e.accounts),[t,n]=(0,I.useState)([]),[r,a]=(0,I.useState)(!1),[o,s]=(0,I.useState)(!1),[c,l]=(0,I.useState)(null),[u,d]=(0,I.useState)(null),[f,p]=(0,I.useState)(null),[m,h]=(0,I.useState)(null),[v,T]=(0,I.useState)(null),[E,D]=(0,I.useState)(!1),[A,j]=(0,I.useState)(``),[M,N]=(0,I.useState)(!1),[R,z]=(0,I.useState)(L()),B=(0,I.useCallback)(async()=>{a(!0);try{let e=(await C(i()))?.data;n(Array.isArray(e)?e:[])}catch(e){console.error(`[NotificationChannels] 加载失败`,e),window.alert(`无法加载通知渠道列表`),n([])}finally{a(!1)}},[]),V=(0,I.useCallback)(async()=>{await B(),g.getState().refreshAccountsAfterLoad()},[B]),H=(0,I.useCallback)(e=>{d(e),l(null);let t=k(e);z({name:O.find(t=>t.type===e)?.name||``,type:e,config:t,enabled:!0,accountId:``}),j(JSON.stringify(t,null,2)),N(!1),D(!0)},[]),U=(0,I.useCallback)(e=>{l(e),d(e.type),z({name:e.name,type:e.type,config:e.config,enabled:e.enabled,accountId:e.accountId??``}),j(JSON.stringify(e.config,null,2)),N(!1),D(!0)},[]),W=(0,I.useCallback)(()=>{D(!1),l(null),d(null),j(``),N(!1),z(L())},[]),G=(0,I.useCallback)((e,t)=>{z(n=>({...n,[e]:t}))},[]),K=(0,I.useCallback)(async()=>{if(!R.name?.trim()){window.alert(`请填写渠道名称`);return}let e;try{e=JSON.parse(A)}catch{window.alert(`配置 JSON 格式不正确，请检查后重试`);return}let t=R.accountId==null||R.accountId===``||R.accountId===`undefined`?null:R.accountId;s(!0);try{c?await S(c.id,{name:R.name.trim(),config:e,enabled:R.enabled,accountId:t},i()):await w({type:R.type,name:R.name.trim(),config:e,enabled:R.enabled,accountId:t},i()),await B(),W()}catch(e){console.error(e),window.alert(`无法保存通知渠道`)}finally{s(!1)}},[R,A,c,B,W]),q=(0,I.useCallback)(async e=>{if(window.confirm(`确定要删除通知渠道「${e.name}」吗？`)){T(e.id);try{await x(e.id,i()),await B()}catch(e){console.error(e),window.alert(`无法删除通知渠道`)}finally{T(null)}}},[B]),J=(0,I.useCallback)(async e=>{h(e.id);try{await y(e.id,i()),await B()}catch(e){console.error(e),window.alert(`无法切换通知渠道状态`)}finally{h(null)}},[B]),Y=(0,I.useCallback)(async e=>{p(e.id);try{let t=await b(e.id,i());t.success?window.alert(t.message||`测试通知已发送`):window.alert(t.message||`无法发送测试通知`)}catch(e){console.error(e),window.alert(`无法发送测试通知`)}finally{p(null)}},[]),X=(0,I.useCallback)(e=>t.filter(t=>t.type===e).length,[t]),Z=(0,I.useCallback)(e=>t.filter(t=>t.type===e&&t.enabled).length,[t]),Q=(0,I.useCallback)(t=>{if(!t)return`未关联账号`;let n=e.find(e=>e.id===t);return n&&(n.nickname||n.remark)||t},[e]);return(0,I.useEffect)(()=>{B(),g.getState().refreshAccountsAfterLoad()},[B]),{accounts:e,channels:t,loading:r,saving:o,editingChannel:c,selectedType:u,testingId:f,togglingId:m,deletingId:v,showConfigModal:E,configJson:A,setConfigJson:j,configHintExpanded:M,setConfigHintExpanded:N,formData:R,updateFormField:G,loadChannels:B,refreshChannels:V,selectChannelType:H,openEditModal:U,closeConfigModal:W,saveChannel:K,deleteChannel:q,toggleChannel:J,testChannel:Y,getChannelCount:X,getEnabledChannelCount:Z,getAccountDisplayName:Q,getChannelTypeName:P,getChannelTypeIcon:F,channelTypeCards:O}}var z=r();function B(e){let t=`focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/25`;return e===`dark`?`rounded-md border border-white/12 bg-black/25 text-slate-100 ${t}`:e===`modern`?`rounded-md border border-stone-300 bg-white text-stone-900 shadow-sm ${t}`:`rounded-md border border-slate-300 bg-white text-slate-900 shadow-sm ${t}`}function V(){let e=R(),t=m(),n=B(t),r=t===`dark`?`bg-slate-950`:t===`light`?`bg-[#fcfaf7]`:`bg-[#f5f0e6]`,i=t===`dark`?`text-slate-100`:`text-slate-900`,a=t===`dark`?`text-slate-400`:`text-slate-500`,f=e.selectedType??e.editingChannel?.type??null;return(0,z.jsxs)(`div`,{className:`notification-channels-page autosell-page flex min-h-0 flex-1 flex-col space-y-6 p-4 md:p-6 ${r} ${i}`,children:[(0,z.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h1`,{className:`text-2xl font-bold`,children:`通知渠道`}),(0,z.jsx)(`p`,{className:`mt-1 text-sm ${a}`,children:`管理消息通知渠道，支持钉钉、飞书、邮件等多种方式`})]}),(0,z.jsxs)(`button`,{type:`button`,disabled:e.loading,onClick:()=>void e.refreshChannels(),className:`as-btn as-btn-default as-btn-sm gap-1 shrink-0`,children:[(0,z.jsx)(s,{className:`h-4 w-4 shrink-0 ${e.loading?`animate-spin`:``}`}),`刷新`]})]}),(0,z.jsx)(`div`,{className:`card glass-card`,children:(0,z.jsxs)(`div`,{className:`card-body p-4 md:p-6`,children:[(0,z.jsxs)(`div`,{className:`mb-4 flex items-center gap-2`,children:[(0,z.jsx)(h,{className:`h-5 w-5 shrink-0 opacity-80`}),(0,z.jsx)(`h2`,{className:`card-title text-lg font-semibold`,children:`选择通知方式`})]}),(0,z.jsx)(`p`,{className:`notification-channels-hint mb-4 text-sm ${a}`,children:`点击下方按钮选择您要配置的通知渠道类型`}),(0,z.jsx)(`div`,{className:`flex w-full flex-nowrap gap-4 overflow-x-auto overflow-y-visible pb-2 [-webkit-overflow-scrolling:touch] xl:grid xl:grid-cols-7 xl:gap-4 xl:overflow-x-visible xl:pb-0`,children:e.channelTypeCards.map(t=>{let n=t.icon,r=e.getChannelCount(t.type),i=e.getEnabledChannelCount(t.type);return(0,z.jsxs)(`div`,{className:`channel-type-card min-w-[14rem] shrink-0 p-4 text-center transition-colors xl:min-w-0 xl:w-full xl:max-w-none`,children:[(0,z.jsx)(n,{className:`channel-type-icon mx-auto mb-2 h-8 w-8`,strokeWidth:2}),(0,z.jsx)(`h3`,{className:`channel-type-title text-sm font-medium`,children:t.name}),(0,z.jsx)(`p`,{className:`channel-type-desc mt-1 text-xs`,children:t.description}),r>0?(0,z.jsxs)(`div`,{className:`mt-3 space-y-2`,children:[(0,z.jsxs)(`button`,{type:`button`,onClick:()=>e.selectChannelType(t.type),className:`as-btn as-btn-default as-btn-sm w-full justify-center gap-1`,children:[(0,z.jsx)(o,{className:`h-3.5 w-3.5`}),`添加`]}),(0,z.jsxs)(`p`,{className:`text-xs ${a}`,children:[`已配置 `,r,` 条`,i>0?(0,z.jsxs)(`span`,{className:`text-emerald-600 dark:text-emerald-400`,children:[` `,`（`,i,` 条启用）`]}):null]})]}):(0,z.jsx)(`button`,{type:`button`,onClick:()=>e.selectChannelType(t.type),className:`as-btn as-btn-default as-btn-sm mt-3 w-full justify-center`,children:`+ 配置`})]},t.type)})})]})}),(0,z.jsx)(`div`,{className:`card glass-card`,children:(0,z.jsxs)(`div`,{className:`card-body p-4 md:p-6`,children:[(0,z.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-center gap-2`,children:[(0,z.jsx)(d,{className:`h-5 w-5 shrink-0 opacity-80`}),(0,z.jsx)(`h2`,{className:`card-title text-lg font-semibold`,children:`已配置渠道`}),(0,z.jsxs)(`span`,{className:`nc-badge-count rounded-md border px-2 py-0.5 text-xs`,children:[e.channels.length,` 条`]})]}),e.loading?(0,z.jsx)(`div`,{className:`flex justify-center py-12`,children:(0,z.jsx)(`span`,{className:`loading loading-spinner loading-lg text-primary`})}):e.channels.length===0?(0,z.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-16`,children:[(0,z.jsx)(`div`,{className:`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200/60 dark:bg-white/10`,children:(0,z.jsx)(d,{className:`h-8 w-8 opacity-40`})}),(0,z.jsx)(`p`,{className:a,children:`暂无通知渠道，点击上方卡片添加`})]}):(0,z.jsx)(`div`,{className:`space-y-3`,children:e.channels.map(t=>{let n=e.getChannelTypeIcon(t.type),r=e.togglingId===t.id||e.deletingId===t.id;return(0,z.jsxs)(`div`,{className:`notification-channel-row nc-config-row flex flex-wrap items-center gap-3 rounded-lg border p-4 transition-colors`,children:[(0,z.jsx)(`div`,{className:`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${t.enabled?`bg-orange-500/15`:`bg-slate-200/60 dark:bg-white/10`}`,children:(0,z.jsx)(n,{className:`h-5 w-5 ${t.enabled?`text-orange-600 dark:text-orange-400`:`opacity-50`}`})}),(0,z.jsxs)(`div`,{className:`min-w-0 flex-shrink-0`,children:[(0,z.jsx)(`p`,{className:`font-medium`,children:t.name}),(0,z.jsx)(`span`,{className:`badge badge-outline badge-xs mt-0.5`,children:e.getChannelTypeName(t.type)})]}),(0,z.jsx)(`div`,{className:`min-w-0 flex-1`}),(0,z.jsxs)(`span`,{className:`text-sm ${a} channel-row-account`,children:[`关联账号: `,e.getAccountDisplayName(t.accountId)]}),(0,z.jsxs)(`div`,{className:`flex flex-shrink-0 items-center gap-2`,children:[(0,z.jsx)(`button`,{type:`button`,disabled:r,onClick:()=>void e.toggleChannel(t),className:`as-btn as-btn-default as-btn-sm min-w-[3.5rem] ${t.enabled?`border-emerald-500/40 bg-emerald-500/15 text-emerald-800 dark:text-emerald-200`:``}`,children:e.togglingId===t.id?(0,z.jsx)(`span`,{className:`loading loading-spinner loading-xs`}):t.enabled?`启用`:`禁用`}),(0,z.jsx)(`button`,{type:`button`,title:`测试`,disabled:r||e.testingId===t.id,onClick:()=>void e.testChannel(t),className:`as-btn as-btn-ghost as-btn-square as-btn-sm`,children:e.testingId===t.id?(0,z.jsx)(`span`,{className:`loading loading-spinner loading-xs`}):(0,z.jsx)(D,{className:`h-4 w-4`})}),(0,z.jsx)(`button`,{type:`button`,title:`编辑`,disabled:r,onClick:()=>e.openEditModal(t),className:`as-btn as-btn-ghost as-btn-square as-btn-sm`,children:(0,z.jsx)(c,{className:`h-4 w-4`})}),(0,z.jsx)(`button`,{type:`button`,title:`删除`,disabled:r,onClick:()=>void e.deleteChannel(t),className:`as-btn as-btn-ghost as-btn-square as-btn-sm text-error`,children:e.deletingId===t.id?(0,z.jsx)(`span`,{className:`loading loading-spinner loading-xs`}):(0,z.jsx)(l,{className:`h-4 w-4`})})]})]},t.id)})})]})}),e.showConfigModal?(0,z.jsxs)(`div`,{className:`autosell-modal-root`,children:[(0,z.jsx)(`button`,{type:`button`,className:`autosell-modal-backdrop`,"aria-label":`关闭`,onClick:e.closeConfigModal}),(0,z.jsxs)(`div`,{role:`dialog`,"aria-modal":!0,"aria-labelledby":`notify-channel-modal-title`,className:`notify-modal-card flex min-h-0 flex-col overflow-hidden rounded-2xl border shadow-2xl ${v(t)}`,onClick:e=>e.stopPropagation(),children:[(0,z.jsx)(`button`,{type:`button`,className:`as-btn as-btn-ghost as-btn-circle absolute right-2 top-2 z-10`,onClick:e.closeConfigModal,"aria-label":`关闭`,children:(0,z.jsx)(u,{className:`h-4 w-4`})}),(0,z.jsxs)(`h3`,{id:`notify-channel-modal-title`,className:`flex-shrink-0 px-4 pt-4 pr-14 text-lg font-bold`,children:[e.editingChannel?`编辑`:`配置`,f?e.getChannelTypeName(f):``]}),(0,z.jsxs)(`form`,{className:`flex min-h-0 flex-1 flex-col`,onSubmit:t=>{t.preventDefault(),e.saveChannel()},children:[(0,z.jsxs)(`div`,{className:`min-h-0 flex-1 space-y-4 overflow-y-auto px-4 pb-2 pt-3`,children:[(0,z.jsxs)(`div`,{className:`form-control`,children:[(0,z.jsx)(`label`,{className:`label py-1`,children:(0,z.jsx)(`span`,{className:`label-text`,children:`关联闲鱼账号`})}),(0,z.jsxs)(`select`,{className:`w-full px-3 py-2 text-sm outline-none ${n}`,value:e.formData.accountId??``,onChange:t=>e.updateFormField(`accountId`,t.target.value),children:[(0,z.jsx)(`option`,{value:``,children:`不关联账号（全局渠道）`}),e.accounts.map(e=>(0,z.jsx)(`option`,{value:e.id,children:e.nickname||e.remark||e.id},e.id))]}),(0,z.jsx)(`label`,{className:`label py-1`,children:(0,z.jsx)(`span`,{className:`label-text-alt ${a}`,children:`选择此通知渠道关联的闲鱼账号，留空则为全局渠道`})})]}),(0,z.jsxs)(`div`,{className:`form-control`,children:[(0,z.jsx)(`label`,{className:`label py-1`,children:(0,z.jsxs)(`span`,{className:`label-text`,children:[`渠道名称 `,(0,z.jsx)(`span`,{className:`text-error`,children:`*`})]})}),(0,z.jsx)(`input`,{type:`text`,className:`w-full px-3 py-2 text-sm outline-none ${n}`,placeholder:`例如：我的钉钉通知`,value:e.formData.name,onChange:t=>e.updateFormField(`name`,t.target.value)})]}),(0,z.jsxs)(`div`,{className:`form-control`,children:[(0,z.jsx)(`label`,{className:`label py-1`,children:(0,z.jsxs)(`span`,{className:`label-text`,children:[`配置 (JSON) `,(0,z.jsx)(`span`,{className:`text-error`,children:`*`})]})}),(0,z.jsx)(`textarea`,{className:`min-h-[10rem] w-full resize-y px-3 py-2 font-mono text-xs leading-relaxed outline-none ${n}`,placeholder:N(f),value:e.configJson,onChange:t=>e.setConfigJson(t.target.value),spellCheck:!1}),(0,z.jsxs)(`details`,{className:`mt-2 rounded-lg border px-0 ${t===`dark`?`border-white/10 bg-white/[0.06]`:t===`modern`?`border-stone-200 bg-stone-50`:`border-slate-200 bg-slate-50`}`,open:e.configHintExpanded,onToggle:t=>e.setConfigHintExpanded(t.target.open),children:[(0,z.jsx)(`summary`,{className:`cursor-pointer list-none px-3 py-2 text-sm font-medium marker:content-none [&::-webkit-details-marker]:hidden`,children:`配置示例与参数说明`}),(0,z.jsx)(`div`,{className:`border-t px-3 pb-3 pt-2 font-mono text-xs leading-relaxed ${t===`dark`?`border-white/10 text-slate-300`:`border-slate-200/90 text-slate-600`}`,children:(0,z.jsx)(`p`,{className:`whitespace-pre-wrap break-words`,children:M(f)})})]})]}),(0,z.jsx)(`div`,{className:`form-control`,children:(0,z.jsxs)(`label`,{className:`label cursor-pointer justify-start gap-2 py-1`,children:[(0,z.jsx)(`input`,{type:`checkbox`,className:`checkbox checkbox-primary checkbox-sm`,checked:e.formData.enabled,onChange:t=>e.updateFormField(`enabled`,t.target.checked)}),(0,z.jsx)(`span`,{className:`label-text`,children:`启用此渠道`})]})})]}),(0,z.jsxs)(`div`,{className:`flex flex-shrink-0 justify-end gap-2 border-t px-4 py-4 ${t===`dark`?`border-white/10`:t===`modern`?`border-stone-200/90`:`border-slate-200/90`}`,children:[(0,z.jsx)(`button`,{type:`button`,onClick:e.closeConfigModal,className:`as-btn as-btn-default as-btn-sm`,children:`取消`}),(0,z.jsxs)(`button`,{type:`submit`,disabled:e.saving,className:`inline-flex min-w-[4.5rem] items-center justify-center gap-1 rounded-lg bg-[#ff6600] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#e65c00] disabled:opacity-50`,children:[e.saving?(0,z.jsx)(`span`,{className:`loading loading-spinner loading-xs`}):null,`保存`]})]})]})]})]}):null]})}export{V as NotificationChannelsPage};