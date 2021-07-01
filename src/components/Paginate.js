import React , {useState} from "react"
import { navigate } from "@reach/router"
import ReactPaginate from "react-paginate"
const Paginate = ({props}) => {


    let [currentPage, setCurrentPage] = useState(props.pageContext.humanPageNumber-1); 


    let changePgae = (i) => {
      // 先判断props是哪一个？ 首页还是不是
      if (props.pageContext.humanPageNumber === 1) {
        let nativePage = props.path + "/" + (i.selected + 1)
        setCurrentPage(i.selected + 1)
        navigate(nativePage)
      } else {
        // 如果点的是第一个，则调到第一个
        if (i.selected === 0) {
          setCurrentPage(i.selected + 1)
          navigate(props.path.substring(0, props.path.lastIndexOf("/")+1));
        }else{
          setCurrentPage(i.selected + 1)
          navigate(props.path.substring(0, props.path.lastIndexOf("/")+1) + (i.selected+1));
        }
      }
  
    }


    return (
       <ReactPaginate
            previousLabel={"上一页"}
            nextLabel={"下一页"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={props.pageContext.numberOfPages}
            marginPagesDisplayed={3}
            pageRangeDisplayed={3}
            onPageChange={i => {
              changePgae(i)
            }}
            forcePage={currentPage}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
    )
}

export default Paginate
