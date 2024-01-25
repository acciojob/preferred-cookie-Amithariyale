//your JS code here. If required.

const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
	e.preventDefault();

	const d = new Date();
    d.setTime(d.getTime() + (60 * 60 * 24 * 1000));
    //set a cookie
    document.cookie = `fontSize=${form.fontsize.value}; expires=${d.toUTCString()}`
    document.cookie = `fontColor=${form.fontcolor.value}; expires=${d.toUTCString()}`
	// console.log(document.cookie)
})

document.addEventListener("DOMContentLoaded",()=>{
	const arr=document.cookie.split("; ").map((item)=>item.split("="));
	const myCookieObj=Object.fromEntries(arr);
	// console.log(myCookieObj);

	form.fontsize.value=myCookieObj.fontSize ?? "16";
	form.fontcolor.value=myCookieObj.fontColor ?? "#000000";
})






