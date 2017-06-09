const fontColor = '#fff';
const borderColor = '#393939';
const backgroundColor = '#000';

export default `
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
