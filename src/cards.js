
const divCardOne = document.querySelector('.card-one');
const divCardTwo = document.querySelector('.card-two');
const divCardThree = document.querySelector('.card-three');

function cards () {

class Cards {
    constructor(src, alt, header, paragraph) {
        this.src = src;
        this.alt = alt;
        this.header = header;
        this.paragraph = paragraph;
    }

    showCard(div) {
        div.innerHTML = `
            <div class="card-img">
            <img src=${this.src} alt=${this.alt}>
            <div class="card-text">
            <h1>${this.header}</h1>
            <p>${this.paragraph}</p>
            </div>
            </div>`;
        div.append();
    }
}

const cardOne = new Cards(
    '/My-web-site/img/rica.jpg',
    'Lake Rica',
    'Lake Rica',
    'the biggest in Abkhazia, area 1.49 km²');
cardOne.showCard(divCardOne);

const cardTwo = new Cards(
    '/My-web-site/img/mount.jpg',
    'Red Lawn',
    'Mountains in Sochi',
    ' The width of the gorge is 30 m along the bottom, the height of the side walls decreases 1300 m, the total length is 82 km');
cardTwo.showCard(divCardTwo);

const cardThree = new Cards(
    '/My-web-site/img/op.jpg',
    'Olimp Park',
    'The Olympic Park',
    'Is a public area and one of the main attractions of Greater Sochi, the main complex facility of the 2014 Winter Olympics');
cardThree.showCard(divCardThree);
}
export default cards;
