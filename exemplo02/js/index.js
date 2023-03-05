/**const onChangeRangesRGBA = () => {
const red = document.getElementById('red').value
const green = document.getElementById('green').value
const blue = document.getElementById('blue').value
const alpha = document.getElementById('alpha').value

const displayRGBA = document.getElementById('color-display-rgba')
displayRGBA.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`


}
const red = document.getElementById('red')
red.oninput = onChangeRangesRGBA

const green = document.getElementById('green')
green.oninput = onChangeRangesRGBA

const blue = document.getElementById( 'blue')
 blue.oninput = onChangeRangesRGBA

 const alpha = document.getElementById('alpha')
 alpha.oninput = onChangeRangesRGBA*/

 const $ = document.querySelector.bind(document)
 const $all = document.querySelectorAll.bind(document)

 const onChangeRangesRGBA = () => {
    const red = $ ('#red').value
    const green = $ ('#green').value
    const blue = $ ('#blue').value
    const alpha = $ ('#alpha').value

    $(
        '#color-display-rgba'
    ).style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
 }

 $all('#color-ranges-rgba input[type=range]').forEach((range) => (range.oninput = onChangeRangesRGBA)
 )


const onChangeRangesHSL = () => {
const hue1 = document.getElementById('hue').value
const saturation = document.getElementById('sat').value
const lightness = document.getElementById('light').value

const displayHSL = document.getElementById('color-hsl')
displayHSL.style.backgroundColor = `hsl(${hue1}, ${saturation}%, ${lightness}%)`
const display= document.getElementById('porcentagem')
    display.innerText = `Hue ${hue.value}°, Sat: ${sat.value}%, Light: ${light.value}%`

}


const hue = document.getElementById('hue')
hue.oninput = onChangeRangesHSL

const saturation = document.getElementById('sat')
saturation.oninput = onChangeRangesHSL

const lightness = document.getElementById('light')
lightness.oninput = onChangeRangesHSL