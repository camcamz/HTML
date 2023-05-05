const API_KEY = '1f7643e64c74201ca143813e036a9d9b020c50f9f23306dde32a7652e5ce6b752927d83c8';
const API_URL = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=23306dde32a7652e5ce6b752927d83c8&hash=0cb3651037b4d8f9cd7fe8e5f1de8d51'


fetch(API_URL)
        .then(res=>res.json())
        .then(json=>{
            const series = json.data.results;
                const allSeries = document.getElementById('series');
                series.forEach((serie) => {
                        const serieElement = document.createElement('div');
                        
                        serieElement.classList.add('one_serie');
                        serieElement.innerHTML = `
                                <div class="serie_img">
                                        <img src="${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.title}">
                                </div>
                                <div class="serie-info">
                                        <h3 class="serie-title">${serie.title}</h3>
                                        <p class="serie-overview">${serie.description}</p>
                                        <button><a href=${serie.urls.url}>Mas información</a></button>
                                </div>
                        `;
                        allSeries.appendChild(serieElement);
                });
        });
