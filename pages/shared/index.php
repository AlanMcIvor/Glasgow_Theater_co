<?php

include "./includes/header.php"

?>

<main>
  <section aria-label="Newest Shows">
    <div class="carousel" data-carousel>
      <button class="carousel_btn prev" data-carousel-button="prev"> &#8656;</button>
      <button class="carousel_btn next" data-carousel-button="next"> &#8658;</button>
      <ul data-slides>
        <li class="slide" data-active>
          <div class="hero_container">
            <img src="../../assets/images/hero.png" alt="An image of grease the musical">
            <div class="hero_info">
              <h3>Grease: The Musical</h3>
              <p>Tue 15th June - Sat 22nd June</p>
              <div class="btn_container">
                <button class="btn main_btn">Book</button>
                <button class="btn">Info</button>
              </div>
            </div>
          </div>

        </li>
        <li class="slide">
          <img src="" alt="">
        </li>
        <li class="slide">
          <img src="../../assets/images/hero.png" alt="">
        </li>
        <li class="slide">
          <img src="../../assets/images/hero.png" alt="">
        </li>
        <li class="slide">
          <img src="../../assets/images/hero.png" alt="">
        </li>
        <li class="slide">
          <img src="../../assets/images/hero.png" alt="">
        </li>
      </ul>
    </div>
  </section>
</main>

<script src="../../js/mobileMenu.js"></script>
<script src="../../js/carousel.js"></script>
</body>

</html>