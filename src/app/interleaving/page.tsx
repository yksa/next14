import { ClientComponentOne } from "@/components/ClientComponentOne";
import { ServerComponentOne } from "@/components/ServerComponentOne";

export default function InterLeavingPage() {
  return (
    <>
      <h1>InterLeavingPage</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
