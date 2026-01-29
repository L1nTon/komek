<section class="movies">
  <div class="container">
    <h2 class="movies-title">Скоро в кино</h2>
    <div class="movies-grid" role="list">
      @for ($i = 0; $i < 8; $i++)
        <article class="movie-card" role="listitem" tabindex="0" data-movie-id="{{ $i }}">
          <div class="poster">
            <img src="/images/poster-placeholder.svg" alt="Poster of movie {{ $i + 1 }}" loading="lazy" />
            @if($i % 4 == 0)
              <span class="badge">Премьера</span>
            @endif
          </div>
          <div class="movie-body">
            <h3 class="movie-title">Название фильма {{ $i + 1 }}</h3>
            <div class="movie-meta">
              <span class="age">12+</span>
              <span class="genre">Драма</span>
            </div>
            <div class="showtimes">
              <button class="time">15:30</button>
              <button class="time">17:40</button>
              <button class="time">20:10</button>
            </div>
          </div>
        </article>
      @endfor
    </div>
    <div class="pagination" role="navigation" aria-label="Pagination">
      <button class="page prev" disabled>&laquo; Prev</button>
      <button class="page active">1</button>
      <button class="page">2</button>
      <button class="page">3</button>
      <button class="page next">Next &raquo;</button>
    </div>
  </div>
</section>

