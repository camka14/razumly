import Link from "next/link";
import Document from "../_components/Document";

export const metadata = {
  title: "Documentation",
  description: "Set up a Classy classifier, publish a revision, use both native Jira Automation actions and route decisions safely.",
};

const sections = [
  { id: "setup", label: "Setup" },
  { id: "publish", label: "Publish" },
  { id: "actions", label: "Native actions" },
  { id: "outputs", label: "Decision outputs" },
  { id: "branching", label: "Safe branching" },
  { id: "runs", label: "Runs & failures" },
  { id: "history", label: "History" },
  { id: "access", label: "License & access" },
  { id: "limits", label: "Limits" },
];

export default function DocumentationPage() {
  return (
    <Document
      title="Classy documentation"
      intro="Classy supplies the classification decision. You choose its categories and control any downstream Jira Automation actions."
      sections={sections}
    >
      <div className="classy-callout">
        <p>Classification uses Jev through OpenRouter outside Atlassian. Read <Link href="/classy/data">Data &amp; deletion</Link> and only submit content you are authorized to process. No customer OpenRouter API key is required.</p>
      </div>

      <section id="setup">
        <h2>1. Set up and try a classifier</h2>
        <ol>
          <li>Once Classy is installed on your Jira site, open <strong>Apps → Classy</strong>. A Jira administrator manages the installation and its license. No public purchase link is available on this site yet.</li>
          <li>Create a classifier or choose a recipe. Set its name, question/instructions, category labels and matching criteria, and confidence threshold. Category order does not establish precedence.</li>
          <li>Save the classifier. Drafts and manual history are private to your Atlassian account in this installation.</li>
          <li>Select Jira issues or use <strong>Test samples</strong> for supplied text. Run the batch and inspect the category, confidence, probability distribution and saved revision. Use a review workflow rather than treating confidence as proof.</li>
        </ol>
        <p>Jira selection rows are previews. Classy reads each issue&apos;s current summary and description when classification begins, using your Jira permissions. Comments and attachments are not read by the issue classifier. Supplied text is your input, even if it contains an issue key.</p>
        <p>Save conflicts preserve the other tab&apos;s saved definition and your local edits. Use <strong>Review current definition</strong>, then deliberately choose <strong>Use saved definition</strong> or <strong>Reapply my draft</strong>. Reapplying keeps your draft for review; click <strong>Save changes</strong> to save it.</p>
      </section>

      <section id="publish">
        <h2>2. Publish an immutable revision</h2>
        <ol>
          <li>Save or discard local edits, then choose <strong>Publish revision</strong> in <strong>Published revisions</strong>.</li>
          <li>Select that published revision in a Jira Automation action. Published snapshots are available across the Jira site; the private draft remains owner-managed.</li>
          <li>To change a running rule, save your changes, publish another revision and explicitly select it in the rule. Editing the draft does not update existing bindings.</li>
        </ol>
        <p>Every action pins a specific published version. Unpublishing a revision, deleting its classifier or erasing its owner makes bound actions fail; Classy never silently selects a replacement. Update or disable affected rules first.</p>
        <p>Use <strong>Previous published revisions</strong> and <strong>Next published revisions</strong> to browse further pages. Search in native configuration filters the current page only. A saved off-page binding remains selected when you reload the rule.</p>
      </section>

      <section id="actions">
        <h2>3. Configure either native action</h2>
        <p>In Jira Automation, choose a trigger, add a Classy action, connect your Atlassian account and select a published classifier. The connection authorizes Jira access, not an OpenRouter account. You can instead choose <strong>Create classifier</strong>, complete its definition and use <strong>Save and use</strong> to save a private draft and select a newly published snapshot.</p>
        <h3>Classy: Classify issue</h3>
        <p>This action reads the current issue&apos;s summary and description as the connected user. Keep <strong>Issue key</strong> as <code>{"{{issue.key}}"}</code> in an issue-context rule, or provide another issue key that user can read.</p>
        <p>Before returning successful outputs, Classy reads the issue again and checks current access, project and classified summary/description. A change or revoked access fails the action, even if the provider already processed it. This check does not lock Jira against later edits.</p>
        <h3>Classy: Classify text</h3>
        <p>This action classifies the text you supply, including resolved smart values. It needs no issue or project context itself. Use <code>{"{{issue.description}}"}</code> in an issue-context rule, or <code>{"{{comment.body}}"}</code> with the <strong>Work item commented</strong> trigger. A description or comment may resolve to empty text; empty input is rejected.</p>
        <p>Use Jira&apos;s native <strong>Smart Values</strong> helper (<code>{"{}"}</code>) to find values available to the trigger or branch. Smart values belong in <strong>Issue key</strong> or <strong>Text to classify</strong>, not saved classifier definitions. Expand the text input for multiline content.</p>
        <p>Both actions recheck that the selected revision is still published after inference. They return metadata, not the source text or full probability distribution, and do not add personal workbench history. Jira owns scheduling, rule audit logs and downstream writes; the Classy workbench need not remain open.</p>
      </section>

      <section id="outputs">
        <h2>4. Understand the decision outputs</h2>
        <p>Find the Classy action under <strong>Components</strong> in Jira&apos;s native helper. Both actions expose their latest decision through <code>createdClassyDecision</code>:</p>
        <dl>
          <div><dt><code>{"{{createdClassyDecision.status}}"}</code></dt><dd><code>classified</code> or <code>review</code>. Below-threshold results and the system Unclear category are always <code>review</code>.</dd></div>
          <div><dt><code>{"{{createdClassyDecision.categoryId}}"}</code></dt><dd>The stable identifier of the saved category, or <code>unclear</code>. It is not the category label or a status. Replacing a category creates a different identity.</dd></div>
          <div><dt><code>{"{{createdClassyDecision.category}}"}</code></dt><dd>The human-readable label from the selected published revision. Compare its exact, case-sensitive spelling if routing by label.</dd></div>
          <div><dt><code>{"{{createdClassyDecision.confidence}}"}</code></dt><dd>A model estimate from 0 to 1, not a correctness guarantee.</dd></div>
          <div><dt><code>{"{{createdClassyDecision.resultId}}"}</code></dt><dd>A unique decision reference.</dd></div>
          <div><dt><code>{"{{createdClassyDecision.classifierRevision}}"}</code></dt><dd>The saved classifier revision timestamp.</dd></div>
          <div><dt><code>{"{{createdClassyDecision.sourceHash}}"}</code></dt><dd>A SHA-256 fingerprint of the classified text. Hashes can be linkable; this is not anonymous source data.</dd></div>
        </dl>
      </section>

      <section id="branching">
        <h2>5. Branch on status before category</h2>
        <p>A category match alone does not enforce the confidence threshold: a decision may have category <code>Bug</code> and status <code>review</code>. Use this pattern immediately after either Classy action:</p>
        <ol>
          <li>Add a native <strong>If/else block</strong> (Jira calls it <strong>IF or ELSE: Add condition options</strong>).</li>
          <li>For the accepted IF branch, add a <strong>{"{{smart values}}"} condition</strong>: <code>{"{{createdClassyDecision.status}}"}</code> <strong>equals</strong> <code>classified</code>.</li>
          <li>Inside that accepted branch, compare <code>{"{{createdClassyDecision.categoryId}}"}</code> with the intended saved category ID when you have that ID from the selected classifier&apos;s outputs. Alternatively, compare <code>{"{{createdClassyDecision.category}}"}</code> with its exact label, such as <code>Bug</code>. Do not substitute a category label for an ID.</li>
          <li>Place category-specific edits, labels or assignments only after those accepted-status and category conditions.</li>
          <li>On the same outer If/else block, choose <strong>Add else</strong> and add a condition where <code>{"{{createdClassyDecision.status}}"}</code> <strong>equals</strong> <code>review</code>. Use that Else-if branch for human triage, not the protected category-specific write.</li>
        </ol>
        <p>Do not put an ordinary <code>status = classified</code> condition before the If/else block: a false ordinary condition stops following actions and prevents Review from reaching its branch. Do not compare status to <code>Bug</code> or another category name.</p>
        <p>Both actions share the latest <code>createdClassyDecision</code> context. Route immediately after the intended action, or copy <strong>status and category/categoryId together</strong> into native Automation variables before another Classy action replaces them.</p>
        <p>An action error is not a Review decision. Inspect Jira&apos;s audit log; do not fabricate a category or reuse an earlier decision as an error fallback. Classy does not insert these guards into customer-authored rules. For update triggers, watch input fields rather than fields your rule writes, to avoid loops.</p>
        <p>See Atlassian&apos;s <a href="https://support.atlassian.com/cloud-automation/docs/jira-automation-conditions/">Jira Automation condition documentation</a>.</p>
      </section>

      <section id="runs">
        <h2>6. Runs, stopping and uncertain completion</h2>
        <p>A manual batch uses the saved definition revision it started with. If that revision changes, remaining items stop rather than silently switching classifiers. Reload to review the saved definition before a new run. An already-running item may finish with its starting snapshot, subject to source and history checks.</p>
        <p><strong>Stop run</strong> prevents the next item from starting. It does not cancel an in-flight provider request, undo processing or remove a completed result. Manual batches belong to the open workspace, not a background queue. Leaving may stop unstarted items; reopening History does not resume the old batch.</p>
        <p><strong>Unknown</strong> means completion is uncertain, not a confirmed failed decision. <strong>Check for result</strong> reads only that execution&apos;s retained outcome and never starts provider work. A missing result remains Unknown and does not prove no processing occurred. Starting a new intentional run may cause another provider request.</p>
        <p>Classy does not automatically retry provider work. Native actions have no private retained outcome to recover. Jira may retry transiently failed flows independently, so native delivery is not guaranteed exactly once. Check rule audits and actual Jira effects before deliberately repeating an action. See <a href="https://support.atlassian.com/cloud-automation/docs/retry-failed-rules-in-atlassian-automation/">Atlassian&apos;s retry documentation</a>.</p>
      </section>

      <section id="history">
        <h2>7. Private manual history</h2>
        <p>History returns up to 50 recent manual results younger than seven rolling 24-hour UTC periods. It stores titles, a source preview of up to 240 characters, relevant issue metadata, category/probability snapshots, model, usage and timestamps, not a separate complete source-text field. Jira-backed history is filtered by your current issue access.</p>
        <p>Expired results disappear from History immediately; storage cleanup runs daily and can lag by roughly one day or longer after a failure. An empty History view is not proof of erasure.</p>
        <p>Use <strong>Clear history</strong> for the saved classifier, even when no rows are visible. It also removes retained results hidden by current Jira permissions, while keeping the definition and published revisions. If cleanup is interrupted, use <strong>Resume cleanup</strong>. See <Link href="/classy/data#deletion">the deletion procedures and their limits</Link>.</p>
      </section>

      <section id="access">
        <h2>8. License denial and reduced access</h2>
        <p>An active Classy license or trial is required for manual classification and both native actions. If license context is missing or inactive, the request is refused before being sent to OpenRouter. Ask your Jira administrator to activate or renew Classy.</p>
        <p>Configuration, publication management, existing authorized history and erasure remain available without inference access. Read-only <strong>Check for result</strong> does not initiate inference. Losing a license does not itself erase stored data.</p>
        <p>A Jira administrator can also disable new inference in <strong>Jira settings → Apps → Classy administration</strong>. Already admitted work may still finish; disabling does not cancel processing or erase results. Re-enabling does not resume stopped runs.</p>
      </section>

      <section id="limits">
        <h2>9. Product and traffic limits</h2>
        <ul>
          <li>Up to 20 saved classifiers per account and 12 custom categories per classifier, plus system Unclear.</li>
          <li>Sources longer than 12,000 characters are rejected rather than silently truncated.</li>
          <li>A manual batch contains up to 20 sources, processed sequentially; each native action classifies one source.</li>
          <li>Manual and native inference share two concurrent reservations and at most 30 new starts per rolling 60 seconds per Forge installation. Another account, tab or rule does not add capacity.</li>
          <li>Capacity/rate refusals occur before provider work and supply retry guidance. Classy does not queue or automatically retry them. Provider and Jira Automation limits also apply.</li>
        </ul>
        <p>There is no customer API-key setup or separate monthly Classy inference allowance. The credentials indicator reports configuration presence only, not provider availability or credits. For access, credit-limit or persistent provider failures, contact <Link href="/classy/support">Classy support</Link>.</p>
      </section>
    </Document>
  );
}
