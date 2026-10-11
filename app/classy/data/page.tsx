import Link from "next/link";
import Document from "../_components/Document";
import DataHandling, { dataSections } from "../_components/DataHandling";

export const metadata = {
  title: "Data, privacy & deletion",
  description: "Classy's actual external AI processing, app-storage retention, data-deletion procedures and erasure boundaries.",
};

export default function DataPage() {
  return (
    <Document
      title="Data, privacy & deletion"
      intro="A technical explanation of Classy's data handling and the controls available to users and Jira administrators."
      sections={dataSections}
    >
      <div className="classy-callout">
        <p>Read the <Link href="/classy/privacy">Classy privacy notice</Link>. This product explanation is not a customer agreement or DPA. The separate Razumly sports-app policies do not apply to Classy.</p>
      </div>
      <DataHandling />
    </Document>
  );
}
