var autos=["mazda","audi","toyota","renauld"];
var principal=document.getElementById("principal");
var ul=document.createElement("ul");
for(i=0; i<autos.length;i++){
    var li=document.createElement("li");
    li.innerHTML=autos[i];
    li.style.display="inline-block";
    li.style.marginRight="10px";
    li.classList.add("item");
    li.style.fontSize="20px";
    ul.appendChild(li);
}
principal.appendChild(ul);