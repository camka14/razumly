import Document from "../../_components/Document";

export const metadata = {
  title: "Customer agreement & DPA",
  description: "Classy Customer Agreement and DPA Details, version 1.0.",
};

export default function AgreementPage() {
  return (
    <Document
      title="Classy Customer Agreement"
      intro="Version 1.0"
      sections={[
        { id: "customer-terms", label: "Customer terms" },
        { id: "dpa-details", label: "DPA Details" },
      ]}
    >
      <section id="customer-terms">
        <h2>Customer terms</h2>
        <h3>1. Agreement</h3>
        <p>This agreement is between <strong>Razumly</strong> (Provider) and the <strong>Customer identified in the applicable Atlassian Marketplace Order</strong> for Classy. It consists of the <a href="https://www.atlassian.com/licensing/marketplace/end-user-agreement-v1">Bonterms Standard End User Agreement, Version 1.0</a>, these Provider-Specific Terms and the DPA incorporated below. Each Order creates a separate agreement, effective as provided in the standard agreement.</p>

        <h3>2. Use and payment</h3>
        <p>Customer may use Classy for its business purposes within its subscription and the <a href="https://www.razumly.com/classy/docs">Classy documentation</a>. Fees, payment and subscription periods follow the applicable Order and Marketplace terms. Customer manages its users, permissions and automation rules and must have the rights and lawful authority to submit its data.</p>

        <h3>3. Inputs and AI results</h3>
        <p>Customer must not submit Sensitive Data or use Classy for High-Risk Activities prohibited by the standard agreement. Inputs sent for external inference must also exclude Sensitive Data defined in §1.15 of the <a href="https://openrouter.ai/data-processing-agreement">OpenRouter DPA dated 26 August 2026</a>. These restrictions include passwords and specified health, financial, employment and identification information; the linked definitions control. Classy does not automatically redact prohibited information.</p>
        <p>AI classifications can be incorrect. Customer determines appropriate review and automation safeguards. This does not remove the standard agreement&apos;s express warranties or remedies.</p>

        <h3>4. Customer data</h3>
        <p>Customer retains its rights in Customer Data. Razumly may use that data only as permitted by the agreement to provide and maintain Classy and related support.</p>
        <p>The <a href="https://bonterms.com/standard/dpa-v2-attachment-version">Bonterms Data Protection Addendum, Version 2.0, Attachment Version</a>, including Exhibits A and B and the <strong>DPA Details below</strong>, is incorporated into this agreement. It applies within its stated scope. Its security, incident-response, assistance, audit, deletion, transfer, <strong>30-day subprocessor-notice and objection</strong> provisions remain unchanged. Its order of precedence governs conflicts concerning data processing.</p>

        <h3>5. Support and notices</h3>
        <p>Contact <strong><a href="mailto:support@razumly.com">support@razumly.com</a></strong> for support, legal notices and data-protection requests. The <a href="https://www.razumly.com/classy/support">Classy Support Policy</a> applies, supplemented by these response commitments: within <strong>24 hours</strong> for requests Atlassian identifies as critical, and within <strong>five business days</strong> for other customer or Atlassian support requests. These are response times, not resolution or uptime guarantees.</p>
        <p>Customer must designate an authorized notice contact. Razumly will verify authority before acting on requests for access, export or deletion and will handle them under the agreement, DPA and applicable law. Requests must not include credentials or whole-installation exports by ordinary email.</p>

        <h3>6. Other terms</h3>
        <p>The standard agreement&apos;s confidentiality, performance warranty, remedies, liability limits and exceptions, indemnification, suspension, termination and governing-law provisions remain unchanged. Nothing here waives obligations or rights that applicable law does not permit the parties to waive.</p>
      </section>

      <section id="dpa-details">
        <h2>DPA Details</h2>
        <p>These Details form the attachment incorporated by Customer Terms §4. They supply the service-wide information and the rule for identifying actual transaction-specific details; they do not invent a customer or deem missing information supplied.</p>

        <h3>Parties and key terms</h3>
        <ul>
          <li><strong>Main Agreement:</strong> the Classy agreement above for the relevant Marketplace Order. The Order identifies the transaction; it does not itself become part of the agreement.</li>
          <li><strong>DPA Effective Date:</strong> the effective date of the Main Agreement into which this DPA is incorporated, or the actual effective date of a later written incorporation. No backdating is permitted.</li>
          <li><strong>Provider / data importer:</strong> Razumly; 2130 N Q St, Washougal, WA 98671, United States. Data-protection contact: <a href="mailto:support@razumly.com">support@razumly.com</a>. Activity: providing Classy. Role: Processor.</li>
          <li><strong>Customer / data exporter:</strong> the contracting party&apos;s actual name, main address and authorized data-protection contact recorded with the relevant Order or supplied in writing to Razumly. Activity: configuring and using Classy on its authorized instructions. Customer is Controller where it determines purposes and means, or Processor where it acts for another Controller. The actual role applies separately to each processing activity.</li>
          <li><strong>Completion:</strong> missing customer identity, main address, authorized contact and relevant controller/role information must be supplied and recorded before the affected personal-data processing. Razumly retains the completed Details and actual acceptance/version evidence. The installer is not automatically the contracting party or authorized contact.</li>
          <li><strong>Designated EU Governing Law / Member State:</strong> Ireland, where Exhibit A applies. The competent supervisory authority follows SCC Clause 13 for the actual exporter and transfer. The unchanged Exhibit A supplies the applicable EU modules, UK Addendum and Swiss modifications. This does not promise EU-only hosting or change the main agreement&apos;s California governing law.</li>
        </ul>

        <h3>Processing</h3>
        <p><strong>Subject matter, purpose and operations:</strong> customer-configured classification of authorized Jira summaries/descriptions or supplied text; storage and management of classifier definitions, published revisions and manual outcomes; supporting Automation, account reporting, export and erasure. Operations include collection, storage, retrieval, transmission for inference, evaluation, return of results, publication as instructed and deletion.</p>
        <p><strong>People and data:</strong> users and account owners, and customers, prospective customers and business contacts represented in permitted content. Data comprises permitted account/contact identifiers, communications and user-generated text, classifier definitions, source titles/previews, decision/Jira/revision references, hashes, timestamps and linkable execution metadata. No Sensitive Data or special-category data is authorized.</p>
        <p><strong>Frequency:</strong> inference transfers occur on admitted classification requests; account-privacy reporting sends registered account identifiers and collection times to Atlassian.</p>
        <p><strong>Duration:</strong> during the Main Agreement and thereafter only as permitted by DPA §8 and controlling transfer clauses. Manual results are hidden after seven rolling UTC days; physical cleanup is daily and can lag, especially after failure. Receipts have a separate 168-hour eligibility boundary. Drafts and publications persist until deliberate removal or applicable account erasure. App deletion does not by itself establish deletion of separate Jira, diagnostic, supplier or platform-recovery copies; applicable return/deletion duties still apply to their covered scope.</p>

        <h3>Subprocessor List</h3>
        <ul>
          <li><strong>Atlassian Pty Ltd — direct Forge hosting:</strong> app execution and hosted storage. Persistent storage follows the host Atlassian app&apos;s storage location; other processing is governed by the <a href="https://developer.atlassian.com/platform/forge/resources/Forge-Data-Processing-Addendum.pdf">Forge DPA</a>. Hosting and permitted protected retention continue for their applicable duration. Customer&apos;s own Jira relationship is a separate scope.</li>
          <li><strong>OpenRouter, Inc. — direct inference routing:</strong> classification inputs, outputs and invocation metadata. Its DPA describes U.S. hosting; Classy uses the global endpoint. Payload and operational-record retention have different contractual categories and exceptions.</li>
          <li><strong>TypeSafe AI, Inc. — nested inference provider through OpenRouter:</strong> classification of routed inputs. Its <a href="https://typesafe.ai/legal/privacy-policy">published privacy policy</a> describes U.S. hosting. It is not a direct Razumly engagement.</li>
        </ul>
        <p>These are supplier-described locations, not an assurance of every request&apos;s processing country or an end-to-end residency guarantee. Changes remain subject to DPA §4 and applicable higher-priority transfer requirements; this list does not exempt relevant further recipients.</p>

        <h3>Security measures</h3>
        <p>Razumly will maintain installation/owner-scoped storage, trusted invocation identity, current-user Jira access checks, and current-administrator authorization for installation-wide export and erasure. Further measures include validated inputs, immutable published revisions, fenced deletion, bounded history, an encrypted Forge provider credential and HTTPS inference requests with mandatory no-collection/ZDR routing filters and no weaker fallback. Application execution diagnostics omit raw source content, classifier definitions, credentials and provider/error bodies; they can retain linkable technical references. Routing filters are not a guarantee of every supplier&apos;s conduct.</p>
        <p>Operational measures include restricted handling of customer requests, requester-authority checks, agreed secure delivery of exports, review of security notices, use of existing automated dependency checks and required security updates, and incident handling under the DPA. No audit certification, continuous staffed monitoring, universal MFA enforcement or independently tested recovery guarantee is represented.</p>

        <h3>Additional terms</h3>
        <p>The input restrictions in Customer Terms §3 also apply to these Details. Customer may submit access, return, correction, deletion, assistance and audit requests to <a href="mailto:support@razumly.com">support@razumly.com</a>, identifying the installation and scope without credentials or sensitive source content. This channel supplements and does not limit DPA §§7–9. No other change to the standard DPA is made.</p>
      </section>

      <hr />
      <p>The unchanged standards are incorporated by reference, not reproduced as edited Bonterms texts: Bonterms Standard End User Agreement v1.0 © 2025 Bonterms, Inc. (<a href="https://creativecommons.org/licenses/by-nd/4.0/">CC BY-ND 4.0</a>); Bonterms DPA v2.0 © 2026 Bonterms, Inc. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>). Bonterms is not a party and does not provide legal advice or guarantee enforceability.</p>
    </Document>
  );
}
