import { useState } from "react";
import { Button } from "react-bootstrap";

const PlaceABid = () => {
    const currentBid = 19;
    const onBidPlaced = 20;
    const [bidAmount, setBidAmount] = useState('');

    const handleBidSubmit = (e) => {
        e.preventDefault();
        const newBid = parseFloat(bidAmount);

        if (newBid > currentBid) {
            onBidPlaced(newBid);
            setBidAmount('');
        } else {
            alert('Bid must be higher than the current bid.');
        }
    };


    return (

        <>
            <div className="placeoption">
                <div className="placetitle">
                    <h2>Place a bid</h2>
                </div>
                <div className="placeabid">
                    <input
                        type='number'
                        name='bid'
                        step="0.01"
                        min={currentBid + 0.01}
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        placeholder={`Minimum bid: $${currentBid + 0.01}`}
                    />
                </div>
                <div className="btn">
                    <Button onClick={handleBidSubmit}>Bid</Button>

                </div>
            </div>

        </>
    )
}

export default PlaceABid;