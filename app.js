
const url = "https://meme-api.com/gimme/wholesomememes";
let btn = document.querySelector('button');

let containers = document.querySelector(".containers");



async function generateMeme(){
    console.log("Start");
    let link = await fetch(url);
    let data = await link.json();
    // containers.innerHTML = "";
    let container = document.createElement('div');
    let title = document.createElement('div');
    let image = document.createElement('div');
    let author = document.createElement('div');

    container.classList.add('container');
    title.classList.add('title');
    image.classList.add('image');
    author.classList.add('author');

    let h3 = document.createElement('h3');
    let img = document.createElement('img');
    let para = document.createElement('p');

    h3.innerText = data.title;
    img.src = data.url;
    para.innerText = data.author;

    title.appendChild(h3);
    image.appendChild(img);
    author.appendChild(para);

    container.appendChild(title);
    container.appendChild(image);
    container.appendChild(author);
    containers.prepend(container);
    console.log("Finished");

}

btn.addEventListener('click', ()=>{
    console.log("Clicked!");
    generateMeme();
})



    
    
    


    