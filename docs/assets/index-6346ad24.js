import{r as ce,j as Ie}from"./index-734b79ba.js";import{E as Ne,V as S,M as N,T as j,Q as de,S as pe,a as O,b as je,C as He,F as ke,G as ve,P as Ce,W as Ye,c as _e,A as ze}from"./three.module-d13e5444.js";const ue={type:"change"},W={type:"start"},me={type:"end"};class Ke extends Ne{constructor(p,u){super(),this.object=p,this.domElement=u,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:N.ROTATE,MIDDLE:N.DOLLY,RIGHT:N.PAN},this.touches={ONE:j.ROTATE,TWO:j.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",X),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",X),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(ue),e.update(),a=o.NONE},this.update=function(){const t=new S,n=new de().setFromUnitVectors(p.up,new S(0,1,0)),f=n.clone().invert(),b=new S,M=new de,K=new S,L=2*Math.PI;return function(){const le=e.object.position;t.copy(le).sub(e.target),t.applyQuaternion(n),r.setFromVector3(t),e.autoRotate&&a===o.NONE&&k(fe()),e.enableDamping?(r.theta+=h.theta*e.dampingFactor,r.phi+=h.phi*e.dampingFactor):(r.theta+=h.theta,r.phi+=h.phi);let x=e.minAzimuthAngle,A=e.maxAzimuthAngle;return isFinite(x)&&isFinite(A)&&(x<-Math.PI?x+=L:x>Math.PI&&(x-=L),A<-Math.PI?A+=L:A>Math.PI&&(A-=L),x<=A?r.theta=Math.max(x,Math.min(A,r.theta)):r.theta=r.theta>(x+A)/2?Math.max(x,r.theta):Math.min(A,r.theta)),r.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=w,r.radius=Math.max(e.minDistance,Math.min(e.maxDistance,r.radius)),e.enableDamping===!0?e.target.addScaledVector(s,e.dampingFactor):e.target.add(s),t.setFromSpherical(r),t.applyQuaternion(f),le.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,s.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),s.set(0,0,0)),w=1,d||b.distanceToSquared(e.object.position)>c||8*(1-M.dot(e.object.quaternion))>c||K.distanceToSquared(e.target)>0?(e.dispatchEvent(ue),b.copy(e.object.position),M.copy(e.object.quaternion),K.copy(e.target),d=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",se),e.domElement.removeEventListener("pointerdown",ae),e.domElement.removeEventListener("pointercancel",v),e.domElement.removeEventListener("wheel",ie),e.domElement.removeEventListener("pointermove",U),e.domElement.removeEventListener("pointerup",v),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",X),e._domElementKeyEvents=null)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const c=1e-6,r=new pe,h=new pe;let w=1;const s=new S;let d=!1;const m=new O,y=new O,P=new O,g=new O,l=new O,T=new O,R=new O,D=new O,H=new O,i=[],Y={};function fe(){return 2*Math.PI/60/60*e.autoRotateSpeed}function _(){return Math.pow(.95,e.zoomSpeed)}function k(t){h.theta-=t}function z(t){h.phi-=t}const G=function(){const t=new S;return function(f,b){t.setFromMatrixColumn(b,0),t.multiplyScalar(-f),s.add(t)}}(),V=function(){const t=new S;return function(f,b){e.screenSpacePanning===!0?t.setFromMatrixColumn(b,1):(t.setFromMatrixColumn(b,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(f),s.add(t)}}(),I=function(){const t=new S;return function(f,b){const M=e.domElement;if(e.object.isPerspectiveCamera){const K=e.object.position;t.copy(K).sub(e.target);let L=t.length();L*=Math.tan(e.object.fov/2*Math.PI/180),G(2*f*L/M.clientHeight,e.object.matrix),V(2*b*L/M.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(G(f*(e.object.right-e.object.left)/e.object.zoom/M.clientWidth,e.object.matrix),V(b*(e.object.top-e.object.bottom)/e.object.zoom/M.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function F(t){e.object.isPerspectiveCamera?w/=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*t)),e.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function q(t){e.object.isPerspectiveCamera?w*=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/t)),e.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function B(t){m.set(t.clientX,t.clientY)}function he(t){R.set(t.clientX,t.clientY)}function Q(t){g.set(t.clientX,t.clientY)}function be(t){y.set(t.clientX,t.clientY),P.subVectors(y,m).multiplyScalar(e.rotateSpeed);const n=e.domElement;k(2*Math.PI*P.x/n.clientHeight),z(2*Math.PI*P.y/n.clientHeight),m.copy(y),e.update()}function Ee(t){D.set(t.clientX,t.clientY),H.subVectors(D,R),H.y>0?F(_()):H.y<0&&q(_()),R.copy(D),e.update()}function ye(t){l.set(t.clientX,t.clientY),T.subVectors(l,g).multiplyScalar(e.panSpeed),I(T.x,T.y),g.copy(l),e.update()}function ge(t){t.deltaY<0?q(_()):t.deltaY>0&&F(_()),e.update()}function we(t){let n=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?z(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):I(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?z(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):I(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?k(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):I(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?k(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):I(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function J(){if(i.length===1)m.set(i[0].pageX,i[0].pageY);else{const t=.5*(i[0].pageX+i[1].pageX),n=.5*(i[0].pageY+i[1].pageY);m.set(t,n)}}function $(){if(i.length===1)g.set(i[0].pageX,i[0].pageY);else{const t=.5*(i[0].pageX+i[1].pageX),n=.5*(i[0].pageY+i[1].pageY);g.set(t,n)}}function ee(){const t=i[0].pageX-i[1].pageX,n=i[0].pageY-i[1].pageY,f=Math.sqrt(t*t+n*n);R.set(0,f)}function Pe(){e.enableZoom&&ee(),e.enablePan&&$()}function Te(){e.enableZoom&&ee(),e.enableRotate&&J()}function te(t){if(i.length==1)y.set(t.pageX,t.pageY);else{const f=Z(t),b=.5*(t.pageX+f.x),M=.5*(t.pageY+f.y);y.set(b,M)}P.subVectors(y,m).multiplyScalar(e.rotateSpeed);const n=e.domElement;k(2*Math.PI*P.x/n.clientHeight),z(2*Math.PI*P.y/n.clientHeight),m.copy(y)}function ne(t){if(i.length===1)l.set(t.pageX,t.pageY);else{const n=Z(t),f=.5*(t.pageX+n.x),b=.5*(t.pageY+n.y);l.set(f,b)}T.subVectors(l,g).multiplyScalar(e.panSpeed),I(T.x,T.y),g.copy(l)}function oe(t){const n=Z(t),f=t.pageX-n.x,b=t.pageY-n.y,M=Math.sqrt(f*f+b*b);D.set(0,M),H.set(0,Math.pow(D.y/R.y,e.zoomSpeed)),F(H.y),R.copy(D)}function Me(t){e.enableZoom&&oe(t),e.enablePan&&ne(t)}function Oe(t){e.enableZoom&&oe(t),e.enableRotate&&te(t)}function ae(t){e.enabled!==!1&&(i.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",U),e.domElement.addEventListener("pointerup",v)),Le(t),t.pointerType==="touch"?Se(t):xe(t))}function U(t){e.enabled!==!1&&(t.pointerType==="touch"?Re(t):Ae(t))}function v(t){De(t),i.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",U),e.domElement.removeEventListener("pointerup",v)),e.dispatchEvent(me),a=o.NONE}function xe(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case N.DOLLY:if(e.enableZoom===!1)return;he(t),a=o.DOLLY;break;case N.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;Q(t),a=o.PAN}else{if(e.enableRotate===!1)return;B(t),a=o.ROTATE}break;case N.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;B(t),a=o.ROTATE}else{if(e.enablePan===!1)return;Q(t),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&e.dispatchEvent(W)}function Ae(t){switch(a){case o.ROTATE:if(e.enableRotate===!1)return;be(t);break;case o.DOLLY:if(e.enableZoom===!1)return;Ee(t);break;case o.PAN:if(e.enablePan===!1)return;ye(t);break}}function ie(t){e.enabled===!1||e.enableZoom===!1||a!==o.NONE||(t.preventDefault(),e.dispatchEvent(W),ge(t),e.dispatchEvent(me))}function X(t){e.enabled===!1||e.enablePan===!1||we(t)}function Se(t){switch(re(t),i.length){case 1:switch(e.touches.ONE){case j.ROTATE:if(e.enableRotate===!1)return;J(),a=o.TOUCH_ROTATE;break;case j.PAN:if(e.enablePan===!1)return;$(),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(e.touches.TWO){case j.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Pe(),a=o.TOUCH_DOLLY_PAN;break;case j.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Te(),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&e.dispatchEvent(W)}function Re(t){switch(re(t),a){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;te(t),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;ne(t),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Me(t),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Oe(t),e.update();break;default:a=o.NONE}}function se(t){e.enabled!==!1&&t.preventDefault()}function Le(t){i.push(t)}function De(t){delete Y[t.pointerId];for(let n=0;n<i.length;n++)if(i[n].pointerId==t.pointerId){i.splice(n,1);return}}function re(t){let n=Y[t.pointerId];n===void 0&&(n=new O,Y[t.pointerId]=n),n.set(t.pageX,t.pageY)}function Z(t){const n=t.pointerId===i[0].pointerId?i[1]:i[0];return Y[n.pointerId]}e.domElement.addEventListener("contextmenu",se),e.domElement.addEventListener("pointerdown",ae),e.domElement.addEventListener("pointercancel",v),e.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}}var C=function(){var E=0,p=document.createElement("div");p.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",p.addEventListener("click",function(s){s.preventDefault(),e(++E%p.children.length)},!1);function u(s){return p.appendChild(s.dom),s}function e(s){for(var d=0;d<p.children.length;d++)p.children[d].style.display=d===s?"block":"none";E=s}var o=(performance||Date).now(),a=o,c=0,r=u(new C.Panel("FPS","#0ff","#002")),h=u(new C.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var w=u(new C.Panel("MB","#f08","#201"));return e(0),{REVISION:16,dom:p,addPanel:u,showPanel:e,begin:function(){o=(performance||Date).now()},end:function(){c++;var s=(performance||Date).now();if(h.update(s-o,200),s>=a+1e3&&(r.update(c*1e3/(s-a),100),a=s,c=0,w)){var d=performance.memory;w.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return s},update:function(){o=this.end()},domElement:p,setMode:e}};C.Panel=function(E,p,u){var e=1/0,o=0,a=Math.round,c=a(window.devicePixelRatio||1),r=80*c,h=48*c,w=3*c,s=2*c,d=3*c,m=15*c,y=74*c,P=30*c,g=document.createElement("canvas");g.width=r,g.height=h,g.style.cssText="width:80px;height:48px";var l=g.getContext("2d");return l.font="bold "+9*c+"px Helvetica,Arial,sans-serif",l.textBaseline="top",l.fillStyle=u,l.fillRect(0,0,r,h),l.fillStyle=p,l.fillText(E,w,s),l.fillRect(d,m,y,P),l.fillStyle=u,l.globalAlpha=.9,l.fillRect(d,m,y,P),{dom:g,update:function(T,R){e=Math.min(e,T),o=Math.max(o,T),l.fillStyle=u,l.globalAlpha=1,l.fillRect(0,0,r,m),l.fillStyle=p,l.fillText(a(T)+" "+E+" ("+a(e)+"-"+a(o)+")",w,s),l.drawImage(g,d+c,m,y-c,P,d,m,y-c,P),l.fillRect(d+y-c,m,c,P),l.fillStyle=u,l.globalAlpha=.9,l.fillRect(d+y-c,m,c,a((1-T/R)*P))}}};const Fe=C,We=()=>{let E,p,u,e,o,a,c=[];const r=()=>{E=new je,E.background=new He("#333"),E.fog=new ke("#333",10,50),a=new ve(20,40,"",""),a.material.opacity=.2,a.material.depthWrite=!1,a.material.transparent=!0,E.add(a),p=new Ce(50,window.innerWidth/window.innerHeight,.1,100),p.position.set(4,1.5,-4.5),u=new Ye,u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(window.devicePixelRatio);const s=new _e("#fff");s.position.set(400,200,300),E.add(s);const d=new ze("#444");E.add(d);const m=document.querySelector("#car");m&&m.appendChild(u.domElement),e=new Ke(p,u.domElement),e.maxDistance=10,e.target.set(0,.5,0),o=new Fe,m&&m.appendChild(o.dom)},h=()=>{e.update();const s=-performance.now()/1e3;for(let d=0;d<c.length;d++)c[d].rotation.x=s*Math.PI*2;a.position.z=-s%1,u.render(E,p),o.update(),requestAnimationFrame(h)},w=()=>{p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(window.devicePixelRatio)};return ce.useEffect(()=>(r(),window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}),[]),ce.useEffect(()=>{h()},[window.innerWidth]),Ie.jsx("div",{id:"car"})};export{We as default};
