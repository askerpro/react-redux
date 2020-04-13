export default (text: string) =>
  text
    .toLowerCase()
    .replace(/<\/?[^>]+(>|$)/g, '') // remove HTML
    .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, '')
    .replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g, '-')
    .replace(
      /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      '',
    ) // remove emojis
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
