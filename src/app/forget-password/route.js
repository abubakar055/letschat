import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const ForgetPassword = () => {
	return(
		<div>
			<TextField id="outlined-basic" label="email" variant="outlined" />
			<TextField id="outlined-basic" label="password" variant="outlined" />
			<Button variant="contained" href="#contained-buttons">
				Forget password?
			</Button>
		</div>
	)
	

};

export default ForgetPassword;