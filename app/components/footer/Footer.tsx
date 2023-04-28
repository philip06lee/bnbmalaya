import Container from "../Container";
import Link from "next/link";

const Footer = () => {        
      return (     
        <Container> 
        <div className="grid grid-cols-3 gap-3 place-items-center">
 
        <Link href="/components/footer/about">            
          <div className="font-semibold"><p>ABOUT US</p></div> 
        </Link>

        <Link href="/components/footer/terms">            
          <div className="font-semibold"><p>TERMS</p></div> 
        </Link>

        <Link href="/components/footer/privacy">            
          <div className="font-semibold"><p>PRIVACY</p></div> 
        </Link>
        </div>       
      <div className="flex flex-col justify-center items-center text-center">
				<h1 className=" text-gray-400 text-sm">
					© 2023 All rights reserved
				</h1>
			</div>        
      </Container>    
    );     
}

export default Footer;
