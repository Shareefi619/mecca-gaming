import { Link } from 'react-router-dom'
import { image10, image10small, image8, image8small, image9, image9small } from '../assets/images'

const Gallery = () => {
    return (
        <div className="rts-gallery-section mb-6">
            <div className="container">
                <div className="gallery-area">
                    <div className="gallery-item text-center">
                        <Link to="#" className="gallery-picture"><img src={image8} alt="" /></Link>
                        <Link to="#" className="gallery-picture1"><img src={image8small} alt="" /></Link>
                        <div className="contents-wrapper">
                            <div className="contents text-start">
                                <div className="d-block">
                                    <p className="tag">FOOTBALL</p>
                                    <Link to="/newsDetails" className="gallery-title">THE WORLD CUP – WHAT TO EXPECT FROM</Link>
                                </div>
                                <div className="author-info">
                                    <div className="content">
                                        <Link to="/newsDetails" className="read-more">READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item text-center active mid">
                        <Link to="#" className="gallery-picture"><img src={image9} alt="" /></Link>
                        <Link to="#" className="gallery-picture1"><img src={image9small} alt="" /></Link>
                        <div className="contents-wrapper">
                            <div className="contents text-start">
                                <div className="d-block">
                                    <p className="tag">FOOTBALL</p>
                                    <Link to="/newsDetails" className="gallery-title">THE WORLD CUP – WHAT TO EXPECT FROM</Link>
                                </div>
                                <div className="author-info">
                                    <div className="content">
                                        <Link to="/newsDetails" className="read-more">READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item text-center">
                        <Link to="#" className="gallery-picture"><img src={image10} alt="" /></Link>
                        <Link to="#" className="gallery-picture1"><img src={image10small} alt="" /></Link>
                        <div className="contents-wrapper">
                            <div className="contents text-start">
                                <div className="d-block">
                                    <p className="tag">FOOTBALL</p>
                                    <Link to="/newsDetails" className="gallery-title">THE WORLD CUP – WHAT TO EXPECT FROM</Link>
                                </div>
                                <div className="author-info">
                                    <div className="content">
                                        <Link to="/newsDetails" className="read-more">READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Gallery