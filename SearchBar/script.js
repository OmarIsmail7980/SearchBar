const searchIcon = document.querySelector(".search-icon i");
const search =  document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const close = document.querySelector(".search-input i")



searchIcon.addEventListener("click",()=>{ 

    searchIcon.parentElement.classList.add("change");
    search.classList.add("change");
    setTimeout(()=>{
        searchInput.focus();
    },1000)

})

close.addEventListener("click",()=>{
    searchIcon.parentElement.classList.remove("change");
    search.classList.remove("change");
})


