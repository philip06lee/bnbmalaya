import Container from "@/app/components/Container";
import "/app/globals.css";

const PrivacyPage = () => {
  return (
    <Container>    
      <div className="h-fit w-full bg-about bg-cover flex justify-center items-center">
        <div className="m-12 w-[80%] mx-auto bg-primary-purple-light flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 xl:p-32 gap-12">
          <h2 className="text-lg font-bold">PRIVACY POLICY</h2>
          <p className="text-primary-white">  
          We take protecting your data seriously. Our robust infrastructure provides data and asset protection you can trust. For information gathered from visitors, the log files are stored on our web server saving details. The visitor&apos;s email and username will be stored on the server. The information is used to enhance the visitor&apos;s experience when using the website. E-mail addresses and other information collected by Bnbmalaya.com will not be sold, rented or leased to 3rd parties. E-mails may be sent to inform you of news of our services or offers by us or our affiliates.</p>
        </div>
      </div> 
    </Container> 
  );     
}

export default PrivacyPage;