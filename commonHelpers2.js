import"./assets/styles-65863cc7.js";const l=document.querySelector(".feedback-form"),o="feedback-form-state",e={email:"",message:""},s=l.elements.message,m=l.elements.email,t=JSON.parse(localStorage.getItem(o));t?(s.value=t.message,m.value=t.email,e.email=t.email,e.message=t.message):(s.value="",m.value="");function r(a){a.target.name==="email"?e.email=a.target.value.trim():a.target.name==="message"&&(e.message=a.target.value.trim()),localStorage.setItem(localStorageKey,JSON.stringify(e))}l.addEventListener("input",r);function i(a){a.preventDefault(),s.value.trim()!==""&&m.value.trim()!==""?(console.log(e),localStorage.removeItem(localStorageKey),e.email="",e.message="",l.reset()):alert("Fill please all fields")}l.addEventListener("submit",i);
//# sourceMappingURL=commonHelpers2.js.map