function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,o){return r&&_defineProperties(e.prototype,r),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{zrcO:function(e,r,o){"use strict";o.r(r),o.d(r,"UsersPageModule",(function(){return y}));var n=o("ofXK"),i=o("3Pt+"),t=o("TEn/"),s=o("tyNb"),l=o("mrSG"),c=o("fXoL"),a=o("xdv0"),u=o("zpKS");function b(e,r){1&e&&(c.Nb(0,"ion-label",13),c.jc(1," Name is required.\n"),c.Mb())}function m(e,r){1&e&&(c.Nb(0,"ion-label",13),c.jc(1," Address is required.\n"),c.Mb())}function d(e,r){1&e&&(c.Nb(0,"ion-label",13),c.jc(1," DOB is required.\n"),c.Mb())}function f(e,r){1&e&&(c.Nb(0,"ion-label",13),c.jc(1," Email is required.\n"),c.Mb())}function p(e,r){1&e&&(c.Nb(0,"ion-label",13),c.jc(1," phone No required.\n"),c.Mb())}function h(e,r){if(1&e&&(c.Nb(0,"ion-select-option"),c.jc(1),c.Mb()),2&e){var o=r.$implicit;c.Ab(1),c.kc(o)}}function N(e,r){1&e&&(c.Nb(0,"ion-label",13),c.jc(1," Profession is required.\n"),c.Mb())}var g,M,j,F=[{path:"",component:(g=function(){function e(r,o,n,i){var t=this;_classCallCheck(this,e),this.fb=r,this.userService=o,this.router=n,this.homepage=i,this.professions=["Public Sector","Private Sector","Others"],this.submit=function(){console.log(t.userForm.value),t.userService.createUser(t.userForm.value).subscribe((function(e){console.log(e),t.gotResponse()}))},this.gotResponse=function(){return Object(l.__awaiter)(t,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.back();case 2:this.homepage.refresh();case 3:case"end":return e.stop()}}),e,this)})))}}return _createClass(e,[{key:"ngOnInit",value:function(){this.userForm=this.fb.group({name:["",[i.j.required]],address:["",[i.j.required]],DOB:["",[i.j.required]],email:["",[i.j.required]],phoneNo:["",[i.j.required]],profession:["",[i.j.required]]})}},{key:"back",value:function(){console.log("navigate"),this.router.navigate(["/home"])}}]),e}(),g.\u0275fac=function(e){return new(e||g)(c.Kb(i.a),c.Kb(a.a),c.Kb(s.g),c.Kb(u.a))},g.\u0275cmp=c.Eb({type:g,selectors:[["app-users"]],decls:43,vars:9,consts:[["slot","start",3,"click"],["name","arrow-back",2,"margin-left","20px"],[3,"formGroup","ngSubmit"],["position","floating"],["formControlName","name","type","text"],["color","danger",4,"ngIf"],["formControlName","address","placeholder","Enter your address here..."],["formControlName","DOB","displayFormat","DD MMM, YYYY"],["formControlName","email","type","email"],["formControlName","phoneNo","type","number"],["formControlName","profession"],[4,"ngFor","ngForOf"],["type","submit","color","primary","expand","block",3,"disabled"],["color","danger"]],template:function(e,r){1&e&&(c.Nb(0,"ion-header"),c.Nb(1,"ion-toolbar"),c.Nb(2,"ion-label",0),c.Vb("click",(function(){return r.back()})),c.Lb(3,"ion-icon",1),c.Mb(),c.Nb(4,"ion-title"),c.jc(5," Create User"),c.Mb(),c.Mb(),c.Mb(),c.Nb(6,"ion-content"),c.Nb(7,"form",2),c.Vb("ngSubmit",(function(){return r.submit()})),c.Nb(8,"ion-item"),c.Nb(9,"ion-label",3),c.jc(10,"Name"),c.Mb(),c.Lb(11,"ion-input",4),c.Mb(),c.ic(12,b,2,0,"ion-label",5),c.Nb(13,"ion-item"),c.Nb(14,"ion-label",3),c.jc(15,"Address"),c.Mb(),c.Lb(16,"ion-textarea",6),c.Mb(),c.ic(17,m,2,0,"ion-label",5),c.Nb(18,"ion-item"),c.Nb(19,"ion-label",3),c.jc(20,"DOB"),c.Mb(),c.Lb(21,"ion-datetime",7),c.Mb(),c.ic(22,d,2,0,"ion-label",5),c.Nb(23,"ion-item"),c.Nb(24,"ion-label",3),c.jc(25,"Email"),c.Mb(),c.Lb(26,"ion-input",8),c.Mb(),c.ic(27,f,2,0,"ion-label",5),c.Nb(28,"ion-item"),c.Nb(29,"ion-label",3),c.jc(30,"Phone No"),c.Mb(),c.Lb(31,"ion-input",9),c.Mb(),c.ic(32,p,2,0,"ion-label",5),c.Nb(33,"ion-item"),c.Nb(34,"ion-label",3),c.jc(35,"Profession"),c.Mb(),c.Nb(36,"ion-select",10),c.ic(37,h,2,1,"ion-select-option",11),c.Mb(),c.Mb(),c.ic(38,N,2,0,"ion-label",5),c.Nb(39,"ion-row"),c.Nb(40,"ion-col"),c.Nb(41,"ion-button",12),c.jc(42,"Submit"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.Ab(7),c.dc("formGroup",r.userForm),c.Ab(5),c.dc("ngIf",(null==r.userForm.controls.name.errors?null:r.userForm.controls.name.errors.required)&&r.userForm.controls.name.touched),c.Ab(5),c.dc("ngIf",(null==r.userForm.controls.address.errors?null:r.userForm.controls.address.errors.required)&&r.userForm.controls.address.touched),c.Ab(5),c.dc("ngIf",(null==r.userForm.controls.DOB.errors?null:r.userForm.controls.DOB.errors.required)&&r.userForm.controls.DOB.touched),c.Ab(5),c.dc("ngIf",(null==r.userForm.controls.email.errors?null:r.userForm.controls.email.errors.required)&&r.userForm.controls.email.touched),c.Ab(5),c.dc("ngIf",(null==r.userForm.controls.phoneNo.errors?null:r.userForm.controls.phoneNo.errors.required)&&r.userForm.controls.phoneNo.touched),c.Ab(5),c.dc("ngForOf",r.professions),c.Ab(1),c.dc("ngIf",(null==r.userForm.controls.profession.errors?null:r.userForm.controls.profession.errors.required)&&r.userForm.controls.profession.touched),c.Ab(3),c.dc("disabled",r.userForm.invalid))},directives:[t.g,t.v,t.n,t.h,t.u,t.e,i.k,i.h,i.c,t.j,t.i,t.C,i.g,i.b,n.j,t.t,t.f,t.B,t.y,t.r,n.i,t.q,t.d,t.c,t.s],styles:[""]}),g)}],v=((j=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:j}),j.\u0275inj=c.Hb({factory:function(e){return new(e||j)},imports:[[s.i.forChild(F)],s.i]}),j),y=((M=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:M}),M.\u0275inj=c.Hb({factory:function(e){return new(e||M)},providers:[u.a],imports:[[n.b,i.d,t.w,v,i.i]]}),M)}}]);