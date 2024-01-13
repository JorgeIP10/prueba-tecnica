import BaseTemplate from "../components/BaseTemplate";
import SearchTemplate from "../components/searchPage/SearchTemplate";
import SearchByField from "../components/searchPage/SearchByField";
import { useCustomers } from "../contexts/CustomerContext";

function SearchPage() {
  const { getCustomerByDni, getCustomerByName } = useCustomers();

  return (
    <>
    <BaseTemplate content={
      <>
        <SearchTemplate
        SearchByDNIComponent={<SearchByField findFunction={getCustomerByDni} labelNameObject={{label: 'DNI', name: 'dni'}}/>} SearchByNameComponent={<SearchByField findFunction={getCustomerByName} labelNameObject={{label: 'Nombres', name: 'names'}}/>}
        />
      </>
    }/>
    </>
  )
}

export default SearchPage;