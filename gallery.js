slide= document.createElement("IMG");
 containerdiv = document.getElementById("container");
overlayContainerdiv = document.getElementById("overlayContainer");
galleryImages = new Array(); 
n=0; s=0; 


//filter files by extension from all files selected by the user
   

function filterFiles(fileList) {
        var filteredFiles = [];
        var pripSel = document.getElementById('pripona');
        var pripona = pripSel.options[pripSel.selectedIndex].value;
        console.log('pripona=' + pripona);
        for (var i = 0, file; file = fileList[i]; i++) {
            if (endsWithIgnoreCase(file.name, pripona))
                filteredFiles.push(file);
        }
        return filteredFiles;
    }

    //JavaSript lacks this method on Strings
    function endsWithIgnoreCase(str, suffix) {
        return str.toLowerCase().indexOf(suffix.toLowerCase(), str.length - suffix.length) !== -1;
    }


function loadDir()
{
  var fileToLoad; var k= galleryImages.length;

   var filesSelected =filterFiles(document.getElementById('dir_input').files);


 if (filesSelected.length > 0)
    {
       
for(i=0; i<filesSelected.length; i++){
 fileToLoad = filesSelected[i];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                galleryImages[k] = document.createElement("img");
                galleryImages[k].src = fileLoadedEvent.target.result;
                containerdiv.appendChild(galleryImages[k]); k=k+1;       
            };
            
            fileReader.readAsDataURL(fileToLoad);
        }
}                              
    }
}








// Drop down punjiri screen

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(dropDownName) {
    document.getElementById(dropDownName).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }}

 
// start slide show

  function closeGallery(){
slideClose(containerdiv);
  }

 function openGallery(){

   slideOpen(containerdiv);
containerdiv.style.border="1px solid khaki";
  }

function stop(){

  s=1;
}

function closeSlide(){
slideClose(overlayContainerdiv);
}

function start(){
  s=0;   
  if(galleryImages.length==0) alert("Error! No images to start slide show. Add images and try again.");
  else{
slideOpen(overlayContainerdiv);
slideit();}
}


//variable that will increment through the images
var step=0; 

function slideit(){
  //if browser does not support the image object, exit.
n= galleryImages.length;

 if (!document.images)
   return;
 
 if(step==0) {
    slide.setAttribute("src", "galleryImages[0].jpg");
    slide.setAttribute("width", "304");
    slide.setAttribute("width", "228");
    slide.setAttribute("alt", "artist");
   overlayContainerdiv.appendChild(slide);
 }

slide.src = galleryImages[step].src;
 
if (step<n-1)
   step++;
 else
   step=0;
 if(s==0){ 
 setTimeout("slideit()",1000);
 }
 if(s==1)
   return;

}





function slideOpen(el){
el.style.transition="height 0.5s linear 0s";
el.style.height="100%";
}

function slideClose(el){
  
el.style.transition="height 1.0s linear 0s";
el.style.height="0px";
el.style.border="none";
}



function loadImageFileAsURL()
{

   var containerdiv = document.getElementById("container");

    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
              length=galleryImages.length;
              galleryImages[length]           = document.createElement("img");
               galleryImages[length].src = fileLoadedEvent.target.result;
                containerdiv.appendChild(galleryImages[length]  );       
                // document.body.appendChild(imageLoaded);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}


