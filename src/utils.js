export const handleLinkClick = (e, r, callStateChange) => {
  e.preventDefault();
  callStateChange(r); //setstate executed in layout component
};