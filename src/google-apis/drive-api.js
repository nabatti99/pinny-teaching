import JSZip from "jszip";
import { getImageUrl } from "../utils";
import { GApiService } from "./gapi.service";

const GAME_FOLDER_ID = "1acJr1uwcXhogpRf153w2d-kVFcJmOEob";

export async function getGameThumbnail(gameFolderId) {
    await GApiService.wait();

    const rawFilesResponse = await window.gapi.client.drive.files.list({
        q: [`'${gameFolderId}' in parents`, "trashed=false", "name = 'Thumbnail.png'"].filter(Boolean).join(" and "),
        fields: "nextPageToken, files(id, name)",
        spaces: "drive",
    });
    const filesResponse = JSON.parse(rawFilesResponse.body);

    if (!filesResponse.files.length) throw new Error("Game thumbnail not found.");
    const file = filesResponse.files[0];

    return getImageUrl(file.id);
}

export async function getGamePptx(gameFolderId) {
    await GApiService.wait();

    const rawFilesResponse = await window.gapi.client.drive.files.list({
        q: [`'${gameFolderId}' in parents`, "trashed=false", "name contains '.pptx'"].filter(Boolean).join(" and "),
        fields: "nextPageToken, files(id, name, webContentLink)",
        spaces: "drive",
    });
    const filesResponse = JSON.parse(rawFilesResponse.body);

    if (!filesResponse.files.length) throw new Error("Game pptx not found.");
    const file = filesResponse.files[0];

    console.log(file);

    return file.webContentLink;
}

export async function getFlashCardPdf(flashCardFolderId) {
    await GApiService.wait();

    const rawFilesResponse = await window.gapi.client.drive.files.list({
        q: [`'${flashCardFolderId}' in parents`, "trashed=false", "name contains '.pdf'"].filter(Boolean).join(" and "),
        fields: "nextPageToken, files(id, name, webContentLink)",
        spaces: "drive",
    });
    const filesResponse = JSON.parse(rawFilesResponse.body);

    if (!filesResponse.files.length) throw new Error("FlashCard pdf not found.");
    const file = filesResponse.files[0];

    console.log(file);

    return file.webContentLink;
}

export async function getClassroomTipDocument(documentId) {
    await GApiService.wait();

    const zipResponse = await window.gapi.client.drive.files.export({
        fileId: documentId,
        mimeType: "application/zip",
    });

    const zip = new JSZip();
    const zipContent = await zip.loadAsync(zipResponse.body);

    const [zipHtml, ...zipImages] = Object.values(zipContent.files);

    const rawHtml = await zipHtml.async("text");

    // Read images as blob and convert to data url and replace image src
    const images = await Promise.all(
        zipImages.map(async (zipImage) => {
            const blob = await zipImage.async("blob");
            const dataUrl = URL.createObjectURL(blob);
            return { name: zipImage.name, dataUrl };
        })
    );

    const html = images.reduce((acc, { name, dataUrl }) => {
        return acc.replace(name, dataUrl);
    }, rawHtml);

    const rawBody = html.match(/<body[^>]*>((.|[\n\r])*)<\/body>/im)[1];
    const body = rawBody.replace(/font-family:&quot;[A-Za-z ]+&quot;;{0,1}/g, "").replace(/line-height:[0-9.]+;{0,1}/g, "");

    return body;
}
