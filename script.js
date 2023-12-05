var textn=document.getElementById('textn');
        var btn=document.getElementById('btn');
        btn.onclick=function(){
            console.log(1);
            var speech=new SpeechSynthesisUtterance();
            if(textn.value==""){
                alert("Please Enter a Text");
                speech.text="please Enter a Text";
            }
            else{
                speech.text=textn.value;
            }
            speechSynthesis.speak(speech);
        }