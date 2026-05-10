import { Link } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

function Navbar() {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    if (!isAuthenticated()) return null;

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">

            <div className="nav-links" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <Link to="/dashboard">Accueil</Link>
                    <Link to="/history">Historiques</Link>
                    <Link to="/performance">Performance</Link>
                </div>
                <div>
                    <button onClick={handleLogout}>Deconnexion</button>
                    <button onClick={toggleTheme} className="theme-toggle" title="Changer de thème">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;