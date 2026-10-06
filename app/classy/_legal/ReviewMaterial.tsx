import Document from "../_components/Document";
import DataHandling from "../_components/DataHandling";

// Private App Router directory: no page route imports this material.
// Legal publication requires complete owner-approved terms and processing details.
export default function ClassyLegalReviewMaterial() {
  return (
    <Document
      title="Classy legal publication review"
      intro="Private review of the owner-approved standard-terms approach. Supplier coverage and remaining processing disclosures are not finalized; this material does not create an agreement or authorize Marketplace submission."
      sections={[
        { id: "standard-terms", label: "Standard terms" },
        { id: "provider-terms", label: "Provider-specific details" },
        { id: "standard-dpa", label: "Standard DPA" },
        { id: "processing-details", label: "Classy processing details" },
        { id: "supplier-terms", label: "Supplier terms checked" },
        { id: "approval-inputs", label: "Remaining publication checks" },
        { id: "privacy-material", label: "Privacy explanation" },
      ]}
    >
      <div className="classy-callout">
        <p><strong>Publication hold:</strong> this component is intentionally in the non-routable <code>_legal</code> directory. It is not linked from public pages and is not imported by a public route. No legal policy, executed DPA or final provider-specific terms are represented as available.</p>
        <p><strong>Owner decisions, 6 October 2026:</strong> the proposed legal approach is approved, <a href="mailto:support@razumly.com">support@razumly.com</a> receives all notices, including legal and privacy notices, and OpenRouter is used under its standard terms. No negotiated supplier agreement is assumed. Production deployment and Marketplace submission remain separate approvals.</p>
      </div>

      <section id="standard-terms">
        <h2>Selected standard end-user agreement</h2>
        <p>The owner selected Atlassian&apos;s standard Marketplace agreement: <a href="https://www.atlassian.com/licensing/marketplace/end-user-agreement-v1">Bonterms Standard End User Agreement, Version 1.0</a>. Use the unchanged standard through the Marketplace&apos;s <strong>Use a standard agreement</strong> option, with approved Provider-Specific Terms entered separately.</p>
        <p>Under §§1.1–1.2, any Additional Terms and Attachments belong in Provider-Specific Terms; the agreement arises upon the customer&apos;s first Order. §1.4 gives Provider-Specific Terms priority over the standard. No custom warranty, liability, governing-law or SLA changes are proposed in this preparation.</p>
        <p>The standard already supplies California governing law and federal/state courts in San Francisco unless Provider-Specific Terms say otherwise (§19.2). Those are defaults, not unresolved fields that require an invented jurisdiction. Fees follow the Order/Marketplace (§10), and the Order may set the subscription term instead of the standard&apos;s initial 12 months (§12.1).</p>
        <p>§19.3 permits notices by email and requires a Provider notice address through the Listing or Product. A separate physical address is <strong>not required by this EULA notice clause</strong>. The owner approved <a href="mailto:support@razumly.com">support@razumly.com</a> for legal and privacy notices.</p>
        <p>Source and implementation instructions: <a href="https://developer.atlassian.com/platform/marketplace/list-customizable-end-user-agreement/">Atlassian&apos;s standard agreement adoption guide</a>. The standard does not automatically create a Classy DPA; additional processing terms are required where applicable.</p>
        <p>Bonterms Standard End User Agreement (Version 1.0). © 2025 Bonterms, Inc. Free to use under <a href="https://creativecommons.org/licenses/by-nd/4.0/">CC BY-ND 4.0</a>. <a href="https://bonterms.com/">Bonterms</a> publishes the standard, is not a party to the customer agreement, does not provide legal advice, does not guarantee its enforceability or effect, and has no liability relating to its use. This preparation links the unchanged base; it does not distribute an edited base agreement.</p>
      </section>

      <section id="provider-terms">
        <h2>Provider-specific details</h2>
        <dl>
          <div><dt>Contracting Provider</dt><dd>Razumly. The owner supplied this legal name for the Classy contracting party.</dd></div>
          <div><dt>Provider main address</dt><dd>2130 N Q St, Washougal, WA 98671, United States. Owner-supplied business mailing address; no entity type, incorporation jurisdiction or signatory authority is inferred.</dd></div>
          <div><dt>Product</dt><dd>Classy for Jira: configurable text-classification workbench and native Classify issue / Classify text Automation actions.</dd></div>
          <div><dt>Documentation</dt><dd><a href="/classy/docs">Classy documentation</a>, including setup, publication, review-safe branching, history and reduced inference access.</dd></div>
          <div><dt>Support Policy</dt><dd><a href="/classy/support">Classy support</a>, contacted at support@razumly.com. No support hours, guaranteed response time or uptime SLA have been approved or added. The standard&apos;s Support obligation follows the policy identified in Provider-Specific Terms (§5.1); an SLA is only one identified there (§5.2).</dd></div>
          <div><dt>Legal and privacy notices</dt><dd><a href="mailto:support@razumly.com">support@razumly.com</a>, owner-approved for all notices, including formal notices under §19.3 and data-protection correspondence. Recording this address does not register it with a supplier&apos;s notification service.</dd></div>
          <div><dt>Data-handling explanation</dt><dd><a href="/classy/data">Classy data and deletion explanation</a>. This is technical documentation, not the approved privacy policy or DPA attachment.</dd></div>
          <div><dt>Additional Terms / Attachments</dt><dd>No custom departures from the base EULA are proposed. An approved Classy DPA, where applicable, must be separately incorporated in Provider-Specific Terms (§3.3) before publication. No uncreated public legal URL is supplied.</dd></div>
          <div><dt>Commercial settings</dt><dd>The owner selected USD 3 per Jira-site user/month for preparation. Annual/tier settings and the final listing remain unsubmitted. Do not insert this preparation price as a purchase offer or override the Order&apos;s fees.</dd></div>
        </dl>
        <p>The owner approved the proposed standard-terms approach. The unchanged standard includes performance warranty/remedies (§6.2), sensitive-data/high-risk restrictions (§7.2), availability of Customer Data (§12.4(a)), requested post-termination deletion (§12.4(b), subject to §12.4(c)), indemnification (§15) and confidentiality (§16). These are existing standard obligations, not new custom terms or an executed customer agreement.</p>
        <p>The implementation exposes configuration and authorized limited History; no complete self-service customer-data export is described. The final processing details must identify how required Customer Data access/return requests will be fulfilled under §12.4(a). Do not promise a nonexistent export feature or treat seven-day History as access to every stored record.</p>
      </section>

      <section id="standard-dpa">
        <h2>Selected standard DPA and remaining details</h2>
        <p>The selected base is the current <a href="https://bonterms.com/standard/dpa-v2-attachment-version">Bonterms Data Protection Addendum, Version 2.0 (Attachment Version)</a>. Unlike Version 1.0&apos;s Cloud Terms-specific structure, Version 2.0 supports any Main Agreement. All substantive terms and Exhibits A/B are retained by reference; this Classy preparation supplies technical processing details, not an altered or executed DPA.</p>
        <p>The <a href="https://support.bonterms.com/hc/en-us/articles/20927108545172-How-to-Use-the-Bonterms-DPA">official usage guide</a> requires completed DPA Details and effective written incorporation into the Main Agreement. The Attachment Version is not separately signed. Complete the processing details and incorporate the DPA through Provider-Specific Terms before representing it as effective, including the standard&apos;s deemed-signature treatment for applicable SCCs.</p>
        <p>Standard defaults include Provider as Processor and Customer as Controller or Processor (§2.1), incident notification without undue delay and within 48 hours of Provider awareness (§§1.28, 5.2), email or in-product administrator subprocessor notice (§1.31), and at least 30 days&apos; notice before a new subprocessor processes customer personal data (§4.3). These are existing standard commitments, not mandatory customization choices. Approval of the approach does not establish that suppliers provide identical notice periods.</p>
        <p>Exhibit A provides EU SCC Modules 2/3 according to customer role, UK Addendum and Swiss modifications where applicable. Designated EU law and member-state courts are needed only if the EU SCC provisions apply; no EU jurisdiction or “N/A” is invented here. The competent supervisory authority is determined under SCC Clause 13; a named authority is optional if not yet identified in the DPA Details. No Classy Data Privacy Framework certification is evidenced or claimed.</p>
        <p>Bonterms Data Protection Addendum Version 2.0 (Attachment Version). © 2026 Bonterms, Inc. Free to use under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. <a href="https://bonterms.com/">Bonterms</a> does not provide legal advice, does not guarantee enforceability or effect, and has no liability relating to use of its terms. Classy-specific preparation below is original technical material; it does not claim Bonterms&apos; endorsement.</p>
      </section>

      <section id="processing-details">
        <h2>Classy processing details</h2>
        <dl>
          <div><dt>Provider party details</dt><dd>Razumly, at the Provider main address above. The owner-approved data-protection contact is <a href="mailto:support@razumly.com">support@razumly.com</a>. Customer party details come from the applicable Order or execution materials.</dd></div>
          <div><dt>Proposed Main Agreement</dt><dd>The customer&apos;s Marketplace agreement for Classy using the Bonterms Standard End User Agreement (Version 1.0), together with approved Provider-Specific Terms. Its actual Order/effective date and incorporation language are supplied when the agreement is entered into, not fabricated for this preparation.</dd></div>
          <div><dt>Service and subject matter</dt><dd>Store and manage classifier definitions, classify authorized Jira summary/description or supplied text, return structured decisions, retain private manual outcomes, publish immutable site-wide revisions, and perform account reporting/retention/erasure.</dd></div>
          <div><dt>Purpose and nature</dt><dd>Customer-configured classification and supporting configuration/history/Automation functions. Operations include collection, storage, retrieval, transmission for external inference, evaluation, return of decision metadata, publication as directed, and deletion.</dd></div>
          <div><dt>Data subjects</dt><dd>Atlassian account owners and users; other people whose information the customer places in Jira issue text, supplied text or classifier definitions. Exact additional categories depend on customer content and must be described accurately for the applicable customer, rather than preselecting every example category in the standard.</dd></div>
          <div><dt>Personal-data categories</dt><dd>Account IDs, source titles/previews and free-text communications/user-generated content, classifier definitions, relevant Jira/decision/revision references, hashes, collection/reporting timestamps and linkable execution metadata. Content may include contact or professional information if supplied by the customer; Classy does not independently collect a demographic or financial profile.</dd></div>
          <div><dt>Sensitive or special-category data</dt><dd>No such processing is proposed under the selected EULA&apos;s §7.2 prohibition. The implementation does not discover or redact sensitive data in arbitrary free text. Owner approval must align the DPA scope and customer instructions with the standard restriction and supplier agreements.</dd></div>
          <div><dt>Frequency of transfer</dt><dd>On each admitted manual or native inference request, while the customer uses classification. Account reporting transmits the registered account ID/oldest collection time to Atlassian. This is not a claim of a constant stream of source content.</dd></div>
          <div><dt>App-storage retention</dt><dd>Manual results are hidden after seven rolling UTC days; daily physical cleanup can lag by roughly one day or longer after failure. Receipts have a separate 168-hour eligibility boundary. Drafts/publications persist until deliberate removal or an accepted account-privacy invalidation. Whole-owner erasure removes registered owner/lifecycle records and matching app-storage references. Platform recovery, diagnostic logs, Jira/browser and supplier copies are separate boundaries.</dd></div>
          <div><dt>Processing/transfer destinations evidenced</dt><dd>Atlassian Forge for app execution/storage and account reporting; OpenRouter for external inference routing/session metadata; TypeSafe (Jev) for classification. The global OpenRouter endpoint does not establish per-request countries or end-to-end residency.</dd></div>
          <div><dt>Technical measures evidenced</dt><dd>Installation/owner-scoped storage; trusted-runtime identity/license checks before inference; current-user Jira reads and post-inference source/access checks; current administrator permission checks for manual erasure and fenced background account-privacy erasure; durable publication/history/deletion fences; metadata-only explicit diagnostics; encrypted vendor credential environment variable; HTTPS inference endpoint and mandatory no-collection/ZDR routing. These are implemented controls, not a complete organizational security attestation or independent supplier guarantee.</dd></div>
        </dl>
        <p>Use the detailed technical explanation below for retention and deletion particulars. The Provider name, main address and notice/data-protection contact above are confirmed. Remaining DPA Details must cover applicable roles, the approved Subprocessor List and complete applicable technical/organizational measures. A customer&apos;s identity/contact/address/activity information can come from its Order or execution materials; those are transaction-specific details, not unknown publisher facts to invent before launch.</p>
      </section>

      <section id="supplier-terms">
        <h2>Supplier terms checked, 6 October 2026</h2>
        <p>The owner confirmed OpenRouter&apos;s standard terms. <a href="https://openrouter.ai/terms">OpenRouter Terms of Service</a> (31 August 2026), §10.2, incorporate its current <a href="https://openrouter.ai/data-processing-agreement">Data Processing Agreement</a> (26 August 2026) for organizational/commercial use. This is the linked HTML agreement, not an assumed negotiated or enterprise contract.</p>
        <p><strong>Specific coverage question:</strong> OpenRouter&apos;s DPA §2.1 identifies Customer as Controller, and §13.2 incorporates SCC Module 2 (Controller to Processor). Although it covers End Customer payloads, it does not expressly identify the role where Razumly processes data on behalf of a Classy customer. Obtain written confirmation of that Processor-to-Subprocessor coverage and the applicable onward-transfer mechanism, including Module 3 where required. This is an unresolved contract question, not a finding of unlawful processing.</p>
        <p><a href="https://typesafe.ai/legal/data-processing">TypeSafe&apos;s DPA</a> (24 April 2026), §6.2, expressly includes Module 3 when its Customer is a processor. Its <a href="https://typesafe.ai/legal/mca">Master Customer Agreement</a> (23 September 2026), §4.4, incorporates a DPA. However, <a href="https://openrouter.ai/api/frontend/v1/all-providers">OpenRouter&apos;s provider registry</a> links TypeSafe&apos;s <a href="https://typesafe.ai/legal/terms">website Terms of Use</a>, which defer product/service agreements. These sources do not identify the operative TypeSafe contract for this routed request or resolve the Razumly–OpenRouter role question. OpenRouter&apos;s DPA §5.1 separately promises protective agreements with its subprocessors; a direct Razumly–TypeSafe enterprise agreement is not assumed or declared necessary.</p>
        <p><strong>Unsent request to <a href="mailto:support@openrouter.ai">support@openrouter.ai</a>:</strong></p>
        <blockquote>
          <p>Razumly operates Classy for Jira under OpenRouter&apos;s standard terms, using <code>typesafe/jev-1.13</code> through <code>/api/alpha/decisions</code> with no-data-collection and ZDR routing required. Razumly processes customer-supplied text on customers&apos; behalf. Please confirm which terms cover Razumly as Processor and OpenRouter as Subprocessor, including SCC Module 3 where applicable, given DPA §§2.1 and 13.2. Please identify the applicable TypeSafe processing terms, subprocessor functions/locations and notice mechanism for changes on this route. Please also register support@razumly.com for subprocessor notices under §5.2 and confirm registration.</p>
        </blockquote>
        <p>This request has not been sent, and no notification subscription or supplier contract change has been made.</p>
      </section>

      <section id="approval-inputs">
        <h2>Remaining publication checks</h2>
        <p>The Provider identity/address, standard-terms approach, notice mailbox and use of OpenRouter&apos;s standard terms are settled. The remaining checks concern factual supplier coverage and completed disclosures, not another request to choose the same agreement or contact.</p>
        <ol>
          <li><strong>DPA applicability and execution:</strong> finalize the applicable Provider/customer roles and transfer details. Select EU law/member-state only where the standard requires it for applicable SCCs. Identify the DPA effective date through the real transaction; no artificial legal effective date is supplied.</li>
          <li><strong>Downstream contractual coverage:</strong> resolve the specific Razumly-as-Processor coverage question and routed TypeSafe terms described above with OpenRouter. The governing standard-terms choice is confirmed; do not ask the owner to identify it again or silently assume an enterprise agreement.</li>
          <li><strong>Actual Subprocessor List and locations:</strong> confirm the applicable Atlassian/OpenRouter/TypeSafe contracting chain and functions/locations for the service, using supplier documents. <a href="https://trust.openrouter.ai/">OpenRouter&apos;s public inventory</a> lists U.S. operational vendors and global/provider-dependent model providers. <a href="https://trust.typesafe.ai/subprocessors">TypeSafe&apos;s public list</a> identifies AWS, Modal, Slack, Google Workspace, Nebius and CoreWeave in the USA. These general inventories do not prove that every listed vendor receives Classy inference content or that a Jev request executes in a particular location; do not publish them as a verified Classy per-request map.</li>
          <li><strong>Notice handling:</strong> the selected DPA requires 30-day new-subprocessor notice and 48-hour incident notice after Razumly becomes aware (§§4.3/5.2). OpenRouter §5.2 provides 30-day notices only when subscribed, excludes AI model providers, and §7 uses 72 hours after OpenRouter&apos;s awareness. TypeSafe §§3.2/5.2 provide reasonable advance notice, a 15-day objection window and 72 hours after its awareness. The incident clocks start at different parties&apos; awareness; the numbers alone are not a contradiction. Establish the subscription and a feasible route-change notice process before promising the selected standard&apos;s 30-day commitment. No alternative legal terms are adopted here.</li>
          <li><strong>Security and data access/deletion details:</strong> document applicable organizational measures and responsible handling of the selected standard&apos;s data-subject requests, return/access, deletion certificate and audit obligations (§§5–9). General approval cannot establish an unimplemented capability. Do not copy supplier certifications as Classy certifications or promise full export/backup destruction based on a History view or storage receipt.</li>
          <li><strong>Complete privacy disclosures:</strong> finalize applicable role/lawful-basis/rights disclosures, external-AI notice or consent treatment, transfers, support-message handling and relevant exceptions for Razumly. The notice/data-protection mailbox is approved. The owner reported OpenRouter prompt/output logging and data-use controls saved off on 2026-10-03; no duplicate confirmation is requested. That does not establish deletion of previously retained content. The known product explanation cannot establish remaining legal facts by itself.</li>
        </ol>
        <p>No extra SLA, corporate certification, regional processing promise, alternate jurisdiction, custom retention period or new compliance framework is proposed. Once actual required details and the content are approved, the publication owner can create approved privacy/terms/DPA routes and add their links. Until then, no public legal route or dead policy link exists.</p>
      </section>

      <section id="privacy-material">
        <h2>Classy privacy/data-handling material for approval</h2>
        <p>The following complete technical disclosures are shared with the public product explanation to keep descriptions consistent. They are not represented as an approved legal privacy policy. The unresolved legal disclosures above must be completed and approved before policy publication.</p>
      </section>
      <DataHandling />
    </Document>
  );
}
