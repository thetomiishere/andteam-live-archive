import { t } from './dictionary.js';
import { loadChant } from '../services/chantService.js';
import { setPageDisabled, renderCardSkeleton } from './logistics.js';

let chantCache = null;
let isReversed = false;

export async function chant() {
    const container = document.getElementById('chant-grid');

    const sortBtn = document.getElementById('sortChantBtn');
    if (sortBtn && !sortBtn.dataset.listenerAttached) {
        sortBtn.addEventListener('click', toggleSortOrder);
        sortBtn.dataset.listenerAttached = 'true';
    }
    updateSortBtnText();

    if (chantCache) {
        renderData(chantCache, container);
        return;
    }
    
    try {
        const skeletonCount = window.innerWidth < 600 ? 6 : 10;
        renderCardSkeleton(container, skeletonCount);

        setPageDisabled(true);
        const data = await loadChant();
        chantCache = data;
        renderData(data, container);
    } catch (err)  {
        container.innerHTML = "Error loading data.";
    } finally {
        setPageDisabled(false);
    }
}

function updateSortBtnText() {
    const sortBtn = document.getElementById('sortChantBtn');
    if (!sortBtn) return;
    sortBtn.textContent = isReversed ? t('sort_desc') : t('sort_asc');
}

function toggleSortOrder() {
    isReversed = !isReversed;
    updateSortBtnText();
    const container = document.getElementById('chant-grid');
    if (chantCache) {
        renderData(chantCache, container);
    }
}

async function renderData(data, container) {
    container.innerHTML = '';
    container.style.display = 'block';
    if (!data || !data.length) {
        container.innerHTML = `<p class="no-data">${t('no_data')}</p>`;
        return;
    }

    const groupedByAlbum = data.reduce((acc, item) => {
        const album = item.album || "";
        if (!acc[album]) {
            acc[album] = [];
        }
        acc[album].push(item);
        return acc;
    }, {});

    let albums = Object.keys(groupedByAlbum);
    if (isReversed) {
        albums.reverse();
    }
    albums.forEach((album) => {
        const items = groupedByAlbum[album];

        const section = document.createElement('div');
        section.className = 'album-section';

        const header = document.createElement('div');
        header.className = 'album-header';
        header.innerHTML = `
            <h3>${album}</h3>
            <hr class="header-line">
        `;
        section.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'grid-container chant-grid';

        items.forEach((item) => {
            const card = document.createElement('div');
            card.className = 'card chant-card';

            const imgDiv = document.createElement('div');
            imgDiv.className = 'image-container';

            const img = document.createElement('img');
            img.src = item.thumbnail;
            img.alt = item.title;
            img.loading = 'lazy';
            imgDiv.appendChild(img);

            const contentDiv = document.createElement('div');
            contentDiv.className = 'card-content';

            const title = document.createElement('h4');
            title.textContent = item.title;
            contentDiv.appendChild(title);

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'card-actions';

            const chantBtn = document.createElement('a');
            chantBtn.className = 'chant-btn';
            chantBtn.href = item.chantUrl;
            chantBtn.target = '_blank';
            const btnText = t('view_chant');
            chantBtn.innerHTML = `
                <span>${btnText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="external-icon">
                    <g fill="currentColor" fill-rule="nonzero">
                        <g transform="scale(10.66667,10.66667)">
                            <path d="M5,3c-1.09306,0 -2,0.90694 -2,2v14c0,1.09306 0.90694,2 2,2h14c1.09306,0 2,-0.90694 2,-2v-7h-2v7h-14v-14h7v-2zM14,3v2h3.58594l-9.29297,9.29297l1.41406,1.41406l9.29297,-9.29297v3.58594h2v-7z"></path>
                        </g>
                    </g>
                </svg>
            `;
            actionsDiv.appendChild(chantBtn);

            if (item.ytUrl) {
                const ytBtn = document.createElement('a');
                ytBtn.className = 'yt-btn';
                ytBtn.href = item.ytUrl;
                ytBtn.target = '_blank';
                // ytBtn.textContent = 'YouTube';
                const btnText = t('view_chantYT');
                ytBtn.innerHTML = `
                    <span>${btnText}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="yt-icon">
                        <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                `;
                actionsDiv.appendChild(ytBtn);
            }
            contentDiv.appendChild(actionsDiv);
            
            card.appendChild(imgDiv);
            card.appendChild(contentDiv);

            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });

}
