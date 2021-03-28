/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{333:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(0),c=n(14),l={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},d=function(e){function t(code,n,details){var r=e.call(this,n)||this;return Object.setPrototypeOf(r,t.prototype),r.code=code,r.details=details,r}return Object(o.c)(t,e),t}(Error);var f=function(){function e(e,t){var n=this;this.auth=null,this.messaging=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((function(e){return n.auth=e}),(function(){})),this.messaging||t.get().then((function(e){return n.messaging=e}),(function(){}))}return e.prototype.getAuthToken=function(){return Object(o.b)(this,void 0,void 0,(function(){var e;return Object(o.d)(this,(function(t){switch(t.label){case 0:if(!this.auth)return[2,void 0];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.auth.getToken()];case 2:return(e=t.sent())?[2,e.accessToken]:[2,void 0];case 3:return t.sent(),[2,void 0];case 4:return[2]}}))}))},e.prototype.getInstanceIdToken=function(){return Object(o.b)(this,void 0,void 0,(function(){return Object(o.d)(this,(function(e){if(!this.messaging||!("Notification"in self)||"granted"!==Notification.permission)return[2,void 0];try{return[2,this.messaging.getToken()]}catch(e){return[2,void 0]}return[2]}))}))},e.prototype.getContext=function(){return Object(o.b)(this,void 0,void 0,(function(){var e,t;return Object(o.d)(this,(function(n){switch(n.label){case 0:return[4,this.getAuthToken()];case 1:return e=n.sent(),[4,this.getInstanceIdToken()];case 2:return t=n.sent(),[2,{authToken:e,instanceIdToken:t}]}}))}))},e}();function h(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}var v=function(){function e(){}return e.prototype.encode=function(data){var e=this;if(null==data)return null;if(data instanceof Number&&(data=data.valueOf()),"number"==typeof data&&isFinite(data))return data;if(!0===data||!1===data)return data;if("[object String]"===Object.prototype.toString.call(data))return data;if(Array.isArray(data))return data.map((function(t){return e.encode(t)}));if("function"==typeof data||"object"==typeof data)return h(data,(function(t){return e.encode(t)}));throw new Error("Data cannot be encoded in JSON: "+data)},e.prototype.decode=function(e){var t=this;if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":var n=Number(e.value);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+e);return n;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map((function(e){return t.decode(e)})):"function"==typeof e||"object"==typeof e?h(e,(function(e){return t.decode(e)})):e},e}();var m=function(){function e(e,t,n,r,o){var c=this;void 0===r&&(r="us-central1"),this.app_=e,this.fetchImpl=o,this.serializer=new v,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return Promise.resolve(c.deleteService())}},this.contextProvider=new f(t,n),this.cancelAllRequests=new Promise((function(e){c.deleteService=function(){return e()}}));try{var l=new URL(r);this.customDomain=l.origin,this.region="us-central1"}catch(e){this.customDomain=null,this.region=r}}return Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),e.prototype._url=function(e){var t=this.app_.options.projectId;return null!==this.emulatorOrigin?this.emulatorOrigin+"/"+t+"/"+this.region+"/"+e:null!==this.customDomain?this.customDomain+"/"+e:"https://"+this.region+"-"+t+".cloudfunctions.net/"+e},e.prototype.useEmulator=function(e,t){this.emulatorOrigin="http://"+e+":"+t},e.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},e.prototype.httpsCallable=function(e,t){var n=this;return function(data){return n.call(e,data,t||{})}},e.prototype.postJSON=function(e,body,t){return Object(o.b)(this,void 0,void 0,(function(){var n,r;return Object(o.d)(this,(function(o){switch(o.label){case 0:t["Content-Type"]="application/json",o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.fetchImpl(e,{method:"POST",body:JSON.stringify(body),headers:t})];case 2:return n=o.sent(),[3,4];case 3:return o.sent(),[2,{status:0,json:null}];case 4:r=null,o.label=5;case 5:return o.trys.push([5,7,,8]),[4,n.json()];case 6:return r=o.sent(),[3,8];case 7:return o.sent(),[3,8];case 8:return[2,{status:n.status,json:r}]}}))}))},e.prototype.call=function(e,data,t){return Object(o.b)(this,void 0,void 0,(function(){var n,body,r,c,f,h,v,m,y,w,N;return Object(o.d)(this,(function(o){switch(o.label){case 0:return n=this._url(e),data=this.serializer.encode(data),body={data:data},r={},[4,this.contextProvider.getContext()];case 1:return(c=o.sent()).authToken&&(r.Authorization="Bearer "+c.authToken),c.instanceIdToken&&(r["Firebase-Instance-ID-Token"]=c.instanceIdToken),f=t.timeout||7e4,h=function(e){var t,n=new Promise((function(n,r){t=setTimeout((function(){r(new d("deadline-exceeded","deadline-exceeded"))}),e)}));return{timer:t,promise:n}}(f),v=h.timer,m=h.promise,[4,Promise.race([O(v,this.postJSON(n,body,r)),m,O(v,this.cancelAllRequests)])];case 2:if(!(y=o.sent()))throw new d("cancelled","Firebase Functions instance was deleted.");if(w=function(e,t,n){var code=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),r=code,details=void 0;try{var o=t&&t.error;if(o){var c=o.status;if("string"==typeof c){if(!l[c])return new d("internal","internal");code=l[c],r=c}var f=o.message;"string"==typeof f&&(r=f),void 0!==(details=o.details)&&(details=n.decode(details))}}catch(e){}return"ok"===code?null:new d(code,r,details)}(y.status,y.json,this.serializer))throw w;if(!y.json)throw new d("internal","Response is not valid JSON object.");if(void 0===(N=y.json.data)&&(N=y.json.result),void 0===N)throw new d("internal","Response is missing data field.");return[2,{data:this.serializer.decode(N)}]}}))}))},e}();function O(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n;return Object(o.d)(this,(function(r){switch(r.label){case 0:return[4,t];case 1:return n=r.sent(),clearTimeout(e),[2,n]}}))}))}var y,w,N;y=r.a,w=fetch.bind(self),N={Functions:m},y.INTERNAL.registerComponent(new c.a("functions",(function(e,t){var n=t.instanceIdentifier,r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),c=e.getProvider("messaging");return new m(r,o,c,n,w)}),"PUBLIC").setServiceProps(N).setMultipleInstances(!0)),r.a.registerVersion("@firebase/functions","0.6.4")}}]);