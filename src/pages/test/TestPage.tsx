function TestPage() {
  const nameListData = [] as any;
  return (
    <section style={{ color: "#fff" }}>
      <h1>test</h1>
      <ul>
        {nameListData?.map((data: any, i: number) => {
          return <NameList key={data?.id} data={data} />;
        })}
      </ul>
    </section>
  );
}

export function NameList({ data }: any) {
  return <li>{data?.name}</li>;
}

export default TestPage;
