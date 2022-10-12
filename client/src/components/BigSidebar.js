import NavLinks from './NavLinks'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/BigSidebar'

const BigSidebar = () => {
	const showSidebar = true
	return (
		<Wrapper>
			<div
				className={
					showSidebar
						? 'sidebar-container '
						: 'sidebar-container show-sidebar'
				}
			>
				<div className='content'>
					<header>
						<Logo />
					</header>
					<NavLinks />
				</div>
			</div>
		</Wrapper>
	)
}

export default BigSidebar
