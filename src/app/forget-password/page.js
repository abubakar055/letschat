import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';



export default function ForgetPassword() {
	return(
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
        	>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            	</Avatar>
				<Typography component="h1" variant="h5">
            		Forget Password
          		</Typography>
				<Box component="form" noValidate sx={{ mt: 1 }}>
					<TextField 
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus 
					/>
					<Button 
						type="submit"
              			fullWidth
              			variant="contained"
              			sx={{ mt: 3, mb: 2 }}
					>
						Forget password?
					</Button>
				</Box>
			</Box>
		</Container>
	)
};
 