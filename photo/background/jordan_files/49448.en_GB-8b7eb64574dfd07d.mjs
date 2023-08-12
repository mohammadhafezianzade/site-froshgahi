(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[49448],{618365:(e,i,t)=>{t.d(i,{Z:()=>y});var s=t(667294),n=t(782677),a=t(883119),o=t(904062),r=t(303741),d=t(434012),l=t(376410),c=t(148477),h=t(462120),u=t(377459),_=t(550898),p=t(785893);const g=e=>({duration:5e3,thumbnail:(0,p.jsx)(a.xu,{"data-test-id":"pin-save-toast",width:48,height:48,children:(0,p.jsx)(_.Z,{boardId:e})})});var v=t(898524),m=t(578662);function b({boardId:e,hideToast:i,pinId:t,originalPinId:s}){const n=(0,d.ZP)(),o=(0,m.Z)();return(0,p.jsx)(v.ZP,{primaryAction:{accessibilityLabel:n.bt("Change saved Pin button", "Change saved Pin button", "RepinRequest.a11yChangeButton", undefined, true),href:`/pin/${t}/repin/?isEditingPin=true&pinBoardId=${null!=e?e:""}&&isFromToast=true&&originalPinId=${null!=s?s:""}`,label:n.bt("Change", "Change", "RepinRequest.ChangeButton", undefined, true),size:"lg",onClick:i},duration:5e3,onHide:i,text:(0,p.jsxs)(a.xv,{children:[(0,p.jsx)(a.xv,{inline:!0,children:n.bt("Saved to ", "Saved to ", "RepinRequest.ProfileSaveToastText", undefined, true)}),(0,p.jsx)(a.xv,{inline:!0,weight:"bold",children:(0,p.jsx)(a.rU,{display:"inlineBlock",href:o.isAuth?`/${o.username}/_saved`:"/",target:"self",underline:"hover",children:n.bt("Profile", "Profile", "RepinRequest.ProfileSaveToastText.Profile", undefined, true)})})]}),thumbnail:{icon:(0,p.jsx)(a.JO,{accessibilityLabel:n.bt("Profile", "Profile", "RepinRequest.ProfileIcon", undefined, true),icon:"history",size:22})}})}var P=t(768568),f=t(516841);const I="RepinResource",x=({board:e,section:i})=>{const t=(0,d.ZP)(),n="quick_saves"===(null==e?void 0:e.layout)?t.bt("Profile", "Profile", "EditPin.Quicksaves.BoardName", undefined, true):e.name;return i?(0,l.nk)(t.bt("Saved to {{sectionName}} in {{boardName}}", "Saved to {{sectionName}} in {{boardName}}", "Toast for successfully saving to a section within a board", undefined, true),{sectionName:i&&i.title,boardName:e.name}).join(""):(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)(a.xv,{color:"default",children:t.bt("Saved to", "Saved to", "Saved to {{ boardName }}", undefined, true)}),(0,p.jsx)(a.xv,{color:"default",weight:"bold",children:n})]})};class y{constructor({boardId:e,dispatch:i,history:t,isOneTapSave:s=!1,isQuickSave:a=!1,onSuccess:o,onUndo:r,originalPinId:d,pinId:l,section:c,showNewUserSavetoProfileAnimation:u=!1,showRepinToasts:_,trackingParams:p,userId:g,viewType:v,historyPush:m,suggestedBoardIds:b,savePinId:P,pinData:{trackingParams:x,viewParameter:y,pinnedToBoardId:T}}){var S,w,A;A=e=>(0,n.Fv)(e.resource_response.data,f.Z[I]),(w="_getNormalizedResponse")in(S=this)?Object.defineProperty(S,w,{value:A,enumerable:!0,configurable:!0,writable:!0}):S[w]=A,this.boardId=e,this.trackingParams=p,this.clientTrackingParams=(0,h.Z)(p.clientTrackingParams||"",x),this.dispatch=i,this.history=t,this.onSuccess=o,this.onUndo=r,this.originalPinId=d,this.pinId=l,this.pinnedToBoardId=p.pinnedToBoardId||(null!=T?T:""),this.showNewUserSavetoProfileAnimation=u,this.showRepinToasts=_,this.section=c,this.isOneTapSave=s,this.isQuickSave=a,this.userId=g,this.viewType=null!=v?v:3,this.historyPush=m,this.suggestedBoardIds=b,this.savePinId=P,this.pinViewParameter=y}get resourceOptions(){var e;return{pin_id:this.pinId,board_id:this.boardId,section:null===(e=this.section)||void 0===e?void 0:e.id,clientTrackingParams:this.clientTrackingParams,user_id:this.userId}}get trackingData(){return{event_type:5,element:this.isOneTapSave?10599:void 0,view_type:this.viewType,component:this.isOneTapSave?0:7,view_parameter:this.isOneTapSave?3173:this.pinViewParameter,object_id_str:this.pinId,clientTrackingParams:this.clientTrackingParams,aux_data:{board_id:this.pinnedToBoardId,destination_board_id:this.boardId,is_profile_save:!this.boardId,pin_id:this.pinId,suggested_boards:this.suggestedBoardIds}}}_createRepin(){return o.Z.create(I,{...this.resourceOptions,disable_event_log_info:!0}).callCreate()}processRepin(e){return this._createRepin().then((i=>{this.onSuccess&&this.onSuccess();const t=i.resource_response.data,{board:s}=t,{isQuickSave:n,originalPinId:o,showNewUserSavetoProfileAnimation:l}=this,h=({hideToast:e})=>{var i;if(n&&!l)return(0,p.jsx)(b,{hideToast:e,pinId:t.id,boardId:t.board.id,originalPinId:o});const{thumbnail:r}=g(s.id);return(0,p.jsx)(u.Z,{button:(0,p.jsx)(d.oz,{children:e=>(0,p.jsx)(a.zx,{fullWidth:!0,onClick:({event:i})=>{i.preventDefault(),i.stopPropagation();const{onUndo:n}=this;var a;n&&!l?n(this.pinId,t.id,s.id,null===(a=this.section)||void 0===a?void 0:a.id,e):l&&this.historyPush(`/pin/${t.id}/repin/?isEditingPin=true&pinBoardId=${s.id}&&isFromToast=true&&originalPinId=${null!=o?o:""}`)},text:l?e.bt("Organise", "Organize", "RepinRequest.OrganizeButton", undefined, true):e.bt("Undo", "Undo", "RepinRequest.UndoButton", undefined, true)})}),href:this.section?`${s.url}${null!==(i=this.section.slug)&&void 0!==i?i:""}`:s.url,isRepinToExistingBoard:!0,onHide:e,text:(0,p.jsx)(x,{board:s,section:this.section}),thumbnail:r})},_=this._getNormalizedResponse(i);if(this.dispatch((0,c.XM)(I,this.resourceOptions,i,_)),this.savePinId(this.resourceOptions.pin_id,t.id),this.originalPinId&&this.originalPinId!==this.resourceOptions.pin_id){const e={...this.resourceOptions,pin_id:this.originalPinId};this.dispatch((0,c.XM)(I,e,i,_)),this.savePinId(this.originalPinId||"",t.id)}this.dispatch((0,P.M)(t.id,s.id,this.section?this.section.id:void 0,this.userId));const{showRepinToasts:v}=this;return v&&v(h),this.dispatch((0,r.fO)({event_type:5})),e(this.trackingData),t}))}}},462120:(e,i,t)=>{function s(e,i){return e||(i?`${null!=i?i:""}~0`:"~0")}t.d(i,{Z:()=>s})},410152:(e,i,t)=>{t.d(i,{Hn:()=>h,Jw:()=>g,L7:()=>s,Qc:()=>n,Tt:()=>m,UF:()=>l,UV:()=>o,W1:()=>a,Ws:()=>u,ZW:()=>d,cK:()=>v,cy:()=>p,o4:()=>_,tr:()=>c,vF:()=>r});const s=1,n=2,a="female",o="male",r="unspecified",d="en-US",l="US",c=3,h="has_done_closeup",u="Gender",_="InterestPicker",p="LoadingStep",g="AppInstall",v={NUX_GENDER_STEP_NAME:u,NUX_INTEREST_PICKER_STEP_NAME:_,NUX_LOADING_STEP_NAME:p,NUX_APP_INSTALL_STEP_NAME:g},m=2500},377459:(e,i,t)=>{t.d(i,{Z:()=>z});var s=t(667294),n=t(376030),a=t(883119),o=t(434012),r=t(640003),d=t(278286),l=t(396681),c=t(785893);function h({addedStyles:e,button:i,headerText:t,icon:n,iconOverride:o,minHeight:r,subHeaderText:d}){return(0,c.jsx)(a.xu,{display:"flex",justifyContent:"center",width:"100vw",paddingX:2,children:(0,c.jsxs)(a.xu,{alignContent:"center",alignItems:"center",bottom:!0,color:"default",dangerouslySetInlineStyle:{__style:{boxShadow:"0 3px 6px rgba(0,0,0,0.18)",transform:"translateY(-20px)",...e}},display:"flex",minHeight:r||75,padding:6,position:"relative",rounding:4,width:"100%",children:[(()=>{const e=o||(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(l.Z,{unsafeCSS:"\n@keyframes baseEduToastIconScale {\n  0% {\n    transform: scale(0)\n  }\n  30% {\n    transform: scale(1.2);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n"}),(0,c.jsx)(a.xu,{alignItems:"center",color:"education","data-test-id":"pin-save-toast",direction:"column",dangerouslySetInlineStyle:{__style:{animation:"baseEduToastIconScale 3s"}},display:"flex",height:60,justifyContent:"center",minHeight:60,minWidth:60,rounding:"circle",width:60,children:(0,c.jsx)(a.JO,{accessibilityLabel:n.accessibilityLabel,color:n.color,dangerouslySetSvgPath:n.dangerouslySetSvgPath,icon:n.icon,inline:n.inline,size:n.size})})]});return(0,c.jsx)(a.xu,{marginEnd:4,children:e})})(),(0,c.jsxs)(a.xu,{marginEnd:"auto",children:[(0,c.jsx)(a.xv,{color:"default",weight:"bold",children:t}),!!d&&(0,c.jsx)(a.xu,{paddingY:1,children:(0,c.jsx)(a.xv,{size:"300",color:"default",children:d})})]}),(0,c.jsx)(a.xu,{display:"flex",flex:"shrink",marginStart:2,children:i})]})})}var u=t(764644);function _(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const p=(e,i)=>(e-i)/2,g=200,v=68,m=p(v,68),b=p(v,66),P=p(v,60),f="cubicBezier(0.25, 0.1, 0.25, 1)",I="encourageToastIconContainer",x="encourageToastIconRadiateBg",y="encourageToastIconRadiateRing",T={targets:`#${I}`,duration:300,scale:1.4,easing:f},S={targets:`#${I}`,duration:300,scale:1,easing:f,endDelay:1e3},w={targets:`#${I}`,duration:300,scale:.42,easing:f},A={targets:`#${x}`,duration:400,opacity:0,scale:1.6,easing:f},j={targets:`#${y}`,duration:650,opacity:0,scale:2,easing:f};function R({hiding:e,visible:i}){return i?e?{opacity:0,transform:"scale(1.0)",transition:"opacity transform .2s"}:{opacity:1,transition:"all 0.7s cubic-bezier(.19, 1.15, .48, 1)"}:Object.freeze({})}class k extends s.PureComponent{constructor(...e){super(...e),_(this,"delayTimer",null),_(this,"requestAnimationFrameId",null),_(this,"playAnimation",(()=>{this.requestAnimationFrameId=window.requestAnimationFrame((()=>{(0,n.Z)(A),(0,n.Z)(j),(0,n.Z)(T).finished.then((()=>{(0,n.Z)(S).finished.then((()=>{n.Z.set(`#${I}`,{transformOrigin:"top right"}),(0,n.Z)(w)}))}))}))})),_(this,"getHeaderText",(()=>{const{text:e}=this.props;return Array.isArray(e)?e[0]:e})),_(this,"getIconProps",(()=>({accessibilityLabel:this.props.i18n.bt("Tick icon", "Check icon", "Label for check icon on toast shown after board create", undefined, true),color:"inverse",icon:"check",size:30}))),_(this,"getSubHeaderText",(()=>{const{text:e}=this.props;return e instanceof Array&&e.length>1&&e[1]?e[1]:""})),_(this,"renderAnimatedIcon",(()=>(0,c.jsxs)(a.xu,{height:v,position:"relative",width:v,children:[(0,c.jsx)(a.xu,{"data-test-id":"pin-save-toast",width:60,height:60,overflow:"hidden",position:"absolute",rounding:4,dangerouslySetInlineStyle:{__style:{left:`${P}px`,top:`${P}px`}},children:this.props.thumbnail}),(0,c.jsxs)(a.xu,{id:I,height:v,width:v,dangerouslySetInlineStyle:{__style:{transform:"scale(0)"}},position:"absolute",children:[(0,c.jsx)(a.xu,{color:"infoBase",id:x,width:68,height:68,position:"absolute",rounding:"circle",dangerouslySetInlineStyle:{__style:{left:`${m}px`,top:`${m}px`,transform:"scale(0)"}}}),(0,c.jsx)(a.xu,{id:y,width:66,height:66,position:"absolute",rounding:"circle",opacity:1,dangerouslySetInlineStyle:{__style:{borderWidth:"2px",borderStyle:"solid",borderColor:"#0074e8",left:`${b}px`,top:`${b}px`,transform:"scale(0)"}}}),(0,c.jsx)(a.xu,{alignItems:"center",color:"infoBase",direction:"column",display:"flex",height:v,justifyContent:"center",minHeight:v,minWidth:v,position:"absolute",rounding:"circle",width:v,children:(0,c.jsx)(a.JO,{accessibilityLabel:this.props.i18n.bt("Tick icon", "Check icon", "Label for check icon on toast shown after board create", undefined, true),color:"inverse",icon:"check",size:30})})]})]})))}componentDidMount(){this.delayTimer=setTimeout(this.playAnimation,700)}componentWillUnmount(){this.delayTimer&&clearTimeout(this.delayTimer),this.requestAnimationFrameId&&window.cancelAnimationFrame(this.requestAnimationFrameId)}render(){const{isRepinToExistingBoard:e,button:i}=this.props,t=e;return(0,c.jsx)(h,{button:i,headerText:this.getHeaderText(),icon:this.getIconProps(),iconOverride:t?void 0:this.renderAnimatedIcon(),subHeaderText:this.getSubHeaderText()})}}function z(e){const{duration:i,onHide:t}=e,n=(0,o.ZP)(),[l,h]=(0,s.useState)(!1),[_,p]=(0,s.useState)(!1),v=(0,s.useRef)(),m=()=>{h(!0),v.current=setTimeout(t,g)},b=()=>{v.current&&clearTimeout(v.current)};(0,d.Z)((()=>(setTimeout((()=>p(!0)),100),v.current=setTimeout(m,i||u.w),b)));let P=(0,c.jsx)(k,{...e,i18n:n});return e.href&&(P=(0,c.jsx)(a.rU,{href:e.href,onClick:m,rounding:"pill",tapStyle:"none",children:P})),(0,c.jsx)(r.Z,{children:(0,c.jsx)(a.mh,{children:(0,c.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{...R({hiding:l,visible:_})}},justifyContent:"center",position:"fixed",width:"100%",display:"flex",zIndex:u.k,children:P})})})}},405165:(e,i,t)=>{t.d(i,{Z:()=>r});var s=t(702664),n=t(708798),a=t(410152),o=t(457762);function r(){const e=(0,s.useDispatch)(),{showToast:i,showOneToast:t}=(0,n.F9)();return{showToast:i,showOneToast:t,showRepinConfirmation:(t,s)=>{s||e((0,o.WF)()),setTimeout((()=>{s||e((0,o.a5)()),i(t)}),a.Tt)}}}},917833:(e,i,t)=>{t.d(i,{L:()=>r,q:()=>d});var s=t(904062),n=t(984862),a=t(122127),o=t(681679);function r(e){return i=>{const{inSelectAll:t,selectedPinIds:r,orbacSubjectId:d,source:{boardId:l,sectionId:c}}=e,h=t?"BulkEditSelectAllResource":"BulkEditResource",u={board_id:l,section_id:c,pin_ids:r,orbac_subject_id:d};return i((0,n.xQ)(l)),i((0,a.EX)({feedId:c||l,feedType:c?o.Z.BOARD_SECTION_PINS:o.Z.BOARDFEED,inverseSelection:t,itemIds:r,itemType:"pin"})),s.Z.create(h,u).callDelete()}}const d=({pinId:e,boardId:i,boardSectionId:t,clientTrackingParams:n})=>(a,o)=>{const r=s.Z.create("PinResource",{id:e,client_tracking_params:n}).callDelete(),{session:{userId:d}}=o();return a(((e,i,t,s)=>({type:"PIN_DELETE",payload:{pinId:e,boardId:i,boardSectionId:t,userId:s}}))(e,i,t,d)),r}},347127:(e,i,t)=>{t.d(i,{w:()=>o});var s=t(122127),n=t(618365),a=t(89997);const o=({pinId:e,boardId:i,i18n:t,isQuickSave:o,logContextEvent:r,onSuccess:d,onUndo:l,originalPinId:c,showNewUserSavetoProfileAnimation:h,showRepinConfirmation:u,showToast:_,section:p,trackingParams:g,isOneTapSave:v,viewType:m,historyPush:b,suggestedBoardIds:P,savePinId:f})=>(I,x)=>{var y,T,S,w,A,j,R,k,z;const{pins:E,session:O,feeds:N}=x(),B=E[e];i&&((null===(y=null!==(T=null==B?void 0:B.shopping_flags)&&void 0!==T?T:[])||void 0===y?void 0:y.length)>0||null!=B&&B.rich_summary&&(null===(S=null!==(w=null==B||null===(A=B.rich_summary)||void 0===A?void 0:A.products)&&void 0!==w?w:[])||void 0===S?void 0:S.length)>0)&&(N[`board-shop-saved-preview:${i}`]&&I((0,s.Qv)(`board-shop-saved-preview:${i}`,[B],{isPrepend:!0})),N[`board-shop-saved:${i}`]&&I((0,s.Qv)(`board-shop-saved:${i}`,[B],{isPrepend:!0})));return new n.Z({boardId:i,dispatch:I,i18n:t,isLegoSaveStyle:!0,isOneTapSave:v,isQuickSave:o,onSuccess:d,onUndo:l,originalPinId:c,pinId:B.id,section:p,showNewUserSavetoProfileAnimation:h,showRepinToasts:e=>u?u(e):_?_(e):void 0,trackingParams:g,userId:O.userId,viewType:m,historyPush:b,suggestedBoardIds:P,savePinId:f,pinData:{trackingParams:B.tracking_params,viewParameter:(0,a.A)({hasRichMetadata:!!B.rich_metadata,hasRichMetadataProducts:!(null===(j=B.rich_metadata)||void 0===j||!j.products),hasRichMetadataArticle:!(null===(R=B.rich_metadata)||void 0===R||!R.article),hasRichMetadataRecipe:!(null===(k=B.rich_metadata)||void 0===k||!k.recipe)}),pinnedToBoardId:null===(z=B.pinned_to_board)||void 0===z?void 0:z.id}}).processRepin(r)}},89997:(e,i,t)=>{t.d(i,{A:()=>s});const s=({hasRichMetadata:e,hasRichMetadataProducts:i,hasRichMetadataArticle:t,hasRichMetadataRecipe:s})=>e?i?144:t?141:s?145:139:140},764644:(e,i,t)=>{t.d(i,{k:()=>o,w:()=>a});var s=t(883119),n=t(840209);const a=2e3,o=new s.H3([n.Z])}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/49448.en_GB-8b7eb64574dfd07d.mjs.map