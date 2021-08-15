function switchTab(tab_name)
{
    document.getElementsByClassName("active-tab")[0].classList.remove("active-tab");
    document.getElementById(tab_name).classList.add("active-tab");
}

switchTab("design_tab");