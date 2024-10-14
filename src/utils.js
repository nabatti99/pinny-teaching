import parse from "html-react-parser";

export function getRandomImageUrls(width = 1000, height = 1000) {
    return `https://picsum.photos/${width}/${height}`;
}

export function getImageUrl(imageFileId) {
    return `https://lh3.googleusercontent.com/d/${imageFileId}`;
}

export function renderWithBr(text) {
    const html = text.replace("\n", "<br>");
    return parse(html);
}

export function renderP(text) {
    const html = text
        .split("\n")
        .map((item) => `<p>${item}</p>`)
        .join("");
    return parse(html);
}

export function renderUl(text) {
    let html = text
        .split("\n")
        .map((item) => `<li>${item}</li>`)
        .join("");
    html = `<ul>${html}</ul>`;
    return parse(html);
}
