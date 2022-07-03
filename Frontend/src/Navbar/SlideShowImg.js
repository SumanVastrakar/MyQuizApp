import React, { useState } from 'react'

export default function SlideShowImg() {
    const [image, setImage] = useState(0)
    var movie_image = ["https://images.squarespace-cdn.com/content/v1/56eb012f27d4bd29de975fae/1606175323764-EX6V7MQFXTSSD0UYNIEH/counter_1.jpeg?format=1000w", "https://0.soompi.io/wp-content/uploads/2020/06/06192041/my-unfamiliar-family.jpeg", "https://i.pinimg.com/474x/cf/ff/47/cfff47cd5a1f19463e7a34179c7532d6.jpg", "https://qph.fs.quoracdn.net/main-qimg-137ed16c995f2d343deab649385bbeef", "https://d3tvwjfge35btc.cloudfront.net/Assets/45/859/L_p0067985945.jpg", "https://upload.wikimedia.org/wikipedia/en/6/69/Legend_of_the_Blue_Sea_Poster.jpg", "https://i.pinimg.com/originals/11/61/a8/1161a8d88723f38b7113acaea81f12cc.jpg"];

const startShow = () =>{
    let i = 0;
let x = setInterval(() =>{
if( i === movie_image.length){
    i = 0;
}
   setImage(i)
i++;

}, 500)
clearInterval(x)
}

startShow()

  return (
    <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  width="100%px" height="600px" src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width="100%px" height="600px" src="https://miro.medium.com/max/1838/1*Xt3l-_54wuxdsHpiolGP3g.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width="100%px" height="600px" src="https://miro.medium.com/max/1040/1*0lgunvVYa8gZ_sfMHflyvw.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width="100%px" height="600px" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/CSS.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width="100%px" height="600px" src="https://geek.justjoin.it/wp-content/uploads/2021/09/nodejs-logo.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width="100%px" height="600px" src="https://miro.medium.com/max/1400/1*8ETcaw-gA1dYW4EFxqGK3w.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width="100%px" height="600px" src="https://miro.medium.com/max/1400/0*POj0vsz3b2UhWb2S.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width="100%px" height="600px" src="https://www.techfor.id/wp-content/uploads/2019/12/html.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
