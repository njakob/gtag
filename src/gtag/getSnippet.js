/* @flow */

export default function getSnippet(): string {
  return `<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
</script>`;
}
