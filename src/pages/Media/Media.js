import React, {useState} from 'react'
import Otherpages from '../../components/otherpages/otherpages';
import Underline from '../../components/textunderline/textunderline';
import './media.css';
import data from '../../pages/Media/mediadata.js';
import Modal from './modal';
import Slider from 'react-slick'

function Media() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    const settings = {
        className: "center",
        // centerMode: true,
        infinite: 0,
        centerPadding: "90px",
        slidesToShow: 3,
        slidesToScroll:1,
        speed: 500,
        rows: 2,
        dots:true,
        slidesPerRow: 1,
        className:"media-slide"
      };

    const [openmodal, setOpenModal] = useState(false);
    return (
        <div className="media">
            <Otherpages title="Gallery" pagetitle="Our media" />

            <div className="page-container">
                <div className="media-container">
                    <h1 className="text-center">Our gallery</h1>
                    <div className="title-underline">
                        <Underline />
                    </div>
                    <p className="text-center">Our gallery talks about us more. view to check our good works </p>
                </div>

                {/* code for tabs start below */}
                <div className="bloc-tabs">
                    <div className={toggleState ===1 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}>Gallery</div>
                    <div className={toggleState ===2 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}>Videos</div>
                </div>

                <div className="content-tabs">
                    <div className={toggleState ===1 ?"content active-content" : "content"}>
                        {/* want to display the media photos here */}
                        Gallery media
                        <div className="media-content">
                            {/* <div className="media-layer"> 6</div> */}
                            <div className="media-img">
                               <Slider {...settings}>
                                {data.map(media =>{
                                    return(
                                        <div>
                                            {media.isImage ? <div className="mediaimg"onClick={()=>{setOpenModal(true)}}>
                                                    <img src={media.image} alt="loading"/>
                                                    <div className="media-title">{media.name}</div>
                                                    <div className={media.className}></div>
                                                </div> :""
                                            }
                                        </div> 
                                    )
                                })}
                                </Slider>
                                {/* {openmodal && <Modal closeModal={setOpenModal}/>} */}
                            </div>
                        </div>
                        
                    </div>

                    <div className={toggleState === 2 ?"content active-content" : "content"}>
                        {/* want to display the media videos here */}
                        Video gallery coming up soon
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Media
