const btn = document.querySelector('#btn');
const img = document.querySelector('.chat');

const getImg = () => {
    fetch("https://picsum.photos/1600/1000")
        .then((data) => {
            document.querySelector('.chat').innerHTML = `<img id="chat" src=${data.url} alt="kitten placed behind a wooden wall" class="banner"/>`
        })
}
btn.addEventListener('click', () => getImg()); 
// themes
const theme = document.querySelectorAll('.theme')

theme.forEach((item) => {
    item.addEventListener('click', (e) => {   
        document.body.classList.remove('salmontheme', 'blacktheme', 'yellowtheme');
        switch (e.target.id) {
            case "dark":        
                document.body.classList.add('darktheme');
                break;
            case "yellow":
                document.body.classList.add('yellowtheme');
                break;
            case "salmon":  
                document.body.classList.add('salmontheme');
        }
    })
})

//youtube stuff 

let input = document.querySelector('#video-name')
const btnvideo = document.querySelector('#btn-video')
const video = document.querySelector('.video')
let link = " "

input.addEventListener("input", (e) => {
    changeLink(e.target.value) ;
    
});
btnvideo.addEventListener('click', (e) => {
    if (link) {
        video.innerHTML = `<iframe src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
});
const changeLink = (linktochange) => {
    let embed = linktochange.replace('watch?v=', "embed/");
    link = embed.split('&')[0];
    console.log(link)
}
//www.youtube.com/embed/QB1DTl7HFnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//www.youtube.com/watch?v=QB1DTl7HFnc&t=4124s&ab_channel=FromScratch-D%C3%A9veloppementWeb

