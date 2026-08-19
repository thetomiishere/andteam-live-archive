import { t } from '../dictionary.js';
import { loadJOData } from '../../services/individual/joService.js';
import { setPageDisabled, formatDate, renderCardSkeleton } from '../logistics.js';

let joCache = null;
export async function jo() {
    const container = document.getElementById('jo-grid');

    if (joCache) {
        renderData(joCache, container);
        return;
    }

    try {
        const skeletonCount = window.innerWidth < 600 ? 15 : 20;
        renderCardSkeleton(container, skeletonCount);
        
        setPageDisabled(true);
        const data = await loadJOData();
        joCache = data;
        renderData(data, container);
    } catch (err) {
        container.innerHTML = "Error loading data.";
    } finally {
        setPageDisabled(false);
    }
}

async function renderData(data, container) {
    container.innerHTML = ''; // Clear "LOADING..."

    if (!data || !data.length) {
        container.innerHTML = `<p class="no-data">${t('no_data')}</p>`;
        return;
    }

    data.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image-container';
        
        const img = document.createElement('img');
        img.src = item.img || '';
        img.alt = item.title;
        img.loading = 'lazy';
        imgDiv.appendChild(img);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-content';

        const title = document.createElement('h4');
        title.textContent = item.title;

        const dateDiv = document.createElement('div');
        dateDiv.className = 'info-date';
        dateDiv.textContent = formatDate(item.date);
        
        const ftDiv = document.createElement('div');
        ftDiv.className = 'info-ft';
        const ftValue = (item.ft && item.ft !== "null") ? `FT: ${item.ft}` : "\u00A0";
        ftDiv.textContent = ftValue;

        const viewBtn = document.createElement('a');
        viewBtn.className = 'view-btn';
        viewBtn.href = item.link;
        viewBtn.target = '_blank';
        viewBtn.textContent = t('view_details');

        contentDiv.appendChild(title);
        contentDiv.appendChild(dateDiv);
        contentDiv.appendChild(ftDiv);
        contentDiv.appendChild(viewBtn);

        card.appendChild(imgDiv);
        card.appendChild(contentDiv);

        container.appendChild(card);
    });
}
