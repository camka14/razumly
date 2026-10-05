import Link from "next/link";
import Document from "../_components/Document";

export const metadata = {
  title: "Support",
  description: "Contact Classy support and share safe troubleshooting details without source content or credentials.",
};

export default function SupportPage() {
  return (
    <Document
      title="Classy support"
      intro="For product questions, access problems, data-deletion requests or suspected security issues, email support@razumly.com."
      sections={[
        { id: "contact", label: "Contact" },
        { id: "troubleshooting", label: "Troubleshooting" },
        { id: "privacy", label: "Privacy & security" },
      ]}
    >
      <section id="contact">
        <h2>Contact support</h2>
        <p><a href="mailto:support@razumly.com?subject=Classy%20support">Email Classy support at support@razumly.com</a>. Put <strong>Classy</strong> in the subject and describe the question or observed behavior.</p>
        <p>Support hours, guaranteed response times and an uptime SLA are not published here. This email contact is not an assertion that Classy&apos;s paid listing or legal terms have been approved.</p>
        <h3>Useful information to include</h3>
        <ul>
          <li>The affected Jira site and whether you used the workbench, <strong>Classify issue</strong> or <strong>Classify text</strong>.</li>
          <li>The approximate UTC time, sanitized error code/message, and opaque <strong>Reference</strong> or result ID shown by Classy.</li>
          <li>For Automation, the rule&apos;s action/audit outcome and the selected published revision reference, without source input or unrelated audit content.</li>
          <li>For cleanup, the operation/sweep reference and reported state, without record payloads.</li>
        </ul>
        <p><strong>Do not email</strong> source text, classifier instructions containing private data, account passwords, API keys, authentication files or raw provider/log exports. Redact screenshots and Jira audit excerpts. Start with metadata; avoid repeating classification just to obtain another support reference.</p>
      </section>

      <section id="troubleshooting">
        <h2>Common troubleshooting paths</h2>
        <dl>
          <div><dt>License required</dt><dd>Ask your Jira administrator to activate or renew Classy. The refused inference attempt was not sent to OpenRouter; authorized configuration/history/deletion remain available.</dd></div>
          <div><dt>Inference disabled</dt><dd>A Jira administrator has stopped new inference for this installation. Ask that administrator to inspect Classy administration. Already admitted work may still settle; re-enabling does not resume stopped runs.</dd></div>
          <div><dt>Rate or capacity limit</dt><dd>Follow the displayed retry guidance and start new work deliberately when capacity is available. Another tab/account/rule shares the same installation limits. Classy does not queue or automatically retry refused work.</dd></div>
          <div><dt>Service unavailable or provider credit limit</dt><dd>Contact Classy support with the reference and UTC time. Customers do not need to configure an OpenRouter key. The credentials indicator only reports that credentials are configured, not that access, credits or connectivity work.</dd></div>
          <div><dt>Completion unknown</dt><dd>For a manual run, use <strong>Check for result</strong> and inspect History. A missing outcome does not prove the provider did no work. For native actions, inspect the rule audit and actual Jira effects before repeating anything; Jira may redeliver and another attempt may process again.</dd></div>
          <div><dt>Source or permission changed</dt><dd>Check current issue access and summary/description/project. Classy rejects changed issue snapshots rather than returning a stale decision, even after a provider request.</dd></div>
          <div><dt>Published revision unavailable</dt><dd>The owner may have unpublished/deleted it or been erased. Update or disable the rule, then deliberately select an available published revision. Classy does not silently rebind it.</dd></div>
          <div><dt>History/deletion cleanup pending</dt><dd>Use the displayed resume control, then inspect the reported state. An empty History view or uncertain response is not proof of erasure. A Jira administrator can inspect retention and whole-owner erasure.</dd></div>
        </dl>
        <p>See the <Link href="/classy/docs">customer guide</Link> for configuration and review-safe branching, and <Link href="/classy/data#deletion">Data &amp; deletion</Link> for erasure procedures.</p>
      </section>

      <section id="privacy">
        <h2>Privacy and suspected security issues</h2>
        <p>Email <a href="mailto:support@razumly.com?subject=Classy%20privacy%20or%20security">support@razumly.com</a> and state that the request concerns Classy. Identify the affected Jira site and the relevant account or operation without including sensitive source content or credentials.</p>
        <p>Your Jira administrator can erase an owner&apos;s app-addressable Classy records in that installation, even without an active session for the owner. This does not erase Jira sources, provider-controlled records, logs or platform backups. Review <Link href="/classy/data#boundaries">the erasure boundaries</Link>.</p>
        <p>Do not send exploit payloads or customer data in the first email. Describe the affected surface and observed impact so an appropriate handling method can be agreed. No separate public security certification or guaranteed security-response deadline is claimed.</p>
      </section>
    </Document>
  );
}
