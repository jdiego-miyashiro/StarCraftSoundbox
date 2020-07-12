
$.get("https://srv-file14.gofile.io/download/aQ6ID3/AudioNameList.txt", function(data) {

  var NumberOfDrumButtons = document.querySelectorAll(".unit-portrait").length;
  var AudioNameList = data.split(',');



  for (var i = 0; i < NumberOfDrumButtons; i++) {
    var unitname = document.querySelectorAll(".unit-portrait")[i].getAttribute("value");
    var unitURL = "url(images/"+unitname
    document.querySelectorAll(".unit-portrait")[i].style.backgroundImage = unitURL+".jpg)"

    document.querySelectorAll(".unit-portrait")[i].addEventListener("click", function() {
      var SCVAudio = new Audio("Audios/"+SelectAudio(AudioNameList,this.getAttribute("value")));
      SCVAudio.play();
    });

  /*  document.querySelectorAll(".unit-portrait")[i].addEventListener("mouseover", function() {
    this.style.backgroundImage ="url(images/"+this.getAttribute("value")+".gif)"
    });
    document.querySelectorAll(".unit-portrait")[i].addEventListener("mouseout", function() {
      this.style.backgroundImage ="url(images/"+this.getAttribute("value")+".jpg)"
    });
*/
    function SelectAudio(ArrayofAudioNames, UnitNameString){
      var SelectedAudioArrays =[];
      for (var i = 0; i < ArrayofAudioNames.length; i++){
        if (ArrayofAudioNames[i].includes(UnitNameString)) {
          SelectedAudioArrays.push(ArrayofAudioNames[i]);} }
      var j = Math.floor((Math.random() * SelectedAudioArrays.length));

      return SelectedAudioArrays[j];
    }

  }

$(document).ready(function(){
  $(".unit-portrait").hover(
    function(){
    $(this).css('background-image',"url(images/"+$(this).attr("value")+".gif)")
    $(this).animate({
      marginTop: "-=1%",},200);
    },
    function(){
      $(this).css('background-image',"url(images/"+$(this).attr("value")+".jpg)")
      $(this).animate({
        marginTop:"0%"
      },200);
    }
  );
});
});
