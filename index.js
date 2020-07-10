
$.get("https://srv-file14.gofile.io/download/aQ6ID3/AudioNameList.txt", function(data) {

  var NumberOfDrumButtons = document.querySelectorAll("button").length;
  var AudioNameList = data.split(',');

  function SelectAudio(ArrayofAudioNames, UnitNameString){
    var SelectedAudioArrays =[];
    for (var i = 0; i < ArrayofAudioNames.length; i++){
      if (ArrayofAudioNames[i].includes(UnitNameString)) {
        SelectedAudioArrays.push(ArrayofAudioNames[i]);} }
    var j = Math.floor((Math.random() * SelectedAudioArrays.length));

    return SelectedAudioArrays[j];
  }



  for (var i = 0; i < NumberOfDrumButtons; i++) {
    var unitname = document.querySelectorAll("button")[i].getAttribute("value");
    var unitURL = "url(images/"+unitname
    document.querySelectorAll("button")[i].style.backgroundImage = unitURL+".jpg)"

    document.querySelectorAll("button")[i].addEventListener("click", function() {
      var SCVAudio = new Audio("Audios/"+SelectAudio(AudioNameList,this.getAttribute("value")));
      SCVAudio.play();
    });

    document.querySelectorAll("button")[i].addEventListener("mouseover", function() {
    this.style.backgroundImage ="url(images/"+this.getAttribute("value")+".gif)"
    });

    document.querySelectorAll("button")[i].addEventListener("mouseout", function() {
      this.style.backgroundImage ="url(images/"+this.getAttribute("value")+".jpg)"
    });





  }

$(document).ready(function(){
  $(".unit-portrait").hover(
    function(){
    $(this).animate({
      marginTop: "-=1%",},200);
    },
    function(){
      $(this).animate({
        marginTop:"0%"
      },200);
    }
  );
});
});
