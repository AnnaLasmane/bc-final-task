import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import articles from '../Data/Articles';

function Articles() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Articles' },
    ]

    const articleElements = articles.map((article, index) => {
        return (
            <div className="row mb-5 pb-3 border-bottom" key={index}>
                <div className="col-12 col-md-3">
                    <NavLink to={'/articles/' + article.Id}>
                        <img className="img-fluid" src={article.image} />
                    </NavLink>

                </div>
                <div className="col-12 col-md-9">
                    <h3>
                        <NavLink to={'/articles/' + article.id}>{article.title}</NavLink>
                    </h3>
                    <p className="text-muted">
                        {article.text}
                    </p>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                {articleElements}
            </div>
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li className="page-item">
                            <NavLink className="page-link" to="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </NavLink>
                        </li>
                        <li className="page-item"><NavLink className="page-link" to="#">1</NavLink></li>
                        <li className="page-item"><NavLink className="page-link" to="#">2</NavLink></li>
                        <li className="page-item"><NavLink className="page-link" to="#">3</NavLink></li>
                        <li className="page-item">
                            <NavLink className="page-link" to="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Articles;