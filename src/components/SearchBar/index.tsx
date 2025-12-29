import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  GetOtherWebsitesAvailable,
  GetSearchableWebsitesAvailable,
  type WebSite,
} from "../../utils/websites";
import styles from "./styles.module.css";
import { useState } from "react";

export function SearchBar() {
  const searchableWebsites = GetSearchableWebsitesAvailable();
  const otherWebsites = GetOtherWebsitesAvailable();

  const [selectedWebsite, setSelectedWebsite] = useState<WebSite | null>(
    searchableWebsites[0] ?? null
  );
  const [query, setQuery] = useState("");

  function handleSelectWebsite(website: WebSite) {
    if (selectedWebsite?.name === website.name) {
      handleOpenWebsite(website);
    } else {
      setSelectedWebsite(website);
    }
  }

  function handleOpenWebsite(website: WebSite) {
    window.open(website.url, "_blank");
  }

  function handleSearchSubmit() {
    if (!selectedWebsite || !query.trim()) return;

    if (!selectedWebsite.searchUrl) return;

    const url = selectedWebsite.searchUrl.replace(
      "{query}",
      encodeURIComponent(query)
    );

    window.open(url, "_blank");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Pesquisar..."
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className={styles.searchButton}
          onClick={handleSearchSubmit}
          disabled={!query.trim() || !selectedWebsite}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <ul className={styles.websiteList}>
        {searchableWebsites.map((website) => (
          <li
            key={website.name}
            className={`${styles.websiteItem} ${
              selectedWebsite?.name === website.name ? styles.selected : ""
            }`}
            onClick={() => handleSelectWebsite(website)}
          >
            <img src={website.logo} className={styles.websiteLogo} />
          </li>
        ))}
      </ul>

      <div className={styles.otherWebsites}>
        <h2>Other Websites</h2>
        <ul className={styles.websiteList}>
          {otherWebsites.map((website) => (
            <li
              key={website.name}
              className={`${styles.websiteItem} ${
                selectedWebsite?.name === website.name ? styles.selected : ""
              }`}
              onClick={() => handleOpenWebsite(website)}
            >
              <img src={website.logo} className={styles.websiteLogo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
