const posters = import.meta.glob('../../img/**', { eager: true, query: '?url', import: 'default' });

const movies = [
    {
        id: 1,
        title: "Праздники",
        genre: ["комедия"],
        isPremiere: true,
        poster: "1.png",
        sessions: [
            { time: "15:35", format: "2D", price: "1233 ₸", hall: "Зал 3" },
            { time: "17:40", format: "2D", price: "3080 ₸", hall: "Зал 6 VIP" },
            { time: "19:15", format: "2D", price: "1700 ₸", hall: "Зал 4" },
            { time: "21:05", format: "2D", price: "1700 ₸", hall: "Зал 3" },
            { time: "21:40", format: "2D", price: "4030 ₸", hall: "Зал 6 VIP" },
            { time: "22:45", format: "2D", price: "1700 ₸", hall: "Зал 3" }
        ]
    }, {
        id: 2,
        title: "Мег 2: Бездна",
        genre: ["боевик", "триллер"],
        isPremiere: false,
        poster: "2.png",
        sessions: [
            { time: "15:35", format: "2D", price: "4030 ₸", hall: "Зал 6 VIP" },
            { time: "17:40", format: "2D", price: "3080 ₸", hall: "Зал 2 Auro" },
            { time: "19:15", format: "2D", price: "1700 ₸", hall: "Зал 4" }
        ]
    }, {
        id: 3,
        title: "Заложники",
        genre: ["экшен", "триллер"],
        isPremiere: false,
        poster: "3.png",
        sessions: [
            { time: "16:10", format: "2D", price: "4030 ₸", hall: "Зал 1" },
            { time: "21:30", format: "2D", price: "3080 ₸", hall: "Зал 1" }
        ]
    }, {
        id: 4,
        title: "Леди Баг и Супер-Кот: Пробуждение силы",
        genre: ["фентези", "боевик", "мелодрама", "мультфильм", "комедия"],
        isPremiere: false,
        poster: "4.png",
        sessions: [
            { time: "16:10", format: "2D", price: "4030 ₸", hall: "Зал 1" },
            { time: "21:30", format: "2D", price: "3080 ₸", hall: "Зал 1" }
        ]
    }, {
        id: 404,
        title: "Когда не загрузилась афиша",
        genre: ["комедия"],
        isPremiere: true,
        poster: "это не существующий файл",
        sessions: [
            { time: "15:35", format: "2D", price: "1233 ₸", hall: "Зал 3" },
            { time: "17:40", format: "2D", price: "3080 ₸", hall: "Зал 6 VIP" }
        ]
    }, {
        id: 5,
        title: "Руслан и Людмила. Больше, чем сказка",
        genre: ["анимационое приключение"],
        isPremiere: true,
        poster: "5.png",
        sessions: "Сеансы на Завтра"
    },
];

function renderMovies(movieList) {
    const container = document.querySelector('.card-list-content');
    if (!container) return;

    container.innerHTML = movieList.map(movie => {
        const posterPath = `../../img/cards/${movie.poster}`;
        const fallbackPath = '../../img/cards/error-card.svg';
        const posterUrl = posters[posterPath] || posters[fallbackPath] || '';

        return `
            <div class="card" data-id="${movie.id}">
                <div class="card-poster">
                    ${posterUrl ? `<img src="${posterUrl}" alt="${movie.title}">` : ''}
                    ${movie.isPremiere ? '<div class="badge-premiere">ПРЕМЬЕРА</div>' : ''}
                </div>
                
                <div class="card-info">
                    <h2 class="card-title">${movie.title}</h2>
                    <div class="card-genres">
                        ${(Array.isArray(movie.genre) ? movie.genre : [movie.genre]).map(genre => `<span class="card-genre">${genre}</span>`).join('')}
                    </div>
                </div>

                <div class="card-sessions">
                    ${movie.sessions === "Сеансы на Завтра"
                ? `<button class="session-tomorrow-btn">${movie.sessions}</button>`
                : movie.sessions.map(session => `
                            <div class="session-item">
                                <div class="session-main">
                                    <span class="session-time">${session.time}</span>
                                    <div class="session-details">
                                        <span class="format">${session.format}</span>
                                        <span class="price">${session.price}</span>
                                    </div>
                                </div>
                                <div class="session-hall">${session.hall}</div>
                            </div>
                        `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderMovies(movies);
});
