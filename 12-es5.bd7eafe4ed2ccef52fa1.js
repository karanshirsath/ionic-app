function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,r,n){return r&&_defineProperties(e.prototype,r),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{X3zk:function(e,r,n){"use strict";n.r(r),n.d(r,"LoginPageModule",(function(){return g}));var o=n("ofXK"),t=n("3Pt+"),i=n("TEn/"),s=n("tyNb"),a=n("mrSG"),l=n("fXoL");function c(e,r){1&e&&(l.Nb(0,"ion-label",6),l.jc(1," User Name is required. "),l.Mb())}function u(e,r){1&e&&(l.Nb(0,"ion-label",6),l.jc(1," Password is required. "),l.Mb())}var b,d,m,f=[{path:"",component:(b=function(){function e(r,n,o){_classCallCheck(this,e),this.fb=r,this.router=n,this.alrtCntrlr=o}return _createClass(e,[{key:"ngOnInit",value:function(){this.loginForm=this.fb.group({userName:["",[t.j.required]],password:["",[t.j.required]]})}},{key:"submit",value:function(){return Object(a.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("karanshirsath"!=this.loginForm.value.userName||"karan123"!=this.loginForm.value.password){e.next=4;break}this.router.navigate(["home"]),e.next=9;break;case 4:return e.next=6,this.alrtCntrlr.create({header:"Alert",subHeader:"Failed To Login",message:"Please Enter Correct Credentials",buttons:["OK"]});case 6:return r=e.sent,e.next=9,r.present();case 9:case"end":return e.stop()}}),e,this)})))}}]),e}(),b.\u0275fac=function(e){return new(e||b)(l.Kb(t.a),l.Kb(s.g),l.Kb(i.a))},b.\u0275cmp=l.Eb({type:b,selectors:[["app-login"]],decls:20,vars:4,consts:[[3,"formGroup","ngSubmit"],["position","floating"],["formControlName","userName","type","text"],["color","danger",4,"ngIf"],["formControlName","password","type","password"],["type","submit","color","primary","expand","block",3,"disabled"],["color","danger"]],template:function(e,r){1&e&&(l.Nb(0,"ion-header"),l.Nb(1,"ion-toolbar"),l.Nb(2,"ion-title"),l.jc(3,"login"),l.Mb(),l.Mb(),l.Mb(),l.Nb(4,"ion-content"),l.Nb(5,"form",0),l.Vb("ngSubmit",(function(){return r.submit()})),l.Nb(6,"ion-item"),l.Nb(7,"ion-label",1),l.jc(8,"Username"),l.Mb(),l.Lb(9,"ion-input",2),l.Mb(),l.ic(10,c,2,0,"ion-label",3),l.Nb(11,"ion-item"),l.Nb(12,"ion-label",1),l.jc(13,"Password"),l.Mb(),l.Lb(14,"ion-input",4),l.Mb(),l.ic(15,u,2,0,"ion-label",3),l.Nb(16,"ion-row"),l.Nb(17,"ion-col"),l.Nb(18,"ion-button",5),l.jc(19,"Login"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&e&&(l.Ab(5),l.dc("formGroup",r.loginForm),l.Ab(5),l.dc("ngIf",(null==r.loginForm.controls.userName.errors?null:r.loginForm.controls.userName.errors.required)&&r.loginForm.controls.userName.touched),l.Ab(5),l.dc("ngIf",(null==r.loginForm.controls.password.errors?null:r.loginForm.controls.password.errors.required)&&r.loginForm.controls.password.touched),l.Ab(3),l.dc("disabled",r.loginForm.invalid))},directives:[i.g,i.v,i.u,i.e,t.k,t.h,t.c,i.j,i.n,i.i,i.C,t.g,t.b,o.j,i.q,i.d,i.c],styles:[""]}),b)}],p=((m=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ib({type:m}),m.\u0275inj=l.Hb({factory:function(e){return new(e||m)},imports:[[s.i.forChild(f)],s.i]}),m),g=((d=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ib({type:d}),d.\u0275inj=l.Hb({factory:function(e){return new(e||d)},imports:[[o.b,t.d,i.w,p,t.i,t.d]]}),d)}}]);