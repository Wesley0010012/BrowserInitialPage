import data from "../data/websites-available.json";

export type WebSite = {
  type: "platform" | "searchengine" | "platformwithsearch";
  name: string;
  logo: string;
  url: string;
  searchUrl?: string;
};

const websites: Array<WebSite> = [];

function loadWebSites(): void {
  if (websites.length > 1) {
    return;
  }

  for (const item of data) {
    const { logo, name, type, url, searchUrl } = item;

    const website: WebSite = {
      type: type as "platform" | "searchengine" | "platformwithsearch",
      logo,
      name,
      url,
      searchUrl,
    };

    websites.push(website);
  }
}

export function GetOtherWebsitesAvailable(): Array<WebSite> {
  loadWebSites();

  return websites.filter((website) => ["platform"].includes(website.type));
}

export function GetSearchableWebsitesAvailable(): Array<WebSite> {
  loadWebSites();

  return websites.filter((website) =>
    ["searchengine", "platformwithsearch"].includes(website.type)
  );
}
