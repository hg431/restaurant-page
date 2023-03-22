export function homepage() {
    const content = document.getElementById("content");
    const heading = document.createElement("h1");
    heading.innerText = "Thai restaurant";
    content.appendChild(heading);
    const image = document.createElement("img");
    image.src = 'restaurant.jpg';
    content.appendChild(image);
    const text1 = document.createElement("p")
    text1.innerText = 
      "What a wonderful, delicious restaurant. Come visit.";
    content.appendChild(text1);
    const text2 = document.createElement("p")
    text2.innerText = 
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Possimus excepturi enim dolorem. Dignissimos ipsam laborum 
    omnis nam dolorem sit itaque ullam quia quasi, dolor accusamus 
    nihil delectus ab alias velit!`;
    content.appendChild(text2);
}

