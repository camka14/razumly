import Link from "next/link";
import Document from "./_components/Document";

export default function ClassyPage() {
  return (
    <Document
      title="Classy for Jira"
      intro="Create a custom classifier, review its decisions, and use an immutable published revision in native Jira Automation."
    >
      <div className="classy-callout">
        <p><strong>External AI processing.</strong> Classification sends source text and classifier/category content to OpenRouter and TypeSafe (Jev), outside Atlassian. Only use content you are authorized to process with these services. Read the <Link href="/classy/data">data-handling and deletion explanation</Link> before classifying.</p>
      </div>
      <section>
        <h2>A workbench and two native actions</h2>
        <p>Define a question, category matching criteria and a confidence threshold. Try authorized Jira issue text or supplied text in the Classy workbench, then inspect the selected category, confidence and probability distribution.</p>
        <p>Publish a revision for site-wide use in <strong>Classy: Classify issue</strong> or <strong>Classy: Classify text</strong>. Classy returns a decision; your Jira Automation rule controls any field edits, labels, assignments or notifications.</p>
        <p><strong>Unclear and below-threshold decisions are marked Review.</strong> Confidence is a model estimate, not a guarantee of correctness. Keep a separate review path and require <code>status = classified</code> before category-specific writes.</p>
      </section>
      <section>
        <h2>Customer information</h2>
        <ul>
          <li><Link href="/classy/docs">Documentation</Link> — setup, publishing, both native actions, review-safe routing, history and reduced access.</li>
          <li><Link href="/classy/data">Data &amp; deletion</Link> — what is sent and stored, retention, deletion procedures and limits.</li>
          <li><Link href="/classy/support">Support</Link> — contact details and safe troubleshooting information.</li>
        </ul>
      </section>
      <section>
        <h2>Availability</h2>
        <p>Classy&apos;s paid Marketplace listing and final billing settings have not been submitted. These pages provide product documentation, not an offer to purchase or a claim that a public paid release is available.</p>
        <p>Customer legal terms and a Classy privacy policy are being prepared for owner approval. No unapproved agreement or DPA is offered on these pages.</p>
      </section>
    </Document>
  );
}
