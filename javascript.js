/*fill boxes with random colors*/
pageLoad();
function pageLoad() {
  function fillBackgroundColor() {
    //Save elements
    const boxes = document.querySelectorAll(".underBottomWrap .boxesBox1");
    const sixEightBox = document.querySelectorAll(".inner1");

    //Colors array
    const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    //Loop start and fill it with random colors
    for (box of boxes) {
      //start with #
      let hex = "#";
      //[6] char
      for (var i = 0; i < 6; i++) {
        //Save one word or number
        let color = Math.floor(Math.random() * colors.length);
        //Add to hex +=  and do it 6 times
        hex += colors[color];
      }
      //save it into the box
      box.style.backgroundColor = hex;
    }
    //Loop start and fill it with random colors
    for (box of sixEightBox) {
      //start with #
      let hex = "#";
      //[6] char
      for (var i = 0; i < 6; i++) {
        //Save one word or number
        let color = Math.floor(Math.random() * colors.length);
        //Add to hex +=  and do it 6 times
        hex += colors[color];
      }
      //save it into the box
      box.style.backgroundColor = hex;
    }
  }
  //Call method outside the function();
  fillBackgroundColor();
}

/*container 1 tasks
Select languages and Save the BAG
[A]show into the alert function ()
[C]you can clear
[C]fill it up*/
languagesSelect();
function languagesSelect() {
  //Save elements
  const ulLi = document.querySelectorAll("UL LI");
  const ul = document.getElementsByTagName("UL")[0];
  const selectOption = document.getElementsByTagName("SELECT")[0];
  //Declar the array
  let languages = "";
  select();
  show();
  clear();
  fill();

  function select() {
    for (li of ulLi) {
      li.addEventListener("click", function () {
        console.log(this);
        this.style.display = "none";
        languages += `${this.textContent} `;
      });
    }
  }

  function show() {
    //Save elements for show
    const showBag = document
      .querySelector(".languagesBox2")
      .getElementsByTagName("BUTTON")[0];

    showBag.onclick = function () {
      if (languages == "") {
        alert("Your bag is empty");
      } else {
        alert(languages);
      }
    };
  }

  function clear() {
    //Save elements for clear
    const clearBag = document
      .querySelector(".languagesBox2")
      .getElementsByTagName("BUTTON")[2];
    clearBag.onclick = function () {
      for (li of ulLi) {
        if (li.style.display == "none") {
          li.style.display = "block";
        }
      }
      languages = "";
    };
  }

  function fill() {
    const fill = document
      .querySelector(".languagesBox2")
      .getElementsByTagName("BUTTON")[1];

    fill.onclick = function () {
      if (languages != "") {
        let items = languages.split(" ");
        for (let i = 0; i < items.length - 1; i++) {
          //Create element
          const option = document.createElement("OPTION");
          option.textContent = items[i];
          selectOption.appendChild(option);
        }
      } else {
        alert("First select any languages");
      }
    };
  }
}

/*container 2 tasks
Select background color
[A] cookies after restart the page still can use it!
[B] use Value
 */
selectBackground();
function selectBackground() {
  //Save elements
  const selectBG = document.getElementsByTagName("SELECT")[1];
  const colorsContainer = document.querySelector(".colorsContainer");
  selectBG.onclick = function (event) {
    //Set cookie which is doesnt work..
    document.cookie = `bgColor=${event.target.value}; expires ${new Date(
      9999,
      0,
      1
    ).toUTCString()}`;
    //split cookie
    let cookie = document.cookie.split("=");
    //use cookie!
    colorsContainer.style.backgroundColor = cookie[1];
  };
}

/*container 3 tasks
[A] Random color for button background and write it down for the user
[B] Random famous people names with img
*/
random();
function random() {
  //Save elements
  const rndButton = document
    .querySelector(".randomBox1")
    .getElementsByTagName("BUTTON")[0];
  const rndParagraf = document
    .querySelector(".randomBox1")
    .getElementsByTagName("P")[0];

  //Add event
  rndButton.onclick = function () {
    let clr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hash = "#";
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * clr.length);
      hash += clr[random];
    }
    rndButton.style.backgroundColor = hash;
    rndParagraf.innerHTML = hash;
  };

  //Save elements
  const famousButton = document
    .querySelector(".randomBox2")
    .getElementsByTagName("BUTTON")[0];
  const famousParagraf = document
    .querySelector(".randomBox2")
    .getElementsByTagName("P")[0];
  const famousImg = document
    .querySelector(".randomBox2")
    .getElementsByTagName("IMG")[0];

  //Object
  let famous = [
    {
      name: "Dwayne Johnson",
      img: 0,
    },
    {
      name: "Leonardo DiCaprio",
      img: 1,
    },
    {
      name: "Channing Tatum",
      img: 2,
    },
    {
      name: "Jennifer Aniston",
      img: 3,
    },
    {
      name: "Keanu Reeves",
      img: 4,
    },
  ];
  famousButton.addEventListener("click", function () {
    let random = Math.floor(Math.random() * famous.length);
    famousParagraf.innerHTML = famous[random].name;
    famousImg.src = `famous/pic${famous[random].img}.jpg`;
  });
}

