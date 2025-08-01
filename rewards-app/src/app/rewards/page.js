function RewardsPage() {
    return (
        <div className="rewards-container">
            <h1>View Your Reward Balance</h1>
            <p>You can view your reward balance and check where you can spend it on the map!</p>

            {/* Add your map here */}

            <div className="home-button">
                <a href="/home">
                    <button>Home</button>
                </a>
            </div>

        </div>
    );
}

export default RewardsPage;