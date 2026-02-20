import { Link, useLocation } from 'react-router-dom'
import YAML from 'yaml'
import contentRaw from '../content.yaml?raw'
import { layoutStyles } from './Layout.styles';

const content = YAML.parse(contentRaw)

const Layout = ({children}) => {
    const location = useLocation()

    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'
    if (isAuthPage) {
        return (
            <div className={layoutStyles.authContainer}>{children}</div>
        )
    }
    
    const navItems = [
        {path: '/', label: content.layout.menu.dashboard, icon: '🏠'},
        {path: '/timelne', label: content.layout.menu.timeline, icon: '📅'},
        {path: '/question', label: content.layout.menu.question, icon: '💌'},
        {path: '/chat', label: content.layout.menu.chat, icon: '💭'},
        {path: '/letter', label: content.layout.menu.letter, icon: '📧'},
    ]
    return (
        <div className={layoutStyles.container}>
            {/* 모바일 헤더 */}
            <div className={layoutStyles.mobileHeader}>
                <Link to="/" className={layoutStyles.mobileLogoLink}>
                    <div className={layoutStyles.mobileLogoIcon}>
                        OD
                    </div>
                    <span className={layoutStyles.mobileLogoText}>{content.app.name}</span>
                </Link>
                <Link to="/profile" className={layoutStyles.mobileProfileLink}>
                👤
                </Link>
            </div>   
            {/* 데스크탑 헤더 */}
            <aside className={layoutStyles.sidebar}>
                {/* 로고 영역 */}
                <div className={layoutStyles.logoArea}>
                    <Link to="/" className={layoutStyles.logoLink}>
                        <div className={layoutStyles.logoContainer}>
                            <div className={layoutStyles.logoIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" />
                </svg>
                            </div>
                        </div>
                        <h1 className={layoutStyles.logoTitle}>
                            {content.app.name.split('.')[0]}
                        </h1>
                        <p className={layoutStyles.logoSlogan}>
                            {content.app.slogan}
                        </p>
                    </Link>
                </div>

                {/* 네비게이션 영역 */}
                <nav className={layoutStyles.navContainer}>
                    {navItems.map((item) => (
                        <Link 
                        key={item.path} 
                        to={item.path} 
                        className={`${layoutStyles.navItemBase} ${location.pathname === item.path 
                        ? layoutStyles.navItemActive 
                        : layoutStyles.navItemInactive
                        }`}>
                            <span className={`${layoutStyles.navIconBase} ${location.pathname === item.path 
                            ? layoutStyles.navIconActive 
                            : layoutStyles.navIconInactive
                            }`}>{item.icon}</span>
                            <span className={layoutStyles.navLabel}>{item.label}</span>
                            {location.pathname === item.path && <span className={layoutStyles.navActiveDot} />}
                        </Link>
                    ))}
                </nav>


            </aside>

            <main className={layoutStyles.main}>
                <div className={layoutStyles.contentWrapper}>
                    {children}
                </div>
            </main>
        </div>
    )
};

export default Layout;