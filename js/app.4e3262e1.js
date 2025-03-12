(function(){"use strict";var e={7532:function(e,r,s){var o=s(3751),t=s(641);const a={id:"app"};function n(e,r,s,o,n,i){const l=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",a,[(0,t.bF)(l)])}var i={name:"App"},l=s(6262);const u=(0,l.A)(i,[["render",n]]);var d=u,c=s(5220),p=s(33);const m={class:"login-container"},h={class:"login-card"},k={class:"input-group"},L={class:"input-group"},g={key:0,class:"error"},f={class:"create-account-link"},b={key:0,class:"success-message-card"};function v(e,r,s,a,n,i){const l=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",m,[r[10]||(r[10]=(0,t.Lk)("div",{class:"particles"},null,-1)),(0,t.Lk)("div",h,[r[8]||(r[8]=(0,t.Lk)("h2",null,"Iniciar Sesión",-1)),(0,t.Lk)("form",{onSubmit:r[2]||(r[2]=(0,o.D$)(((...e)=>i.handleLogin&&i.handleLogin(...e)),["prevent"]))},[(0,t.Lk)("div",k,[r[3]||(r[3]=(0,t.Lk)("label",null,"Usuario",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>n.user.username=e),placeholder:"Ingrese su usuario",required:""},null,512),[[o.Jo,n.user.username]])]),(0,t.Lk)("div",L,[r[4]||(r[4]=(0,t.Lk)("label",null,"Contraseña",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>n.user.password=e),type:"password",placeholder:"Ingrese su contraseña",required:""},null,512),[[o.Jo,n.user.password]])]),r[5]||(r[5]=(0,t.Lk)("button",{type:"submit"},"Ingresar",-1)),n.errorMessage?((0,t.uX)(),(0,t.CE)("p",g,(0,p.v_)(n.errorMessage),1)):(0,t.Q3)("",!0)],32),(0,t.Lk)("div",f,[(0,t.Lk)("p",null,[r[7]||(r[7]=(0,t.eW)("¿No tienes cuenta? ")),(0,t.bF)(l,{to:"/register"},{default:(0,t.k6)((()=>r[6]||(r[6]=[(0,t.eW)("Crear cuenta")]))),_:1})])])]),n.showSuccessMessage?((0,t.uX)(),(0,t.CE)("div",b,r[9]||(r[9]=[(0,t.Lk)("p",null,"Inicio de sesión exitoso",-1)]))):(0,t.Q3)("",!0)])}s(4114);const w="http://192.168.1.205:8179/api/auth";var U={async register(e){if(!e.password||""===e.password.trim())throw new Error("La contraseña no puede estar vacía.");const r=await fetch(`${w}/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return r.json()},async login(e){const r=await fetch(`${w}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.username,passwordHash:e.password})});return r.json()},async getUsers(){const e=await fetch(`${w}/users`);return e.json()},async getUser(e){const r=await fetch(`${w}/user/${e}`);return r.json()},async updateUser(e,r){const s=await fetch(`${w}/user/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});return s.json()},async deleteUser(e){const r=await fetch(`${w}/user/${e}`,{method:"DELETE"});return r.json()}},y={data(){return{user:{username:"",password:""},errorMessage:"",showSuccessMessage:!1}},methods:{async handleLogin(){try{const e=await U.login(this.user);e.success?(this.showSuccessMessage=!0,setTimeout((()=>{this.$router.push("/home")}),3e3)):this.errorMessage=e.message||"Ocurrió un error al intentar iniciar sesión"}catch(e){this.errorMessage=e.response?.data?.message||"Ocurrió un error al intentar iniciar sesión"}}}};const N=(0,l.A)(y,[["render",v],["__scopeId","data-v-373ab770"]]);var C=N;const E={class:"nav-left"},M={class:"nav-right"},I={class:"table-container"},D=["onClick"],J=["onClick"],V={class:"button-container"},q={key:0,class:"modal"},A={class:"modal-content"},O={key:1,class:"modal"},S={class:"modal-content"},T={class:"form-grid"},_={class:"input-group"},$={class:"input-group"},j={class:"input-group"},P={class:"input-group"},F={class:"input-group"},X={class:"input-group"},x={class:"input-group"},Q={class:"input-group"},R={class:"input-group"},W={key:0,class:"modal"},H={class:"modal-content"};function z(e,r,s,a,n,i){return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("div",null,[(0,t.Lk)("nav",null,[(0,t.Lk)("div",E,[(0,t.Lk)("span",null,"Bienvenido, "+(0,p.v_)(n.username),1)]),(0,t.Lk)("div",M,[(0,t.Lk)("button",{onClick:r[0]||(r[0]=(...e)=>i.logout&&i.logout(...e))},"Cerrar sesión")])]),r[39]||(r[39]=(0,t.Lk)("h2",{style:{"text-align":"center"}},"Lista de Usuarios",-1)),(0,t.Lk)("div",I,[(0,t.Lk)("table",null,[r[21]||(r[21]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",null,"Nombre"),(0,t.Lk)("th",null,"Correo"),(0,t.Lk)("th",null,"Teléfono"),(0,t.Lk)("th",null,"Acciones")])],-1)),(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.users,(e=>((0,t.uX)(),(0,t.CE)("tr",{key:e.Id},[(0,t.Lk)("td",null,(0,p.v_)(e.FirstName)+" "+(0,p.v_)(e.LastName),1),(0,t.Lk)("td",null,(0,p.v_)(e.Email),1),(0,t.Lk)("td",null,(0,p.v_)(e.Phone),1),(0,t.Lk)("td",null,[(0,t.Lk)("button",{onClick:r=>i.editUser(e)},"Editar",8,D),(0,t.Lk)("button",{onClick:r=>i.deleteUser(e.Id)},"Eliminar",8,J)])])))),128))])])]),(0,t.Lk)("div",V,[(0,t.Lk)("button",{onClick:r[1]||(r[1]=e=>n.showAddModal=!0)},"Agregar Usuario")]),n.showEditModal?((0,t.uX)(),(0,t.CE)("div",q,[(0,t.Lk)("div",A,[r[27]||(r[27]=(0,t.Lk)("h3",null,"Editar Usuario",-1)),(0,t.Lk)("form",{onSubmit:r[7]||(r[7]=(0,o.D$)(((...e)=>i.updateUser&&i.updateUser(...e)),["prevent"]))},[(0,t.Lk)("div",null,[r[22]||(r[22]=(0,t.Lk)("label",{for:"firstName"},"Nombre:",-1)),(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":r[2]||(r[2]=e=>n.editedUser.FirstName=e),id:"firstName",required:""},null,512),[[o.Jo,n.editedUser.FirstName]])]),(0,t.Lk)("div",null,[r[23]||(r[23]=(0,t.Lk)("label",{for:"lastName"},"Apellido:",-1)),(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":r[3]||(r[3]=e=>n.editedUser.LastName=e),id:"lastName",required:""},null,512),[[o.Jo,n.editedUser.LastName]])]),(0,t.Lk)("div",null,[r[24]||(r[24]=(0,t.Lk)("label",{for:"email"},"Correo:",-1)),(0,t.bo)((0,t.Lk)("input",{type:"email","onUpdate:modelValue":r[4]||(r[4]=e=>n.editedUser.Email=e),id:"email",required:""},null,512),[[o.Jo,n.editedUser.Email]])]),(0,t.Lk)("div",null,[r[25]||(r[25]=(0,t.Lk)("label",{for:"phone"},"Teléfono:",-1)),(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":r[5]||(r[5]=e=>n.editedUser.Phone=e),id:"phone",required:""},null,512),[[o.Jo,n.editedUser.Phone]])]),r[26]||(r[26]=(0,t.Lk)("button",{type:"submit"},"Guardar Cambios",-1)),(0,t.Lk)("button",{type:"button",onClick:r[6]||(r[6]=(...e)=>i.closeEditModal&&i.closeEditModal(...e))},"Cancelar")],32)])])):(0,t.Q3)("",!0),n.showAddModal?((0,t.uX)(),(0,t.CE)("div",O,[(0,t.Lk)("div",S,[r[38]||(r[38]=(0,t.Lk)("h2",null,"Agregar Usuario",-1)),(0,t.Lk)("form",{onSubmit:r[18]||(r[18]=(0,o.D$)(((...e)=>i.addUser&&i.addUser(...e)),["prevent"]))},[(0,t.Lk)("div",T,[(0,t.Lk)("div",_,[r[28]||(r[28]=(0,t.Lk)("label",{for:"username"},"Usuario",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[8]||(r[8]=e=>n.newUser.username=e),id:"username",required:""},null,512),[[o.Jo,n.newUser.username]])]),(0,t.Lk)("div",$,[r[29]||(r[29]=(0,t.Lk)("label",{for:"firstName"},"Nombre",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[9]||(r[9]=e=>n.newUser.firstName=e),id:"firstName",required:""},null,512),[[o.Jo,n.newUser.firstName]])]),(0,t.Lk)("div",j,[r[30]||(r[30]=(0,t.Lk)("label",{for:"lastName"},"Apellido",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[10]||(r[10]=e=>n.newUser.lastName=e),id:"lastName",required:""},null,512),[[o.Jo,n.newUser.lastName]])]),(0,t.Lk)("div",P,[r[31]||(r[31]=(0,t.Lk)("label",{for:"email"},"Correo Electrónico",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[11]||(r[11]=e=>n.newUser.email=e),id:"email",type:"email",required:""},null,512),[[o.Jo,n.newUser.email]])]),(0,t.Lk)("div",F,[r[32]||(r[32]=(0,t.Lk)("label",{for:"phone"},"Teléfono",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[12]||(r[12]=e=>n.newUser.phone=e),id:"phone"},null,512),[[o.Jo,n.newUser.phone]])]),(0,t.Lk)("div",X,[r[33]||(r[33]=(0,t.Lk)("label",{for:"position"},"Puesto",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[13]||(r[13]=e=>n.newUser.position=e),id:"position",required:""},null,512),[[o.Jo,n.newUser.position]])]),(0,t.Lk)("div",x,[r[34]||(r[34]=(0,t.Lk)("label",{for:"department"},"Departamento",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[14]||(r[14]=e=>n.newUser.department=e),id:"department",required:""},null,512),[[o.Jo,n.newUser.department]])]),(0,t.Lk)("div",Q,[r[35]||(r[35]=(0,t.Lk)("label",{for:"hireDate"},"Fecha de Contratación",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[15]||(r[15]=e=>n.newUser.hireDate=e),id:"hireDate",type:"date",required:""},null,512),[[o.Jo,n.newUser.hireDate]])]),(0,t.Lk)("div",R,[r[36]||(r[36]=(0,t.Lk)("label",{for:"password"},"Contraseña",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[16]||(r[16]=e=>n.newUser.password=e),id:"password",type:"password",required:""},null,512),[[o.Jo,n.newUser.password]])])]),r[37]||(r[37]=(0,t.Lk)("button",{type:"submit"},"Guardar",-1)),(0,t.Lk)("button",{type:"button",onClick:r[17]||(r[17]=(...e)=>i.closeAddModal&&i.closeAddModal(...e))},"Cancelar")],32)])])):(0,t.Q3)("",!0)]),n.showModal?((0,t.uX)(),(0,t.CE)("div",W,[(0,t.Lk)("div",H,[r[40]||(r[40]=(0,t.Lk)("p",null,"¿Seguro que deseas eliminar este usuario?",-1)),(0,t.Lk)("button",{onClick:r[19]||(r[19]=(...e)=>i.confirmDelete&&i.confirmDelete(...e))},"Sí"),(0,t.Lk)("button",{onClick:r[20]||(r[20]=(...e)=>i.closeModal&&i.closeModal(...e))},"No")])])):(0,t.Q3)("",!0)],64)}s(8111),s(2489);var G={data(){return{users:[],showModal:!1,showEditModal:!1,showAddModal:!1,userToDelete:null,editedUser:null,newUser:{FirstName:"",LastName:"",Email:"",Phone:""},username:""}},async mounted(){try{this.username=localStorage.getItem("username")||"Invitado";const e=await U.getUsers();this.users=e}catch(e){console.error("Error al obtener usuarios:",e)}},methods:{editUser(e){this.editedUser={...e},this.showEditModal=!0},closeEditModal(){this.showEditModal=!1,this.editedUser=null},async updateUser(){try{const e=await U.updateUser(this.editedUser.Id,this.editedUser);if(e.success){const e=this.users.findIndex((e=>e.Id===this.editedUser.Id));-1!==e&&(this.users[e]={...this.editedUser}),this.closeEditModal(),alert("Usuario actualizado correctamente")}}catch(e){console.error("Error al actualizar el usuario:",e)}},deleteUser(e){this.showModal=!0,this.userToDelete=e},closeModal(){this.showModal=!1,this.userToDelete=null},async confirmDelete(){if(null!==this.userToDelete){const e=await U.deleteUser(this.userToDelete);e.success&&(alert("Usuario eliminado correctamente"),this.users=this.users.filter((e=>e.Id!==this.userToDelete)),this.closeModal())}},closeAddModal(){this.showAddModal=!1,this.newUser={FirstName:"",LastName:"",Email:"",Phone:""}},async addUser(){try{const e=await U.register({...this.newUser,passwordHash:this.newUser.password});if(console.log("Respuesta de la API:",e),e.success){alert("Usuario agregado correctamente");const r={Id:e.data?.Id||Date.now(),FirstName:this.newUser.firstName,LastName:this.newUser.lastName,Email:this.newUser.email,Phone:this.newUser.phone};this.users.push(r),this.showAddModal=!1,this.newUser={username:"",firstName:"",lastName:"",email:"",phone:"",position:"",department:"",hireDate:"",password:""}}else console.error("Error en la respuesta de la API:",e),alert("Error al agregar usuario: "+(e.message||"Error desconocido"))}catch(e){console.error("Error en la petición:",e),alert("Ocurrió un error al agregar usuario.")}},logout(){localStorage.removeItem("username"),localStorage.removeItem("token"),this.$router.push("/")}}};const K=(0,l.A)(G,[["render",z],["__scopeId","data-v-32be6601"]]);var B=K;const Y={class:"login-container"},Z={class:"login-card"},ee={class:"form-grid"},re={class:"input-group"},se={class:"input-group"},oe={class:"input-group"},te={class:"input-group"},ae={class:"input-group"},ne={class:"input-group"},ie={class:"input-group"},le={class:"input-group"},ue={class:"input-group"},de={key:0,class:"error"},ce={class:"create-account-link"},pe={key:0,class:"success-message-card"};function me(e,r,s,a,n,i){const l=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",Y,[r[24]||(r[24]=(0,t.Lk)("div",{class:"particles"},null,-1)),(0,t.Lk)("div",Z,[r[22]||(r[22]=(0,t.Lk)("h2",null,"Crear Cuenta",-1)),(0,t.Lk)("form",{onSubmit:r[9]||(r[9]=(0,o.D$)(((...e)=>i.handleRegister&&i.handleRegister(...e)),["prevent"]))},[(0,t.Lk)("div",ee,[(0,t.Lk)("div",re,[r[10]||(r[10]=(0,t.Lk)("label",{for:"username"},"Usuario",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>n.user.username=e),id:"username",placeholder:"Ingrese su usuario",required:""},null,512),[[o.Jo,n.user.username]])]),(0,t.Lk)("div",se,[r[11]||(r[11]=(0,t.Lk)("label",{for:"firstName"},"Nombre",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>n.user.firstName=e),id:"firstName",placeholder:"Ingrese su nombre",required:""},null,512),[[o.Jo,n.user.firstName]])]),(0,t.Lk)("div",oe,[r[12]||(r[12]=(0,t.Lk)("label",{for:"lastName"},"Apellido",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[2]||(r[2]=e=>n.user.lastName=e),id:"lastName",placeholder:"Ingrese su apellido",required:""},null,512),[[o.Jo,n.user.lastName]])]),(0,t.Lk)("div",te,[r[13]||(r[13]=(0,t.Lk)("label",{for:"email"},"Correo Electrónico",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[3]||(r[3]=e=>n.user.email=e),id:"email",type:"email",placeholder:"Ingrese su correo",required:""},null,512),[[o.Jo,n.user.email]])]),(0,t.Lk)("div",ae,[r[14]||(r[14]=(0,t.Lk)("label",{for:"phone"},"Teléfono",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[4]||(r[4]=e=>n.user.phone=e),id:"phone",placeholder:"Ingrese su teléfono"},null,512),[[o.Jo,n.user.phone]])]),(0,t.Lk)("div",ne,[r[15]||(r[15]=(0,t.Lk)("label",{for:"position"},"Puesto",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[5]||(r[5]=e=>n.user.position=e),id:"position",placeholder:"Ingrese su puesto",required:""},null,512),[[o.Jo,n.user.position]])]),(0,t.Lk)("div",ie,[r[16]||(r[16]=(0,t.Lk)("label",{for:"department"},"Departamento",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[6]||(r[6]=e=>n.user.department=e),id:"department",placeholder:"Ingrese su departamento",required:""},null,512),[[o.Jo,n.user.department]])]),(0,t.Lk)("div",le,[r[17]||(r[17]=(0,t.Lk)("label",{for:"hireDate"},"Fecha de Contratación",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[7]||(r[7]=e=>n.user.hireDate=e),id:"hireDate",type:"date",required:""},null,512),[[o.Jo,n.user.hireDate]])]),(0,t.Lk)("div",ue,[r[18]||(r[18]=(0,t.Lk)("label",{for:"password"},"Contraseña",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[8]||(r[8]=e=>n.user.password=e),id:"password",type:"password",placeholder:"Ingrese su contraseña",required:""},null,512),[[o.Jo,n.user.password]])])]),r[19]||(r[19]=(0,t.Lk)("button",{type:"submit"},"Crear Cuenta",-1)),n.errorMessage?((0,t.uX)(),(0,t.CE)("p",de,(0,p.v_)(n.errorMessage),1)):(0,t.Q3)("",!0)],32),(0,t.Lk)("div",ce,[(0,t.Lk)("p",null,[r[21]||(r[21]=(0,t.eW)("¿Ya tienes cuenta? ")),(0,t.bF)(l,{to:"/"},{default:(0,t.k6)((()=>r[20]||(r[20]=[(0,t.eW)("Iniciar sesión")]))),_:1})])])]),n.showSuccessMessage?((0,t.uX)(),(0,t.CE)("div",pe,r[23]||(r[23]=[(0,t.Lk)("p",null,"Registro exitoso",-1)]))):(0,t.Q3)("",!0)])}var he={data(){return{user:{username:"",firstName:"",lastName:"",email:"",phone:"",position:"",department:"",hireDate:"",password:""},errorMessage:"",showSuccessMessage:!1}},methods:{async handleRegister(){try{if(!this.user.password||""===this.user.password.trim())return void(this.errorMessage="La contraseña no puede estar vacía.");const e={...this.user,passwordHash:this.user.password},r=await U.register(e);r.success?(this.showSuccessMessage=!0,setTimeout((()=>{this.$router.push("/home")}),3e3)):this.errorMessage=r.message||"Ocurrió un error al registrar el usuario."}catch(e){this.errorMessage=e.response?.data?.message||"Ocurrió un error al registrar el usuario."}}}};const ke=(0,l.A)(he,[["render",me],["__scopeId","data-v-6fb7645d"]]);var Le=ke;const ge=[{path:"/",component:C},{path:"/home",component:B},{path:"/register",component:Le}],fe=(0,c.aE)({history:(0,c.LA)(),routes:ge});var be=fe;(0,o.Ef)(d).use(be).mount("#app")}},r={};function s(o){var t=r[o];if(void 0!==t)return t.exports;var a=r[o]={exports:{}};return e[o].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(r,o,t,a){if(!o){var n=1/0;for(d=0;d<e.length;d++){o=e[d][0],t=e[d][1],a=e[d][2];for(var i=!0,l=0;l<o.length;l++)(!1&a||n>=a)&&Object.keys(s.O).every((function(e){return s.O[e](o[l])}))?o.splice(l--,1):(i=!1,a<n&&(n=a));if(i){e.splice(d--,1);var u=t();void 0!==u&&(r=u)}}return r}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,t,a]}}(),function(){s.d=function(e,r){for(var o in r)s.o(r,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={524:0};s.O.j=function(r){return 0===e[r]};var r=function(r,o){var t,a,n=o[0],i=o[1],l=o[2],u=0;if(n.some((function(r){return 0!==e[r]}))){for(t in i)s.o(i,t)&&(s.m[t]=i[t]);if(l)var d=l(s)}for(r&&r(o);u<n.length;u++)a=n[u],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},o=self["webpackChunkprofessional_web_development"]=self["webpackChunkprofessional_web_development"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=s.O(void 0,[504],(function(){return s(7532)}));o=s.O(o)})();
//# sourceMappingURL=app.4e3262e1.js.map