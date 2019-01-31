(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){e.exports=a(254)},124:function(e,t,a){},128:function(e,t,a){},163:function(e,t,a){},166:function(e,t,a){},195:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),l=a(18),i=a.n(l),r=(a(124),a(8)),o=a(9),c=a(11),u=a(10),m=a(12),d=a(4),p=a(258),_=(a(126),a(128),"https://pothole.ml/filepond-api"),h="https://nirbhay.me/pothole-detection/#",E="https://imgnooz.com/sites/default/files/wallpaper/abstract/55480/gradient-minimal-stock-wallpapers-55480-9790200.png",b="https://pothole.ml/p.php?p=",g=a(55),f=(a(131),a(102)),k=a.n(f),v=a(103),x=a.n(v),y=a(104),j=a.n(y),O=a(105),w=a.n(O);a(133);Object(g.registerPlugin)(k.a,x.a,j.a,w.a);var N,S,I,C=[],T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onLoad=function(e){if(e.includes("Success")){var t=e.split("_");C.push(t[1]),N.state.enableNext()}},a.state={files:[""],_session_:e.session,enableNext:e.enableNext},N=Object(d.a)(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleInit",value:function(){console.log("Pothole Detection App")}},{key:"render",value:function(e){var t=this,a=this.state._session_;return s.a.createElement("div",{className:"App"},s.a.createElement(g.FilePond,{ref:function(e){return t.pond=e},allowFileSizeValidation:!0,maxFileSize:"2MB",acceptedFileTypes:["image/png","image/jpg","image/jpeg","video/mp4","video/avi"],allowMultiple:!0,labelFileProcessingComplete:"Upload Complete",maxFiles:9,allowRevert:!1,labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span><br/> <i>Acceptable file types: .png, .jpg, .jpeg, .mp4, .avi</i>',server:{url:_+"/file_upload.php?session_folder_name="+a,process:{onload:this.onLoad}},oninit:function(){return t.handleInit()},onupdatefiles:function(e){t.setState({files:e.map(function(e){return e.file})})}},this.state.files.map(function(e){return s.a.createElement(g.File,{key:e,src:e,origin:"local"})})))}}]),t}(n.Component),F=a(30),A=a.n(F),M=a(3),D=(a(15),a(116)),P=function(e){return window.innerWidth>=992?s.a.createElement("div",null,s.a.createElement(M.a,{color:"primary"},"Desktop users press enter to start, and arrow keys to play!"),s.a.createElement("br",null),s.a.createElement(D.a,{style:{width:"50px",height:"100px"}})):s.a.createElement("div",null)},L=a(39),H=function(e){return s.a.createElement(L.Terminal,null,s.a.createElement("div",null,s.a.createElement("div",{style:{display:e.loading_state}},s.a.createElement("center",null,s.a.createElement("img",{src:"https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif",height:"50px",width:"50px",alt:"spinner"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(P,null))),s.a.createElement("pre",{style:{textAlign:"left",marginLeft:"20px",color:"#fff"}},e.response),s.a.createElement(M.a,{style:{display:e.alert_display},color:"primary"},e.alert_label),s.a.createElement("a",{href:e.output_text_file_link,target:"_blank",rel:"noopener noreferrer"},e.output_text_file_label)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null))},B="https://pothole.ml/pothole_detection/pot_model/process.php?session_folder_name=",J=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={_session_:B+e.session,_session:e.session,response:"",output_generated_label:"",output_text_file_link:"",output_text_file_label:"",loading_gif_state:"inline",enableNext:e.enableNext,media_processed_label:"",alert_display:"none"};var n=Object(d.a)(Object(d.a)(a));return A.a.get(a.state._session_).then(function(e){n.setState({loading_state:"none",response:"\n"+e.data+"\n",output_generated_label:"Output Text File Generated\n",output_text_file_label:"Output Text File",output_text_file_link:_+"/uploads/"+n.state._session+"/out/"+n.state._session+".txt",media_processed_label:"Media File(s) have been Processed!",alert_display:"block"}),n.state.enableNext()}),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(M.a,{style:{display:this.state.alert_display},color:"secondary"},this.state.media_processed_label),s.a.createElement(H,{loading_state:this.state.loading_state,response:this.state.response,alert_display:this.state.alert_display,alert_label:this.state.output_generated_label,output_text_file_link:this.state.output_text_file_link,output_text_file_label:this.state.output_text_file_label}))}}]),t}(n.Component),R=(a(163),a(109)),G=a.n(R),V=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"getInnerJSX",value:function(){return"image"===this.props.data.type?(console.log(this.props.data.type),s.a.createElement("center",null,s.a.createElement("div",{style:{border:"2px solid #666666",backgroundImage:"url("+E+")"},width:365,height:365},s.a.createElement(G.a,{src:this.props.data.src,width:360,height:360,alt:this.props.data.altText})))):"video"===this.props.data.type?s.a.createElement("center",null,s.a.createElement("div",{style:{border:"2px solid #666666",backgroundImage:"url("+E+")"},width:365,height:365},s.a.createElement("video",{key:this.props.data,controls:!0,style:{verticalAlign:"middle"},autoPlay:!0},s.a.createElement("source",{src:this.props.data.src,type:"video/mp4"}),"Your browser does not support the video tag."))):void 0}},{key:"render",value:function(){return s.a.createElement("div",null,this.getInnerJSX())}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(d.a)(Object(d.a)(a))),a.previous=a.previous.bind(Object(d.a)(Object(d.a)(a))),a.goToIndex=a.goToIndex.bind(Object(d.a)(Object(d.a)(a))),a.onExiting=a.onExiting.bind(Object(d.a)(Object(d.a)(a))),a.onExited=a.onExited.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===this.props.mediaData.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?this.props.mediaData.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=this.props.mediaData.map(function(t){return s.a.createElement(M.h,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},s.a.createElement(V,{data:t}),s.a.createElement(M.e,{captionText:t.caption,captionHeader:""}))});return s.a.createElement(M.d,{activeIndex:t,next:this.next,previous:this.previous,interval:!1},s.a.createElement(M.g,{items:this.props.mediaData,activeIndex:t,onClickHandler:this.goToIndex}),a,s.a.createElement(M.f,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),s.a.createElement(M.f,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(n.Component),z=function(e){return s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("center",null,s.a.createElement("a",{href:e.add_more_link,style:{color:"#fff"},className:"btn btn-primary",role:"button"},e.button_text),s.a.createElement("br",null))))},U=(a(166),function(e){return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:e.output_text_link,download:!0,rel:"noopener noreferrer"},s.a.createElement(M.c,{color:"info"},"View Raw .txt Output")))),s.a.createElement(L.Terminal,null,s.a.createElement(M.a,{color:"primary"},".txt Output"),s.a.createElement("pre",{className:"pre-style"},e.output_text_data)),s.a.createElement("br",null))}),X=a(110),Y=a.n(X),$=function(e){return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:e.generate_json_link,download:!0,rel:"noopener noreferrer"},s.a.createElement(M.c,{color:"warning"},"View Raw .json Output")))),s.a.createElement(L.Terminal,null,s.a.createElement(M.a,{color:"primary"},".json Output"),s.a.createElement(Y.a,{src:e.output_json_data,theme:"monokai",style:{textAlign:"left"}})))},q=a(25),K=(a(195),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(M.j,null,s.a.createElement(M.l,null,s.a.createElement(M.i,{sm:"2"}),s.a.createElement(M.i,{className:"social_button"},s.a.createElement(q.Linkedin,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(M.i,{className:"social_button"},s.a.createElement(q.Twitter,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(M.i,{className:"social_button"},s.a.createElement(q.Whatsapp,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(M.i,{className:"social_button"},s.a.createElement(q.Facebook,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(M.i,{className:"social_button"},s.a.createElement(q.Reddit,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(M.i,{className:"social_button"},s.a.createElement(q.Google,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(M.i,{className:"social_button"},s.a.createElement(q.Mail,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(M.i,{className:"social_button"},s.a.createElement(q.HackerNews,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(M.i,{sm:"2"})))}}]),t}(s.a.Component)),Q=function(e){return s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement("p",null,s.a.createElement(M.a,{color:"primary"},s.a.createElement("h4",null,"Session Number",s.a.createElement("br",null),s.a.createElement(M.b,{color:"secondary"},e.session_no)),s.a.createElement("br",null),s.a.createElement(K,{share_link:e.link,message:e.message})))))},Z=function(e){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(M.a,{color:e.color},s.a.createElement("h4",null,e.alert_message,s.a.createElement("br",null)," ",s.a.createElement(M.b,{color:"secondary"},e._session)))),s.a.createElement("br",null))},ee=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={_session:e.session,get_json_link:_+"/getLinks.php?session_folder_name=",json_data_media:[],output_text_file_link:_+"/uploads/"+e.session+"/out/"+e.session+".txt",generate_json_link:_+"/generateJSON.php?session_folder_name="+e.session,generate_text_link:_+"/getTextOutput.php?session_folder_name="+e.session,json_output_data:[],text_output_data:[],share_link:b+e.session,from_shared_link:!1,add_more_link:h+"/"+e.session},a.state._session||(a.state={_session:a.props.match.params.id,get_json_link:_+"/getLinks.php?session_folder_name=",json_data_media:[],output_text_file_link:_+"/uploads/"+a.props.match.params.id+"/out/"+a.props.match.params.id+".txt",generate_json_link:_+"/generateJSON.php?session_folder_name="+a.props.match.params.id,generate_text_link:_+"/getTextOutput.php?session_folder_name="+a.props.match.params.id,json_output_data:[],text_output_data:[],share_link:b+a.props.match.params.id,from_shared_link:!0,add_more_link:h+"/"+a.props.match.params.id}),S=Object(d.a)(Object(d.a)(a)),A.a.get(a.state.get_json_link+a.state._session).then(function(e){S.setState({json_data_media:e.data})}),A.a.get(a.state.generate_text_link).then(function(e){S.setState({text_output_data:e.data})}),A.a.get(a.state.generate_json_link).then(function(e){S.setState({json_output_data:e.data})}),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"addMore",value:function(){console.log(this.add_more_link),window.location.assign(this.state.add_more_link),window.location.reload()}},{key:"checkForContinueSessionButtons",value:function(){var e=this;if(this.state.json_data_media&&this.state.json_data_media.length>0&&this.state.from_shared_link)return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement(z,{button_text:"Start Afresh",add_more_link:"https://nirbhay.me/pothole-detection"}),s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement(M.c,{color:"primary",onClick:function(){return e.addMore()}},"Add some other image(s)/video(s)"))))}},{key:"getSessionNotExistMessage",value:function(){return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement(M.j,null,s.a.createElement("center",null,s.a.createElement(Z,{session_no:this.state._session,color:"danger",alert_message:"Session Number Does Not Exist!!"}),s.a.createElement(z,{button_text:"Start Afresh",add_more_link:"https://nirbhay.me/pothole-detection"}))))}},{key:"checkAndGetOutput",value:function(){return this.state.json_data_media&&this.state.json_data_media.length>0?s.a.createElement("div",null,s.a.createElement(M.j,null,s.a.createElement(Q,{session_no:this.state._session,link:this.state.share_link,message:"Hey, view my test media for potholes detected! You can add your own to it too! Happy detecting and spreading the word!!"})),s.a.createElement(M.j,null,s.a.createElement(W,{mediaData:this.state.json_data_media})),s.a.createElement(M.j,null,s.a.createElement(M.l,null,s.a.createElement(M.i,{xs:"12",sm:"6"},s.a.createElement(U,{output_text_link:this.state.output_text_file_link,output_text_data:this.state.text_output_data})),s.a.createElement(M.i,{sm:"6"},s.a.createElement($,{generate_json_link:this.state.generate_json_link,output_json_data:this.state.json_output_data}))))):s.a.createElement("div",null,this.getSessionNotExistMessage())}},{key:"render",value:function(){return s.a.createElement("div",null,this.checkAndGetOutput(),this.checkForContinueSessionButtons(),s.a.createElement("br",null),s.a.createElement("br",null))}}]),t}(n.Component),te=p.a.Step,ae=[],ne=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={current:0,disabled:!0,session_folder_name:a.props.route_session_id,add_more_link:h+"/"+a.props.route_session_id},I=Object(d.a)(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"enableNext",value:function(){I.setState({disabled:!1})}},{key:"next",value:function(){var e=this.state.current+1;this.setState({current:e}),I.setState({disabled:!0})}},{key:"afresh",value:function(){window.location.reload()}},{key:"addMore",value:function(){console.log(this.add_more_link),window.location.assign(this.state.add_more_link),window.location.reload()}},{key:"render",value:function(){var e=this,t=this.state.current;return ae=[{title:"Upload Media File(s)",content:s.a.createElement(T,{session:this.state.session_folder_name,enableNext:I.enableNext})},{title:"Process File(s)",content:s.a.createElement(J,{session:this.state.session_folder_name,enableNext:I.enableNext})},{title:"Get Result(s)",content:s.a.createElement(ee,{session:this.state.session_folder_name})}],s.a.createElement("div",{className:"steps-main"},s.a.createElement(p.a,{current:t},ae.map(function(e){return s.a.createElement(te,{key:e.title,title:e.title})})),s.a.createElement("div",{className:"steps-content"},ae[t].content),s.a.createElement("div",{className:"steps-action"},t<ae.length-1&&s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement(M.c,{color:"primary",style:{width:"60%"},disabled:this.state.disabled,onClick:function(){return e.next()}},"Next"))),t===ae.length-1&&s.a.createElement("p",null,s.a.createElement("center",null,s.a.createElement(M.c,{color:"primary",onClick:function(){return e.afresh()}},"Start Afresh"))),t===ae.length-1&&s.a.createElement("p",null,s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement(M.c,{color:"primary",onClick:function(){return e.addMore()}},"Add some other image(s)/video(s)")))))}}]),t}(s.a.Component),se=function(e){return s.a.createElement("center",null,s.a.createElement(Z,{color:"danger",alert_message:"404: Pothole Not Found. Lost your way or just here to play the game ?",_session:e.route_session_id}),s.a.createElement(P,null),s.a.createElement("br",null),s.a.createElement("br",null))},le=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id?A.a.get(_+"/validateSession.php?session_folder_name="+this.props.match.params.id).then(function(t){"Valid"===t.data?e.setState({route_session_id:e.props.match.params.id,access_granted:!0,existing_session:!0}):e.setState({route_session_id:"Invalid Access Entries",invalid_access:!0})}):this.setState({route_session_id:Math.round(1e3*Math.random())*Date.now(),access_granted:!0,new_session:!0})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},this.state&&this.state.route_session_id&&this.state.access_granted&&this.state.new_session&&s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement(Z,{color:"primary",alert_message:"New Session Created",_session:this.state.route_session_id})),s.a.createElement(ne,{route_session_id:this.state.route_session_id})),this.state&&this.state.route_session_id&&this.state.access_granted&&this.state.existing_session&&s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement(Z,{color:"secondary",alert_message:"Existing Session",_session:this.state.route_session_id})),s.a.createElement(ne,{route_session_id:this.state.route_session_id})),this.state&&this.state.route_session_id&&this.state.invalid_access&&s.a.createElement(se,{_session:this.state.route_session_id}))}}]),t}(n.Component),ie=a(257),re=a(259),oe=a(260);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement(M.k,null,s.a.createElement("h2",null,"Pothole detection by uploading media!"),s.a.createElement("p",{className:"lead"},"This phase of the application is divided into three main segments."),s.a.createElement("hr",{className:"my-2"}),s.a.createElement("p",null,"Upload your media file(s), wait for them to get processed and finally see your predicted outputs and download the logs too!"),s.a.createElement("p",{className:"lead"},s.a.createElement("a",{href:"https://nirbhay.me/pothole-detection",className:"btn btn-primary",role:"button"},"Start Detecting!"))))},ue=function(e){return s.a.createElement(M.j,null,s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement(M.a,{color:"primary"},"Made with ",s.a.createElement("b",{style:{color:"#440000"}},"Love")," using ",s.a.createElement("b",null,s.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"))," by ",s.a.createElement("b",null,s.a.createElement("a",{href:"https://github.com/nirbhayph",target:"_blank",rel:"noopener noreferrer"},"@nirbhayph"))," and ",s.a.createElement("b",null,s.a.createElement("a",{href:"https://github.com/dhirensc",target:"_blank",rel:"noopener noreferrer"},"@dhirensc")))))},me=s.a.createElement(ie.a,{basename:"/pothole-detection"},s.a.createElement("div",null,s.a.createElement(ce,null),s.a.createElement(re.a,null,s.a.createElement(oe.a,{exact:!0,path:"/",component:le}),s.a.createElement(oe.a,{exact:!0,path:"/:id",component:le}),s.a.createElement(oe.a,{exact:!0,path:"/display/:id",component:ee}),s.a.createElement(oe.a,{component:se})),s.a.createElement(ue,null)));i.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[119,2,1]]]);
//# sourceMappingURL=main.20cf0179.chunk.js.map