<footer>
    <div class="contact-footer">
        <div class="logo">
            <img src="{{ Vite::asset('resources/img/logo.svg') }}" alt="Logo">
        </div>
        <div class="emails">
            <div class="first-text">
                <a class="first-text" href="mailto:admin@example.com">admin@example.com</a>
                <a class="first-text" href="mailto:ticket@example.com">ticket@example.com</a>
            </div>
            <span class="secondary-text">
                улица Тестовая 1
            </span>
        </div>
        <div>
            <a class="first-text center-content" href="tel:+77750000001">
                +7 (775) 000 00 01
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.75 0.75L5.75 5.75L0.75 0.75" stroke="#A0AEB7" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>

            </a>
            <span class="secondary-text">
                Касса
            </span>
        </div>

        <div class="date">
            <span class="first-text">
                08:00 - 22:00 с пн.-пт.
            </span>
            <span class="secondary-text">
                График работы
            </span>
        </div>
    </div>

    <div class="main-footer">
        <div class="left-content">
            <h2 class="first-text">Меню</h2>
            <a href="#" class="secondary-text">Афиша</a>
            <a href="#" class="secondary-text">Сеансы</a>
            <a href="#" class="secondary-text">Пушкинская карта</a>
            <a href="#" class="secondary-text">Кинотеатр</a>
            <a href="#" class="secondary-text">Контакты</a>
        </div>
        <div class="right-content">
            <div class="transactions">
                <h2>Способы оплаты:</h2>
                <div class="transaction-type">
                    <a href="#">
                        <img src="{{ Vite::asset('resources/img/mastercard.svg') }}" alt="Mastercard">
                    </a>
                    <a href="#">
                        <img src="{{ Vite::asset('resources/img/visa.svg') }}" alt="Visa">
                    </a>
                </div>
                <div class="text-content secondary-text">
                    Все сеансы начинаются с рекламно-информационного блока.
                    Точную продолжительность сеансов можно уточнить в кинотеатре.
                </div>
            </div>
        </div>
    </div>

    <div class="copyright">

        <div class="soc-links">
            <a href="#">
                <img src="{{ Vite::asset('resources/img/social-links/facebook.svg') }}" alt="Facebook">
            </a>
            <a href="#">
                <img src="{{ Vite::asset('resources/img/social-links/instagram.svg') }}" alt="Instagram">
            </a>
            <a href="#">
                <img src="{{ Vite::asset('resources/img/social-links/youtube.svg') }}" alt="YouTube">
            </a>
            <a href="#">
                <img src="{{ Vite::asset('resources/img/social-links/vk.svg') }}" alt="VK">
            </a>
        </div>

        <p class="secondary-text"> © 2025 Все права защищены</p>
    </div>
</footer>