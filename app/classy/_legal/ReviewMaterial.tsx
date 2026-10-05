import Document from "../_components/Document";
import DataHandling from "../_components/DataHandling";

// Private App Router directory: no page route imports this material.
// Legal publication requires complete owner-approved terms and processing details.
export default function ClassyLegalReviewMaterial() {
  return (
    <Document
      title="Classy legal publication review"
      intro="Unpublished preparation for owner approval. This material does not create an agreement, certify compliance or authorize Marketplace submission."
      sections={[
        { id: "standard-terms", label: "Standard terms" },
        { id: "provider-terms", label: "Provider-specific details" },
        { id: "standard-dpa", label: "Standard DPA" },
        { id: "processing-details", label: "Classy processing details" },
        { id: "approval-inputs", label: "Required approval inputs" },
        { id: "privacy-material", label: "Privacy explanation" },
      ]}
    >
      <div className="classy-callout">
        <p><strong>Publication hold:</strong> this component is intentionally in the non-routable <code>_legal</code> directory. It is not linked from public pages and is not imported by a public route. No legal policy, executed DPA or final provider-specific terms are represented as available.</p>
      </div>

      <section id="standard-terms">
        <h2>Selected standard end-user agreement</h2>
        <p>The owner selected Atlassian&apos;s standard Marketplace agreement: <a href="https://www.atlassian.com/licensing/marketplace/end-user-agreement-v1">Bonterms Standard End User Agreement, Version 1.0</a>. Use the unchanged standard through the Marketplace&apos;s <strong>Use a standard agreement</strong> option, with approved Provider-Specific Terms entered separately.</p>
        <p>Under §§1.1–1.2, any Additional Terms and Attachments belong in Provider-Specific Terms; the agreement arises upon the customer&apos;s first Order. §1.4 gives Provider-Specific Terms priority over the standard. No custom warranty, liability, governing-law or SLA changes are proposed in this preparation.</p>
        <p>The standard already supplies California governing law and federal/state courts in San Francisco unless Provider-Specific Terms say otherwise (§19.2). Those are defaults, not unresolved fields that require an invented jurisdiction. Fees follow the Order/Marketplace (§10), and the Order may set the subscription term instead of the standard&apos;s initial 12 months (§12.1).</p>
        <p>§19.3 permits notices by email and requires a Provider notice address through the Listing or Product. A separate physical address is <strong>not required by this EULA notice clause</strong>. The known public email <a href="mailto:support@razumly.com">support@razumly.com</a> is the proposed notice address, subject to owner adoption.</p>
        <p>Source and implementation instructions: <a href="https://developer.atlassian.com/platform/marketplace/list-customizable-end-user-agreement/">Atlassian&apos;s standard agreement adoption guide</a>. The standard does not automatically create a Classy DPA; additional processing terms are required where applicable.</p>
        <p>Bonterms Standard End User Agreement (Version 1.0). © 2025 Bonterms, Inc. Free to use under <a href="https://creativecommons.org/licenses/by-nd/4.0/">CC BY-ND 4.0</a>. <a href="https://bonterms.com/">Bonterms</a> publishes the standard, is not a party to the customer agreement, does not provide legal advice, does not guarantee its enforceability or effect, and has no liability relating to its use. This preparation links the unchanged base; it does not distribute an edited base agreement.</p>
      </section>

      <section id="provider-terms">
        <h2>Provider-specific details available for approval</h2>
        <dl>
          <div><dt>Contracting Provider</dt><dd>Razumly. The owner supplied this legal name for the Classy contracting party.</dd></div>
          <div><dt>Provider main address</dt><dd>2130 N Q St, Washougal, WA 98671, United States. Owner-supplied business mailing address; no entity type, incorporation jurisdiction or signatory authority is inferred.</dd></div>
          <div><dt>Product</dt><dd>Classy for Jira: configurable text-classification workbench and native Classify issue / Classify text Automation actions.</dd></div>
          <div><dt>Documentation</dt><dd><a href="/classy/docs">Classy documentation</a>, including setup, publication, review-safe branching, history and reduced inference access.</dd></div>
          <div><dt>Support Policy candidate</dt><dd><a href="/classy/support">Classy support</a>, contacted at support@razumly.com. No support hours, guaranteed response time or uptime SLA have been approved or added. The standard&apos;s Support obligation follows the policy identified in Provider-Specific Terms (§5.1); an SLA is only one identified there (§5.2).</dd></div>
          <div><dt>Notices candidate</dt><dd>support@razumly.com, if adopted by the owner under §19.3. No additional invented legal email or address is used.</dd></div>
          <div><dt>Data-handling explanation</dt><dd><a href="/classy/data">Classy data and deletion explanation</a>. This is technical documentation, not the approved privacy policy or DPA attachment.</dd></div>
          <div><dt>Additional Terms / Attachments</dt><dd>No custom departures from the base EULA are proposed. An approved Classy DPA, where applicable, must be separately incorporated in Provider-Specific Terms (§3.3) before publication. No uncreated public legal URL is supplied.</dd></div>
          <div><dt>Commercial settings</dt><dd>The owner selected USD 3 per Jira-site user/month for preparation. Annual/tier settings and the final listing remain unsubmitted. Do not insert this preparation price as a purchase offer or override the Order&apos;s fees.</dd></div>
        </dl>
        <p>Before adopting the standard, the owner must accept the actual standard obligations, including performance warranty/remedies (§6.2), sensitive-data/high-risk restrictions (§7.2), availability of Customer Data (§12.4(a)), requested post-termination deletion (§12.4(b), subject to §12.4(c)), indemnification (§15) and confidentiality (§16). This is approval of the chosen contract, not a request to create additional legal terms.</p>
        <p>The implementation exposes configuration and authorized limited History; no complete self-service customer-data export is described. The owner must approve how any required Customer Data access/return requests will be fulfilled under §12.4(a). Do not promise a nonexistent export feature or treat seven-day History as access to every stored record.</p>
      </section>

      <section id="standard-dpa">
        <h2>Standard DPA prepared for approval</h2>
        <p>Use the current <a href="https://bonterms.com/standard/dpa-v2-attachment-version">Bonterms Data Protection Addendum, Version 2.0 (Attachment Version)</a> as the proposed base. Unlike Version 1.0&apos;s Cloud Terms-specific structure, Version 2.0 supports any Main Agreement. All substantive terms and Exhibits A/B are retained by reference; this Classy preparation supplies technical processing details, not an altered or executed DPA.</p>
        <p>The <a href="https://support.bonterms.com/hc/en-us/articles/20927108545172-How-to-Use-the-Bonterms-DPA">official usage guide</a> requires completed DPA Details and effective written incorporation into the Main Agreement. The Attachment Version is not separately signed. Owner/counsel must approve the chosen Marketplace incorporation/execution method, including any deemed-signature treatment for applicable SCCs.</p>
        <p>Standard defaults include Provider as Processor and Customer as Controller or Processor (§2.1), incident notification without undue delay and within 48 hours of Provider awareness (§§1.28, 5.2), email or in-product administrator subprocessor notice (§1.31), and at least 30 days&apos; notice before a new subprocessor processes customer personal data (§4.3). These are existing standard commitments to approve, not mandatory customization choices.</p>
        <p>Exhibit A provides EU SCC Modules 2/3 according to customer role, UK Addendum and Swiss modifications where applicable. Designated EU law and member-state courts are needed only if the EU SCC provisions apply; no EU jurisdiction or “N/A” is invented here. The competent supervisory authority is determined under SCC Clause 13; a named authority is optional if not yet identified in the DPA Details. No Classy Data Privacy Framework certification is evidenced or claimed.</p>
        <p>Bonterms Data Protection Addendum Version 2.0 (Attachment Version). © 2026 Bonterms, Inc. Free to use under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. <a href="https://bonterms.com/">Bonterms</a> does not provide legal advice, does not guarantee enforceability or effect, and has no liability relating to use of its terms. Classy-specific preparation below is original technical material; it does not claim Bonterms&apos; endorsement.</p>
      </section>

      <section id="processing-details">
        <h2>Classy processing details</h2>
        <dl>
          <div><dt>Provider party details</dt><dd>Razumly, at the Provider main address above. The proposed data-protection contact is support@razumly.com, subject to owner adoption. Customer party details come from the applicable Order or execution materials.</dd></div>
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
        <p>Use the detailed technical explanation below for retention and deletion particulars. The Provider name and main address above are owner-supplied. Remaining DPA Details must cover applicable roles, approved data-protection contacts, the approved Subprocessor List and complete applicable technical/organizational measures. A customer&apos;s identity/contact/address/activity information can come from its Order or execution materials; those are transaction-specific details, not unknown publisher facts to invent before launch.</p>
      </section>

      <section id="approval-inputs">
        <h2>Precisely unresolved approval inputs</h2>
        <ol>
          <li><strong>Provider authority and contacts:</strong> the owner has supplied the contracting Provider name and main address above; they are no longer missing inputs. Authorized adoption of the standard/Provider-Specific Terms remains separate. Approve support@razumly.com for formal notices/data-protection contact if that is the intended role. A business mailing address does not establish entity type, signatory authority or applicable SCC terms.</li>
          <li><strong>DPA applicability and execution:</strong> confirm the actual Provider/customer roles and applicable laws; approve the generic standard and effective incorporation. Select EU law/member-state only where the standard requires it for applicable SCCs. Identify the DPA effective date through the real transaction; no artificial legal effective date is supplied.</li>
          <li><strong>Downstream contractual coverage:</strong> <a href="https://openrouter.ai/assets/data-processing-agreement.pdf">OpenRouter&apos;s DPA</a> §§2.1 and 13.2 state Customer is Controller and incorporate SCC Module 2. Public terms alone do not establish coverage for Classy acting as a customer&apos;s Processor, or a direct TypeSafe enterprise agreement on the routed service. Confirm the operative agreements and appropriate onward-transfer treatment. This is an unresolved coverage question, <strong>not a finding that the route is legally noncompliant</strong>.</li>
          <li><strong>Actual Subprocessor List and locations:</strong> confirm the applicable Atlassian/OpenRouter/TypeSafe contracting chain and functions/locations for the service, using supplier documents. <a href="https://trust.openrouter.ai/">OpenRouter&apos;s public inventory</a> lists U.S. operational vendors and global/provider-dependent model providers. <a href="https://trust.typesafe.ai/subprocessors">TypeSafe&apos;s public list</a> identifies AWS, Modal, Slack, Google Workspace, Nebius and CoreWeave in the USA. These general inventories do not prove that every listed vendor receives Classy inference content or that a Jev request executes in a particular location; do not publish them as a verified Classy per-request map.</li>
          <li><strong>Adoptable notice commitments:</strong> the standard DPA&apos;s §§4.3/5.2 require 30-day new-subprocessor notice and 48-hour incident notice after Provider awareness. OpenRouter §5.2 offers 30-day notices when subscribed, excluding model providers, and §7 allows up to 72 hours after its awareness. <a href="https://typesafe.ai/legal/data-processing">TypeSafe&apos;s DPA</a> §3.2 uses reasonable advance notice/15-day objections and §5.2 allows up to 72 hours after its awareness. Approve a feasible Classy handling/notice commitment under the chosen standard or separately approved Additional Terms. The different clocks/notice terms alone do not establish a legal violation.</li>
          <li><strong>Security and data access/deletion commitments:</strong> approve actual applicable organizational measures and responsible handling of the standard&apos;s data-subject requests, return/access, deletion certificate and audit obligations (§§5–9). Do not copy supplier certifications as Classy certifications or promise full export/backup destruction based on a History view or storage receipt.</li>
          <li><strong>Privacy policy adoption:</strong> approve the applicable role/lawful-basis/rights disclosures, external-AI notice or consent treatment, transfers, support-message handling and any relevant exceptions for Razumly. The owner reported OpenRouter prompt/output logging and data-use controls saved off on 2026-10-03; no duplicate settings confirmation is requested. That does not establish deletion of previously retained content. The known product explanation cannot establish the remaining legal facts by itself.</li>
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
