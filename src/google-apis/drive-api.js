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
