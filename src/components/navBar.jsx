import { Outlet, useNavigate } from 'react-router-dom';
import '../assets/css/navigation.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import MovingSharpIcon from '@mui/icons-material/MovingSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import DesktopMacSharpIcon from '@mui/icons-material/DesktopMacSharp';
import { useState, useEffect } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Navbar() {
    const [active, setActive] = useState(0)
    const [showDetail, setShowDetail] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const [activeMobNav, setAvtiveMobNav] = useState(false)
    const [activeMobTopNav, setAvtiveMobTopNav] = useState(false)
    const navigate = useNavigate()

    function handleButton(i, route) {
        setActive(i)
        setAvtiveMobNav(!activeMobNav)
        navigate(route)
    }

    function handleDetail() {
        setShowDetail(!showDetail)
        setAvtiveMobNav(!activeMobNav)
    }

    function logout() {
        navigate('/login')
    }

    useEffect(() => {
        const handleResize = () => {
            const isMobileDevice = window.innerWidth <= 768; // Set the breakpoint for mobile devices

            setIsMobile(isMobileDevice);
        };
        handleResize();

        const route = ['/', '/desk', '/growth', '/history']
        setActive(route.indexOf(location.pathname))

        // Add event listener to update the screen width on resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="navbar">
                {isMobile ?
                    <> {activeMobNav && <div className='blur' onClick={handleDetail}></div>}
                        <div className='sideNav-mobile' style={activeMobNav ? { maxWidth: '230px' } : { maxWidth: '0px', padding: '0' }}>
                            <div className='logo' onClick={() => { window.location.reload() }}> <LocalFireDepartmentSharpIcon /> <p>Firea</p></div>
                            <div className='active-container' style={{ top: `${active * 60 + 80}px` }}><div className='active-mob'></div></div>
                            <ul>
                                <li className={active === 0 ? 'activeNav' : null} onClick={() => { handleButton(0, '/') }}><HomeRoundedIcon /> <p>&nbsp; Dashboard</p> </li>
                                <li className={active === 1 ? 'activeNav' : null} onClick={() => { handleButton(1, '/desk') }}><DesktopMacSharpIcon /> <p>&nbsp; Desk</p></li>
                                <li className={active === 2 ? 'activeNav' : null} onClick={() => { handleButton(2, '/growth') }}><MovingSharpIcon /> <p>&nbsp; Growth</p></li>
                                <li className={active === 3 ? 'activeNav' : null} onClick={() => { handleButton(3, '/history') }}><HistorySharpIcon /> <p>&nbsp; History</p></li>
                                {/* <li className={active === 4 ? 'activeNav' : null} onClick={() => { handleButton(4) }}><LogoutSharpIcon /> <p>&nbsp; Logout</p></li> */}
                            </ul>
                        </div></> :
                    <div className='sideNav' style={showDetail ? { width: '230px' } : { width: '70px' }}>
                        <div className='logo' onClick={() => { window.location.reload() }}> <LocalFireDepartmentSharpIcon /> {showDetail && <p>Firea</p>}</div>
                        <div className='active-container' style={{ top: `${active * 60 + 80}px` }}><div className='active'></div></div>
                        <ul>
                            <li className={active === 0 ? 'activeNav' : null} onClick={() => { handleButton(0, '/') }}><HomeRoundedIcon /> {showDetail && <p>Dashboard</p>} </li>
                            <li className={active === 1 ? 'activeNav' : null} onClick={() => { handleButton(1, '/desk') }}><DesktopMacSharpIcon /> {showDetail && <p>Desk</p>}</li>
                            <li className={active === 2 ? 'activeNav' : null} onClick={() => { handleButton(2, '/growth') }}><MovingSharpIcon /> {showDetail && <p>Growth</p>}</li>
                            <li className={active === 3 ? 'activeNav' : null} onClick={() => { handleButton(3, '/history') }}><HistorySharpIcon /> {showDetail && <p>History</p>}</li>
                            {/* <li className={active === 4 ? 'activeNav' : null} onClick={() => { handleButton(4) }}><LogoutSharpIcon /> {showDetail && <p>Logout</p>}</li> */}
                        </ul>
                    </div>}
            </div>
            <div className='content' style={isMobile ? null : showDetail ? {width: 'calc(100% - 230px)'} : {width: 'calc(100% - 70px)'}}>
                <div className='topNav'>
                    <button onClick={handleDetail} className='menu'><MenuOutlinedIcon /></button>
                    <div className='topNav-right'>
                        {isMobile ?
                            <button className='menu' onClick={() => { setAvtiveMobTopNav(!activeMobTopNav) }}><MoreVertIcon /></button> :
                            <> <button className='menu'><PersonIcon /></button>
                                <button className='menu'> <SettingsIcon /></button>
                                <button className='menu' onClick={logout}><LogoutSharpIcon /></button></>}
                    </div>
                    {(isMobile && activeMobTopNav) && <div className='popOut-setting'>
                        <button className='menu'><PersonIcon /> &nbsp;Account</button>
                        <button className='menu'> <SettingsIcon /> &nbsp;Setting</button>
                        <button className='menu' onClick={logout}><LogoutSharpIcon /> &nbsp;Logout</button>
                    </div>}
                </div>
                <Outlet />
            </div>
        </>
    )
}