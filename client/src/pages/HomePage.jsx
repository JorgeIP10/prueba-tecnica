import BaseTemplate from "../components/BaseTemplate";
import CustomerForm from "../components/homePage/CustomerForm";
import StickyHeadTable from "../components/homePage/StickyHeadTable";

function HomePage() {
  return (
    <>
    <BaseTemplate content={
      <>
        <CustomerForm />
        <StickyHeadTable />
      </>
    }/>
    </>
  )
}

export default HomePage;