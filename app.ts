// const res = await fetch("https://raw.githubusercontent.com/AlexMayol/midn1ght-recipes/master/style.css");

import { images } from "./images.ts";

let res = null;
let body = null;

let name = null;

for (let img of images) {
  if (img.includes(".mp4")) continue;

  name = "test";
  res = await fetch(img);
  body = new Uint8Array(await res.arrayBuffer());
  await Deno.writeFile(`./images/${name}.jpg`, body);
}
