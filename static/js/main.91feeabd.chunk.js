(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){e.exports=a(254)},124:function(e,t,a){},128:function(e,t,a){},163:function(e,t,a){},166:function(e,t,a){},195:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),l=a(18),i=a.n(l),r=(a(124),a(8)),o=a(9),c=a(11),m=a(10),u=a(12),p=a(4),d=a(258),h=(a(126),a(128),a(55)),_=(a(131),a(102)),E=a.n(_),b=a(103),f=a.n(b),g=a(104),k=a.n(g),v=a(105),x=a.n(v);a(133);Object(h.registerPlugin)(E.a,f.a,k.a,x.a);var y,j,w,O=[],N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onLoad=function(e){if(e.includes("Success")){var t=e.split("_");O.push(t[1]),y.state.enableNext()}},a.state={files:[""],_session_:e.session,enableNext:e.enableNext},y=Object(p.a)(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleInit",value:function(){console.log("Pothole Detection App")}},{key:"render",value:function(e){var t=this,a=this.state._session_;return s.a.createElement("div",{className:"App"},s.a.createElement(h.FilePond,{ref:function(e){return t.pond=e},allowFileSizeValidation:!0,maxFileSize:"2MB",acceptedFileTypes:["image/png","image/jpg","image/jpeg","video/mp4","video/avi"],allowMultiple:!0,labelFileProcessingComplete:"Upload Complete",maxFiles:9,allowRevert:!1,labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span><br/> <i>Acceptable file types: .png, .jpg, .jpeg, .mp4, .avi</i>',server:{url:"http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/file_upload.php?session_folder_name="+a,process:{onload:this.onLoad}},oninit:function(){return t.handleInit()},onupdatefiles:function(e){t.setState({files:e.map(function(e){return e.file})})}},this.state.files.map(function(e){return s.a.createElement(h.File,{key:e,src:e,origin:"local"})})))}}]),t}(n.Component),S=a(30),I=a.n(S),C=a(3),T=(a(15),a(116)),F=function(e){return window.innerWidth>=992?s.a.createElement("div",null,s.a.createElement(C.a,{color:"primary"},"Enjoy this game, until we bring you your result, ",s.a.createElement("br",null)," desktop users press enter to start, and arrow keys to play!"),s.a.createElement("br",null),s.a.createElement(T.a,{style:{width:"50px",height:"100px"}})):s.a.createElement("div",null)},A=a(39),z=function(e){return s.a.createElement(A.Terminal,null,s.a.createElement("div",null,s.a.createElement("div",{style:{display:e.loading_state}},s.a.createElement("center",null,s.a.createElement("img",{src:"https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif",height:"50px",width:"50px",alt:"spinner"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(F,null))),s.a.createElement("pre",{style:{textAlign:"left",marginLeft:"20px",color:"#fff"}},e.response),s.a.createElement(C.a,{style:{display:e.alert_display},color:"primary"},e.alert_label),s.a.createElement("a",{href:e.output_text_file_link,target:"_blank",rel:"noopener noreferrer"},e.output_text_file_label)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null))},D="http://ec2-18-207-184-85.compute-1.amazonaws.com/pothole_detection/darkflow/process.php?session_folder_name=",M=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={_session_:D+e.session,_session:e.session,response:"",output_generated_label:"",output_text_file_link:"",output_text_file_label:"",loading_gif_state:"inline",enableNext:e.enableNext,media_processed_label:"",alert_display:"none"};var n=Object(p.a)(Object(p.a)(a));return I.a.get(a.state._session_).then(function(e){n.setState({loading_state:"none",response:"\n"+e.data+"\n",output_generated_label:"Output Text File Generated\n",output_text_file_label:"Output Text File",output_text_file_link:"http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/uploads/"+n.state._session+"/out/"+n.state._session+".txt",media_processed_label:"Media File(s) have been Processed!",alert_display:"block"}),n.state.enableNext()}),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(C.a,{style:{display:this.state.alert_display},color:"secondary"},this.state.media_processed_label),s.a.createElement(z,{loading_state:this.state.loading_state,response:this.state.response,alert_display:this.state.alert_display,alert_label:this.state.output_generated_label,output_text_file_link:this.state.output_text_file_link,output_text_file_label:this.state.output_text_file_label}))}}]),t}(n.Component),P=(a(163),a(109)),L=a.n(P),H=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getInnerJSX",value:function(){return"image"===this.props.data.type?(console.log(this.props.data.type),s.a.createElement("center",null,s.a.createElement("div",{style:{border:"2px solid #666666",backgroundImage:"url('https://www.northridgenow.org/wp-content/uploads/2017/09/color-gradient-wallpaper-4.jpg')"},width:365,height:365},s.a.createElement(L.a,{src:this.props.data.src,width:360,height:360,alt:this.props.data.altText})))):"video"===this.props.data.type?s.a.createElement("center",null,s.a.createElement("div",{style:{border:"2px solid #666666",backgroundImage:"url('https://www.northridgenow.org/wp-content/uploads/2017/09/color-gradient-wallpaper-4.jpg')"},width:365,height:365},s.a.createElement("video",{key:this.props.data,controls:!0,style:{verticalAlign:"middle"}},s.a.createElement("source",{src:this.props.data.src,type:"video/mp4"}),"Your browser does not support the video tag."))):void 0}},{key:"render",value:function(){return s.a.createElement("div",null,this.getInnerJSX())}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(p.a)(Object(p.a)(a))),a.previous=a.previous.bind(Object(p.a)(Object(p.a)(a))),a.goToIndex=a.goToIndex.bind(Object(p.a)(Object(p.a)(a))),a.onExiting=a.onExiting.bind(Object(p.a)(Object(p.a)(a))),a.onExited=a.onExited.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===this.props.mediaData.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?this.props.mediaData.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=this.props.mediaData.map(function(t){return s.a.createElement(C.h,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},s.a.createElement(H,{data:t}),s.a.createElement(C.e,{captionText:t.caption,captionHeader:""}))});return s.a.createElement(C.d,{activeIndex:t,next:this.next,previous:this.previous},s.a.createElement(C.g,{items:this.props.mediaData,activeIndex:t,onClickHandler:this.goToIndex}),a,s.a.createElement(C.f,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),s.a.createElement(C.f,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(n.Component),J=function(e){return s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("center",null,s.a.createElement("a",{href:e.add_more_link,className:"btn btn-primary",role:"button"},e.button_text),s.a.createElement("br",null))))},R=(a(166),function(e){return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:e.output_text_link,download:!0,rel:"noopener noreferrer"},s.a.createElement(C.c,{color:"info"},"View Raw .txt Output")))),s.a.createElement(A.Terminal,null,s.a.createElement(C.a,{color:"primary"},".txt Output"),s.a.createElement("pre",{className:"pre-style"},e.output_text_data)),s.a.createElement("br",null))}),G=a(110),V=a.n(G),W=function(e){return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:e.generate_json_link,download:!0,rel:"noopener noreferrer"},s.a.createElement(C.c,{color:"warning"},"View Raw .json Output")))),s.a.createElement(A.Terminal,null,s.a.createElement(C.a,{color:"primary"},".json Output"),s.a.createElement(V.a,{src:e.output_json_data,theme:"monokai",style:{textAlign:"left"}})))},U=a(25),X=(a(195),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(C.j,null,s.a.createElement(C.l,null,s.a.createElement(C.i,{sm:"2"}),s.a.createElement(C.i,{className:"social_button"},s.a.createElement(U.Linkedin,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(C.i,{className:"social_button"},s.a.createElement(U.Twitter,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(C.i,{className:"social_button"},s.a.createElement(U.Whatsapp,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(C.i,{className:"social_button"},s.a.createElement(U.Facebook,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(C.i,{className:"social_button"},s.a.createElement(U.Reddit,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(C.i,{className:"social_button"},s.a.createElement(U.Google,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(C.i,{className:"social_button"},s.a.createElement(U.Mail,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(C.i,{className:"social_button"},s.a.createElement(U.HackerNews,{className:"social_btn",solid:!0,small:!0,message:this.props.message,link:this.props.share_link})),s.a.createElement(C.i,{sm:"2"})))}}]),t}(s.a.Component)),Y=function(e){return s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement("p",null,s.a.createElement(C.a,{color:"primary"},s.a.createElement("h4",null,"Session Number",s.a.createElement("br",null),s.a.createElement(C.b,{color:"secondary"},e.session_no)),s.a.createElement("br",null),s.a.createElement(X,{share_link:e.link,message:e.message})))))},$=function(e){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(C.a,{color:e.color},s.a.createElement("h4",null,e.alert_message,s.a.createElement("br",null)," ",s.a.createElement(C.b,{color:"secondary"},e._session)))),s.a.createElement("br",null))},q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={_session:e.session,get_json_link:"http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/getLinks.php?session_folder_name=",json_data_media:[],output_text_file_link:"http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/uploads/"+e.session+"/out/"+e.session+".txt",generate_json_link:"http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/generateJSON.php?session_folder_name="+e.session,generate_text_link:"http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/getTextOutput.php?session_folder_name="+e.session,json_output_data:[],text_output_data:[],share_link:"http://nirbhay.me/pothole-detection/display/"+e.session,from_shared_link:!1,add_more_link:"http://nirbhay.me/pothole-detection"},a.state._session||(a.state={_session:a.props.match.params.id,get_json_link:"http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/getLinks.php?session_folder_name=",json_data_media:[],output_text_file_link:"http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/uploads/"+a.props.match.params.id+"/out/"+a.props.match.params.id+".txt",generate_json_link:"http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/generateJSON.php?session_folder_name="+a.props.match.params.id,generate_text_link:"http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/getTextOutput.php?session_folder_name="+a.props.match.params.id,json_output_data:[],text_output_data:[],share_link:"http://nirbhay.me/pothole-detection/display/"+a.props.match.params.id,from_shared_link:!0,add_more_link:"http://nirbhay.me/pothole-detection/"+a.props.match.params.id}),j=Object(p.a)(Object(p.a)(a)),I.a.get(a.state.get_json_link+a.state._session).then(function(e){j.setState({json_data_media:e.data})}),I.a.get(a.state.generate_text_link).then(function(e){j.setState({text_output_data:e.data})}),I.a.get(a.state.generate_json_link).then(function(e){j.setState({json_output_data:e.data})}),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"checkForContinueSessionButtons",value:function(){if(this.state.json_data_media&&this.state.json_data_media.length>0&&this.state.from_shared_link)return s.a.createElement("div",null,s.a.createElement(J,{button_text:"Start Afresh",add_more_link:"http://nirbhay.me/pothole-detection"}),s.a.createElement(J,{button_text:"Add some other image(s)/video(s)",add_more_link:this.add_more_link}))}},{key:"checkAndGetOutput",value:function(){if(this.state.json_data_media)return this.state.json_data_media.length>0?s.a.createElement("div",null,s.a.createElement(C.j,null,s.a.createElement(Y,{session_no:this.state._session,link:this.state.share_link,message:"Hey, view my test media for potholes detected! You can add your own to it too! Happy detecting and spreading the word!!"})),s.a.createElement(C.j,null,s.a.createElement(B,{mediaData:this.state.json_data_media})),s.a.createElement(C.j,null,s.a.createElement(C.l,null,s.a.createElement(C.i,{xs:"12",sm:"6"},s.a.createElement(R,{output_text_link:this.state.output_text_file_link,output_text_data:this.state.text_output_data})),s.a.createElement(C.i,{sm:"6"},s.a.createElement(W,{generate_json_link:this.state.generate_json_link,output_json_data:this.state.json_output_data}))))):s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement(C.j,null,s.a.createElement("center",null,s.a.createElement($,{session_no:this.state._session,color:"danger",alert_message:"Session Number Does Not Exist!!"}),s.a.createElement(J,{button_text:"Start Afresh",add_more_link:"http://nirbhay.me/pothole-detection"}))))}},{key:"render",value:function(){return s.a.createElement("div",null,this.checkAndGetOutput(),this.checkForContinueSessionButtons(),s.a.createElement("br",null),s.a.createElement("br",null))}}]),t}(n.Component),K=d.a.Step,Q=[],Z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={current:0,disabled:!0,session_folder_name:a.props.route_session_id,add_more_link:"http://nirbhay.me/pothole-detection/"+a.props.route_session_id},w=Object(p.a)(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"enableNext",value:function(){w.setState({disabled:!1})}},{key:"next",value:function(){var e=this.state.current+1;this.setState({current:e}),w.setState({disabled:!0})}},{key:"afresh",value:function(){var e=this.state.current-2;this.setState({current:e}),this.setState({session_folder_name:Math.round(1e3*Math.random())*Date.now()})}},{key:"render",value:function(){var e=this,t=this.state.current;return Q=[{title:"Upload Media File(s)",content:s.a.createElement(N,{session:this.state.session_folder_name,enableNext:w.enableNext})},{title:"Process File(s)",content:s.a.createElement(M,{session:this.state.session_folder_name,enableNext:w.enableNext})},{title:"Get Result(s)",content:s.a.createElement(q,{session:this.state.session_folder_name})}],s.a.createElement("div",{className:"steps-main"},s.a.createElement(d.a,{current:t},Q.map(function(e){return s.a.createElement(K,{key:e.title,title:e.title})})),s.a.createElement("div",{className:"steps-content"},Q[t].content),s.a.createElement("div",{className:"steps-action"},t<Q.length-1&&s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement(C.c,{color:"primary",style:{width:"60%"},disabled:this.state.disabled,onClick:function(){return e.next()}},"Next"))),t===Q.length-1&&s.a.createElement("p",null,s.a.createElement("center",null,s.a.createElement(C.c,{color:"primary",onClick:function(){return e.afresh()}},"Start Afresh"))),t===Q.length-1&&s.a.createElement("p",null,s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement(J,{button_text:"Add some other image(s)/video(s)",add_more_link:this.state.add_more_link})))))}}]),t}(s.a.Component),ee=function(e){return s.a.createElement("center",null,s.a.createElement($,{color:"danger",alert_message:"404: Pothole Not Found. Lost your way or just here to play the game ?",_session:e.route_session_id}),s.a.createElement(F,null),s.a.createElement("br",null),s.a.createElement("br",null))},te=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id?I.a.get("http://ec2-18-207-184-85.compute-1.amazonaws.com/filepond-api/validateSession.php?session_folder_name="+this.props.match.params.id).then(function(t){"Valid"===t.data?e.setState({route_session_id:e.props.match.params.id,access_granted:!0,existing_session:!0}):e.setState({route_session_id:"Invalid Access Entries",invalid_access:!0})}):this.setState({route_session_id:Math.round(1e3*Math.random())*Date.now(),access_granted:!0,new_session:!0})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},this.state&&this.state.route_session_id&&this.state.access_granted&&this.state.new_session&&s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement($,{color:"primary",alert_message:"New Session Created",_session:this.state.route_session_id})),s.a.createElement(Z,{route_session_id:this.state.route_session_id})),this.state&&this.state.route_session_id&&this.state.access_granted&&this.state.existing_session&&s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement($,{color:"secondary",alert_message:"Existing Session",_session:this.state.route_session_id})),s.a.createElement(Z,{route_session_id:this.state.route_session_id})),this.state&&this.state.route_session_id&&this.state.invalid_access&&s.a.createElement(ee,{_session:this.state.route_session_id}))}}]),t}(n.Component),ae=a(257),ne=a(259),se=a(260);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement(C.k,null,s.a.createElement("h2",null,"Pothole detection by uploading media!"),s.a.createElement("p",{className:"lead"},"This phase of the application is divided into three main segments."),s.a.createElement("hr",{className:"my-2"}),s.a.createElement("p",null,"Upload your media file(s), wait for them to get processed and finally see your predicted outputs and download the logs too!"),s.a.createElement("p",{className:"lead"},s.a.createElement("a",{href:"http://nirbhay.me/pothole-detection",className:"btn btn-primary",role:"button"},"Start Detecting!"))))},ie=function(e){return s.a.createElement(C.j,null,s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement(C.a,{color:"primary"},"Made with ",s.a.createElement("b",{style:{color:"#440000"}},"Love")," using ",s.a.createElement("b",null,s.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"))," by ",s.a.createElement("b",null,s.a.createElement("a",{href:"https://github.com/nirbhayph",target:"_blank",rel:"noopener noreferrer"},"@nirbhayph"))," and ",s.a.createElement("b",null,s.a.createElement("a",{href:"https://github.com/dhirensc",target:"_blank",rel:"noopener noreferrer"},"@dhirensc")))))},re=s.a.createElement(ae.a,{basename:"/pothole-detection"},s.a.createElement("div",null,s.a.createElement(le,null),s.a.createElement(ne.a,null,s.a.createElement(se.a,{exact:!0,path:"/",component:te}),s.a.createElement(se.a,{exact:!0,path:"/:id",component:te}),s.a.createElement(se.a,{exact:!0,path:"/display/:id",component:q}),s.a.createElement(se.a,{component:ee})),s.a.createElement(ie,null)));i.a.render(re,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[119,2,1]]]);
//# sourceMappingURL=main.91feeabd.chunk.js.map