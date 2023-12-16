import { DashboardUI } from "../components/DashboardUI";
import { useDashboard } from "../hooks/useDashboard";

export const Dashboard = () => {

  const {contacts} = useDashboard();

  return (
    <section className='pt-[75px] px-[5%] min-h-screen max-md:pt-[100px]'>
      <DashboardUI contacts={contacts} />
    </section>
  )
}
