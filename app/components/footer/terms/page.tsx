import Container from "@/app/components/Container";
import "/app/globals.css";

const TermsPage = () => {
  return (
    <Container>    
      <div className="h-fit w-full bg-about bg-cover flex justify-center items-center">
        <div className="m-12 w-[80%] mx-auto bg-primary-purple-light flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 xl:p-32 gap-12">
          <h1 className="text-xl font-bold">TERMS</h1>
          <p>1. Once you book, we will contact the host to check their availability. Once the host confirms they are available for your dates, we will then inform you accordingly.</p> 
          <p>2. The host will then receive payment from you directly on your arrival. The host can then pay 5% of the booking total to Bnbmalaya. It&apos;s that simple!</p>
          <p></p>
          
        </div>
      </div> 
    </Container> 
  );     
}

export default TermsPage;
