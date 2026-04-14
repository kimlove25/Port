/**
 * 언어 설정
 */
function toggleDropdown(event) {
    event.stopPropagation(); // click navagation
    const options = document.getElementById('lang-options');
    options.classList.toggle('show');
}

function selectLang(lang) {
    const flagImg = document.getElementById('current-flag');
    const langText = document.getElementById('current-lang-text');
    
    // UI 업데이트용 데이터
    const langMap = {
        'ko': { src: 'images/flag-kr.svg', text: 'KR' },
        'jp': { src: 'images/flag-jp.svg', text: 'JP' },
        'en': { src: 'images/flag-us.svg', text: 'EN' }
    };
    
    if (langMap[lang]) {
        flagImg.src = langMap[lang].src;
        langText.innerText = langMap[lang].text;
    }
    
    document.getElementById('lang-options').classList.remove('show');
    
    // 실다국어 변경 로직
    console.log(`선택된 언어: ${lang}`);
}

// 드롭다운 외부 영역 클릭 시 닫기
window.addEventListener('click', () => {
    document.getElementById('lang-options').classList.remove('show');
});

// 번역기능
const translations = {
    //한국어 번역
    ko: {
        "home-greeting": "안녕하세요",
        "home-title": "프론트엔드 개발자 <span>김사랑</span>입니다.",
        "about-title": "ABOUT ME",
        "about-name": "김사랑",
        "about-school": "숭실대학교 졸업",
        "about-hobby": "달리기, 요리",
        "lang-ko": "한국어(원어민)",
        "lang-jp": "일본어(비즈니스)",
        "lang-en": "영어(간단한 회화)",
        "career-project1": "시약관리 시스템 화면 개발",
        "career-project1detail": "각종 약물의 재고확인과 주문, 신 약물의 추가 및 등록 등, 시약회사에서 쓰이는 웹페이지 개발",
        "career-project2": "컨테스트 참여 및 관리 화면 개발",
        "career-project1detail": "행사에 주제에 맞는 사진을 유저가 업로드하고 관리자가 심사를 거쳐 순위를 매기는 컨테스트 화면 개발"
    },
    //일본어 번역
    jp: {
        "home-greeting": "はじめまして",
        "home-title": "フロントエンドエンジニア <span>キム・サラン</span>です。",
        "about-name": "キム・サラン",
        "career-title": "試薬管理システムの画面開発",
        "about-school": "崇実大学校 卒業",
        "about-hobby": "ランニング、料理",
        "lang-ko": "韓国語(ネイティブ)",
        "lang-jp": "日本語(ビジネスレベル)",
        "lang-en": "英語(日常会話)",
        "career-project1": "試薬管理システムの画面開発",
        "career-project1detail": "各種薬品の在庫確認や発注、新規薬品の登録など、試薬メーカー向けのWebシステム開発を担当",
        "career-project2": "コンテスト参加・管理画面の開発",
        "career-project2detail": "イベントのテーマに沿ってユーザーが写真を投稿し、管理者が審査・順位付けを行うコンテスト管理システムのフロントエンド機能を実装。"
    },
    //영어 번역
    en: {
        "home-greeting": "Hello",
        "home-title": "I am <span>Sarang Kim</span>, a Frontend Developer.",
        "about-name": "Sarang Kim",
        "career-title": "Reagent Management System Development",
         "about-school": "Graduated from Soongsil University",
        "about-hobby": "Running, Cooking",
        "lang-ko": "Korean (Native)",
        "lang-jp": "Japanese (Business)",
        "lang-en": "English (Basic Conversation)",
        "career-project1": "Reagent Management System Development",
        "career-project1detail": "Developed web pages for pharmaceutical companies, including inventory tracking, ordering, and registration of new reagents.",
        "career-project2": "Contest Participation & Management UI Development",
        "career-project2detail": "Developed a contest platform where users upload photos based on event themes and admins evaluate and rank them."
    }
};

// 언어 변경 함수
function selectLang(lang) {
    const flagImg = document.getElementById('current-flag');
    const langText = document.getElementById('current-lang-text');
    
    const langMap = {
        'ko': { src: 'images/flag-kr.svg', text: 'KR' },
        'jp': { src: 'images/flag-jp.svg', text: 'JP' },
        'en': { src: 'images/flag-us.svg', text: 'EN' }
    };
    
    if (langMap[lang]) {
        flagImg.src = langMap[lang].src;
        langText.innerText = langMap[lang].text;
        
        // 실제 번역 실행
        applyTranslation(lang);
    }
    
    document.getElementById('lang-options').classList.remove('show');
}

// 텍스트 교체
function applyTranslation(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // 태그가 포함된 경우나 특정 키에 대해 innerHTML 적용
            if (key.includes('title') || key.includes('lang-')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}


/**
 * 스크롤 시 섹션 나타나기 효과
 */
const revealOptions = {
    threshold: 0.15
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, revealOptions);

document.querySelectorAll('.reveal').forEach(el => {
    // 초기 설정
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease-out";
    
    // active 클래스 적용 시 스타일
    const style = document.createElement('style');
    style.innerHTML = `.reveal.active { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
    
    revealObserver.observe(el);
});
