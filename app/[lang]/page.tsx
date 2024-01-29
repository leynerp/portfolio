function Page ({ params }: { params: { lang: string } }) {
  return (
    <main className='fixed mt-[66px] size-full'>
      <h1 className='mt-[6px] text-white'>{`${JSON.stringify(params)}`}</h1>
    </main>
  );
}

export default Page;
