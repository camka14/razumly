import Document from "../_components/Document";
import DataHandling, { dataSections } from "../_components/DataHandling";

export const metadata = {
  title: "Privacy notice",
  description: "This notice covers personal information processed for Classy and communications sent to Razumly about Classy.",
};

export default function PrivacyPage() {
  return (
    <Document
      title="Classy privacy notice"
      intro="Published 11 October 2026."
      sections={[
        { id: "privacy-material", label: "Privacy notice" },
        ...dataSections,
      ]}
    >
      <section id="privacy-material">
        <h2>Scope and contact</h2>
        <p>This notice covers personal information processed for Classy and communications sent to Razumly about Classy. It does not cover the separate Razumly sports app or replace Atlassian&apos;s own privacy terms. Contact Razumly at <a href="mailto:support@razumly.com">support@razumly.com</a>, or 2130 N Q St, Washougal, WA 98671, United States.</p>
      </section>
      <section id="customer-content">
        <h2>Customer content and responsibilities</h2>
        <p>Your organization decides which Jira or supplied text and classifier definitions to use with Classy. Razumly processes that customer-controlled information to provide the requested classification, configuration, publication, history and deletion functions. Your organization is responsible for its instructions, permissions, lawful basis and notices to people whose information it submits; it may itself act for another controller.</p>
        <p>Classy uses external AI processing, as described below. Only submit information you are authorized to process with Atlassian, OpenRouter and TypeSafe. Do not submit secrets or sensitive information prohibited by the applicable agreement. Jira access permission or enabling an Automation action does not itself establish every person&apos;s consent or another legal basis. Classy does not automatically discover or redact personal information in free text.</p>
      </section>
      <section id="information-purposes">
        <h2>Information and purposes</h2>
        <p>The sections below describe the source text, classifier definitions, account and lifecycle records, decision previews, publication records and linkable technical metadata used by Classy. This information supports the requested app functions, permission and replay controls, operational diagnostics, retention and account-privacy reporting. Publishing a classifier makes its selected definition available across the Jira site; it does not make private manual history site-wide.</p>
        <p>If you contact support, your sender/contact information, message and any diagnostic details you choose to provide are used to handle the inquiry and related service, security or legal requirements. Do not email source content, passwords or API keys. Support correspondence is separate from seven-day manual History and is retained as needed to handle the inquiry and applicable recordkeeping or legal requirements; contact the notice address to request access, correction or deletion.</p>
      </section>
      <section id="roles-bases">
        <h2>Roles and legal bases</h2>
        <p>For customer-controlled app information, Razumly acts on the customer&apos;s instructions and the customer determines the applicable lawful basis. For direct support correspondence and Razumly&apos;s own service-administration records, Razumly determines the handling needed for those purposes. Where a legal basis is required for that handling, the applicable basis is performance of a contract or requested pre-contract steps, legitimate interests in providing and securing the service and handling inquiries, or compliance with legal obligations, depending on the context. If particular processing relies on consent, it may be withdrawn for future processing without changing the lawfulness of earlier processing.</p>
      </section>
      <section id="recipients-processing">
        <h2>Recipients and international processing</h2>
        <p>Atlassian provides the Forge platform and Jira integration. OpenRouter routes inference requests to TypeSafe Jev and receives the invocation/session reference. The external-processing and supplier-information sections below identify the information sent and link to the suppliers&apos; own documents. Customer-configured Jira Automation can also copy decisions to destinations chosen by the customer; those downstream uses are controlled by the customer&apos;s rule.</p>
        <p>Information may be processed outside your country. Forge persistent storage follows the host Atlassian app&apos;s storage location; external inference uses OpenRouter&apos;s global endpoint. Supplier-published U.S. hosting descriptions do not establish a fixed country for every request or an app-wide regional-residency guarantee. This notice does not itself create a transfer mechanism or represent unresolved contractual safeguards as approved.</p>
      </section>
      <section id="retention-security-requests">
        <h2>Retention, security and requests</h2>
        <p>The technical sections below distinguish seven-day manual-result visibility, daily cleanup, continuing draft/publication storage and separate Jira, supplier, diagnostic and platform-recovery copies. Uninstalling, clearing History and whole-owner erasure have different effects. None is a guarantee of immediate deletion of every external or backup copy.</p>
        <p>Classy uses installation/owner-scoped storage, current-user Jira access, administrator authorization for manual owner erasure and server-side provider credentials. Explicit execution diagnostics omit raw source content and credentials but can contain linkable references. These measures do not promise absolute security, supplier compliance or a certification.</p>
        <p>Depending on applicable law and the processing context, you may request access or a copy, correction, deletion, restriction or portability, object to processing, withdraw applicable consent or complain to a competent data-protection authority. Requests about customer-controlled content should ordinarily go to the organization controlling that content; Razumly can assist with Classy records within the applicable instructions and law. Contact <a href="mailto:support@razumly.com">support@razumly.com</a> and identify the affected Jira site/account without sending sensitive content or credentials. Identity and authority may need verification. Classy does not provide a complete self-service export through its limited History view.</p>
      </section>
      <section id="notice-changes">
        <h2>Changes</h2>
        <p>Changes to this notice will be published with the notice. Any additional notice required by an applicable agreement or law remains separate; this statement does not replace the selected DPA&apos;s notice obligations.</p>
      </section>
      <DataHandling />
    </Document>
  );
}
