$(document).ready(() => {
  const slickOptions = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Next</button>;',
  };

  setInterval(() => {
    const numbersCollection = document.querySelectorAll(".counter__number");

    numbersCollection.forEach((number) => {
      const currentNumber = parseInt(number.innerHTML);
      number.innerHTML = currentNumber + 1;
    });
  }, 1000);

  

  $(".slider").slick(slickOptions);

  $(".footer__form-button").on("click", () => {
    const email = $("#email").val();
    Email.send({
      Host: "smtp.yourisp.com",
      Username: "username",
      Password: "password",
      To: "leol_portes@hotmail.com",
      From: email,
      Subject: "Please add me to your newsletter",
      Body:
        'Hello! Please add me to your newsletter. That ${email} is my email.',
    }).then((message) => alert(message));
  });
});

