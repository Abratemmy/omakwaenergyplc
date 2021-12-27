import React, {useState} from 'react'
import Otherpages from '../../components/otherpages/otherpages';
import Underline from '../../components/textunderline/textunderline';
import './media.css';
import data from '../../pages/Media/mediadata.js';
import ReactPaginate from "react-paginate"

function Media() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    
    const [pageNumber, setPageNumber] = useState(0)
    const imagePerPage = 4
    const pagesVisited = pageNumber * imagePerPage

    const displayImages = data.slice(pagesVisited, pagesVisited + imagePerPage).map(media =>{
        return(
            <div className="media-content">
                {media.isImage ? <div className="mediaimg">
                        <img src={media.image} alt="loading"/>
                        <div className="media-title">{media.name}</div>
                        <div className={media.className}></div>
                    </div> :""
                }
            </div> 
        )
    })
    const pageCount = Math.ceil(data.length / imagePerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected)
        window.scrollTo(0, 120)
    } 

    return (
        <div className="">
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
                     
                        <div className="">
                            <div className="media-img">
                                <div className="grid-image">
                                    {displayImages}
                                </div>
                                
                                <ReactPaginate
                                    previousLabel={"Prev"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange= {changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    activeClassName={"paginationActive"}
                                 />
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
