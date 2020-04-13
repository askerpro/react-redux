export function removeJssStyles() {
  const jssStyles = document.querySelector('#jss-server-side');
  if (jssStyles) {
    if (jssStyles.parentNode) {
      console.log('removing jss styles');
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
}

export default removeJssStyles;
