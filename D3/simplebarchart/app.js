
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 30)
    .attr("y", (d, i) => h - 3 * d)
    .attr("width", 25)
    .attr("height", (d, i) => 3 * d)
    .attr("fill", "navy")
    .attr("class", "bar")


svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((d) => d)
    .attr("x", (d, i) => i * 30) //alinhando no eixo x
    .attr("y", (d, i) => h - (3 * d) - 3); //posicionando 3 unidades acima do retangulo