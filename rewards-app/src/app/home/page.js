export default function HomePage(){
    return (
        <div className="home-container">
            <h1>Welcome to DiscoverOne</h1>
            <br />

            <p>DiscoverOne is your best friend when it comes to tracking your rewards!</p>

            <p>Simply choose whether you want to check your reward balance map or your spending graph. </p>
            
            
            
            <div className="home-button-group">
                <a href="/rewards">
                    <button className="btn btn-primary m-2">Check Reward Balance Map!</button>
                </a>
                <a href="/graph">
                    <button className="btn btn-secondary m-2">View Spending Graph!</button>
                </a>
            </div>
        </div>
        
    ); // links balance and spending pages
}