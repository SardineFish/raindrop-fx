/**
 * @typedef {import("../../bundle/index")}
 */

const canvas = document.querySelector("#canvas");
const rect = canvas.getBoundingClientRect();
canvas.width = rect.width;
canvas.height = rect.height;

const raindropFx = new RaindropFX({
    canvas: canvas,
    background: "/assets/img/84765992_p0.jpg",
    raindropLayerOnly: true,
});

window.onresize = () =>
{
    const rect = canvas.getBoundingClientRect();
    raindropFx.resize(rect.width, rect.height);
}
window.addEventListener("mousemove", (ev) =>
{
    const offsetX = ev.clientX - window.innerWidth / 2;
    const offsetY = ev.clientY - window.innerHeight / 2;
    const background = document.querySelector("#background");
    background.style.transform = `translate(${offsetX * 0.02}px, ${offsetY * 0.02}px)`;

})

raindropFx.start();