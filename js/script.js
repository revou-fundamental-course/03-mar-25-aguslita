var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
     showDivs((slideIndex += n));
}

function showDivs(n) {
     var i;
     var imgList = document.getElementsByClassName("img-slideshow");
     if (n > imgList.length) slideIndex = 1;
     else if (n < 1) slideIndex = imgList.length;

     for (i = 0; i < imgList.length; i ++) {
          imgList[i].style.display = "none";
     }
     imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
     plusDivs(1);
}, 2000);

function validateForm() {
     // Get value from input
     const nama = document.getElementById("nama");
     const tanggal = document.getElementById("tanggal");
     const jenisKelamin = document.getElementsByClassName("radio-group");
     const pesan = document.getElementById("pesan");
 
     // check if input is empty
     if (nama.value == "" && tanggal.value == "" && jenisKelamin.value == "" && pesan.value == "") {
         alert("silakan isi data lengkap");
         return 0;
     } else {
         if (nama.value == "") {
             alert("Nama tidak boleh kosong!");
             return 0;
         } else
 
             if (tanggal.value == "") {
                 alert("isi tanggal lahir");
                 return 0;
             } else

             if (jenisKelamin.value == "") {
                 alert("pilih jenis kelamin!");
                 return 0;
             } else

             if (pesan.value == "") {
                 alert("pesan tidak boleh kosong!");
                 return 0;
               } else {
                     document.getElementById("header-message").style.display = "block";
 
                     const node = document.createElement("p");
                     checkTime();
                     const textnode = document.createTextNode(nama.value + " (" + tanggal.value + ", " + clock + ")" + " : " + pesan.value);
                     node.style.textTransform = "capitalize";
                     node.appendChild(textnode);
                     document.getElementById("display-name").appendChild(node);
                 }
     }
     document.getElementById("form-id").reset()
 }
