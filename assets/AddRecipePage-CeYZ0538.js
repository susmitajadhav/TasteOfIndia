import{r as n,c as P,j as a}from"./index-ChVg3LyN.js";import{e as I}from"./index-DpmFZVTh.js";function L(){const[r,o]=n.useState(null),[l,u]=n.useState(!0),[p,h]=n.useState(!1),[s,f]=n.useState({RecipeName:"",Category:"",Ingredients:"",Process:"",TotalCookTime:"",PrepTime:"",CookTime:"",SettingTime:"",SoakingTime:"",RestingTime:"",Serves:"",Taste:"",Color:"",Course:"",DifficultyLevel:"",State:"",Video:"",CookingType:"",Cuisine:"",Occasion:"",Drinks:"",Images:null});n.useState([]);const c=P(),m=localStorage.getItem("authToken");n.useEffect(()=>{(async()=>{if(!m){o(!1),u(!1);return}try{if((await fetch("/api/validate-token",{headers:{Authorization:`Bearer ${m}`}})).ok)o(!0);else throw new Error("Token validation failed")}catch(i){console.error("Error during token validation:",i),o(!1)}finally{u(!1)}})()},[m]);const t=e=>{const{name:i,value:d,type:N,files:b}=e.target;f({...s,[i]:N==="file"?b[0]:d})},g=async e=>{e.preventDefault();try{const i={recipeName:s.RecipeName,category:s.Category,ingredients:s.Ingredients,process:s.Process,totalCookTime:s.TotalCookTime,prepTime:s.PrepTime,cookTime:s.CookTime,settingTime:s.SettingTime,soakingTime:s.SoakingTime,restingTime:s.RestingTime,serves:s.Serves,taste:s.Taste,color:s.Color,course:s.Course,difficultyLevel:s.DifficultyLevel,state:s.State,video:s.Video,cookingType:s.CookingType,cuisine:s.Cuisine,occasion:s.Occasion,drinks:s.Drinks,images:s.Images?s.Images.name:""},d=await I.send("service_xzljbuu","template_33n3j32",i,"mpaGaNvRfp0sKHW5P");console.log("Email sent successfully:",d.text),h(!0),setTimeout(()=>{h(!1),c("/")},3e3)}catch(i){console.error("Failed to send email:",i)}};if(n.useEffect(()=>{!l&&r===!1&&c("/login")},[l,r,c]),l)return a.jsx("p",{children:"Loading..."});if(r===!1)return a.jsx("p",{children:"Redirecting to login..."});const j=["Vegetarian","Non-Vegetarian","Vegan"],x=["Sweet","Sour","Salty","Spicy","Pungent"],v=["Breakfast","Lunch","Dinner","Snacks"],C=["1","2","3"],S=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],T=["Maharashtrian","South Indian","North Indian","West Indian","North-East Indian","Gujarati","Rajasthani","Kashmiri"];return a.jsx("div",{className:"add-recipe-page",children:a.jsxs("div",{className:"add-recipe-container",children:[a.jsx("h2",{className:"form-header",children:"Add Recipe"}),a.jsxs("form",{onSubmit:g,className:"animated-form",children:[Object.keys(s).map(e=>e==="Images"?a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:e,children:"Upload Image"}),a.jsx("input",{type:"file",id:e,name:e,accept:"image/*",onChange:t,className:"form-control"})]},e):e==="Category"?a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:e,children:"Category"}),a.jsxs("select",{id:e,name:e,value:s[e],onChange:t,className:"form-control",children:[a.jsx("option",{value:"",children:"Select Category"}),j.map(i=>a.jsx("option",{value:i,children:i},i))]})]},e):e==="Taste"?a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:e,children:"Taste"}),a.jsxs("select",{id:e,name:e,value:s[e],onChange:t,className:"form-control",children:[a.jsx("option",{value:"",children:"Select Taste"}),x.map(i=>a.jsx("option",{value:i,children:i},i))]})]},e):e==="Course"?a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:e,children:"Course"}),a.jsxs("select",{id:e,name:e,value:s[e],onChange:t,className:"form-control",children:[a.jsx("option",{value:"",children:"Select Course"}),v.map(i=>a.jsx("option",{value:i,children:i},i))]})]},e):e==="DifficultyLevel"?a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:e,children:"Difficulty Level"}),a.jsxs("select",{id:e,name:e,value:s[e],onChange:t,className:"form-control",children:[a.jsx("option",{value:"",children:"Select Difficulty Level"}),C.map(i=>a.jsx("option",{value:i,children:i},i))]})]},e):e==="State"?a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:e,children:"State"}),a.jsxs("select",{id:e,name:e,value:s[e],onChange:t,className:"form-control",children:[a.jsx("option",{value:"",children:"Select State"}),S.map(i=>a.jsx("option",{value:i,children:i},i))]})]},e):e==="Cuisine"?a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:e,children:"Cuisine"}),a.jsxs("select",{id:e,name:e,value:s[e],onChange:t,className:"form-control",children:[a.jsx("option",{value:"",children:"Select Cuisine"}),T.map(i=>a.jsx("option",{value:i,children:i},i))]})]},e):a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:e,children:e.replace(/([A-Z])/g," $1")}),a.jsx("input",{type:"text",id:e,name:e,value:s[e],onChange:t,className:"form-control"})]},e)),a.jsx("button",{type:"submit",className:"submit-button",children:"Submit"})]}),p&&a.jsx("div",{className:"popup",children:a.jsx("p",{children:"Recipe submitted successfully!"})})]})})}export{L as default};
