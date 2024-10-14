import { GameHeader } from "./constants";
import { GApiService } from "./gapi.service";

const SPREADSHEET_ID = "1lQmHhyFSFkv7RlTWvvRErkkTD1rFd_TUxJffQajfd0U";

function parseBody(rows, headerNames) {
    const headers = rows[0];
    const bodyRows = rows.slice(1);

    return bodyRows.map((bodyRow) => {
        const result = {};

        headerNames.forEach((headerName) => {
            const index = headers.findIndex((header) => header === headerName);
            result[headerName] = bodyRow[index];
        });

        return result;
    });
}

export async function getGames(limit, offset = 0) {
    await GApiService.wait();

    const response = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `Games!A${offset + 1}:Z${offset + limit + 1}`,
    });

    const result = response.result;

    if (!result.values) throw new Error("No data found.");

    return parseBody(result.values, Object.values(GameHeader));
}

export async function getGameById(gameId) {
    await GApiService.wait();

    const data = [];
    const responseHeader = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `Games!A1:Z1`,
    });
    data.push(responseHeader.result.values[0]);

    const responseBody = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `Games!A${gameId + 1}:Z${gameId + 1}`,
    });

    console.log({ responseBody });

    data.push(...responseBody.result.values);

    return parseBody(data, Object.values(GameHeader))[0];
}
