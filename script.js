function switchTab(tab_name)
{
    document.getElementsByClassName("active-tab")[0].classList.remove("active-tab");
    document.getElementById(tab_name).classList.add("active-tab");
    document.getElementById("service-images").style.backgroundImage = "url(images/" + tab_name + ".jpg)";
    
}

switchTab("design_tab");