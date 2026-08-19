// const systemLang = (navigator.language || 'zh').split('-')[0];

const rawLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
function detectLanguage(lang) {
    if (lang.startsWith('ja')) return 'ja';
    if (lang.startsWith('en')) return 'en';
    if (lang.includes('tw')) {
        return 'zh-TW';
    }
    if (lang.startsWith('zh')) {
        return 'zh-CN';
    }
    return 'en';
}
export const currentLang = detectLanguage(rawLang);

const translations = {
    'en': {
        sb_title: "MENU",
        sb_home: "HOME",
        sb_live: "VIEW LIVES ▾",
        sb_schedule: "SCHEDULE",
        sb_fanchant: "FAN CHANT",
        sb_news: "NEWS",
        sb_ticket: "TICKET",
        welcome_text1: "Hi! Here's the Weverse live index for",
        welcome_text2: "made by a fan",
        welcome_instruct: "Click any photo to view their live. Or click ☰ to view menu",
        loading: "LOADING...",
        no_data: "No content found for this member.",
        view_details: "View Details",
    },
    'zh-TW': {
        sb_title: "MENU",
        sb_home: "首頁",
        sb_live: "直播整理 ▾",
        sb_schedule: "行程",
        sb_fanchant: "應援方法",
        sb_news: "最新消息",
        sb_ticket: "門票資訊",
        welcome_text1: "嗨! 這是我幫",
        welcome_text2: "做的 Weverse 直播整理網站",
        welcome_instruct: "點選成員圖片看直播整理. 或按 ☰ 開啟選單",
        loading: "載入中...",
        no_data: "尚無此成員的內容。",
        view_details: "查看詳情",
    },
    'zh-CN': {
        sb_title: "MENU",
        sb_home: "首页",
        sb_live: "直播整理 ▾",
        sb_schedule: "行程",
        sb_fanchant: "应援方法",
        sb_news: "最新消息",
        sb_ticket: "门票信息",
        welcome_text1: "嗨！这是专为",
        welcome_text2: "制作的 Weverse 直播整理网站",
        welcome_instruct: "点击成员图片查看直播整理，或点击 ☰ 打开菜单",
        loading: "加载中...",
        no_data: "暂无此成员的内容。",
        view_details: "查看详情"
    },
    // ja: {
    //     sb_title: "メニュー",
    //     sb_home: "ホーム",
    //     sb_live: "ライブ一覧 ▾",
    //     sb_schedule: "スケジュール",
    //     sb_fanchant: "掛け声",
    //     sb_news: "ニュース",
    //     sb_ticket: "チケット",
    //     welcome_text1: "こんにちは！こちらはファンが作成した",
    //     welcome_text2: "の Weverse ライブまとめサイトです",
    //     welcome_instruct: "メンバーの写真をクリックしてライブをチェック！ ☰ でメニューを表示",
    //     loading: "読み込み中...",
    //     no_data: "コンテンツが見つかりませんでした。",
    //     view_details: "詳細を見る"
    // }
};

export const ui = translations[currentLang] || translations.en;
// export const locale = navigator.language;
export function t(key) {
    return ui[key] || translations.en[key] || key;
}