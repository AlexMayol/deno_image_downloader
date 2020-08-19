import { parse } from "https://deno.land/std/flags/mod.ts";
import { imagesList } from "./images.ts";

let images: string[] = parse(Deno.args).url
  ? [parse(Deno.args).url]
  : imagesList;

const getName = (str: string): string => {
  if (str.includes("?")) {
    str = str.split("?")[0];
  }

  let len: number = str.split("/").length;
  let name = str.split("/")[len - 1];
  return name;
};

let imageData,
  body = null;

for (let img of images) {
  if (img.includes(".mp4")) continue;
  imageData = await fetch(img);
  body = new Uint8Array(await imageData.arrayBuffer());
  await Deno.writeFile(`./images/${getName(img)}`, body);
}