/*container 4 tasks
[A] Upload landscape pictures
[B] prev / next 
[C] show picture number
*/
landscape();
function landscape() {
  //Save elements
  const pictureBox1 = document.querySelector(".picturesBox1");
  const pictureBox2 = document.querySelector(".picturesBox2");
  const prev = pictureBox2.getElementsByTagName("BUTTON")[0];
  const paragraf = pictureBox2.getElementsByTagName("P")[0];
  const next = pictureBox2.getElementsByTagName("BUTTON")[1];
  let counter = 0;

  prev.addEventListener("click", function () {
    if (counter == 0) {
      counter = 3;
    } else {
      counter--;
    }
    pictureBox1.style.background = `url(landscape/land${counter}.jpg) no-repeat`;
    pictureBox1.style.backgroundSize = "cover";
    paragraf.textContent = `Picture ${counter}`;
  });
  next.addEventListener("click", function () {
    if (counter == 3) {
      counter = 0;
    } else {
      counter++;
    }
    pictureBox1.style.background = `url(landscape/land${counter}.jpg) no-repeat`;
    pictureBox1.style.backgroundSize = "cover";
    paragraf.textContent = `Picture ${counter}`;
  });
}

/*container 5 tasks
[A] classList.add / classList.remove
[B]button show more / show less
*/
showMoreOrLess();
function showMoreOrLess() {
  //Save elements
  const paragraf = document
    .querySelector(".paragrafBox1")
    .getElementsByTagName("P")[0];

  const showMore = document
    .querySelector(".paragrafBox1")
    .getElementsByTagName("BUTTON")[0];

  showMore.addEventListener("click", function () {
    if (paragraf.className == "") {
      paragraf.classList.add("bigger");
      paragraf.style.backgroundColor = "green";
      showMore.innerHTML = "Show Less";
    } else {
      paragraf.classList.remove("bigger");
      showMore.innerHTML = "Show More";
      paragraf.style.backgroundColor = "gray";
    }
  });
}

/*container 6 tasks
[A]setInterval after click 
[B] 5 sec later hide it
*/
hideOut();
function hideOut() {
  //Save elements
  const hideOut = document.querySelector(".hideOutBox1");
  const clickMe = document
    .querySelector(".hideOutContainer")
    .getElementsByTagName("BUTTON")[0];

  clickMe.onclick = function () {
    hideOut.classList.add("show");

    setTimeout(remove, 3000);
    function remove() {
      hideOut.classList.remove("show");
    }
  };
}

/*Box 1
[A]setInterval after click 
[B] blur effect
*/
firstBox();
function firstBox() {
  const box1 = document.querySelectorAll(".underBottomWrap div")[0];
  box1.onclick = function () {
    box1.id = "box1";
    setTimeout(function () {
      box1.id = "";
    }, 1000);
  };
}

/*Box 2
[A]mouseover / out 
[B] sharp color, move out
*/
secondBox();
function secondBox() {
  const box2 = document.querySelectorAll(".underBottomWrap div")[1];
  box2.style.transition = "1s";

  box2.onmouseover = function () {
    box2.id = "box2";
  };
  box2.onmouseout = function () {
    box2.id = "";
  };
}

/*Box 3
[A]Random number 20 - 80
[B] change content inside the div 
*/
thirdBox();
function thirdBox() {
  const box3 = document.querySelectorAll(".underBottomWrap div")[2];
  box3.style.transition = "1s";

  box3.onclick = function () {
    const rand = Math.floor(Math.random() * (20, 80) + 1);
    box3.children[0].style.color = "red";
    box3.children[0].textContent = rand;
  };
}

/*Box 4
[A] change border radius at least 2 box
[B] add / remove or toggle
*/
fourthBox();
function fourthBox() {
  const box4 = document.querySelectorAll(".underBottomWrap div")[3];
  const loop = document.querySelectorAll(".underBottomWrap div");
  box4.onclick = function () {
    for (let i = 0; i < loop.length; i++) {
      loop[i].classList.toggle("radius");
    }
  };
}

/*Box 5
[A] hide it out
*/
fifth();
function fifth() {
  const box5 = document.querySelectorAll(".underBottomWrap div")[4];

  box5.onclick = function () {
    box5.id = "box5";
  };
}

/*Box 6
[A]submit and fill it your div with your input value
*/
sixth();
function sixth() {
  const inner1 = document.querySelector(".inner1");
  const span = inner1.children[0];
  const inner2six = document.querySelector(".inner2six");

  const form = inner2six.children[0];
  const input = form.children[0];
  const button = form.children[1];

  form.onsubmit = function (event) {
    event.preventDefault();
    span.textContent = input.value;
  };
}

/*Box 7
[A]clientX / clientY 
*/
seventh();
function seventh() {
  const box7 = document.querySelectorAll(".underBottomWrap div")[8];
  box7.onmousemove = function (event) {
    box7.children[0].style.fontSize = "1.8rem";
    box7.children[0].textContent = `X: ${event.clientX} Y: ${event.clientY}`;
  };
}

/*Box 8
[A]keypress key
[B]change number to your key
*/
eighth();
function eighth() {
  const outer2 = document.querySelector(".outer2");
  const inner1 = outer2.querySelector(".inner1");
  const inner2eight = document.querySelector(".inner2eight");

  inner2eight.children[0].onkeypress = function (event) {
    inner1.children[0].textContent = event.key;
  };
}
