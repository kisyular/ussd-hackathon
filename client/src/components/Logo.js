import logo from '../assets/images/logo.png'

const Logo = () => {
	return (
		<img
			src={logo}
			style={{ maxWidth: '60px' }}
			alt='Mama Afya'
			className='logo'
		/>
	)
}

export default Logo
