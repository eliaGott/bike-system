const DisplayFlags = (props) => {
  console.log(props);
  if (props.flagCode == 1) {
    return <img src={process.env.PUBLIC_URL + "/yellowFlag.png"}></img>;
  } else if (props.flagCode == 2) {
    return <img src={process.env.PUBLIC_URL + "/greenFlag.png"}></img>;
  } else if (props.flagCode == 3) {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + "/greenFlag.png"}></img>
        <img src={process.env.PUBLIC_URL + "/yellowFlag.png"}></img>
      </div>
    );
  } else if (props.flagCode == 4) {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + "/greenFlag.png"}></img>
        <img src={process.env.PUBLIC_URL + "/greenFlag.png"}></img>
      </div>
    );
  } else {
    return <div>No flag</div>;
  }
};

export default DisplayFlags;
