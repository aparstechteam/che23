var b=Object.defineProperty,g=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(n,l,s)=>l in n?b(n,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[l]=s,v=(n,l)=>{for(var s in l||(l={}))S.call(l,s)&&c(n,s,l[s]);if(p)for(var s of p(l))y.call(l,s)&&c(n,s,l[s]);return n},m=(n,l)=>g(n,f(l));import{s as C,q as x,r as h,j as V,k,l as e,z as i,K as r,A as N,G as j,Q as q,R as U}from"./index.a440bfeb.js";const B={class:"container px-2 py-20 mx-auto md:w-1/2"},M=["onSubmit"],w={class:"form-control"},H=e("label",{for:"name"},"Name",-1),D={class:"form-control"},R=e("label",{for:"phone"},"Phone",-1),z={class:"form-control"},I=e("label",{for:"reg"},"SSC/HSC roll",-1),J={class:"form-control"},T=e("label",{for:"reg"},"SSC/HSC registration No.",-1),A=e("p",{class:"text-sm"},"\u098F\u099F\u09BF \u09A6\u09BF\u09DF\u09C7\u0987 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0 \u09B8\u0995\u09B2 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09B9\u09AC\u09C7\u0964 \u09A4\u09BE\u0987 \u09B8\u09BE\u09AC\u09A7\u09BE\u09A8\u09C7 \u09AA\u09C2\u09B0\u09A3 \u0995\u09B0\u09AC\u09C7\u0964",-1),E={class:"form-control"},G=e("label",{for:"reg"},"Board",-1),K=U('<option value="" selected disabled>Select board</option><option value="barisal">Barisal</option><option value="chittagong">Chittagong</option><option value="comilla">Comilla</option><option value="dhaka">Dhaka</option><option value="dinajpur">Dinajpur</option><option value="jessore">Jessore</option><option value="madrasah">Madrasah</option><option value="rajshahi">Rajshahi</option><option value="sylhet">Sylhet</option><option value="mymensingh">Mymensingh</option><option value="tec">Technical</option>',12),O=[K],P={class:"form-control"},Q=e("label",{for:"college"},"Institution",-1),F={class:"text-center"},X={setup(n){const l=C(),s=x(),o=h({ttrx:"",name:"",phone:"+880",reg:"",college:"",board:"",roll:""}),d=h(!1),_=()=>{d.value=!0;let u=o.value.phone.length,t=o.value.phone.substring(u-10,u);s.dispatch("register",{body:JSON.stringify(m(v({},o.value),{phone:t,ssc_board:o.value.board,ssc_roll:o.value.roll,ssc_reg:o.value.reg,facebook_link:"",why_buet:"",batch:"",email:"email"})),router:l,phone:t})};return(u,t)=>(V(),k("div",B,[e("form",{onSubmit:q(_,["prevent"]),class:"space-y-3"},[e("div",w,[H,i(e("input",{type:"text",required:"","onUpdate:modelValue":t[0]||(t[0]=a=>o.value.name=a),class:"input input-bordered"},null,512),[[r,o.value.name]])]),e("div",D,[R,i(e("input",{type:"tel",required:"","onUpdate:modelValue":t[1]||(t[1]=a=>o.value.phone=a),class:"input input-bordered"},null,512),[[r,o.value.phone]])]),e("div",z,[I,i(e("input",{type:"tel","onUpdate:modelValue":t[2]||(t[2]=a=>o.value.roll=a),class:"input input-bordered",placeholder:"SSC/HSC roll"},null,512),[[r,o.value.roll]])]),e("div",J,[T,A,i(e("input",{type:"tel",required:"","onUpdate:modelValue":t[3]||(t[3]=a=>o.value.reg=a),class:"input input-bordered",placeholder:"SSC/HSC registration No"},null,512),[[r,o.value.reg]])]),e("div",E,[G,i(e("select",{class:"select select-bordered",required:"","onUpdate:modelValue":t[4]||(t[4]=a=>o.value.board=a)},O,512),[[N,o.value.board]])]),e("div",P,[Q,i(e("input",{type:"text",required:"","onUpdate:modelValue":t[5]||(t[5]=a=>o.value.college=a),placeholder:"Institute Name",class:"input input-bordered"},null,512),[[r,o.value.college]])]),e("div",F,[e("button",{type:"submit",class:j(["btn btn-primary",{loading:d.value}])},"Submit",2)])],40,M)]))}};export{X as default};
