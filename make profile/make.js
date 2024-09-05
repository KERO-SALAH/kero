function make() {
  const name = document.getElementById("name").value;
  const dis = document.getElementById("dis").value;
  const photo = document.getElementById("photo").value;
  const facebook = document.getElementById("facebook").value;
  const linkenin = document.getElementById("linkedin").value;
  const youtube = document.getElementById("youtube").value;
  const code = document.getElementById("code");

  const total = `<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}</title>
    <link rel="stylesheet" href="https://raw.githack.com/KERO-SALAH/Fox/main/make%20pro.css">
 </head>
  <body>
    <header>
      <h1>${name}</h1>
    </header>
    <div class="main">
      <div class="left">
        <div class="text">
          <p>
          ${dis}
          </p>
        </div>
        <div class="img">
          <img width="200" height="auto" src="${photo}">
        </div>
      </div>
      <div class="right">
        <div class="social">
          <h2 style="
              text-align: center;

              border-radius: 20px;
              display: inline-block;
            ">
            My social media accounts:
          </h2>
        </div>
        <div class="container">
          <div class="f">
            <span>Facebook</span><a href="${facebook}"><img width="50" height="50" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png" alt=""></a>
          </div>
          <div class="y">
            <span>Youtube</span>
            <a href="${youtube}"><img width="50" height="50" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png" alt=""></a>
          </div>
          
          
          <div class="l">
            <span>linkedin</span><a href="${linkenin}"><img width="50" height="50" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>  
    
     
    <div style="background-color: aliceblue; border-radius: 20px; margin: 20px 0px" class="container">
      <a href="#"><img width="100px" height="auto" src="https://www.wga.academy/wp-content/uploads/2019/02/%D8%A7%D8%B6%D8%BA%D8%B7-%D9%87%D9%86%D8%A7.png" alt="">
      </a>
      <h2 style="text-align: center; direction: rtl">اشترك في الكورس الان!</h2>
    </div>
    <script src="js/script.js"></script>
  

</body></html>
`;

  code.value = total;

}
