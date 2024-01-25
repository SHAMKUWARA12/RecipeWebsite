import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const HomeFooter = () => {
    const date = new Date().getFullYear();
    const iconStyle = {
        fontSize: '24px',
    };

    return (
        <>
            <div className="pt-5">
                <footer class="footer text-center text-white">
                    <div class="container">

                        <div class="container p-2 pb-0">

                            <div className="mt-3">
                                <a className="btn btn-floating m-1" href="https://www.facebook.com/"  rel="noreferrer" target="_blank" role="button" style={iconStyle}><FacebookIcon /></a>
                                <a className="btn btn-floating m-1" href="https://twitter.com/" rel="noreferrer" target="_blank" role="button" style={iconStyle}><XIcon /></a>
                                <a className="btn btn-floating m-1" href="https://www.instagram.com/" rel="noreferrer" target="_blank" role="button" style={iconStyle}><InstagramIcon /></a>
                                <a className="btn btn-floating m-1" href="https://in.linkedin.com/" rel="noreferrer" target="_blank" role="button" style={iconStyle}><LinkedInIcon /></a>
                                <a className="btn btn-floating m-1" href="https://github.com/" rel="noreferrer" target="_blank" role="button" style={iconStyle}><GitHubIcon /></a>
                            </div>

                        </div>



                        <div class="title text-center p-3 fs-4">
                            © {date} Copyright:
                            <a class="title text-decoration-none fs-3" href="/" > Foodie.com</a>
                        </div>

                    </div>
                </footer>
            </div>
        </>
    )
}
export default HomeFooter