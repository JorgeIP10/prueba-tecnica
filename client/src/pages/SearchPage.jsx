import BaseTemplate from "../components/BaseTemplate";
import SearchTemplate from "../components/searchPage/SearchTemplate";

function SearchPage() {
  return (
    <>
    <BaseTemplate content={
      <>
        <SearchTemplate searchByDNIComponent={<>Búsqueda por DNI</>} searchByNameComponent={<>Búsqueda por nombre</>} />
      </>
    }/>
    </>
  )
}

export default SearchPage;