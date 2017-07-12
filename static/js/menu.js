function openlink(element){
    divsContent=document.getElementsByClassName("content");
    console.log(divsContent);
    attribureClass="content";
    for(i=0;i<divsContent.length;i++)
    {
        divsContent[i].setAttribute("class",attribureClass);
    }
    document.getElementById(element).setAttribute("class",attribureClass+" active");
}