(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[43084],{158645:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(935057);const a=/\/today\/(article|best|trending)\/[\w-]+\/(\d+)/,i=/\/discover\/article\/[\w-]+\/(\d+)/,s=(e,r)=>r?e.substring(r.length).split("/")[0]:e,o=({boardUrl:e,path:r,pinId:t,pinnerUserName:o,query:c,search:l,storyPinDataId:d})=>{var u,p;if(!r)return"";let m="";switch(r){case"/":case"/homefeed/":return"UserHomefeedResource";case o&&`/${o}/pins/`:return"UserPinsResource";case o&&`/${o}/`:case/\/_activity\//.test(r)&&r:return"UserActivityPinsResource";case/\/_created\//.test(r)&&r:return d?"UserStoryPinsFeedResource":"UserActivityPinsResource";case/\/_community\//.test(r)&&r:return"UserDiscoveredPinsResource";case/\/_shop\//.test(r)&&r:return"StoreFrontFeedResource";case/\/_saved\//.test(r)&&r:return"BoardlessPinsResource";case o&&`/${o}/_shopping_list/`:return"ShoppingListFeedResource";case/\/visual-search\//.test(r)&&r:return"VisualLiveSearchResource";case/\/pin\//.test(r)&&r:m="/pin/";const _=s(r,m);if(t!==_)return`RelatedPinFeedResource_${_}`;break;case/\/search\//.test(r)&&r:if(l){return`SearchResource_${((0,n.mB)(l,{shouldDecode:!1}).q||"").toLowerCase()}`}if(c)return`SearchResource_${encodeURIComponent(c.q||"").toLowerCase()}`;break;case i.test(r)&&r:return`ExploreArticleResource_${(null===(u=r.match(i))||void 0===u?void 0:u[2])||"unknown"}`;case/\/discover\/article\//.test(r)&&r:m="/discover/article/";return`ExploreArticleResource_${s(r,m)}`;case/\/categories\//.test(r)&&r:m="/categories/";return`CategoryFeedResource_${s(r,m)}`;case/\/discover\/topics\//.test(r)&&r:return"CategoryFeedResource";case/\/news_hub\//.test(r)&&r:m="/news_hub/";return`NewsHubDetailsResource_${s(r,m)}`;case/\/_tools\/more-ideas\//.test(r)&&r:return"BoardContentRecommendationResource";case/\/topics\//.test(r)&&r:m="/topics/";return`TopicFeedResource_${s(r,m)}`;case o&&`/${o}/products/`:return"StoreFrontFeedResource";case/\/source\//.test(r)&&r:m="/source/";return`DomainFeedResource_${s(r,m)}`;case/\/explore\//.test(r)&&r:m="/explore/";return`SearchResource_${s(r,m)}`;case e:case!!e&&/\/more_ideas\//.test(r)&&r:return"BoardFeedResource";case e&&r.indexOf(e)>-1&&r:return"BoardSectionPinsResource";case/\/following\//.test(r)&&r:return"FollowingFeedResource";case/\/brand_catalog\//.test(r)&&r:return"BrandCatalogFeedResource";case a.test(r)&&r:return`TodayArticleFeedResource_${(null===(p=r.match(a))||void 0===p?void 0:p[2])||"unknown"}`;case/\/today\//.test(r):return"TodayTabResource";case/\story_feed\//.test(r)&&r:if(l){const{feed_type:e,request_params:r}=(0,n.mB)(l);return`StoryFeedResource_${e}_${r}`}}return""},c=({boardUrl:e,location:r,pinId:t,pinnerUserName:n,previousHistory:a,storyPinDataId:i,trackingParams:s,trackingParamsMap:c={}})=>{if(!t||!s||!r)return;if(!c)return`${null!=s?s:""}~0`;const{pathname:l,search:d,query:u}=r,p=o({boardUrl:e,path:l,pinId:t,pinnerUserName:n,query:u,search:d,storyPinDataId:i,trackingParams:s,trackingParamsMap:c}),m=Object.keys(c);let _;if((l||"").startsWith("/pin/")){const e=m.find((e=>"PinResource"!==e));_=e?c[e]:c.PinResource}else _=c[p];let h;if(!_&&a&&a.length){const r=(e=>{let r=null==e?void 0:e.pathname;return r?(r.match(/\/search\//)&&null!=e&&e.search&&(r+=e.search),r.toLowerCase()):""})(a[a.length-1].location);h=o({boardUrl:e,path:r,pinId:t,pinnerUserName:n,query:u,search:d,storyPinDataId:i,trackingParams:s,trackingParamsMap:c}),_=c[h]}return _||(_=`${s||""}~0`),_}},691546:(e,r,t)=>{t.d(r,{Se:()=>k,iw:()=>v,gV:()=>h,G3:()=>b,Gj:()=>P,Jd:()=>_,$3:()=>g});var n=t(512703),a=t(7125),i=t(895799),s=t(162474),o=t(617518);const c=e=>"string"!=typeof e&&e?e.state:null;var l=t(383443),d=t(374264),u=t(856255),p=t(585681),m=t(977362);const _=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:r})=>!e&&(r.metaKey||r.ctrlKey),g=({location:e,pinId:r,surface:t})=>!!t&&!m.ZF.includes(t)||e.pathname.includes(r),k=(e,r)=>{var t,n;const s=Math.round(1e3*Math.random())+"",o=Math.round(1e3*Math.random())+"";a.t8((0,i.GS)(s),o);const c={token:`${s}-${o}`,url:e,...r&&!r.params?r.queryParams:{pin:null!==(t=null==r?void 0:r.params.pinId)&&void 0!==t?t:void 0,csr:null==r||!r.params.csrId||null!==(n=r.params)&&void 0!==n&&n.pinId?void 0:r.params.csrId,client_tracking_params:null==r?void 0:r.params.clientTrackingParams,aux_data:null!=r&&r.params.auxData?JSON.stringify(r.params.auxData):void 0}};return`/offsite/?${(0,l.Z)(c)}`},P=(e,r)=>{(0,n.Z)(k(e,r),!0)},v=async({clientTrackingParams:e,href:r,isMounted:t,pinId:n,spamCheckCallback:a})=>{const i=await(0,s.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:n,url:r}});if(!i.resource_response.error&&t){const e=i.resource_response.data||{},{message:r,redirect_status:t,url:n}=e;a({blocked:["blocked","suspicious","porn"].includes(t),message:r,redirectStatus:t,sanitized_url:n})}},b=({event:e,onHistoryChange:r,href:t,history:a,target:i})=>{const s=(0,o.Z)(t),l=c(t),m=(0,d.Z)(s);m===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===i?(0,n.Z)(s,"blank"===i):a&&m===p.Z.SAME_ORIGIN&&(a.push((0,u.Z)({url:s}),null!=l?l:{}),r&&r({event:e}))}},243084:(e,r,t)=>{t.d(r,{Z:()=>u,p:()=>p});var n=t(667294),a=t(616550),i=t(158645),s=t(691546),o=t(327007),c=t(617518),l=t(340289),d=t(690763);function u(e){var r,t,u;const{externalData:p,href:m,onHistoryChange:_,target:h}=e,[g,k]=(0,n.useState)(null),[P,v]=(0,n.useState)(!1),b=(0,a.useHistory)(),f=(0,a.useLocation)(),y=(0,c.Z)(m),I=(0,l.Z)({url:y}),{showWarning:w}=null!==(r=(0,d.s)())&&void 0!==r?r:{},{pin:S,surface:R}=p||{},x=S?(0,i.Z)({boardUrl:null===(t=S.board)||void 0===t?void 0:t.url,location:f,pinId:S.id,pinnerUserName:null===(u=S.pinner)||void 0===u?void 0:u.username,storyPinDataId:S.story_pin_data_id,trackingParams:S.tracking_params,trackingParamsMap:S.tracking_params_map}):null,A=(0,o.Z)();return(0,n.useEffect)((()=>(v(!0),()=>{v(!1)})),[]),(0,n.useEffect)((()=>{I&&S&&null===g&&P&&(!S.promoter||S.is_downstream_promotion)&&(0,s.$3)({location:f,pinId:S.id,surface:R})&&(0,s.iw)({clientTrackingParams:x,isMounted:P,pinId:S.id,spamCheckCallback:e=>k(e),href:y})}),[x,S,R,y,I,P,f,g]),({event:e})=>{var r;(0,s.gV)({isOffsiteUrl:I,event:e})||(e.preventDefault(),m&&(I||null!=p&&p.dangerouslyForceOffsiteUrl?A({auxData:null==p?void 0:p.auxData,clientTrackingParams:x,pin:(null==p?void 0:p.pin)&&{attributionSourceId:p.pin.attribution_source_id,campaignId:p.pin.campaign_id,isPromoted:p.pin.is_promoted,pinPromotionId:p.pin.pin_promotion_id},pinId:null==p||null===(r=p.pin)||void 0===r?void 0:r.id,queryParams:null==p?void 0:p.queryParams,showWarning:w,spamCheck:g,url:y}):(0,s.G3)({event:e,href:m,history:b,onHistoryChange:_,target:"blank"===h?"blank":null})))}}const p=({children:e,...r})=>e({handleClick:u(r)})},327007:(e,r,t)=>{t.d(r,{Z:()=>u,t:()=>d});var n=t(332507),a=t(87870),i=t(564342),s=t(545168),o=t(691546),c=t(666742),l=t(467330);const d=()=>{const{logContextEvent:e}=(0,s.v)();return({attributionSourceId:r,auxData:t,campaignId:s,clientTrackingParams:l,href:d,isPromoted:u,pinId:p,pinPromotionId:m})=>{var _;if(!u)return!1;const h=(0,n.Z)(),g=(0,o.Se)(d,{params:{pinId:p,csrId:null,clientTrackingParams:l,auxData:t}}),k=null!==(_=null==h?void 0:h.userAgent.browserName)&&void 0!==_?_:"";if((0,i.G6)(k)){var P,v;const{group:t}=null!==(P=null==h?void 0:h.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==P?P:{},n=null!=h&&null!==(v=h.userAgent)&&void 0!==v&&v.browserVersion?h.userAgent.browserVersion:"0.0",i=parseFloat(n.split(".")[0]+"."+n.split(".")[1]);if(r&&i>=14.1&&["enabled_safari"].includes(t))return((e,r,t)=>{const n=document.createElement("a");n.setAttribute("href",r),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block",n.setAttribute(a.$N.ATTRIBUTION_SOURCE_ID,e),n.setAttribute(a.$N.ATTRIBUTE_DESTINATION,t),n.setAttribute(a.$N.ATTRIBUTE_ON,t),n.click()})(r,g,d),e({event_type:101,clientTrackingParams:l,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:s||"",is_pcm:!0,attribution_source_id:r,page_url:d}}),!0}else if((0,i.i7)(k)){var b,f;const{group:t}=null!==(b=null==h?void 0:h.experimentsClient.checkExperiment("m10n_event_conversion_measurement_chrome"))&&void 0!==b?b:{},n=null!=h&&null!==(f=h.userAgent)&&void 0!==f&&f.browserVersion?parseInt(h.userAgent.browserVersion.split(".")[0],10):0;if(void 0!==r&&n>=101&&["enabled"].includes(t)){const t=null!=r?r:"0";return((e,r,t)=>{const n=new URL(`${c.C0}/attribution_source/`);n.searchParams.set(a.NR.SOURCE_EVENT_ID,e),n.searchParams.set(a.NR.DESTINATION,t),n.searchParams.set(a.NR.PRIORITY,a.NR.CLICK_PRIORITY),n.searchParams.set(a.NR.EXPIRY,a.uV),n.searchParams.set(a.NR.SOURCE_EVENT_TYPE,a.bC);const i=document.createElement("a");i.setAttribute("href",r),i.setAttribute("target","_blank"),i.setAttribute("rel","noopener nofollow noreferrer"),i.style.cursor="pointer",i.style.display="block",i.setAttribute(a.NR.SOURCE,n.toString()),i.click()})(t,g,d),e({event_type:101,clientTrackingParams:l,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:s||"",is_arapi:!0,attribution_source_id:t,page_url:d}}),!0}}return!1}},u=e=>{const r=d();return({auxData:t,clientTrackingParams:n,pin:a,pinId:i,queryParams:s,showWarning:c,spamCheck:d,url:u})=>{"undefined"!=typeof window&&window.Windows?(0,l.Z)(u,{clientTrackingParams:n,pinId:i,hasPin:!!a,auxData:t}):a||null!=e&&e.isFromClickthroughLink?null!=d&&d.blocked?null==c||c(d):a&&r({attributionSourceId:a.attributionSourceId,auxData:t,campaignId:a.campaignId?String(a.campaignId):null,clientTrackingParams:n,href:u,isPromoted:a.isPromoted,pinId:i,pinPromotionId:a.pinPromotionId?String(a.pinPromotionId):null})||(0,o.Gj)(u,{params:{pinId:i,clientTrackingParams:n,auxData:t}}):(0,o.Gj)(u,s?{queryParams:s}:{params:{pinId:i}})}}},617518:(e,r,t)=>{t.d(r,{Z:()=>n});const n=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},856255:(e,r,t)=>{t.d(r,{Z:()=>i});const n=(e,r)=>0===e.lastIndexOf(r,0);var a=t(87819);const i=({url:e})=>{const r=(0,a.Z)("/");return n(e,r)?e.substr(r.length-1):e}},467330:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(162474),a=t(691546);function i(e,r){const{auxData:t,clientTrackingParams:i,hasPin:s,pinId:o}=r||{};(0,n.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:s?i:void 0,pin_id:o,url:e,aux_data:JSON.stringify(t)}}).then((r=>{if(r&&r.resource_response&&!r.resource_response.error){const{resource_response:e}=r,{redirect_status:t,url:n}=e.data;if(!["blocked","suspicious","porn"].includes(t)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(n);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,a.Gj)(e,{params:s?{pinId:o,clientTrackingParams:i,auxData:t}:{pinId:o}})}))}},977362:(e,r,t)=>{t.d(r,{UP:()=>o,Wv:()=>a,ZF:()=>n,zI:()=>i,zl:()=>s});const n=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],a=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],i=[...a,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],s=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],o=["BaseBoardPinGrid"]},690763:(e,r,t)=>{t.d(r,{Z:()=>g,s:()=>h});var n=t(667294),a=t(946689),i=t(608575),s=t(883119),o=t(816987),c=t(434012),l=t(376410),d=t(785893);const u=()=>{var e;const r=(0,c.ZP)(),{dismissWarning:t}=null!==(e=h())&&void 0!==e?e:{};return(0,d.jsx)(s.xu,{paddingX:3,children:(0,d.jsx)(s.zx,{fullWidth:!0,color:"red",onClick:t,text:r.bt("OK", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},p=()=>{const e=(0,c.ZP)();return(0,d.jsx)(s.xv,{inline:!0,weight:"bold",children:(0,d.jsx)(s.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e.bt("Learn more", "Learn more", "Link text leading to policy website", undefined, true)})})},m=({message:e,sanitized_url:r})=>{var t;const n=(0,c.ZP)(),{dismissWarning:a}=null!==(t=h())&&void 0!==t?t:{};return(0,d.jsx)(o.ZP,{accessibilityModalLabel:n.bt("We have blocked this link", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),onDismiss:a,heading:n.bt("Heads up!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),footer:(0,d.jsx)(u,{}),children:(0,d.jsxs)(s.xu,{padding:6,children:[(0,d.jsx)(s.xv,{children:(0,l.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,d.jsx)(p,{},"learnMoreLink")})}),(0,d.jsxs)(s.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,d.jsx)(s.xu,{marginEnd:3,children:(0,d.jsx)(s.JO,{accessibilityLabel:n.bt("Blocked link address", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,d.jsx)(s.xv,{inline:!0,lineClamp:1,weight:"bold",children:i.parse(r).hostname})]})]})})},{Provider:_,useMaybeHook:h}=(0,a.Z)("SpammyClickthrough");function g({children:e}){const[r,t]=(0,n.useState)(null),a=(0,n.useCallback)((()=>{t(null)}),[t]),i=(0,n.useCallback)((e=>{t(e)}),[t]),s=(0,n.useMemo)((()=>({dismissWarning:a,showWarning:i})),[a,i]);return(0,d.jsxs)(_,{value:s,children:[r&&(0,d.jsx)(m,{...r}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/43084.en_GB-45bccd9e0d3be978.mjs.map