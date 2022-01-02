import dynamic from 'next/dynamic';

const ReceiptHandler = dynamic(() => import('../components/Receipt'), {
    ssr: false,
});
function RentReceipt() {
    return <><ReceiptHandler/></>;
}

export default RentReceipt;