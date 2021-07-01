import { Link } from "gatsby"
import { default as React } from "react"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"
import styled from "styled-components"
import { Divider } from "@chakra-ui/core";


const StyledHighlight = styled(Highlight)`
  display: block;
  color: #aaa;
  font-size: 0.8rem;
  padding: 0.5rem;
  &:hover {
    background: #E2E8F0;
  }
`

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

const PageHit = ({ hit }) => (
  <div>
    <Link to= {"/" + hit.path}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
      {hit.summary && (
          <StyledHighlight attribute="summary" hit={hit} tagName="mark" />
        )}
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    <Divider/>
  </div>
)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
)

export default SearchResult