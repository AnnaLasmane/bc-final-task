import Breadcrumbs from '../Components/Breadcrumbs';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SRLWrapper } from "simple-react-lightbox";
import articles from '../Data/Articles';



function Article()  {
        const { articleId, textId } = useParams();
        const filteredArticles = articles.filter((article) => { return articleId === article.id });
        const article = filteredArticles[0];
        const filteredTexts = article.texts.filter((text) => { return textId === text.id });
        const text = filteredTexts[0];
        const [mainImage, setMainImage] = useState(text.image);
    
        const bredcrumbPaths = [
            { link: '/', title: 'Home' },
            { link: '/articles', title: 'Articles' },
            { title: text.title },
        ]
    
        const imageThumbnails = text.images.map((image, index) => {
            return (
                <div className="col-4 mt-3" key={index}>
                    <a href={image}>
                        <img className="img-fluid" src={image} onMouseEnter={() => setMainImage(image)} />
                    </a>
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
                    <div className="col">
                        <h1>{text.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="row">
                            <div className="col">
                                <img src={mainImage} className="img-fluid" />
                            </div>
                        </div>
                        <SRLWrapper>
                            <div className="row">
                                {imageThumbnails}
                            </div>
                        </SRLWrapper>
    
                        <div className="row mt-5">
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <p>{text.description}</p>
                    </div>
                </div>
            </div>
        )
    }
    

export default Article;