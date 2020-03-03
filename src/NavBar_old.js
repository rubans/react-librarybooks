import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useAuth, authSignOut } from './context/authContext'

function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
	  <Typography
		component="div"
		role="tabpanel"
		hidden={value !== index}
		id={`nav-tabpanel-${index}`}
		aria-labelledby={`nav-tab-${index}`}
		{...other}
	  >
		{value === index && <Box p={3}>{children}</Box>}
	  </Typography>
	);
  }
  
  TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
	return {
	  id: `nav-tab-${index}`,
	  'aria-controls': `nav-tabpanel-${index}`,
	};
  }
  
  function LinkTab(props) {
	return (
	  <Tab
		component="a"
		{...props}
	  />
	);
  }
  
  const useStyles = makeStyles(theme => ({
	root: {
	  flexGrow: 1,
	  backgroundColor: theme.palette.background.paper,
	},
  }));


const NavBar = (props) => {
	const signOut = () => {
		authSignOut();
	}
	const user = useAuth().auth.data
	console.log("Nav Bar User:"+JSON.stringify(user))
	let isAdmin = useAuth().auth.isAdmin
	let email = (user) ? user.email : "";
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs
				variant="fullWidth"
				value={value}
				onChange={handleChange}
				aria-label="nav tabs example"
				>
					<LinkTab label="Home" href="/" {...a11yProps(0)} />
					<LinkTab label="Users" href="/users"  {...a11yProps(1)}/>
					<LinkTab label="books" href="/books"  {...a11yProps(2)}/>
				</Tabs>
						{/* <Navbar.Collapse className="justify-content-end">
							{(email !== "") ?
								(<div><Navbar.Text>
									Signed in as : <a href="#login">{email}</a>
								</Navbar.Text>
								<button onClick={() => signOut()} className="bg-light btn my-2 my-sm-0" style={{marginLeft:"10px"}}>Signout</button>
								</div>
								)
								: (<a href="/Login" className="bg-light btn my-2 my-sm-0" >Login</a>
								)
						}
						</Navbar.Collapse> */}
			</AppBar>
			<TabPanel value={value} index={0}>
				Home
			</TabPanel>
			<TabPanel value={value} index={1}>
				Users
			</TabPanel>
			<TabPanel value={value} index={2}>
				Books
			</TabPanel>
		</div>
		)
	}

export default NavBar;