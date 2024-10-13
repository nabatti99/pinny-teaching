export class GApiService {
    static isLoaded = false;

    static async load() {
        await window.gapi.client.init({
            apiKey: "AIzaSyDfWCcwC7Z9ipT6iezH_GxtIKKgHdqM9cw",
            discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4", "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
        });

        GApiService.isLoaded = true;
    }

    static async wait() {
        while (!GApiService.isLoaded) {
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    }

    static init() {
        window.gapi.load("client", GApiService.load);
    }
}
