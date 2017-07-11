function openlink(element){
    linkMenu=element.getAttribute("class");
    divsContent=document.getElementsByClassName("content");
    console.log(divsContent);
    attribureClass="content";
    console.log(linkMenu);
    for(i=0;i<divsContent.length;i++)
    {
        divsContent[i].setAttribute("class",attribureClass);
    }
    document.getElementById(linkMenu).setAttribute("class",attribureClass+" active");
}