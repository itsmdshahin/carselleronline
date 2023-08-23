import { Link } from "react-router-dom";

const BidHistory = () => {
    return (
        <>
            <div className="bidhistory">
                <div className="bidtitle">
                    <h3>Bidding History</h3>
                </div>
                <hr />
                <div className="listitems">
                    <span>Bidder 1</span>
                    <span>$260</span>
                    <span>2 hours ago</span>
                </div>
                <hr />
                <div className="listitems">
                    <span>Bidder 2</span>
                    <span>$160</span>
                    <span>7 hours ago</span>
                </div>
                <hr />
                <div className="listitems">
                    <span>Bidder 3</span>
                    <span>$60</span>
                    <span>10 hours ago</span>
                </div>
                <hr />
                <p>
                    <Link to="/bidhistory">View more</Link>
                </p>
            </div>

        </>
    )
}

export default BidHistory;