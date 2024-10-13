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

async function waitGapi() {
    while (!window.gapi || !window.gapi.client || !window.gapi.client.sheets) {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
}

export const GameHeader = {
    NO: "No",
    NAME: "Name",
    AGE: "Age",
    LEARNING_STYLE: "Learning Style",
    STORYLINE: "Storyline",
    HOW_TO_PLAY: "How to play",
    NOTES: "Notes",
};

export async function getGames(limit, offset = 0) {
    await waitGapi();

    const response = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `Games!A${offset + 1}:H${offset + limit + 1}`,
    });

    const result = response.result;

    if (!result.values) throw new Error("No data found.");

    return parseBody(result.values, Object.values(GameHeader));
}

export async function getGameById(gameId) {
    await waitGapi();

    const data = [];
    const responseHeader = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `Games!A1:H1`,
    });
    data.push(responseHeader.result.values[0]);

    const responseBody = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `Games!A${gameId + 1}:H${gameId + 1}`,
    });

    console.log({ responseBody });

    data.push(...responseBody.result.values);

    return parseBody(data, Object.values(GameHeader))[0];
}
