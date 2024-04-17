export function TreeRenderer({ data }) {
  console.log("DATA: ", data);
  return (
    <>
      <ul>
        {data.map((item) => (
          <li>
            <div>{item.name}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
