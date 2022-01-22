let galleriesRaw = '{"gal1": {"title": "Bretagne 2019", "images": ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"]},"gal2":{ "title": "Sacramento 2017", "images": ["image-7.jpg","image-8.jpg","image-9.jpg","image-10.jpg","image-11.jpg","image-12.jpg","image-13.jpg","image-14.jpg"]}}';
let galleries = JSON.parse(galleriesRaw);
let bigImageContainer = <HTMLElement>document.getElementById('galleryContainer');
let searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get('id');
let keys = Object.keys(galleries) as Array<string>;

if(id && keys.includes(id)) {
    let gallery = <HTMLElement>document.querySelector('#singleGallery ul');
    let titleGallery = <HTMLElement>document.querySelector('#singleGallery h1');
    //ajoute le titre
    titleGallery.textContent = galleries[id].title;
    //ajoute les images
    galleries[id].images.forEach((image: string) => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = `images/${image}`;
        let element = li.appendChild(img);
        gallery.appendChild(element)
        //Afficher l'image en grand
        element.addEventListener('click', showPict);
    });
}else window.location.href = 'galleries.html';

//Pour afficher les images en grand lors du click 
function showPict(e:Event) {
    let image = <HTMLImageElement>e.target;
    let bigImage = <HTMLImageElement>document.querySelector('#galleryContainer img');
    bigImage.src = image.src;
    bigImageContainer.classList.add('visible');
    bigImageContainer.style.pointerEvents = "auto";
}

//pour reduire la photo onclick
bigImageContainer.addEventListener('click', function (e:Event) { 
    if(e.target === this) {
        let bigImageContainer = <HTMLElement>document.getElementById('galleryContainer');
        bigImageContainer.classList.remove('visible');
        bigImageContainer.style.pointerEvents = "none";
    }
});

