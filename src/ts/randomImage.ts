let images=[{name:'image_1.jpeg',title:'Modèle : lamborghini Countach',annee:'Année : 1999',Motorisation:'Motorisation : 5.5L'},{name:'image_2.jpeg',title:'Modèle : Mercedes Class C AMG',annee:'Année : 2012',Motorisation:'Motorisation : 4.5L '},{name:'image_3.jpeg',title:'Modèle : BMW M4',annee:'Année : 2019',Motorisation:'Motorisation : 3.0L '},{name:'image_4.jpeg',title:'Modèle : Pagani Zonda',annee:'Année : 2020',Motorisation:'Motorisation : 7.0L'},{name:'image_5.jpeg',title:'Modèle : Chevrolet',annee:'Année : 1952',Motorisation:'Motorisation : 2.0L'},{name:'image_6.jpeg',title:'Modèle : Ferrari',annee:'Année : 1986',Motorisation:'Motorisation : 5.2L'},{name:'image_7.jpeg',title:'Modèle : Bugatti Divo',annee:'Année : 2021',Motorisation:'Motorisation : 8.0L'},{name:'image_8.jpeg',title:'Modèle : Mercedes G63 AMG',annee:'Année : 2018',Motorisation:'Motorisation : 6.3L'},{name:'image_9.jpeg',title:'Modèle :Ford Mustang',annee:'Année : 1969',Motorisation:'Motorisation : 4.0L'},{name:'image_10.jpeg',title:'Modèle : Audi R8',annee:'Année : 2013',Motorisation:'Motorisation : 5.5L'},{name:'image_11.jpeg',title:'Modèle : Land Rover Defender',annee:'Année : 1995',Motorisation:'Motorisation : 2.0L'},{name:'image_12.jpeg',title:'Modèle : Ford GT',annee:'Année : 1953',Motorisation:'Motorisation : 4.0L'},{name:'image_13.jpeg',title:'Modèle : Volkwagen Combi',annee:'Année : 1966',Motorisation:'Motorisation : 1.6L'},{name:'image_14.png',title:'Modèle : Lamborghini Huracan',annee:'Année : 2016',Motorisation:'Motorisation : 4.5L'}]

//fond d'ecran
let background = <HTMLElement>document.getElementById('pageContent');
//url aleatoire
let random_image = images[Math.floor(Math.random() * images.length)];
let random_url = `url(images/${random_image.name})`;
background.style.backgroundImage = random_url;
//section avec titre et paragraphes
let pictInfo = document.getElementById('pictInfo');
//Page accueil : efface les infos de l'image precedente avant le chargement de la page
if (pictInfo) {
    while(pictInfo.firstChild){
        pictInfo.removeChild(pictInfo.firstChild)
    }
    //ajoute les infos de la nouvelle image lors du chargement d'une nouvelle page
    //ajout du titre 
    let titre = document.createElement('h1');
    let pictTile = document.createTextNode(random_image.title);
    titre.appendChild(pictTile);
    pictInfo.appendChild(titre)
    //ajout de l'annee
    let premierParagraphe = document.createElement('p');
    let annee = document.createTextNode(random_image.annee);
    premierParagraphe.appendChild(annee);
    pictInfo.appendChild(premierParagraphe);
    //ajout de la cylindree
    let secondParagraphe = document.createElement('p');
    let cylindree = document.createTextNode(random_image.Motorisation);
    secondParagraphe.appendChild(cylindree);
    pictInfo.appendChild(secondParagraphe);
}