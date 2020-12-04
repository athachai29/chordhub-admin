import './Dashboard.css';
import React, { useEffect, useState } from "react";
import dashboardService from '../services/DashboardService';

const Dashboard = (props) => {
    const [songNumbers, setSongNumbers] = useState(0);
    const [artistNumbers, setArtistNumbers] = useState(0);

    useEffect(() => {
        dashboardService.getArtistNumbers().then(res => {
            setArtistNumbers(res);
        });
        dashboardService.getSongNumbers().then(res => {
            setSongNumbers(res);
        });
    }, []);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>
            <div className="dashboard">
                <span className="info">
                    {numberWithCommas(songNumbers)} songs
                </span>
                <span className="info">
                    {numberWithCommas(artistNumbers)} artists
                </span>
            </div>
        </>
    );
}

export default Dashboard;
