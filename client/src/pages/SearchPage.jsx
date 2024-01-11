import BaseTemplate from "../components/BaseTemplate";
import SearchTemplate from "../components/searchPage/SearchTemplate";
import SearchAppBar from "../components/searchPage/SearchByDNI";

function SearchPage() {
  return (
    <>
    <BaseTemplate content={
      <>
        <SearchTemplate searchByDNIComponent={<SearchAppBar/>} searchByNameComponent={<>Búsqueda por nombre</>} />
      </>
    }/>
    </>
  )
}

export default SearchPage;