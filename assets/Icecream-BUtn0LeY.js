import{r as a,a as x,j as s,L as o,b as N}from"./index-ChVg3LyN.js";/* empty css                       */const v=()=>{const[c,r]=a.useState([]),[n,d]=a.useState(!0),[l,m]=a.useState(null),{wishlistItems:h,addToWishlist:p,removeFromWishlist:g}=x();a.useEffect(()=>{(async()=>{try{d(!0);const i=await N.get("https://backend-testofindia.onrender.com/api/recipe?category=icecream");console.log("API Response for Ice Cream Recipes:",i.data),i.data&&i.data.data?r(i.data.data):(r([]),console.log("No recipes found."))}catch(i){console.error("Error fetching ice cream recipes:",i),m(i.message)}finally{d(!1)}})()},[]);const t=e=>h.some(i=>i.id===e),f=e=>{t(e._id)?g(e._id):p({id:e._id,name:e.RecipeName,image:e.Images||"/images/default-recipe.jpg"})};return n?s.jsx("div",{children:"Loading..."}):l?s.jsxs("div",{children:["Error: ",l]}):s.jsxs("div",{className:"diet-detail-page",children:[s.jsx("h1",{className:"diet-detail-title",children:"Ice Cream Recipes"}),s.jsx("div",{className:"diet-recipe-grid",children:c.length===0?s.jsx("p",{className:"no-recipes-message",children:"No recipes found"}):c.map(e=>{const i=e.RecipeName||"Unknown Recipe";return s.jsxs("div",{className:"diet-recipe-card",children:[s.jsx(o,{to:`/recipe/${e._id}`,className:"diet-recipe-link",children:s.jsxs("div",{className:"diet-recipe-content",children:[e.Images?s.jsx("img",{src:e.Images,alt:i,className:"diet-recipe-image"}):s.jsx("p",{className:"diet-recipe-no-image",children:"No image available"}),s.jsx("h3",{className:"diet-recipe-title",children:i})]})}),s.jsx(o,{to:`/recipe/${e._id}`,className:"diet-view-recipe-button ",children:"View Recipe"}),s.jsx("div",{className:`wishlist-icon ${t(e._id)?"active":""}`,onClick:()=>f(e),"aria-label":`Add or remove ${i} from wishlist`,children:s.jsx("i",{className:`bi ${t(e._id)?"bi-heart-fill":"bi-heart"}`})})]},e._id)})})]})};export{v as default};
