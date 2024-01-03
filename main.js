//teachable is https://teachablemachine.withgoogle.com/models/LNsqLJlr9/model.json
function startHear(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LNsqLJlr9/model.json", modelLoad)
}
    function modelLoad(){
        console.log("We are coming")
        classifier.classify(gotResults)
    }

    function gotResults(error, results){
        if(error){
            console.error(error)
        }
        else{
            console.log(results)

            r = Math.floor(Math.random() * 255)+1
            g = Math.floor(Math.random() * 255)+1
            b = Math.floor(Math.random() * 255)+1

            document.getElementById("Sound").innerHTML = "Sound heard: "+results[0].label
            document.getElementById("Acc").innerHTML = "Accuracy: "+ (results[0].confidence * 100).toFixed(3)+"%"

            document.getElementById("Sound").style.color = "rgb("+r+","+g+","+b+")" 
            document.getElementById("Acc").style.color = "rgb("+r+","+g+","+b+")" 

            img1 = document.getElementById("monstah1")
            img2 = document.getElementById("monstah2")
            img3 = document.getElementById("monstah3")
            img4 = document.getElementById("monstah4")

            if(results[0].label == "clapping"){
                img1.src = "aliens-01.gif"
                img2.src = "aliens-02.png"
                img3.src = "aliens-03.png"
                img4.src = "aliens-04.png"
            }
            else if(results[0].label == "clicking"){
                img1.src = "aliens-01.png"
                img2.src = "aliens-02.gif"
                img3.src = "aliens-03.png"
                img4.src = "aliens-04.png"
            }
            else if(results[0].label == "bell"){
                img1.src = "aliens-01.png"
                img2.src = "aliens-02.png"
                img3.src = "aliens-03.gif"
                img4.src = "aliens-04.png"
            }
            else{
                img1.src = "aliens-01.png"
                img2.src = "aliens-02.png"
                img3.src = "aliens-03.png"
                img4.src = "aliens-04.gif"
            }

            
        }
    }


