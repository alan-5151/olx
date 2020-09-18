import styled from "styled-components";

export const HeaderArea = styled.div`
	background-color: #f5f5f5;
	height: 60px;
	border-bottom: 1px solid #ccc;

	.container {
		max-width: 1024px;
		margin: auto;
		display: flex;
	}

	.logo {
		flex: 1;
		display: flex;
		align-items: center;
		height: 60px;
		font-family: Oswald;
		
		.logo-1,
		.logo-2,
		.logo-3 {
			font-size: 30px;
			font-weight: bold;
		}
	}
		.logo-1 {
			color: #900;
			margin-right:3px;
		}
		.logo-2 {
			color: #090;
			margin-right:3px;
		}
		.logo-3 {
			color: #009;
			margin-right:3px;
		}
	}

nav {

padding-top:10px;
padding-bottom:10px;

ul,li {
	margin:0;
	list-style:none;
}

ul {
	display:flex;
	align-items:center;
	height: 40px;
}

li {
	margin-right:30px;

a {
	color:#000;
	font-size:14px;


	&:hover{
		color:#999;
	}


&.button {
	background-color:#ff8100;
	border-radius:5px;
	color:#fff;
	padding: 5px 10px;
}
&.button:hover {
	background-color:#e57706;
}

}

}



}



`;
