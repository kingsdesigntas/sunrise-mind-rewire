import { Link } from "react-router-dom";

const Privacy = () => (
  <main className="min-h-screen bg-background text-foreground">
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/" className="text-primary hover:underline text-sm mb-8 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-2">Theta Clock Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last Updated: February 16, 2026</p>

      <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
        <p>
          CLARE GW PTY LTD ("we," "us," or "our") operates the Theta Clock mobile application (the "App"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our App and the choices you have associated with that data.
        </p>

        <h2 className="text-xl font-semibold text-foreground">1. Information Collection and Use</h2>
        <p>To provide the core functionality of the Theta Clock App, we collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Audio Files:</strong> The App requires access to your device's microphone to allow you to record personalized affirmations. These recordings are stored locally on your device.</li>
          <li><strong>Usage Data:</strong> We may collect non-identifiable information on how the App is accessed and used (e.g., alarm trigger success, feature usage) to improve the user experience.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">2. Data Storage and Transfer</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Local Storage:</strong> All audio affirmations recorded by the user are stored directly on the user's mobile device. We do not upload, store, or monitor your voice recordings on external servers.</li>
          <li><strong>No Third-Party Sharing:</strong> We do not sell, trade, or otherwise transfer your audio data or personal information to outside parties.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">3. Health and Wellness Disclaimer</h2>
        <p>Theta Clock is a self-improvement and wellness tool designed to support mindfulness and positive ideation.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Not a Medical Device:</strong> The App is not a medical device and is not intended to diagnose, treat, cure, or prevent any medical condition or sleep disorder.</li>
          <li><strong>No Medical Advice:</strong> The information provided within the App (including references to neuroscience and the "Theta state") is for educational purposes only and should not replace professional medical advice.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">4. Data Deletion and Retention</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>User Control:</strong> You have full control over your audio data. You can delete individual recordings at any time within the App.</li>
          <li><strong>App Uninstallation:</strong> Deleting the App from your device will remove all locally stored audio recordings.</li>
          <li><strong>Deletion Requests:</strong> If you have questions regarding your data or wish to request assistance with data removal, please contact us.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">5. Permissions</h2>
        <p>The App will request the following permissions:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Microphone Access:</strong> To record your affirmations.</li>
          <li><strong>Notifications/Alarms:</strong> To trigger the audio at the scheduled time.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">6. Children's Privacy</h2>
        <p>Our App does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children.</p>

        <h2 className="text-xl font-semibold text-foreground">7. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2 className="text-xl font-semibold text-foreground">8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>By email: <a href="mailto:thetaclock@gmail.com" className="text-primary hover:underline">thetaclock@gmail.com</a></li>
          <li>By website: <a href="https://thetaclock.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://thetaclock.com/</a></li>
        </ul>
      </div>
    </div>
  </main>
);

export default Privacy;
