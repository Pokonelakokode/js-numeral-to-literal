import { convertToLiteral } from "./index";

const input = document.getElementById("NumberInput") as HTMLInputElement;
const output = document.getElementById("LiteralOutput");
input.addEventListener("keydown", (ev) => {
    if (ev.key !== "Enter") {return null;}
    output.innerText = convertToLiteral(parseInt(input.value, 0));
});
