const page_main = document.querySelector('.main')
const page_image = document.querySelector('.day-image img')
const page_name = document.querySelector('.day-name')
const page_quote = document.querySelector('.day-quote')

const patterns = {
    morning : {
        backgroundColor: "#F3B583",
        fontColor: "#FFAD00",
        imgSource: "./images/morning.gif",
        title: "Bom Dia!",
        quote: "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis."
    },
    midday : {
        backgroundColor: "#F5DEB3",
        fontColor: "#FF4800",
        imgSource:"./images/midday.gif",
        title: "Bom Almoço!",
        quote: "Determinação, coragem e autoconfiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho."
    },
    afternoon : {
        backgroundColor: "#FD8C78",
        fontColor: "#FF3300",
        imgSource: "./images/afternoon.gif",
        title: "Boa Tarde!",
        quote: "Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?"
    },
    night : {
        backgroundColor: "#4A3572",
        fontColor: "#4A017A",
        imgSource: "./images/night.gif",
        title: "Boa Noite",
        quote: "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre."
    }
}

function isBetween(min,max){ return daytime >= min && daytime < max } //min include - max exclude

//--------Set-Up-Above------------//

const daytime = new Date().getHours()
let selectedPattern

if(isBetween(6,12))
{
    selectedPattern = patterns.morning
}
else if(daytime == 12)
{
    selectedPattern = patterns.midday
}
else if(isBetween(13,18))
{
    selectedPattern = patterns.afternoon
}
else
{
    selectedPattern = patterns.night
}

page_main.style.backgroundColor = selectedPattern.backgroundColor
page_image.src = selectedPattern.imgSource
page_name.style.color = selectedPattern.fontColor
page_name.innerHTML = selectedPattern.title
page_quote.innerHTML = selectedPattern.quote