import Link from "next/link";

export const dataSections = [
  { id: "processing", label: "External processing" },
  { id: "stored-data", label: "Stored data" },
  { id: "retention", label: "Retention" },
  { id: "deletion", label: "Delete data" },
  { id: "boundaries", label: "Erasure limits" },
  { id: "privacy-requests", label: "Privacy requests" },
  { id: "supplier-sources", label: "Supplier sources" },
];

export default function DataHandling() {
  return (
    <>
      <section id="processing">
        <h2>External AI processing</h2>
        <p>Classification sends source text, classifier question/instructions and category IDs, labels and matching descriptions to <strong>OpenRouter and TypeSafe (Jev)</strong>, outside Atlassian. Classy uses the <code>typesafe/jev-1.13</code> model through OpenRouter&apos;s Decisions API.</p>
        <ul>
          <li><strong>Issue classification:</strong> source text is the issue&apos;s summary and description, read with the invoking user&apos;s Jira permissions. Classy does not fetch comments or attachments for this action.</li>
          <li><strong>Text classification:</strong> source text is whatever you supply in the workbench or Automation action, including resolved smart values. Such input can include information about any person you mention.</li>
          <li><strong>Operational reference:</strong> OpenRouter also receives the Forge invocation reference as a session ID. Its Decisions contract describes this as observability metadata not forwarded to the model provider.</li>
        </ul>
        <p>The provider request does not separately send the Jira issue key, classifier name or confidence threshold. Any of those details may nevertheless appear in free text; Classy does not automatically redact personal information from your content.</p>
        <p>Every request requires <strong>no-data-collection and zero-data-retention routing</strong>. If the route cannot meet these filters, Classy does not weaken them, switch models or create a fallback decision. These are routing requirements, not a guarantee of supplier behavior or destruction of all copies.</p>
        <p>OpenRouter account input/output logging and data-use settings are separate from request routing. Supplier operational metadata, permitted transient processing, security/abuse handling and legal-retention exceptions can remain. Disabling a setting does not erase previously retained data. Classy makes no app-wide regional-residency or Atlassian-only processing claim.</p>
        <p>Only submit content you are authorized to process with these external services. Do not submit secrets or sensitive information, or use classification for decisions requiring guaranteed accuracy. Classy does not automatically redact your content.</p>
      </section>

      <section id="stored-data">
        <h2>What Classy stores and why</h2>
        <p>Classy app records use installation-scoped Forge-hosted storage. Data supports saved configuration, published Automation decisions, authorized manual history, replay protection, retention and erasure. No Classy-operated external app database is used in this implementation.</p>
        <dl>
          <div><dt>Private classifier drafts</dt><dd>Names, question/instructions, category IDs/labels/criteria/colors, confidence threshold and revision information, owned by your Atlassian account in this installation.</dd></div>
          <div><dt>Published revisions</dt><dd>Immutable definition snapshots and lookup records. Publishing deliberately makes a revision selectable across the Jira site; it does not make your manual history site-wide.</dd></div>
          <div><dt>Manual results</dt><dd>Source title, preview up to 240 characters, relevant Jira issue key/update metadata, classifier/revision references, category/probability snapshots, model, usage, timestamps and result references. There is no separate complete source-text field, but a title or short preview may itself contain personal information or the entirety of a short input.</dd></div>
          <div><dt>Execution receipts</dt><dd>Manual replay identities, private request fingerprints, history/revision linkage and outcome references, not a second source-text or result copy. Native actions do not append private workbench history.</dd></div>
          <div><dt>Owner and lifecycle records</dt><dd>The Atlassian account ID, oldest collection/reporting metadata, owner linkage and record counts needed to identify and erase that owner&apos;s records. Ordinary classifier deletion may leave a minimal linkable lifecycle record; whole-owner erasure removes it.</dd></div>
          <div><dt>Retention and inference state</dt><dd>Cleanup progress/checkpoints and installation-wide concurrency/rate/shutoff state. Logical expiry of a reservation or timestamp is not immediate destruction of every old field.</dd></div>
          <div><dt>Execution diagnostics</dt><dd>Invocation, installation and result references; stage/outcome/error class; timing; model; provider generation, usage and reported cost. Explicit execution records omit raw source, definitions, credentials and raw provider/error bodies, but their identifiers may remain linkable to an owner.</dd></div>
        </dl>
        <p>Account scopes and several fingerprints use SHA-256. Hashing supports linkage and equality checks; it is not an anonymity guarantee. Jira access is rechecked before successful issue results/outputs and when reading Jira-backed history.</p>
      </section>

      <section id="retention">
        <h2>Retention is not the same as visibility</h2>
        <ul>
          <li><strong>Manual History:</strong> up to 50 recent results younger than seven rolling 24-hour UTC periods, measured from server creation time. Expired results are excluded immediately.</li>
          <li><strong>Physical app-storage cleanup:</strong> a daily worker removes expired results and then expired execution receipts in bounded background batches. Result deletion can lag expiry by roughly one day; failures can extend that lag.</li>
          <li><strong>Receipts:</strong> eligibility for cleanup is 168 hours after the later of admission and the execution identity&apos;s preparation time. Receipt retention does not extend a result&apos;s History lifetime.</li>
          <li><strong>Drafts and publications:</strong> no seven-day automatic expiry. Delete or unpublish deliberately; whole-owner erasure also covers them.</li>
          <li><strong>Logs, supplier records and platform recovery copies:</strong> controlled separately. A log query window, routing flag or empty History view is not a destruction deadline.</li>
        </ul>
        <p>Jira administrators can inspect <strong>Result retention</strong> in <strong>Jira settings → Apps → Classy administration</strong> and resume interrupted cleanup. A cleanup error or overdue data requires attention; contact <Link href="/classy/support">support</Link> if it persists. Classy does not offer a configurable custom retention period.</p>
      </section>

      <section id="deletion">
        <h2>How to delete Classy data</h2>
        <h3>Clear a classifier&apos;s manual history</h3>
        <p>Open the saved classifier&apos;s <strong>History</strong> and confirm <strong>Clear history</strong>. This removes retained results and receipts, including Jira results hidden by your current issue permissions, but keeps the classifier and published revisions. A run accepted before the clear cannot restore its old history afterward.</p>
        <p>If the UI reports <strong>History cleanup pending</strong>, use <strong>Resume cleanup</strong>. That resumes the interrupted boundary without clearing a newer run. A local reset or empty table alone does not mean storage cleanup succeeded.</p>
        <h3>Unpublish or delete a classifier</h3>
        <p>Unpublishing removes the selected published snapshot from Classy. Deleting a classifier removes its private definition, results, receipts and publications with their lookup records. Rules pinned to a removed publication fail; update or disable them first.</p>
        <p>Interrupted deletion stays fenced against new writes. Retry <strong>Delete classifier</strong> in its dialog, or reload and use <strong>Resume deletion</strong> under <strong>Pending deletions</strong>. Other classifiers remain usable. Ordinary classifier deletion is not whole-owner erasure.</p>
        <h3>Erase an account&apos;s records in this installation</h3>
        <ol>
          <li>Ask a current Jira administrator to open <strong>Classy administration → Owner data erasure</strong> for the correct Jira site/installation.</li>
          <li>Enter the account&apos;s <strong>Owner account ID</strong>, select <strong>Inspect owner data</strong> and confirm the installation shown. Inspection does not run erasure; the target owner need not have an active session.</li>
          <li>Confirm irreversible erasure, then select <strong>Erase owner data</strong>. It covers owned drafts, retained results, receipts, publications/indexes, lifecycle/owner records and matching retention checkpoint references, including records whose parent draft is missing.</li>
          <li>If the result is <code>erasing</code> or the response is uncertain, inspect again and use <strong>Resume owner erasure</strong>. Completion requires the erase/resume receipt to report <code>absent</code> and zero remaining classifiers.</li>
        </ol>
        <p>Whole-owner erasure is scoped to the selected account and installation. Other owners&apos; records and other installations are not erased. It is not account suspension: a later deliberate session can create new data. Requests prepared before erasure may require a reload.</p>
        <p>History clearing, deletion and administrator erasure are not blocked by the inference license check. If you cannot reach these controls, contact <a href="mailto:support@razumly.com">support@razumly.com</a> and identify the affected Jira site without sending source text or credentials.</p>
      </section>

      <section id="boundaries">
        <h2>What Classy erasure cannot erase</h2>
        <ul>
          <li>Original Jira issues, rule configuration/audits and downstream writes or copies of decision outputs. Use Jira&apos;s own controls for those records.</li>
          <li>Source/results already held in another open browser, screenshots or exports.</li>
          <li>Forge diagnostic logs or any separate log export. Explicit content-free records can still contain linkable identifiers.</li>
          <li>Provider-controlled content or metadata and lawful-retention exceptions. App-storage erasure is not evidence that OpenRouter or TypeSafe erased their copies.</li>
          <li>Atlassian&apos;s soft-deleted/recovery and backup copies. Deletion is final from Classy&apos;s app-readable storage point of view, not an immediate platform-backup destruction guarantee.</li>
        </ul>
        <p>Uninstalling is not the same as the in-app erasure procedure. Atlassian documents a 28-day hosted-storage retention period after uninstall and a 21-day recovery-request window. Its separate lifecycle guidance describes billing/trial-related access and platform-managed soft-deleted/backup disposal. Those periods describe different things; Classy does not combine them into a promised end-to-end deletion deadline.</p>
        <p>See Atlassian&apos;s <a href="https://developer.atlassian.com/platform/forge/storage-reference/hosted-storage-data-lifecycle/">Forge-hosted data lifecycle</a> and <a href="https://developer.atlassian.com/platform/forge/storage-reference/#data-recovery-for-apps-with-hosted-storage">storage recovery guidance</a>. If deletion is needed before uninstall, complete the applicable erasure procedure while Classy remains accessible.</p>
      </section>

      <section id="privacy-requests">
        <h2>Privacy and account requests</h2>
        <p>For account-record erasure, access or correction questions, contact your Jira administrator or <a href="mailto:support@razumly.com">support@razumly.com</a>. State that the request concerns Classy and the affected Jira site/account; do not email sensitive source content, passwords or API keys.</p>
        <p>Classy&apos;s daily maintenance and the administrator&apos;s <strong>Run cleanup now</strong> control queue due account reports without requiring the owner to be online. Reporting sends the registered Atlassian account ID and oldest collection time to Atlassian&apos;s Personal Data Reporting API. A successful no-change response sets the next reporting cycle; administrators can inspect <strong>Next personal data report</strong> under <strong>Owner data erasure</strong>.</p>
        <p>The separate administrator reporting control uses the same policy. Accepted <code>closed</code> or <code>updated</code> responses trigger whole-owner erasure, including publications; rules bound to erased publications become unavailable. Reporting does not discover every person mentioned in free text or selectively redact their mentions from another owner&apos;s records.</p>
        <p>Classy&apos;s technical deletion controls do not determine legal entitlement, establish a broader compliance certification or erase data held by Jira and external providers. Requests involving people mentioned in content need to identify the relevant records and processing context.</p>
      </section>

      <section id="supplier-sources">
        <h2>Supplier information</h2>
        <p>These are suppliers&apos; own documents, not a Classy DPA, legal approval, certification or a per-request location guarantee:</p>
        <ul>
          <li><a href="https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request">OpenRouter Decisions API</a>, <a href="https://openrouter.ai/docs/features/zdr">ZDR routing</a> and <a href="https://openrouter.ai/docs/guides/features/input-output-logging">input/output logging</a>.</li>
          <li><a href="https://openrouter.ai/assets/data-processing-agreement.pdf">OpenRouter DPA</a> and <a href="https://trust.openrouter.ai/">OpenRouter trust center and subprocessors</a>.</li>
          <li><a href="https://typesafe.ai/legal/privacy-policy">TypeSafe privacy policy</a>, <a href="https://typesafe.ai/legal/data-processing">TypeSafe DPA</a> and <a href="https://trust.typesafe.ai/subprocessors">TypeSafe subprocessors</a>.</li>
        </ul>
      </section>
    </>
  );
}
