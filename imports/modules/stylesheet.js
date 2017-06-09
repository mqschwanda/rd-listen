const fontColor = '#fff';
const borderColor = '#393939';
const backgroundColor = '#000';

export default `
  @font-face {
    font-family:'Futura';
    src: url('/fonts/FuturaStd-CondensedBold_gdi.eot');
    src: url('/fonts/FuturaStd-CondensedBold_gdi.eot?#iefix') format('embedded-opentype'),
      url('/fonts/FuturaStd-CondensedBold_gdi.woff') format('woff'),
      url('/fonts/FuturaStd-CondensedBold_gdi.ttf') format('truetype'),
      url('/fonts/FuturaStd-CondensedBold_gdi.otf') format('opentype'),
      url('/fonts/FuturaStd-CondensedBold_gdi.svg#FuturaStd-CondensedBold') format('svg');
    font-weight: 700;
    font-style: normal;
    font-stretch: condensed;
    unicode-range: U+0020-00FE;
  }

  .banner {
    width: 100%;
    height: auto;
  }

  .list {
    margin-top: -4px;
  }

  .list-item {
    color: ${fontColor};
    background: ${backgroundColor};
    border: 1px solid ${borderColor};
    text-align: center;
    padding: 0.5em;
    font-size: 18px;
    font-family: 'Futura';
    line-height: 1.6em;
    box-sizing: border-box;
    float: left;
  }

  .list-item.half {
    width: 50%;
  }

  .list-item.full {
    width: 100%;
  }
`;
