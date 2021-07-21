import {NavLink} from 'react-router-dom';

function Home() {
    const articles = [
        {
            title: 'Rocky',
            image: 'https://flxt.tmsimg.com/assets/p162719_p_v10_au.jpg',
            text: 'Rocky Balboa is a struggling boxer trying to make the big time, working as a debt collector for a pittance.',
            id: 'first-article',
        },
        {
            title: 'Rambo',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81gJdK33ERL._RI_.jpg',
            text: 'Rambo is a former US Special Forces soldier who fought in Vietnam and won Medal of Honor, but his time in Vietnam still haunts him.',
            id: 'second-article',
        },
        {
            title: 'Assassins',
            image: 'https://images-na.ssl-images-amazon.com/images/I/91UhqniJxyL._RI_.jpg',
            text: 'Robert Rath is a seasoned hitman who just wants out of the business with no back talk. But, as things go, it aint so easy.',
            id: 'tird-article',
        },
    ];

    const articleElements = articles.map((article, index) => {
        return (
            <div className="col" key={index}>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={article.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <NavLink to={'/articles/' + article.id}>
                                        {article.title}
                                    </NavLink>
                                </h5>
                                <p className="card-text">{article.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
                        <div className="carousel-inner" style={{height: 500}}>
                            <div className="carousel-item active" >
                                <img src="https://townsquare.media/site/295/files/2020/11/Rocky-collage.jpg" className="m d-block  w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://townsquare.media/site/295/files/2019/09/rambo.jpg?w=980&q=75" className="d-block  w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.hungama.com/c/1/d8d/329/24154516/24154516_1280x800.jpg" className="d-block  w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col mt-4 mb-3">
                    <h5> Top 3 Sylvester Stallone movies from 80s & 90s </h5>
                </div>
              
            </div>
            <div className="row">
                {articleElements}
            </div>
        </div>
    )
}

export default Home;