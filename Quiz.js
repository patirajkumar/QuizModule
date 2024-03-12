let questions=[
 {
   question: "What is the full form of CSS",
   option: [
     "Cascading Sheet Styling",
     "Cascading Style Sheet",
     "Common Style Sheet",
     "None of the above",
   ],
   ans: "B",
   score: 1,
 },
 {
   question: "What is the full form of HTML",
   option: [
     "HighText Machine Language",
     "HyperText Machine Language",
     "HyperText Markup Language",
     "None of these",
   ],
   ans: "C",
   score: 1,
 },
 {
   question: "<input> is a:",
   option: [
     "a format tag",
     "an empty tag",
     "All of the above",
     "None of the above",
   ],
   ans: "B",
   score: 1,
 },
 {
   question: "Which attribute is used to provide an unique name to an element",
   option: [
     "class",
     "id",
     "type",
     "None of the above",
   ],
   ans: "B",
   score: 1,
 },
 {
   question: "A program in HTML can be rendered and read by",
   option: [
     "Web Browser",
     "Server",
     "Interpreter",
     "None of the above",
   ],
   ans: "A",
   score: 1,
 },
 {
   question: "The HTML tags are",
   option: [
     "case-sensitive",
     "in upper case",
     "case-insensitive",
     "in lower case",
   ],
   ans: "C",
   score: 1,
 },
 {
   question: "Which are the attributes of tag",
   option: [
     "method",
     "action",
     "both a & b",
     "none of the above",
   ],
   ans: "C",
   score: 1,
 },
 {
   question: "Who created JavaScript?",
   option: [
     "James Gosling",
     "Brendan Eich",
     "Tim Berners-Lee",
     "Hakon Wium Lie",
   ],
   ans: "B",
   score: 1,
 },
 {
   question: "The type of JavaScript language is",
   option: [
     "object-oriented",
     "object-based",
     "functional programming",
     "all of the above",
   ],
   ans:"B",
   score: 1,
 },
 {
   question: "JavaScript ignores",
   option: [
     "newlines",
     "tabs",
     "spaces",
     "all of the above",
   ],
   ans: "D",
   score: 1,
 }
];
var s=0,i=0,j;
function setques(){
  document.getElementById("ques").innerHTML=questions[i].question;
  document.getElementById("f1").innerHTML=questions[i].option[0];
  document.getElementById("f2").innerHTML=questions[i].option[1];
  document.getElementById("f3").innerHTML=questions[i].option[2];
  document.getElementById("f4").innerHTML=questions[i].option[3];
}
function chk(){
 let answer=-1;
 let res=document.getElementById("res");
 let sub=document.getElementById("sub");
 let sub2=document.getElementById("sub2");
 var ch=document.getElementsByName("ques1");
 if(sub.innerText=='Submit'){
   for(j=0;j<ch.length;j++){
     if(ch[j].checked){
       answer=ch[j].value;
       break;
     }
   }
   if(answer==-1){
     alert("Please select an option.");
     setques();
   }
   else{
     if(answer==questions[i].ans){
     s+=1;
     res.innerHTML="Correct";
     res.style.background="lightgrey";
     }
     else{
     res.innerHTML="Incorrect";
     res.style.background="lightgrey";
     }
     sub.style.visibility="hidden";
     let sub1=document.getElementById("sub1");
     sub1.style.visibility="visible";
    }
 }
 else if(sub2.innerText=='Restart'){
   window.location.reload();
 }
 else{
   if(i==9){
     document.getElementById("hd").innerHTML="Score: "+s;
     document.getElementById("p").innerHTML="ANSWER KEY";
     var x=document.getElementById("q");
     var y=document.createElement("ul");
     x.innerHTML="";
     y.id="an";
     y.style.lineHeight="2";
     x.appendChild(y);
       for(j=0;j<10;j++){
         var z=document.createElement("li");
         y.appendChild(z);
         z.innerHTML=questions[j].question+" - ";
         var q=questions[j].ans;
         if(q=='A')
           z.innerHTML+="<span>"+questions[j].option[0]+"</span>";
         if(q=='B')
           z.innerHTML+="<span>"+questions[j].option[1]+"</span>";
         if(q=='C')
           z.innerHTML+="<span>"+questions[j].option[2]+"</span>";
         if(q=='D')
           z.innerHTML+="<span>"+questions[j].option[3]+"</span>";
       }
     let sub1=document.getElementById("sub1");
     sub1.style.visibility="hidden";
     let sub2=document.getElementById("sub2");
     sub2.style.visibility="visible";
     res.innerHTML="";
     res.style.background="";
   }
   else{
     i++;
     let sub=document.getElementById("sub");
     sub.style.visibility="visible";
     let sub1=document.getElementById("sub1");
     sub1.style.visibility="hidden";
     res.innerHTML="";
     res.style.background="";
     for(j=0;j<ch.length;j++)
       ch[j].checked=false;
     setques();
   }
 }
}
