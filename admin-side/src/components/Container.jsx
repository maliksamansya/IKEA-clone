function Container(props) {
  return (
    <>
      <div className="w-4/5 ml-auto overflow-y-auto">
        <br />
        <br />
        <br />
        {props.children}
      </div>
    </>
  );
}

export default Container;
