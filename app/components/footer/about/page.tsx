import Container from "@/app/components/Container";
import "/app/globals.css";

const AboutPage = () => {
  return (
    <Container>    
      <div className="h-fit w-full bg-about bg-cover flex justify-center items-center">
        <div className="m-12 w-[80%] mx-auto bg-primary-purple-light flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 xl:p-32 gap-12">
          <h2 className="text-lg font-bold">GET TO KNOW US</h2>
          <p>Our mission is to empower everyone to be a traveller and we make it easier for everyone to experience the world at wallet-friendly prices. We  aim to be a large travel marketplace for both established brands and entrepreneurs of all sizes.</p>
          <p>Bnbmalaya.com seamlessly connects travellers to memorable experiences, incredible places to stay and much more.  Hosts have the opportunity to rent out their spare rooms on our global marketplace.</p>
          <p>Wherever you want to go and whatever you want to do, Bnbmalaya.com makes it easy and supports you with 24/7 customer support. Reach out anytime: gogofinest123@gmail.com</p>
        </div>
      </div> 
    </Container> 
  );     
}

export default AboutPage;
