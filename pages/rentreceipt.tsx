import dynamic from 'next/dynamic';
import Head from 'next/head';

const ReceiptHandler = dynamic(() => import('../components/Receipt'), {
    ssr: false,
});
function RentReceipt() {
    return <>
    <Head>
        <title>Rent Receipt Generator</title>
        <meta name="description" content="Rent Receipt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<ReceiptHandler/></>;
}

export default RentReceipt;