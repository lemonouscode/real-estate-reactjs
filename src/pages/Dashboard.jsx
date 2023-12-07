import { DashboardUI } from "../components/DashboardUI";
import { useDashboard } from "../hooks/useDashboard";

export const Dashboard = () => {

  const {contacts} = useDashboard();

  return (
    <section className='pt-[75px] px-[5%] min-h-screen'>
      <DashboardUI contacts={contacts} />
    </section>
  )
}
