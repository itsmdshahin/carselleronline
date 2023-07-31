import './topBox.scss';
// import '../../data';
import { topDealUsers } from '../../data.js';

const TopBox = () => {
    return (
        <div className='topBox'>
            <h1>Top Deals</h1>
            <div className="list">
                {

                    topDealUsers.map((user) => (
                        <div className="listItems" key={user.id}>
                           <div className="user">
                           <img src={user.img} alt={user.username} />
                            <div className="userSection">
                                <span className='username'>{user.username}</span>
                                <span className='email'>{user.email}</span>
                            </div>
                           </div>
                            <span className="amount">{user.amount}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopBox