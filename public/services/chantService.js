

export async function loadChant() {
    try {
        const response = await fetch('./services/json/chant.json');
        return await response.json();
    } catch (error) {
        console.error('Error loading chant data:', error);
        throw error;
    }
}