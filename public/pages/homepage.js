import { loadHomeData } from '../services/homepageService.js';
// import { setPageDisabled } from './logistics.js';

const memberImages = {
    "EJ":       "https://officialsite.cds-jp.online/prod/profile_member/106/190/7b2804a7bfcf45b59cb28bed8d774659.webp",
    "FUMA":     "https://officialsite.cds-jp.online/prod/profile_member/106/191/078269c865234ddc95d821a41187f6e1.webp",
    "K":        "https://officialsite.cds-jp.online/prod/profile_member/106/192/4535ae1f8fe847d88346a48411bdcd90.webp",
    "NICO":     "https://officialsite.cds-jp.online/prod/profile_member/106/193/28edf829bc564de28d73ec7c95e22dc5.webp",
    "YUMA":     "https://officialsite.cds-jp.online/prod/profile_member/106/194/9eda429a71d0434d8985b9c3acafaff9.webp",
    "JO":       "https://officialsite.cds-jp.online/prod/profile_member/106/195/3f1c58b81ed746e89192a3d68d15c626.webp",
    "HARUA":    "https://officialsite.cds-jp.online/prod/profile_member/106/196/48b4b83089094e9588a8dcd7846173c9.webp",
    "TAKI":     "https://officialsite.cds-jp.online/prod/profile_member/106/197/01189b433902496fa8e68987e4c0ab17.webp",
    "MAKI":     "https://officialsite.cds-jp.online/prod/profile_member/106/198/2e31345081464afa932d815867c51d62.webp",
    "andTEAM":  "https://officialsite.cds-jp.online/prod/main/106/79/667e0582fdaa45eeaf4bf19d383576a6.webp"
};

export async function homepage() {
    const missingKeys = [];

    Object.keys(memberImages).forEach(memberID => {
        const imgElement = document.querySelector(`.member-card img[alt="${memberID}"]`);
        if (!imgElement) return;

        const url = memberImages[memberID];
        if (url && url !== "") {
            imgElement.src = url;
        } else {
            missingKeys.push(memberID);
            imgElement.src = "";
        }
    });

    if (missingKeys.length === 0) return;

    try {
        console.log(`Fetching missing images for: ${missingKeys.join(', ')}`);
        const homepageCache = await loadHomeData();

        homepageCache.forEach(item => {
            if (missingKeys.includes(item.ID)) {
                const imgElement = document.querySelector(`.member-card img[alt="${item.ID}"]`);
                if (imgElement && item.img) {
                    imgElement.src = item.img;
                }
            }
        });
    } catch (err) {
        console.error("Failed to load missing home data:", err);
    }
}
