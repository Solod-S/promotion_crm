import AddCompanyButton from './components/add-company-button';
import ClientComponent from './components/client-component';
import ServerComponent from './components/server-component';
import ServerComponentCopy from './components/server-component copy';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel disabled={true} status={Status.Suspended}>
        Suspended
      </StatusLabel>
      <AddCompanyButton />
      <ServerComponent></ServerComponent>
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
