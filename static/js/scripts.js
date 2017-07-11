function addQuestions(e){
    e.preventDefault();
    console.log("OK");
    var questions=document.getElementsByClassName("question");
    console.log(questions[questions.length-1]);
    mainDiv=document.getElementById("questionForm");
    newQuestions=document.createElement('div');
    newQuestions.setAttribute('class', "question");
    headQuestions=document.createElement('h2');
    headQuestions.innerHTML='Новый вопрос<span onclick="change(event)"> &#9998;</span> <span onclick="remove(event)">&#10006;</span>'
    fieldset=document.createElement("fieldset");
    textarea=document.createElement("textarea");
    fieldset.appendChild(textarea);
    newQuestions.appendChild(headQuestions);
    newQuestions.appendChild(fieldset);
    mainDiv.insertBefore(newQuestions,questions[questions.length-1].nextSibling);
}
function remove(e){
    console.log("remove");
    result = confirm("Вы уверены?");
    if(result)
        e.target.parentNode.parentNode.remove();
}
function change(e){
    e.target.parentNode.innerHTML="<form><input type='text'><input type='submit' value='OK'><button>Отмена</button></form>";
}
function changeType(element){
    elementClass=element.parentNode.getAttribute("class");
    elementsP=element.parentNode.getElementsByTagName('p');
    console.log(element)
    switch(element.value){
        case "1":{
            element.parentNode.innerHTML="OK1";
            break;
        }
        case "2":{
            element.parentNode.innerHTML="OK2";
            break;
        }
        case "3":{
            while(elementsP.length){
                elementsP[0].remove();
            }
            newTagP=document.createElement('p');
            newTagTA=document.createElement('textarea');
            newTagTA.setAttribute("cols","40")
            newTagTA.setAttribute("rows","3")
            newTagTA.setAttribute("resize","vertical")
            newTagP.appendChild(newTagTA);
            element.parentNode.appendChild(newTagP);
        }
    }
}