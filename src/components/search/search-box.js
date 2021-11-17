import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { Search as SearchIcon } from "@styled-icons/fa-solid"
import { PseudoBox, InputRightElement } from "@chakra-ui/core"



export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      {/* className="SearchInput"*/}
      <PseudoBox
        as="input"
        className="SearchInput"
        type="text"
        placeholder="扩容方案"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />

      {/* <SearchIcon className="SearchIcon" /> */}
      <InputRightElement children={<SearchIcon className="SearchIcon" />} />
    </form>
  )
)
