import "./styles.css";
const Footer = () => {
    return (
        <div className="footer" >
            <div className="footerup" style={{display:"flex",backgroundColor:"#404040",color:"#c4c4c4",padding:"30px",justifyContent:"space-between"}}>
                <div className="upleft" style={{display:"flex", gap:"20px"}}>
                <h1>0333 242 0688</h1>
                <p>Online Store Helpline</p>
                </div>
                <div className="upright" style={{display:"flex", gap:"20px"}}>
                <p>Delivery Information</p>
                <p>Refunds & Exchange</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                </div>
            </div>
            <div className="footerdown" style={{display:"flex",backgroundColor:"#323232",color:"#c4c4c4",padding:"30px",justifyContent:"space-between"}}>
                <div>
                    <p>@ 2021 Musdect All Right Reserved</p>
                </div>
                <div style={{display:"flex", gap:"10px"}}>
                    <p>facebook logo</p>
                    <p>LinkedIn Logo</p>
                    <p>Youtube Logo</p>
                    <p>Twitter Logo</p>
                </div>
                <div style={{display:"flex", gap:"5px"}}>
                    <p>Accepted Payment Methods </p>
                    <p>VISA</p>
                    <p>MasterCard</p>
                    <p>Rupay</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
