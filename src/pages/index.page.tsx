import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>

      <main className="flex mt-10 flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Welcome!</h1>
      </main>
    </>
  );
}
